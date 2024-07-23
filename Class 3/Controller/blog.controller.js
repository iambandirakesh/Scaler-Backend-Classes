import fs from "fs";
import Blog from "../model/blog.model.js";
export const getAllBlogs = (req, res) => {
  let BlogData = JSON.parse(fs.readFileSync("./mock/mock.blog.json"));
  res.send(BlogData);
};
export const getBlogById = (req, res) => {
  let BlogData = JSON.parse(fs.readFileSync("./mock/mock.blog.json"));
  let blogId = req.params.blogId - 1;
  res.send(BlogData[blogId]);
};
export const PostBlog = async (req, res) => {
  try {
    let BlogData = JSON.parse(fs.readFileSync("./mock/mock.blog.json"));
    let newBlog = req.body;
    const data = await Blog.create(newBlog);
    let newBlogData = [...BlogData, newBlog];
    fs.writeFileSync("./mock/mock.blog.json", JSON.stringify(newBlogData));
    res.send(newBlogData);
  } catch (err) {
    res.status(404).send(err.message);
  }
};
export const delelteBlog = (req, res) => {
  try {
    let BlogData = JSON.parse(fs.readFileSync("./mock/mock.blog.json"));
    let blogId = req.params.blogId;
    let newBlogData = BlogData.filter((blog) => {
      return blog.id != blogId;
    });
    fs.writeFileSync("./mock/mock.blog.json", JSON.stringify(newBlogData));
    res.send(newBlogData);
  } catch (err) {
    res.status(404).send("Blog Not Found!");
  }
};
