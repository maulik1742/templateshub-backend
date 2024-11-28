import express from "express";
import * as templateController from "../controllers/templateController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

// Route to create a template
router.post(
  "/save-template",
  auth,
  templateController.createTemplateController
);

export default router;
