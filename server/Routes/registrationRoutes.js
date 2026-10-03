const express = require("express");
const Registration = require("../models/Registration");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const registrations = await Registration.find();
    res.json(registrations);
  } catch (error) {
    res.status(500).json({ message: "Error fetching registrations" });
  }
});

router.post("/", async (req, res) => {
  try {
    const registration = new Registration(req.body);
    const savedRegistration = await registration.save();

    res.status(201).json(savedRegistration);
  } catch (error) {
    res.status(500).json({ message: "Error saving registration" });
  }
});

module.exports = router;