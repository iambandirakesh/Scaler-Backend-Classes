import Movie from "../model/movie.model.js";
export const addMovie = async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    const movieDetails = await newMovie.save();
    res.status(201).send({ success: true, ...movieDetails });
  } catch (err) {
    res.status(500).send({ success: false, error: err.message });
  }
};
export const getAllMovies = async (req, res) => {
  try {
    let movieDetails = await Movie.find({});
    res.send(movieDetails);
  } catch (err) {
    res.status(500).send({ success: false, error: err.message });
  }
};
export const getMovieById = async (req, res) => {
  try {
    let movieDetails = await Movie.findById(req.params.movieId);
    res.send(movieDetails);
  } catch (err) {
    res.status(500).send({ success: false, error: err.message });
  }
};
export const updateMovie = async (req, res) => {
  try {
    const updatedmovieDetails = await Movie.updateOne(
      {
        _id: req.params.movieId,
      },
      { $set: req.body }
    );
    res.send(updatedmovieDetails);
  } catch (err) {
    res.status(500).send({ success: false, error: err.message });
  }
};
export const delelteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.movieId);
    res.send({ Status: true, Update: "Movie Deleted Succussfully" });
  } catch (err) {
    res.status(500).send({ success: false, error: err.message });
  }
};
//deactive movie
//Active movie
