const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  dtIniOs: {
    type: String
  },
  dtFinOs: {
    type: String
  },
  codDocOs: {
    type: String
  },
  codItemOri: {
    type: String,
    required: true
  },
  qtdOri: {
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

module.exports = mongoose.model("regK210", RegSchema);
