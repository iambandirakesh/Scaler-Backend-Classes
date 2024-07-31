import express from "express";
import AuthMiddleware from "../middleware/auth.middleware.js";
import {
  getTheatreById,
  getAllTheatres,
  addTheatre,
  updateTheatre,
  delelteTheatre,
} from "../Controller/theatre.controller.js";
const router = express.Router();
//add Theatre
router.post("/", AuthMiddleware, addTheatre);
router.get("/:theatreId", getTheatreById);
router.get("/", getAllTheatres);
router.put("/:theatreId", updateTheatre);
router.delete("/:theatre", delelteTheatre);
export default router;
