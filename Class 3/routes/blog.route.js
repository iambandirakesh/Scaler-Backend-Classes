import express from "express";
import fs from "fs";
import {
  getAllBlogs,
  getBlogById,
  PostBlog,
  delelteBlog,
} from "../Controller/blog.controller.js";
const BlogRoutes = express.Router();
BlogRoutes.get("/:blogId", getBlogById);
BlogRoutes.get("/", getAllBlogs);
BlogRoutes.put("/:blogId", (req, res) => {}); //used to update the api
BlogRoutes.delete("/:blogId", delelteBlog);
BlogRoutes.post("/", PostBlog);
export default BlogRoutes;
