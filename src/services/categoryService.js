import Category from "../models/category.js";
import Subcategory from "../models/subCategory.js";

export const createCategory = async (categoryData) => {
  // Create a new category in the database
  const newCategory = new Category(categoryData);
  await newCategory.save();
  return newCategory;
};

export const createSubCategory = async (categoryData) => {
  // Create a new category in the database
  const newCategory = new Subcategory(categoryData);
  await newCategory.save();
  return newCategory;
};

export const findCategoryByName = async (name) => {
  return await Category.findOne({ name: name.toLowerCase() });
};

export const findSubCategoryByName = async (name) => {
  return await Subcategory.findOne({ name: name.toLowerCase() });
};

export const findSubCategoryByCategoryId = async (obj) => {
  let query = {};
  if (obj?.search) {
    query.name = { $regex: obj?.search, $options: "i" };
  }
  if (obj?.categoryId) {
    query.categoryId = obj?.categoryId;
  }
  const data = await Subcategory.find(query);
  return data;
};

export const getCategories = async (obj) => {
  let query = {};
  if (obj?.search) {
    query.name = { $regex: obj?.search, $options: "i" };
  }
  return await Category.find(query);
};
