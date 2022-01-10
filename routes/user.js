const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");

// Getting all
router.get("/", async (req, res) => {
  try {
    const UsersData = await users.find();
    res.json(UsersData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Creating one
router.post("/", async (req, res) => {
  const insertData = new users({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });
  try {
    const newUser = await insertData.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
