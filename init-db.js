const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function initDB() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS counter (
        id INT PRIMARY KEY,
        count INT DEFAULT 0
      );
    `);
    await client.query(`
      INSERT INTO counter (id, count)
      VALUES (1, 0)
      ON CONFLICT (id) DO NOTHING;
    `);
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  } finally {
    client.release();
    await pool.end();
  }
}

initDB();
