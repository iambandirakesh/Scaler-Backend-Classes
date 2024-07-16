const fs = require("fs");
const express = require("express");
const app = express();
const product = fs.readFileSync(
  "./Class1/ExpressJs-Server-Creating/data/product.json"
);
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/about", (req, res) => {
  res.send("About Us");
});
app.get("/product", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(product.toString());
});
app.get("*", (req, res) => {
  res.send("404 Not Found");
});
app.listen(1431, () => {
  console.log(`Server is running on port :http://localhost:1431/`);
});
