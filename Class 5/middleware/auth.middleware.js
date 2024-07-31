import jwt from "jsonwebtoken";
const AuthMiddleware = (req, res, next) => {
  try {
    const jwtToken = req.headers["jwttoken"];
    const userData = jwt.verify(jwtToken, process.env.jwt_secret_salt);
    if (userData) {
      req.user = userData;
      next();
    } else {
      throw new Error("user token is not valid");
    }
  } catch (err) {
    res.status(401).send({ success: false, error: err.message });
  }
};
export default AuthMiddleware;
