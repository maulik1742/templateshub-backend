import mongoose from "mongoose";

const uri1 =
  "mongodb+srv://mauliksolanki2002:Maulik%401742@cluster0.r46zm.mongodb.net/templateshub"; // Replace with your MongoDB connection string

mongoose
  .connect(uri1)
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
