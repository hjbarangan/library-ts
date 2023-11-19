import { Request, Response } from "express";
import * as CategoryService from "../services/category.service";
import { Category } from "../interfaces";

const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await CategoryService.getAllCategoriesService();
    res.status(200).json(categories);
  } catch (error: any) {
    console.error("Error:", error);
    res.status(400).json({ message: error.message });
  }
};

const getCategoryById = async (req: Request, res: Response) => {
  try {
    const categoryId: number = parseInt(req.params.id);
    const category = await CategoryService.getCategoryByIdService(categoryId);
    res.status(200).json(category);
  } catch (error: any) {
    console.error("Error:", error);
    res.status(400).json({ message: error.message });
  }
};

const createCategory = async (req: Request, res: Response) => {
  try {
    const { category_name } = req.body;

    await CategoryService.createCategoryService(category_name);
    res.status(201).json({ message: "Category created" });
  } catch (error: any) {
    console.error("Error:", error);
    res.status(400).json({ message: error.message });
  }
};

const updateCategory = async (req: Request, res: Response) => {
  try {
    const updatedCategory: Category = req.body;
    const categoryId: number = parseInt(req.params.id);
    await CategoryService.updateCategoryService(updatedCategory, categoryId);

    res.status(200).json({ message: "Category updated" });
  } catch (error: any) {
    console.error("Error:", error);
    res.status(400).json({ message: error.message });
  }
};

const deleteCategory = async (req: Request, res: Response) => {
  try {
    const categoryId: number = parseInt(req.params.id);
    await CategoryService.deleteCategoryService(categoryId);
    res.status(200).json({ message: "Category deleted" });
  } catch (error: any) {
    console.error("Error:", error);
    res.status(400).json({ message: error.message });
  }
};

export {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
};
