const mongoose = require("mongoose");
const RegC170Model = require("../app/models/BlocoC/RegC170");
const { mongodb } = require("../config/database");

const database = uri => {
  mongoose.connect(uri, {
    useCreateIndex: true,
    useNewUrlParser: true
  });
};
database(mongodb.uri);

RegC170Model.aggregate([
  {
    $match: {}
  },
  {
    $group: {
      _id: "$codItem",
      QtdTotal: { $sum: "$qtd" },
      VlTotal: { $sum: "$vlItem" },
      QtdItens: { $sum: 1 }
    }
  }
])
  .then(res => console.log(res))
  .catch(err => console.log(err));
