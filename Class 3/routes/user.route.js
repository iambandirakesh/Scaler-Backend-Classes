import express from "express";
const UserRoutes = express.Router();
UserRoutes.get("/:userId", (req, res) => {});
UserRoutes.post("/", (req, res) => {});
UserRoutes.put("/:userId", (req, res) => {}); //used to update the api
UserRoutes.delete("/:userId", (req, res) => {});

export default UserRoutes;
