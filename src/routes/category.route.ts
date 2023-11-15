import { Router } from "express";
import {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
} from "../controllers/category.controller";

const router = Router();
router.get("/categories", getAllCategories);
router.get("/categories/:id", getCategoryById);
router.post("/categories", createCategory);
router.patch("/categories/:id", updateCategory);
router.patch("/categories/:id", deleteCategory);

export default router;
