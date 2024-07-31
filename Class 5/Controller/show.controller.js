import Show from "../model/show.model.js";
export const addShow = async (req, res) => {
  try {
    const showDetails = new Show(req.body);
    await showDetails.save();
    res.send({ status: true, ...showDetails });
  } catch (err) {
    res.status(401).send({ status: false, error: err.message });
  }
};
export const updateShow = async (req, res) => {
  try {
    const updatedShowDetails = await Show.updateOne(
      { _id: req.params.showId },
      { $set: req.body }
    );
    res.send(updatedShowDetails);
  } catch (err) {
    res.status(400).send({ status: false, message: err.message });
  }
};
export const deleteShow = async (req, res) => {
  try {
    await Show.deleteOne(req.params.showId);
    res.send("Show Deleted SuccussFully");
  } catch (err) {
    res.status(400).send({ status: false, message: err.message });
  }
};
export const getAllShows = async (req, res) => {
  try {
    const showsData = await Show.find({});
    res.status(200).send({ status: true, ...showsData });
  } catch (err) {
    res.status(400).send({ status: false, message: err.message });
  }
};
export const getShowById = async (req, res) => {
  try {
    const showData = await Show.findById({ _id: req.params.showId }).populate([
      "theatre",
      "movie",
    ]);
    res.status(200).send({ status: true, ...showData });
  } catch (err) {
    res.status(400).send({ status: false, message: err.message });
  }
};
export const getShowByFilter = async (req, res) => {};
