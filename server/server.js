const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const eventRoutes = require("./routes/eventRoutes");
app.use("/api/events", eventRoutes);

const registrationRoutes = require("./routes/registrationRoutes");
app.use("/api/registrations", registrationRoutes);
mongoose
  .connect("mongodb://localhost:27017/event_management")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });

app.get("/", (req, res) => {
  res.send("Event Management Backend is running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});