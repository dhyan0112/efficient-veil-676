const express = require("express");
const UserModel = require("../models/User.model");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { blacklist } = require("../models/blacklist");
//userRouter
userRouter.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userpresent = await UserModel.findOne({ email });

    if (userpresent) {
      return res.status(400).json({ msg: "User Already Present Please Login" });
    }

    bcrypt.hash(password, 5, async (err, hash) => {
      const newuser = new UserModel({ username, email, password: hash });
      await newuser.save();
      res.status(200).send({ msg: "Registration successful" });
    });
  } catch (err) {
    res.send({ msg: "Something went wrongs", error: err.message });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  console.log(req.body);
  try {
    const existingUser = await UserModel.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ msg: "User Not exists. Please Register." });
    }

    const isPasswordMatch = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ msg: "Incorrect password. Please try again." });
    }

    res.status(200).json({ msg: "Login successful" });
  } catch (err) {
    console.log(err.message);
  }
});

userRouter.get("/logout", (req, res) => {
  blacklist.push(req.headers?.authorization?.split(" ")[1]);

  res.send({ msg: "logout successful" });
});

module.exports = {
  userRouter,
};
