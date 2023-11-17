import { pool } from "../database";
import { Category } from "../interfaces";

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

const getCategoryById = async (categoryId: number) => {
  try {
    const client = await pool.connect();
    const sql = "SELECT * FROM category WHERE category_id = $1";
    const result = await client.query(sql, [categoryId]);
    return result.rows[0];
  } catch (error) {
    console.log(error);
  }
};

const createCategory = async (category: Category) => {
  try {
    const client = await pool.connect();
    const storedProcedure = "CALL add_category($1)";
    await client.query(storedProcedure, [category]);
  } catch (error) {
    console.log(error);
  }
};

const updateCategory = async (category: Category, categoryId: number, ) => {
  try {
    const client = await pool.connect();
    const storedProcedure = "CALL update_category($1, $2)";
    await client.query(storedProcedure, [category, categoryId]);
  } catch (error) {
    console.log(error);
  }
};

const deleteCategory = async (categoryId: number) => {
  try {
    const client = await pool.connect();
    const storedProcedure = "CALL delete_category($1)";
    await client.query(storedProcedure, [categoryId]);
  } catch (error) {
    console.log(error);
  }
};

export {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
};
