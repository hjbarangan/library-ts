import {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
} from "../data-access/category.query";
import { Category } from "../interfaces";

const getAllCategoriesService = async () => {
  try {
    const categories = await getAllCategories();
    return categories;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getCategoryByIdService = async (categoryId: number) => {
  try {
    const category = await getCategoryById(categoryId);
    return category;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createCategoryService = async (category: Category) => {
  try {
    const newCategory = await createCategory(category);
    return newCategory;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateCategoryService = async (
  category: any,
  categoryId: any
) => {
  try {
    const updatedCategory = await updateCategory(category, categoryId);
    return updatedCategory;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteCategoryService = async (categoryId: number) => {
  try {
    const deletedCategory = await deleteCategory(categoryId);
    return deletedCategory;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export {
  getAllCategoriesService,
  getCategoryByIdService,
  createCategoryService,
  updateCategoryService,
  deleteCategoryService
};
