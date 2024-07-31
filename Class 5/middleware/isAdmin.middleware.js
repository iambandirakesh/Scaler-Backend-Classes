const isAdminMiddleware = (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      next();
    } else {
      throw new Error("Your did't have Access");
    }
  } catch (err) {
    res.status(401).send({ status: false, Error: err.message });
  }
};
export default isAdminMiddleware;
