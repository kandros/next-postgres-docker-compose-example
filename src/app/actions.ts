"use server"

import {getPool} from '@/app/data';
import {revalidatePath} from 'next/cache';


export async function incrementCounter() {
  const client = await getPool().connect();
  try {
    const result = await client.query('UPDATE counter SET count = count + 1 WHERE id = 1 RETURNING count');
    console.log('Incremented count:', result.rows[0].count);
    revalidatePath('/');  
    return result.rows[0].count;
  } finally {
    client.release();
  }
}


