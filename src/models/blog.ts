import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema(
  {
    title: String,
    description: String,
    content: String,
    cover: String,
    author: String,
    readTime: Number,
    categories: Array,
    createdAt: Date,
    updatedAt: Date,
  },
  {
    timestamps: true,
  },
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
export default Blog;
