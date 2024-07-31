import express from "express";
import UserRoutes from "./routes/user.route.js";
import TheatreRoutes from "./routes/theatre.route.js";
import MovieRoutes from "./routes/movie.route.js";
import ShowRoutes from "./routes/show.route.js";
import connectToDB from "./Database/monoDB.js";
import "dotenv/config";
const app = express();
app.set("view engine", "ejs");
app.use(express.json());
//API's
app.use("/api/user", UserRoutes);
app.use("/api/theatre", TheatreRoutes);
app.use("/api/movie", MovieRoutes);
app.use("/api/show", ShowRoutes);
app.all("*", (req, res) => {
  res.status(404).send("Page Not Found!");
});
app.listen(5000, () => {
  console.log("Server is running on port http://localhost:5000");
  connectToDB();
});
