import { Request, Response } from "express";
import { Book } from "../interfaces";
import * as BookService from "../services/book.service";

const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await BookService.getAllBooksService();
    res.status(200).json(books);
  } catch (error) {
    console.error("Error getting books:", error);
    res.status(400).json({ error: `Error: ${error}` });
  }
};

const getBookById = async (req: Request, res: Response) => {
  try {
    const bookId: number = parseInt(req.params.id);
    const books = await BookService.getBookByIdService(bookId);
    res.status(200).json(books);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ error: `Error: ${error}` });
  }
};

const createBook = async (req: Request, res: Response) => {
  try {
    const book: Book = req.body;
    const books = await BookService.createBookService(book);
    res.status(200).json(books);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ error: `Error: ${error}` });
  }
};

const updateBook = async (req: Request, res: Response) => {
  try {
    const updatedBook: Book = req.body;
    const bookId: number = parseInt(req.params.id);
    const books = await BookService.updateBookService(updatedBook, bookId);
    res.status(200).json(books);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ error: `Error: ${error}` });
  }
};

const deleteBook = async (req: Request, res: Response) => {
  try {
    const bookId: number = parseInt(req.params.id);
    const books = await BookService.deleteBookService(bookId);
    res.status(200).json(books);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ error: `Error: ${error}` });
  }
};

const getBooksByCategory = async (req: Request, res: Response) => {
  try {
    const bookId: number = parseInt(req.params.id);
    const books = await BookService.getBooksByCategoryService(bookId);
    res.status(200).json(books);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ error: `Error: ${error}` });
  }
};

const getBooksByPublisher = async (req: Request, res: Response) => {
  try {
    const bookId: number = parseInt(req.params.id);
    const books = await BookService.getBooksByPublisherService(bookId);
    res.status(200).json(books);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ error: `Error: ${error}` });
  }
};

export {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  getBooksByCategory,
  getBooksByPublisher
};
