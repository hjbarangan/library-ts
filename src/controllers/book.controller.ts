import { Request, Response } from "express";
import { Book } from "../interfaces";
import * as BookService from "../services/book.service";

const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await BookService.getAllBooksService();
    res.status(200).json(books);
  } catch (error: any) {
    console.error("Error:", error);
    res.status(400).json({ message: error.message });
  }
};

const getBookById = async (req: Request, res: Response) => {
  try {
    const bookId: number = parseInt(req.params.id);
    const books = await BookService.getBookByIdService(bookId);
    res.status(200).json(books);
  } catch (error: any) {
    console.error("Error:", error);
    res.status(400).json({ message: error.message });
  }
};

const createBook = async (req: Request, res: Response) => {
  try {
    const book: Book = req.body;
    await BookService.createBookService(book);
    res.status(200).json({ book, message: "Book created" });
  } catch (error: any) {
    console.error("Error:", error);
    res.status(400).json({ message: error.message });
  }
};

const updateBook = async (req: Request, res: Response) => {
  try {
    const updatedBook: Book = req.body;
    const bookId: number = parseInt(req.params.id);
    const books = await BookService.updateBookService(updatedBook, bookId);
    res.status(200).json(books);
  } catch (error: any) {
    console.error("Error:", error);
    res.status(400).json({ message: error.message });
  }
};

const deleteBook = async (req: Request, res: Response) => {
  try {
    const bookId: number = parseInt(req.params.id);
    const books = await BookService.deleteBookService(bookId);
    res.status(200).json(books);
  } catch (error: any) {
    console.error("Error:", error);
    res.status(400).json({ message: error.message });
  }
};

const getBooksByCategory = async (req: Request, res: Response) => {
  try {
    const bookId: number = parseInt(req.params.id);
    const books = await BookService.getBooksByCategoryService(bookId);
    res.status(200).json(books);
  } catch (error: any) {
    console.error("Error:", error);
    res.status(400).json({ message: error.message });
  }
};

const getBooksByPublisher = async (req: Request, res: Response) => {
  try {
    const bookId: number = parseInt(req.params.id);
    const books = await BookService.getBooksByPublisherService(bookId);
    res.status(200).json(books);
  } catch (error: any) {
    console.error("Error:", error);
    res.status(400).json({ message: error.message });
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
