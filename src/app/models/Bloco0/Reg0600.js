const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  dtAlt: {
    type: String,
    required: true
  },
  codCcus: {
    type: String,
    required: true
  },
  ccus: {
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

module.exports = mongoose.model("reg0600", RegSchema);
