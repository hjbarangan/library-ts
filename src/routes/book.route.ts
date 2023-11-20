import { Router } from "express";
import {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  getBooksByCategory,
  getBooksByPublisher
} from "../controllers/book.controller";

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Books
 *   description: Operations related to books
 */

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Get all books
 *     description: Retrieve a list of all books.
 *     tags:
 *       - Books
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               message: Books retrieved successfully
 *               data: [book1, book2]
 *       400:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               message: Internal server error
 *               error: [error details]
 */

router.get("/books", getAllBooks);
/**
 * @swagger
 * /api/books/{id}:
 *   get:
 *     summary: Get a book by ID
 *     description: Retrieve a book by its ID.
 *     tags:
 *       - Books
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the book to retrieve
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               message: Book retrieved successfully
 *               data: book
 *       404:
 *         description: Book not found
 *         content:
 *           application/json:
 *             example:
 *               message: Book not found
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               message: Internal server error
 *               error: [error details]
 */

router.get("/books/:id", getBookById);
/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Create a new book
 *     description: Endpoint to create a new book
 *     tags:
 *       - Books
 *     consumes:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       201:
 *         description: Book created successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Book created successfully
 *               data: createdBook
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             example:
 *               message: Bad request
 *               error: [error details]
 */
router.post("/books", createBook);

/**
 * @swagger
 * /api/books/{id}:
 *   put:
 *     summary: Update a book
 *     description: Endpoint to update an existing book
 *     tags:
 *       - Books
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the book to update
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: Book updated successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Book updated successfully
 *               data: updatedBook
 *       404:
 *         description: Book not found
 *         content:
 *           application/json:
 *             example:
 *               message: Book not found
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               message: Internal server error
 *               error: [error details]
 */
router.put("/books/:id", updateBook);

/**
 * @swagger
 * /api/books/{id}:
 *   delete:
 *     summary: Delete a book
 *     description: Endpoint to delete an existing book by ID
 *     tags:
 *       - Books
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the book to delete
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Book deleted successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Book deleted successfully
 *               data: deletedBook
 *       404:
 *         description: Book not found
 *         content:
 *           application/json:
 *             example:
 *               message: Book not found
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               message: Internal server error
 *               error: [error details]
 */
router.patch("/books/:id", deleteBook);
router.get("/books/category/:id", getBooksByCategory);
router.get("/books/publisher/:id", getBooksByPublisher);

export default router;
