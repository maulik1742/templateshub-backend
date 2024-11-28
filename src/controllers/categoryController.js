import * as CategoryService from "../services/categoryService.js";

// create category
export const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const categoryNameLowerCase = name.toLowerCase();
    const existingCategory = await CategoryService.findCategoryByName(
      categoryNameLowerCase
    );
    if (existingCategory) {
      return res.status(400).json({
        success: false,
        message: "Category name already exists, please choose another name.",
      });
    }
    const categoryData = { ...req.body, name: categoryNameLowerCase };
    const newCategory = await CategoryService.createCategory(categoryData);
    return res.status(201).json({
      success: true,
      message: "Category created successfully",
      data: newCategory,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error creating category",
      error: error.message,
    });
  }
};

export const createSubCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const categoryNameLowerCase = name.toLowerCase();
    const existingCategory = await CategoryService.findSubCategoryByName(
      categoryNameLowerCase
    );
    if (existingCategory) {
      return res.status(400).json({
        success: false,
        message:
          "Sub Category name already exists, please choose another name.",
      });
    }
    const categoryData = { ...req.body, name: categoryNameLowerCase };
    const newCategory = await CategoryService.createSubCategory(categoryData);
    return res.status(201).json({
      success: true,
      message: "Category created successfully",
      data: newCategory,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error creating category",
      error: error.message,
    });
  }
};

export const getSubCategories = async (req, res) => {
  try {
    const { categoryId } = req.query;
    const query = {};
    console.log("categoryId :>> ", categoryId);
    if (categoryId) {
      query.categoryId = categoryId;
    }
    const categoryData = await CategoryService.findSubCategoryByCategoryId(
      query
    );

    return res.status(201).json({
      success: true,
      message: "get category successfully",
      data: categoryData,
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
    const { search } = req.query;
    console.log("search :>> ", search);
    const obj = { search };
    const categoryData = await CategoryService.getCategories(obj);
    return res.status(201).json({
      success: true,
      message: "get category successfully",
      data: categoryData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error creating category",
      error: error.message,
    });
  }
};
