const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  codItem: {
    type: String,
    required: true
  },
  dtFech: {
    type: String,
    required: true
  },
  estqAbert: {
    type: String,
    required: true
  },
  volEntr: {
    type: String,
    required: true
  },
  volDisp: {
    type: String,
    required: true
  },
  volSaidas: {
    type: String,
    required: true
  },
  estqEscr: {
    type: String,
    required: true
  },
  valAjPerda: {
    type: String,
    required: true
  },
  valAjGanho: {
    type: String,
    required: true
  },
  fechFisico: {
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

module.exports = mongoose.model("reg1300", RegSchema);
