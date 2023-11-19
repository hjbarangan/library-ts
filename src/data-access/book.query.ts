import { pool } from "../database";
import { Book } from "../interfaces";

const getAllBooks = async () => {
  try {
    const client = await pool.connect();
    const sql = "SELECT * FROM v_books";
    const result = await client.query(sql);
    return result.rows;
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to propagate it to the service
  }
};

const getBookById = async (bookId: number) => {
  try {
    const client = await pool.connect();
    const sql = "SELECT * FROM book where book_id = $1";
    const result = await client.query(sql, [bookId]);
    return result.rows;
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to propagate it to the service
  }
};

const createBookQuery = async (book: Book) => {
  try {
    const {
      isbn,
      publication_year,
      publisher_id,
      title,
      author,
      category_id,
      pages,
      status
    } = book;

    const params = [
      isbn,
      publication_year,
      publisher_id,
      title,
      author,
      category_id,
      pages,
      status
    ];

    const result = await pool.query(
      "CALL add_book($1, $2, $3, $4, $5, $6, $7, $8)",
      params
    );

    return result.rows[0]; // Assuming your stored procedure returns the inserted row
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to propagate it to the service
  }
};

const updateBook = async (book: Book, bookId: number) => {
  try {
    const client = await pool.connect();
    const {
      isbn,
      publication_year,
      publisher_id,
      title,
      author,
      category_id,
      pages,
      status
    } = book;
    const params = [
      isbn,
      publication_year,
      publisher_id,
      title,
      author,
      category_id,
      pages,
      status,
      bookId
    ];
    const storedProcedure =
      "CALL update_book($1, $2, $3, $4, $5, $6, $7, $8, $9)";
    const result = await client.query(storedProcedure, params);
    return result.rows;
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to propagate it to the service
  }
};

const deleteBook = async (bookId: number) => {
  try {
    const client = await pool.connect();
    const storedProcedure = "CALL delete_book($1)";
    const result = await client.query(storedProcedure, [bookId]);
    return result.rows;
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to propagate it to the service
  }
};

const getBooksByCategory = async (categoryId: number) => {
  try {
    const client = await pool.connect();
    const sql = "SELECT * FROM book where category_id = $1";
    const result = await client.query(sql, [categoryId]);
    return result.rows;
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to propagate it to the service
  }
};

const getBooksByPublisher = async (publisherId: number) => {
  try {
    const client = await pool.connect();
    const sql = "SELECT * FROM book where publisher_id = $1";
    const result = await client.query(sql, [publisherId]);
    return result.rows;
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to propagate it to the service
  }
};

export {
  getAllBooks,
  getBookById,
  createBookQuery,
  updateBook,
  deleteBook,
  getBooksByCategory,
  getBooksByPublisher
};
