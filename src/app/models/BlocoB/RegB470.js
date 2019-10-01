const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  vlCont: {
    type: String,
    required: true
  },
  vlMatTerc: {
    type: String,
    required: true
  },
  vlMatProp: {
    type: String,
    required: true
  },
  vlSub: {
    type: String,
    required: true
  },
  vlIsnt: {
    type: String,
    required: true
  },
  vlDedBc: {
    type: String,
    required: true
  },
  vlBcIss: {
    type: String,
    required: true
  },
  vlBcIssRt: {
    type: String,
    required: true
  },
  vlIss: {
    type: String,
    required: true
  },
  vlIssRt: {
    type: String,
    required: true
  },
  vlDed: {
    type: String,
    required: true
  },
  vlIssSt: {
    type: String,
    required: true
  },
  vlIssRecUni: {
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

module.exports = mongoose.model("regB470", RegSchema);
