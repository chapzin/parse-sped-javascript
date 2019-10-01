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
  g301: {
    type: String,
    required: true
  },
  g302: {
    type: String,
    required: true
  },
  g303: {
    type: String,
    required: true
  },
  g304: {
    type: String,
    required: true
  },
  g305: {
    type: String,
    required: true
  },
  g306: {
    type: String,
    required: true
  },
  g307: {
    type: String,
    required: true
  },
  g3t: {
    type: String,
    required: true
  },
  g308: {
    type: String,
    required: true
  },
  g309: {
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

module.exports = mongoose.model("reg1970", RegSchema);
