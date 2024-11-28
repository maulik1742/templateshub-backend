import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import "./db/index.js";
import router from "./routers/index.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json()); // Parse incoming JSON requests
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded requests

// Use your router
app.use("/", router);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
