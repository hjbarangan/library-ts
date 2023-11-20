import { Router } from "express";
import {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
} from "../controllers/category.controller";

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Category
 *   description: Operations related to category
 */

/**
 * @swagger
 * /api/category:
 *   get:
 *     summary: Get all category
 *     description: Retrieve a list of all category.
 *     tags:
 *       - Category
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
router.get("/categories", getAllCategories);
router.get("/categories/:id", getCategoryById);
router.post("/categories", createCategory);
router.put("/categories/:id", updateCategory);
router.delete("/categories/:id", deleteCategory);

export default router;
