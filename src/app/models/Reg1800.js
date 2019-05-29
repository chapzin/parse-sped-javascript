const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  vlCarga: {
    type: String,
    required: true,
  },
  vlPass: {
    type: String,
    required: true,
  },
  vlFat: {
    type: String,
    required: true,
  },
  indRat: {
    type: String,
    required: true,
  },
  vlIcmsAnt: {
    type: String,
    required: true,
  },
  vlBcIcms: {
    type: String,
    required: true,
  },
  vlIcmsApur: {
    type: String,
    required: true,
  },
  vlBcIcmsApur: {
    type: String,
    required: true,
  },
  vlDif: {
    type: String,
    required: true,
  },
  reg0000: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("regH990", RegSchema);
