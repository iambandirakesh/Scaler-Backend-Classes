import express from "express";
import AuthMiddleware from "../middleware/auth.middleware.js";
import isTheatreOwnerMiddleware from "../middleware/isTheatreOwner.middleware.js";
import {
  addShow,
  updateShow,
  deleteShow,
  getAllShows,
  getShowById,
  getShowByFilter,
} from "../Controller/show.controller.js";
const router = express.Router();
//addshow
//updateshow
//deleteshow
//get all shows by movie
router.post("/", AuthMiddleware, isTheatreOwnerMiddleware, addShow);
router.put("/:showId", AuthMiddleware, isTheatreOwnerMiddleware, updateShow);
router.delete("/:showId", AuthMiddleware, isTheatreOwnerMiddleware, deleteShow);
router.get("/", getAllShows);
router.get("/:showId", getShowById);
router.get("/", getShowByFilter);
export default router;
