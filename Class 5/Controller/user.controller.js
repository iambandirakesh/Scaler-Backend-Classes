import User from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUserDetail = async (req, res) => {
  const jwtToken = req.headers["jwttoken"];
  const userData = jwt.verify(jwtToken, process.env.jwt_secret_salt);

  if (userData) {
    const userInfo = await User.findOne({ email: userData.email });
    return res.status(200).send({ status: true, ...userInfo });
  } else {
    return res
      .status(401)
      .send({ status: false, message: "Please Login in Again" });
  }
};
export const login = async (req, res) => {
  const userDetails = req.body;
  const user = await User.findOne({ email: userDetails.email }).select(
    "password email isAdmin"
  );
  if (!userDetails.email || !userDetails.password) {
    return res
      .status(400)
      .send({ status: false, message: "Please pass email and password" });
  }
  if (user) {
    const validPassword = await bcrypt.compare(
      userDetails.password,
      user.password
    );
    if (!validPassword) {
      return res
        .status(401)
        .send({ status: false, message: "Invalid Credentials" });
    } else {
      const jwtToken = jwt.sign(
        { email: user.email, id: user._id, isAdmin: user.isAdmin },
        process.env.jwt_secret_salt,
        { expiresIn: "1d" }
      );
      res.setHeader("jwtToken", jwtToken);
      return res
        .status(200)
        .send({ status: true, message: "Login Successful" });
    }
  } else {
    return res
      .status(401)
      .send({ status: false, message: "Invalid Credentials" });
  }
};

export const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const newUserData = await User.create(userData);
    res.status(200).send(newUserData);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const updateUser = async (req, res) => {
  const userData = req.body;
  const userId = req.params.userId;
  const updatedData = await User.updateOne(
    { _id: userId },
    {
      $set: userData,
    }
  );
  res.status(200).send(updatedData);
};

export const deleteUser = async (req, res) => {
  const userId = req.params.userId;
  const deletedData = await User.findByIdAndDelete(userId);
  res.status(200).send(deletedData);
};
