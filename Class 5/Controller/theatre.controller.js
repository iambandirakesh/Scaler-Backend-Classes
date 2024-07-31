import Theatre from "../model/theatre.model.js";
export const addTheatre = async (req, res) => {
  try {
    const newTheatre = new Theatre(req.body);
    newTheatre.owner = req.user.id;
    const theatreDetails = await newTheatre.save();
    res.status(201).send({ success: true, ...theatreDetails });
  } catch (err) {
    res.status(500).send({ success: false, error: err.message });
  }
};
export const getAllTheatres = async (req, res) => {
  try {
    const ownerId = req.query.ownerId;
    const filter = {};
    if (ownerId) {
      filter.owner = ownerId;
    }
    let theatreDetails = await Theatre.find(filter);
    res.send(theatreDetails);
  } catch (err) {
    res.status(500).send({ success: false, error: err.message });
  }
};
export const getTheatreById = async (req, res) => {
  try {
    let theatreDetails = await Theatre.findById(req.params.theatreId);
    res.send(theatreDetails);
  } catch (err) {
    res.status(500).send({ success: false, error: err.message });
  }
};
export const updateTheatre = async (req, res) => {
  try {
    const updatedtheatreDetails = await Theatre.updateOne(
      {
        _id: req.params.theatreId,
      },
      { $set: req.body }
    );
    res.send(updatedtheatreDetails);
  } catch (err) {
    res.status(500).send({ success: false, error: err.message });
  }
};
export const delelteTheatre = async (req, res) => {
  try {
    await Theatre.findByIdAndDelete(req.params.theatreId);
    res.send({ Status: true });
  } catch (err) {
    res.status(500).send({ success: false, error: err.message });
  }
};
//deactive theatre
//Active theatre
