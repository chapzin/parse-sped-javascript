const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  indAp: {
    type: String,
    required: true
  },
  g401: {
    type: String,
    required: true
  },
  g402: {
    type: String,
    required: true
  },
  g403: {
    type: String,
    required: true
  },
  g404: {
    type: String,
    required: true
  },
  g405: {
    type: String,
    required: true
  },
  g406: {
    type: String,
    required: true
  },
  g407: {
    type: String,
    required: true
  },
  g408: {
    type: String,
    required: true
  },
  g409: {
    type: String,
    required: true
  },
  g410: {
    type: String,
    required: true
  },
  g411: {
    type: String,
    required: true
  },
  g412: {
    type: String,
    required: true
  },
  flag: {
    type: String,
    required: true
  },
  reg0000: {
    type: Object,
    required: true
  }
});

module.exports = mongoose.model("reg1980", RegSchema);
