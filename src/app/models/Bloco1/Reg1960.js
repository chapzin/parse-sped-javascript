const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  indAp: {
    type: String,
    required: true,
  },
  g101: {
    type: String,
    required: true,
  },
  g102: {
    type: String,
    required: true,
  },
  g103: {
    type: String,
    required: true,
  },
  g104: {
    type: String,
    required: true,
  },
  g105: {
    type: String,
    required: true,
  },
  g106: {
    type: String,
    required: true,
  },
  g107: {
    type: String,
    required: true,
  },
  g108: {
    type: String,
    required: true,
  },
  g109: {
    type: String,
    required: true,
  },
  g110: {
    type: String,
    required: true,
  },
  g111: {
    type: String,
    required: true,
  },
  reg0000: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("reg1960", RegSchema);
