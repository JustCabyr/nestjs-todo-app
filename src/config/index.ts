import * as dotenv from 'dotenv';

dotenv.config();

export const databaseUrl = process.env.DATABASE_URL;
