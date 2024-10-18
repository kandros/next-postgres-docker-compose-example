import { Pool } from 'pg';

let pool: Pool | null = null;

export function getPool() {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
  }
  return pool;
}

export async function getCounter() {
  const client = await getPool().connect();
  console.log('getCounter called');
  try {
    const result = await client.query('SELECT count FROM counter WHERE id = 1');
    console.log('count in db', result.rows[0]?.count);
    return result.rows[0]?.count;
  } catch (error) {
    console.error('Error getting counter:', error);
  } finally {
    client.release();
  }
}