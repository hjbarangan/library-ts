import { pool } from "../database";
import { User } from "../interfaces";

const getAllUsers = async () => {
  try {
    const client = await pool.connect();
    const sql = "SELECT * FROM v_user";
    const result = await client.query(sql);
    return result.rows;
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (userId: number) => {
  try {
    const client = await pool.connect();
    const sql = "SELECT * FROM user_account where user_id = $1";
    const result = await client.query(sql, [userId]);
    return result.rows;
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (user: User) => {
  try {
    const client = await pool.connect();
    const { reader_id, admin_id, username, password, status } = user;
    const params = [reader_id, admin_id, username, password, status];
    const storedProcedure = "CALL add_useraccount($1, $2, $3, $4, $5)";
    const result = await client.query(storedProcedure, params);
    return result.rows;
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (user: User, userId: number) => {
  try {
    const client = await pool.connect();
    const { reader_id, admin_id, username, password, status } = user;
    const params = [reader_id, admin_id, username, password, status, userId];
    const storedProcedure = "CALL update_useraccount($1, $2, $3, $4, $5, $6)";
    const result = await client.query(storedProcedure, params);
    return result.rows;
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (userId: number) => {
  try {
    const client = await pool.connect();
    const storedProcedure = "CALL delete_useraccount($1)";
    const result = await client.query(storedProcedure, [userId]);
    return result.rows;
  } catch (error) {
    console.log(error);
  }
};

const findUserByUsername = async (username: string) => {
  try {
    const client = await pool.connect();
    const sql = "SELECT * FROM user_account WHERE username = $1";
    const result = await client.query(sql, [username]);
    return result.rows;
  } catch (error) {
    console.log(error);
  }
};

export {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  findUserByUsername
};
