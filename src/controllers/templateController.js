import Template from "../models/templates.js";
import * as TemplateService from "../services/templateService.js";

export const getTemplates = async (req, res) => {
  try {
    const { subcategory, id, search } = req.query;
    const query = {};
    if (subcategory) {
      query.subcategory = subcategory;
    }
    if (search) {
      query.title = { $regex: search, $options: "i" };
    }
    if (id) {
      query._id = id;
    }
    const templateData = await TemplateService.findTemplateById(query);
    return res.status(201).json({
      success: true,
      message: "get template successfully",
      data: templateData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error creating category",
      error: error.message,
    });
  }
};

export const createTemplate = async (req, res) => {
  try {
    const { title, content, subcategory } = req.body;
    const newTemplate = new Template({
      title,
      content,
      subcategory,
    });
    await newTemplate.save();

    return res.status(201).json({
      success: true,
      message: "template created successfully",
      data: newTemplate,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error creating in template",
      error: error.message,
    });
  }
};
export const searchTemplate = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).json({ message: "Search query is required" });
    }

    const templates = await Template.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { content: { $regex: query, $options: "i" } },
      ],
    });
    console.log("templates :>> ", templates);

    if (templates.length === 0) {
      return res.status(404).json({ message: "No templates found" });
    }
    return res.status(200).json({
      success: true,
      message: "Templates found",
      data: templates,
    });
  } catch (error) {
    console.error("Error searching templates:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
