import { Request, Response } from "express";
import { Book } from "../interfaces";
import * as BookService from "../data-access/book.query";

const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await BookService.getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    console.error("Error getting books:", error);
    res.status(400).json({ error: `Error: ${error}` });
  }
};

const getBookById = async (req: Request, res: Response) => {
  try {
    const bookId: number = parseInt(req.params.id);
    const books = await BookService.getBookById(bookId);
    res.status(200).json(books);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ error: `Error: ${error}` });
  }
};

const createBook = async (req: Request, res: Response) => {
  try {
    const book: Book = req.body;
    const books = await BookService.createBook(book);
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
    const books = await BookService.updateBook(updatedBook, bookId);
    res.status(200).json(books);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ error: `Error: ${error}` });
  }
};

const deleteBook = async (req: Request, res: Response) => {
  try {
    const bookId: number = parseInt(req.params.id);
    const books = await BookService.deleteBook(bookId);
    res.status(200).json(books);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ error: `Error: ${error}` });
  }
};

const getBooksByCategory = async (req: Request, res: Response) => {
  try {
    const bookId: number = parseInt(req.params.id);
    const books = await BookService.getBooksByCategory(bookId);
    res.status(200).json(books);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ error: `Error: ${error}` });
  }
};

const getBooksByPublisher = async (req: Request, res: Response) => {
  try {
    const bookId: number = parseInt(req.params.id);
    const books = await BookService.getBooksByPublisher(bookId);
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
