import { pool } from "../database";

const getAllCategories = async () => {
  try {
    const client = await pool.connect();
    const sql = "SELECT * FROM category";
    const result = await client.query(sql);
    return result.rows;
  } catch (error) {
    console.log(error);
  }
};

export { getAllCategories };

