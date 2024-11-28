import express from "express";
import * as categoryController from "../controllers/categoryController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

// Route to create a user
router.post("/", auth, categoryController.createCategoryController);
router.post("/subcategory", auth, categoryController.createSubCategoryController);

router.get("/subcategory", categoryController.getSubCategories);

router.get("/", categoryController.getCategory);

export default router;
