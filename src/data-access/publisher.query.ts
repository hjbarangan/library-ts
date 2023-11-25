import { pool } from "../database";
import { Publisher } from "../interfaces";

const getAllPublishers = async () => {
  try {
    const client = await pool.connect();
    const sql = "SELECT * FROM publisher";
    const result = await client.query(sql);
    return result.rows;
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to propagate it to the service
  }
};

const getPublisherById = async (publisherId: number) => {
  try {
    const client = await pool.connect();
    const sql = "SELECT * FROM publisher where publisher_id = $1";
    const result = await client.query(sql, [publisherId]);
    return result.rows;
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to propagate it to the service
  }
};

const createPublisher = async (publisher: any) => {
  try {
    const client = await pool.connect();
    const { publisher_name, publisher_location } = publisher;
    const params = [publisher_name, publisher_location];

    const storedProcedure = "CALL add_publisher($1, $2)";
    const result = await client.query(storedProcedure, params);
    return result.rows;
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to propagate it to the service
  }
};

const updatePublisher = async (publisher: Publisher, publisherId: number) => {
  try {
    const client = await pool.connect();
    const storedProcedure = "CALL update_publisher($1, $2, $3)";
    await client.query(storedProcedure, [publisher, publisherId]);
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to propagate it to the service
  }
};

const deletePublisher = async (publisherId: number) => {
  try {
    const client = await pool.connect();
    const storedProcedure = "CALL delete_publisher($1)";
    const result = await client.query(storedProcedure, [publisherId]);
    return result.rows;
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to propagate it to the service
  }
};

export {
  getAllPublishers,
  getPublisherById,
  createPublisher,
  updatePublisher,
  deletePublisher
};
