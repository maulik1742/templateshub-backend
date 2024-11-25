import Category from "../models/category.js"

export const createCategory = async (categoryData) => {
    // Create a new category in the database
    const newCategory = new Category(categoryData);
    await newCategory.save();
    return newCategory;
};

export const findCategoryByName = async (name) => {
    return await Category.findOne({ name: name.toLowerCase() });
};

export const getCategories = async () => {
    return await Category.find();
};