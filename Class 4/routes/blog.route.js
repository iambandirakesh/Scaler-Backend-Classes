import express from "express";
import fs from "fs";
import {
  getAllBlogs,
  getBlogById,
  delelteBlog,
  updateBlogById,
} from "../Controller/blog.controller.js";
const BlogRoutes = express.Router();
BlogRoutes.get("/:blogId", getBlogById);
BlogRoutes.get("/", getAllBlogs);
BlogRoutes.put("/:blogId", updateBlogById);
BlogRoutes.delete("/:blogId", delelteBlog);
export default BlogRoutes;
