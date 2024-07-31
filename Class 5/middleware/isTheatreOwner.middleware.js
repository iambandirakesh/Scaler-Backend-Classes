import Theatre from "../model/theatre.model.js";

const isTheatreOwnerMiddleware = async (req, res, next) => {
  try {
    const theatreDetails = await Theatre.findById(req.body.theatre);
    if (theatreDetails.owner.toString() !== req.user.id) {
      throw new Error(
        `You did't have an access to the ${theatreDetails.name} Theatre`
      );
    }
    next();
  } catch (err) {
    res.status(401).send({ status: false, Update: err.message });
  }
};
export default isTheatreOwnerMiddleware;
