import mongoose from "mongoose";

const uri = "mongodb://127.0.0.1:27017/templateshub"; // Replace with your MongoDB connection string

mongoose
    .connect(uri)
    .then(() => {
        console.log("Connected to MongoDB successfully!");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });