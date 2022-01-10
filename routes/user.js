const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");

// Getting all data
router.get("/", async (req, res) => {
  try {
    const allData = await users.find();
    res.json(allData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting one data
router.get("/:id", async (req, res) => {
  try {
    const oneData = await users.findById({ _id: req.params.id });
    res.json(oneData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete one data
router.delete("/:id", async (req, res) => {
  try {
    const deleteData = await users.findByIdAndDelete({ _id: req.params.id });
    res.json(deleteData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update data
router.patch("/:id", async (req, res) => {
  try {
    const updateData = await users.updateOne(
      { _id: req.params.id },
      { $set: req.body }   // update automatically detect which one going to be update
    );
    res.json(updateData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Creating one data
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
