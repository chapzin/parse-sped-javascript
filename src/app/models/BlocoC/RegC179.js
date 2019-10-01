const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  bcStOrigDest: {
    type: String,
    required: true
  },
  icmsStRep: {
    type: String,
    required: true
  },
  icmsStCompl: {
    type: String
  },
  bcRet: {
    type: String
  },
  icmsRet: {
    type: String
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

module.exports = mongoose.model("regC179", RegSchema);
