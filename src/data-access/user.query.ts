import { pool } from "../database";
import { User } from "../interfaces/interface";

const getAllUsers = async () => {
  try {
    const client = await pool.connect();
    const sql = "SELECT * FROM user";
    const result = await client.query(sql);
    return result.rows;
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (userId: number) => {
  try {
    const client = await pool.connect();
    const sql = "SELECT * FROM user where user_id = $1";
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
    const sql =
      "INSERT INTO user (reader_id, admin_id, username, password, status ) VALUES ( $1, $2, $3, $4, $5) RETURNING *;";
    const result = await client.query(sql, params);
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
    const sql =
      "UPDATE user SET reader_id = $1, admin_id = $2, username = $3, password = $4, status = $5 WHERE user_id = $6 RETURNING *";
    const result = await client.query(sql, params);
    return result.rows;
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (userId: number) => {
  try {
    const client = await pool.connect();
    const sql =
      "UPDATE user SET status = 'inactive' WHERE user_id = $1 RETURNING *";
    const result = await client.query(sql, [userId]);
    return result.rows;
  } catch (error) {
    console.log(error);
  }
};

const findUserByUsername = async (username: string) => {
  try {
    const client = await pool.connect();
    const sql = "SELECT * FROM user WHERE username = $1";
    const result = await client.query(sql, [username]);
    return result.rows;
  } catch (error) {
    console.log(error);
  }
}

export { getAllUsers, getUserById, createUser, updateUser, deleteUser, findUserByUsername };
