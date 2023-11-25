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
 * /api/categories:
 *   get:
 *     summary: Get all category
 *     description: Retrieve a list of all category.
 *     tags:
 *       - Category
 *     responses:
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
