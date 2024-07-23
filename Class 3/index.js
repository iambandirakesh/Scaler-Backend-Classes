import express from "express";
import UserRoutes from "./routes/user.route.js";
import BlogRoutes from "./routes/blog.route.js";
import connectToDB from "./Database/monoDB.js";
const app = express();
app.use(express.json());
app.use("/api/user", UserRoutes);
app.use("/api/blog", BlogRoutes);
app.all("*", (req, res) => {
  res.status(404).send("Page Not Found!");
});
app.listen(5000, () => {
  console.log("Server is running on port http://localhost:5000");
});
connectToDB();
