import { pool } from "../database";

const getAllBooks = async () => {
  try {
    const client = await pool.connect();
    const sql = "SELECT * FROM book";
    const result = await client.query(sql);
    return result.rows;
  } catch (error) {
    console.log(error);
  }
};

export { getAllBooks };

