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

const getBookById = async (book_id: number) => {
  try {
    const client = await pool.connect();
    const sql = "SELECT * FROM book where book_id = $1";
    const result = await client.query(sql, [book_id]);
    return result.rows;
  } catch (error) {
    console.log(error);
  }
};

const createBook = async (book: any) => {
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
      status,
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
    ];
    const sql =
      "INSERT INTO book (isbn , publication_year , publisher_id , title , author , category_id , pages, status  ) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;";
    const result = await client.query(sql, params);
    return result.rows;
  } catch (error) {
    console.log(error);
  }
};

const updateBook = async (book_id: number, book: any) => {
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
      status,
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
      book_id,
    ];
    const sql =
      "UPDATE book SET isbn = $1, publication_year = $2, publisher_id = $3, title = $4, author = $5, category_id = $6, pages = $7, status = $8 WHERE book_id = $9 RETURNING *";
    const result = await client.query(sql, params);
    return result.rows;
  } catch (error) {
    console.log(error);
  }
};

const deleteBook = async (book_id: number) => {
  try {
    const client = await pool.connect();
    const sql =
      "UPDATE book SET status = 'inactive' WHERE book_id = $1 RETURNING *";
    const result = await client.query(sql, [book_id]);
    return result.rows;
  } catch (error) {
    console.log(error);
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
  }
};

export {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  getBooksByCategory,
  getBooksByPublisher,
};
