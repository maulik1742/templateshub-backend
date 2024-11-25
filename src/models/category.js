import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        isDeleted: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true, // Adds createdAt and updatedAt timestamps
    }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;
