import { db } from '../db/db';

export const checkDBConnection = async (retries = 5, delay = 5000) => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await db.one('SELECT 1 AS value');
      console.log('Database Connected Successfully');
      return true;
    } catch (error) {
      console.error(
        `Database Connection Failed (Attempt ${attempt}/${retries})`
      );
      if (attempt < retries) {
        console.log(`Retrying in ${delay / 1000} seconds...`);
        await new Promise((res) => setTimeout(res, delay));
      } else {
        console.error('Could not connect to the database. Exiting...');
        process.exit(1);
      }
    }
  }
};
