import user from "./user.js";
import category from "./category.js";
import template from "./template.js";
import express from "express";

const app = express();

app.use("/user", user);
app.use("/category", category);
app.use("/template", template);

export default app;
