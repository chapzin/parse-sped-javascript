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

const totalizadorC170PorCfopSped = () => {
  return RegC170Model.aggregate([
    {
      $match: { flag: "sped" }
    },
    {
      $group: {
        _id: "$cfop",
        QtdTotal: { $sum: "$qtd" },
        VlTotal: { $sum: "$vlItem" },
        QtdItens: { $sum: 1 }
      }
    }
  ])
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

const totalizadorItensPorCfopSped = cfop => {
  return RegC170Model.aggregate([
    {
      $match: { flag: "sped", cfop: cfop }
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
};

// RegC170Model.aggregate([
//   {
//     $match: {}
//   },
//   {
//     $group: {
//       _id: "$cfop",
//       QtdTotal: { $sum: "$qtd" },
//       VlTotal: { $sum: "$vlItem" },
//       QtdItens: { $sum: 1 }
//     }
//   }
// ])
//   .then(res => console.log(res))
//   .catch(err => console.log(err));
// totalizadorC170PorCfopSped();
totalizadorItensPorCfopSped("1117");
