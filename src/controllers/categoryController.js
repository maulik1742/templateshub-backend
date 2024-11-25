import * as CategoryService from "../services/categoryService.js";

// create category
export const createCategoryController = async (req, res) => {
    try {
        const { name } = req.body;
        const categoryNameLowerCase = name.toLowerCase();
        const existingCategory = await CategoryService.findCategoryByName(categoryNameLowerCase);
        if (existingCategory) {
            return res.status(400).json({
                success: false,
                message: "Category name already exists, please choose another name."
            });
        }
        const categoryData = { ...req.body, name: categoryNameLowerCase };
        const newCategory = await CategoryService.createCategory(categoryData);
        return res.status(201).json({
            success: true,
            message: "Category created successfully",
            data: newCategory
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error creating category",
            error: error.message,
        });
    }
};


export const getCategory = async (req, res) => {
    try {
        const categoryData = await CategoryService.getCategories();
        return res.status(201).json({
            success: true,
            message: "get category successfully",
            data: categoryData
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error creating category",
            error: error.message,
        });
    }
};