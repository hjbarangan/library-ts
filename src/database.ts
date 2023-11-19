import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});
console.log(
  "🚀 ~ file: database.ts:7 ~ process.env.DATABASE_URL:",
  process.env.DATABASE_URL
);
