const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  venue: {
    type: String,
    required: true
  },
  seats: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Event", eventSchema);