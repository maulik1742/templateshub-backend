import Subcategory from "../models/subCategory.js";
import Template from "../models/templates.js";

export const createTemplate = async (templateData) => {
  const newTemplate = new Template(templateData);
  await newTemplate.save();
  return newTemplate;
};

// export const findTemplateById = async (query) => {
//   console.log("query :>> ", query);
//   const data = await Subcategory.find(query);
//   console.log("data :>> ", data);
//   return data;
// };

export const findSubCategoryById = async (query) => {
  console.log("findSubCategoryById :>> ", findSubCategoryById);
  return await Subcategory.find({ query });
};
