import Subcategory from "../models/subCategory.js";
import Template from "../models/templates.js";

export const createTemplate = async (templateData) => {
  const newTemplate = new Template(templateData);
  await newTemplate.save();
  return newTemplate;
};

export const findTemplateById = async (query) => {
  const data = await Template.find(query);
  return data;
};

export const findSubCategoryById = async (query) => {
  console.log("findSubCategoryById :>> ", findSubCategoryById);
  return await Subcategory.find({ query });
};
