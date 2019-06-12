const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  serie: {
    type: String,
    required: true,
  },
  fabricante: {
    type: String,
    required: true,
  },
  modelo: {
    type: String,
    required: true,
  },
  tipoMedicao: {
    type: String,
    required: true,
  },
  reg0000: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("reg1350", RegSchema);
