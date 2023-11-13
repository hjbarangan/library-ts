import { Router } from "express";
import { getAllBooks, getBookById, createBook, updateBook, deleteBook, getBooksByCategory, getBooksByPublisher } from "../controllers/book.controller";

const router = Router();
router.get("/books", getAllBooks);
router.get("/books/:id", getBookById);
router.post("/books", createBook);
router.put("/books/:id", updateBook);
router.patch("/books/:id", deleteBook);
router.get("/books/category/:id", getBooksByCategory);
router.get("/books/publisher/:id", getBooksByPublisher);

export default router;
