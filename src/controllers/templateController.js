import Template from "../models/templates.js";
import * as TemplateService from "../services/templateService.js";

export const getTemplates = async (req, res) => {
  try {
    const { categoryId, id } = req.query;
    const query = {};
    console.log("categoryId :>> ", categoryId);
    if (categoryId) {
      query.categoryId = categoryId;
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

export const createTemplateController = async (req, res) => {
  try {
    const { title, content, subcategory } = req.body;
    const newTemplate = new Template({
      title,
      content,
      subcategory,
    });
    await newTemplate.save();

    // if (!title || !subcategory) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Title and subcategory are required.",
    //   });
    // }
    // const templateNameLowerCase = title.toLowerCase();
    // const existingSubcategory = await TemplateService.findSubCategoryById(
    //   subcategory
    // );
    // if (!existingSubcategory) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "template already exists, please choose another name.",
    //   });
    // }
    // const existingTemplate = await TemplateService.findTemplateByTitle(
    //   templateNameLowerCase
    // );
    // if (existingTemplate) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Template already exists, please choose another name.",
    //   });
    // }
    // const templateData = { ...req.body, title: templateNameLowerCase };
    // const newTemplate = await TemplateService.createTemplate(templateData);

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
