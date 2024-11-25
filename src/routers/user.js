import express from "express";
import * as userController from "../controllers/userController.js";

const router = express.Router();

// Route to create a user
router.post("/", userController.createUserController);
router.post("/login", userController.loginUserController);

export default router;