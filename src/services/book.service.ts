import {
  getAllBooks,
  getBookById,
  getBooksByCategory,
  getBooksByPublisher,
  createBook,
  updateBook,
  deleteBook,
} from "../data-access/book.query";
import { Book } from "../interfaces";

const getAllBooksService = async () => {
  try {
    const books = await getAllBooks();
    return books;
  } catch (error) {
    console.log(error);
  }
};

const getBookByIdService = async (bookId: number) => {
  try {
    const book = await getBookById(bookId);
    return book;
  } catch (error) {
    console.log(error);
  }
};

const getBooksByCategoryService = async (categoryId: number) => {
  try {
    const books = await getBooksByCategory(categoryId);
    return books;
  } catch (error) {
    console.log(error);
  }
};

const getBooksByPublisherService = async (publisherId: number) => {
  try {
    const books = await getBooksByPublisher(publisherId);
    return books;
  } catch (error) {
    console.log(error);
  }
};

const createBookService = async (book: Book) => {
  try {
    const newBook = await createBook(book);
    return newBook;
  } catch (error) {
    console.log(error);
  }
};
const updateBookService = async (book: Book, bookId: number) => {
  try {
    const updatedBook = await updateBook(book, bookId);
    return updatedBook;
  } catch (error) {
    console.log(error);
  }
};
const deleteBookService = async (bookId: number) => {
  try {
    const deletedBook = await deleteBook(bookId);
    return deletedBook;
  } catch (error) {
    console.log(error);
  }
};

export {getAllBooksService, getBookByIdService, getBooksByCategoryService, getBooksByPublisherService, createBookService, updateBookService, deleteBookService}