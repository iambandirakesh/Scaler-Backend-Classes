import express from "express";
import UserRoutes from "./routes/user.route.js";
import BlogRoutes from "./routes/blog.route.js";
import connectToDB from "./Database/monoDB.js";
import { renderBlogs, renderBlogById } from "./Controller/blog.controller.js";
const app = express();
app.use(express.json());
app.set("view engine", "ejs");
app.use("/api/user", UserRoutes);
app.use("/api/blog", BlogRoutes);
app.get("/blog/list", renderBlogs);
app.get("/blog/:blogId", renderBlogById);
app.all("*", (req, res) => {
  res.status(404).send("Page Not Found!");
});
app.listen(5000, () => {
  console.log("Server is running on port http://localhost:5000");
  connectToDB();
});
