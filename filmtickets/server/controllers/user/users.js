const express = require("express");
const User = require("../../models/users/user");
const authorize = require("../../middleware/authorize");
const router = express.Router();

router.post("/add", async (req, res) => {
  // Create a new user
  try {
    const user = new User(req.body);
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/login", async (req, res) => {
  //Login a registered user
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);
    if (!user) {
      return res
        .status(401)
        .json({ message: "Login failed! Check authentication credentials" });
    }
    const token = await user.generateAuthToken();
    let data = _.pick(user, "id", "name", "email");
    res
      //.header("Authorization", "Bearer " + token)
      .status(200)
      .json({
        message: "User successfuly logged in.",
        data: data,
        token: token,
      });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    let fields = ["id", "name", "email"];
    const users = await User.find({}, fields);
    res.json(users);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/findOne", authorize, async (req, res, next) => {
  try {
    let fields = ["id", "name", "email"];
    const user = await User.findOne({ _id: req.decoded._id }, fields);
    res.status(200).json({
      message: "User details found.",
      data: user,
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
