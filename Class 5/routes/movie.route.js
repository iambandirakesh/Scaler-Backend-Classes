import express from "express";
import AuthMiddleware from "../middleware/auth.middleware.js";
import isAdminMiddleware from "../middleware/isAdmin.middleware.js";
import {
  addMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  delelteMovie,
} from "../Controller/movie.controller.js";
const router = express.Router();
//add Theatre
router.post("/", AuthMiddleware, isAdminMiddleware, addMovie);
router.get("/:movieId", getMovieById);
router.get("/", getAllMovies);
router.put("/:movieId", AuthMiddleware, isAdminMiddleware, updateMovie);
router.delete("/:movieId", AuthMiddleware, isAdminMiddleware, delelteMovie);
export default router;
