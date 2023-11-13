import { Request, Response } from "express";
import * as categoryService from "../data-access/category.query";
const getAllCategories = async (req: Request, res: Response) => {
  try {
    const books = await categoryService.getAllCategories();
    res.status(200).json(books);
  } catch (error) {
    console.error("Error getting categories:", error);
    res.status(400).json({ error: `Error: ${error}` });
  }
};



export {getAllCategories}