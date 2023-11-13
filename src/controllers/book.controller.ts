import { Request, Response } from 'express';
// import * as BookService from './bookService'
import * as BookService from '../data-access/book.query';
export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await BookService.getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    console.error('Error getting books:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
