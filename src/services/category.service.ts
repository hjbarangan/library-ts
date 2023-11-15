import { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory } from "../data-access/category.query";
import { Category } from "../interfaces";

const getAllCategoriesService = async () => {
  try {
    const categories = await getAllCategories();
    return categories;
  } catch (error) {
    console.log(error);
  }
};

const getCategoryByIdService = async (categoryId: number) => {
    try {
        const category = await getCategoryById(categoryId);
        return category;
    } catch (error) {
        console.log(error);
    }
    }

const createCategoryService = async (category: Category) => {
    try {
        const newCategory = await createCategory(category);
        return newCategory;
    } catch (error) {
        console.log(error);
    }
}

const updateCategoryService = async (category: Category, categoryId: number) => {
    try {
        const updatedCategory = await updateCategory(category, categoryId);
        return updatedCategory;
    } catch (error) {
        console.log(error);
    }
}

const deleteCategoryService = async (categoryId: number) => {
    try {
        const deletedCategory = await deleteCategory(categoryId);
        return deletedCategory;
    } catch (error) {
        console.log(error);
    }
}

export {getAllCategoriesService, getCategoryByIdService, createCategoryService, updateCategoryService, deleteCategoryService}; 