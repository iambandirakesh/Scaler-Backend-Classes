import { Schema, model } from "mongoose";
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Titke is Required"],
      trim: true,
      minLength: [10, "Title must be atleast 10 characters"],
    },
    author: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
  },
  { timestamps: true }
);
const Blog = model("Blog", blogSchema);
export default Blog;
