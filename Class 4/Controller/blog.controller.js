import fs from "fs";
import Blog from "../model/blog.model.js";
export const getAllBlogs = async (req, res) => {
  try {
    const allBlogsData = await Blog.find({});
    res.status(200).send(allBlogsData);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
export const getBlogById = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const blogData = await Blog.findById(blogId);
    res.status(200).send(blogData);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
export const createBlog = async (req, res) => {
  try {
    const newBlogData = req.body;
    const data = await Blog.create(newBlogData);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
// export const PostBlog = async (req, res) => {
//   try {
//     let BlogData = JSON.parse(fs.readFileSync("./mock/mock.blog.json"));
//     let newBlog = req.body;
//     const data = await Blog.create(newBlog);
//     let newBlogData = [...BlogData, newBlog];
//     fs.writeFileSync("./mock/mock.blog.json", JSON.stringify(newBlogData));
//     res.send(newBlogData);
//   } catch (err) {
//     res.status(404).send(err.message);
//   }
// };
export const updateBlogById = async (req, res) => {
  try {
    const newBlogData = req.body;
    const blogId = req.params.blogId;
    const data = await Blog.updateOne({ _id: blogId }, { $set: newBlogData });
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
export const delelteBlog = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const data = await Blog.findByIdAndDelete(blogId);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
export const renderBlogs = async (req, res) => {
  const blogs = await Blog.find();
  res.render("bloglist", {
    blogs,
  });
};
export const renderBlogById = async (req, res) => {
  const blog = await Blog.findById(req.params.blogId);
  res.render("blogDetail", {
    blog,
  });
};
