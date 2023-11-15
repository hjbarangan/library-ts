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
    const sql = "INSERT INTO category (category_name) VALUES ($1)";
    await client.query(sql, [category]);
  } catch (error) {
    console.log(error);
  }
};

const updateCategory = async (category: Category, categoryId: number, ) => {
  try {
    const client = await pool.connect();
    const sql = "UPDATE category SET category_name = $1 WHERE category_id = $2";
    await client.query(sql, [category, categoryId]);
  } catch (error) {
    console.log(error);
  }
};

const deleteCategory = async (categoryId: number) => {
  try {
    const client = await pool.connect();
    const sql = "UPDATE category SET status = $1 WHERE category_id = $2";
    await client.query(sql, ["inactive", categoryId]);
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
