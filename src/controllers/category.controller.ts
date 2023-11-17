import { Request, Response } from "express";
import * as CategoryService from "../services/category.service";
import { Category } from "../interfaces";


const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await CategoryService.getAllCategoriesService();
    res.status(200).json(categories);
  } catch (error) {
    console.error("Error getting categories:", error);
    res.status(400).json({ error: `Error: ${error}` });
  }
};

const getCategoryById = async (req: Request, res: Response) => {
  try {
    const categoryId: number = parseInt(req.params.id);
    const category = await CategoryService.getCategoryByIdService(categoryId);
    res.status(200).json(category);
  } catch (error) {
    console.error("Error getting category:", error);
    res.status(400).json({ error: `Error: ${error}` });
  }
};

const createCategory = async (req: Request, res: Response) => {
  try {
    const { category_name } = req.body;

    await CategoryService.createCategoryService(category_name);
    res.status(201).json({ message: "Category created" });
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(400).json({ error: `Error: ${error}` });
  }
};

const updateCategory = async (req: Request, res: Response) => {
  try {

    const updatedCategory: Category = req.body;
    const categoryId: number = parseInt(req.params.id);
    await CategoryService.updateCategoryService(updatedCategory, categoryId);

    res.status(200).json({ message: "Category updated" });
  } catch (error) {
    console.error("Error updating category:", error);
    res.status(400).json({ error: `Error: ${error}` });
  }
};

const deleteCategory = async (req: Request, res: Response) => {
  try {
    const categoryId: number = parseInt(req.params.id);
    await CategoryService.deleteCategoryService(categoryId);
    res.status(200).json({ message: "Category deleted" });
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(400).json({ error: `Error: ${error}` });
  }
};

export {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
};
