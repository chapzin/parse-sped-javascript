const mongoose = require("mongoose");
const RegC170Model = require("../app/models/BlocoC/RegC170");
const RegC100Model = require("../app/models/BlocoC/RegC100");
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

const totalizadorC170PorCfop = () => {
  return RegC170Model.aggregate([
    {
      $match: {}
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

const consultaNf1 = () => {
  return RegC100Model.find({ codMod: "01" })
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

const consultaChaveTerceiroSped = async () => {
  return await RegC100Model.find(
    { flag: "sped", indEmit: "1", codMod: "55" },
    { chvNfe: 1, _id: 0 }
  );
};

const consultaChavePropriaSped = async () => {
  return await RegC100Model.find(
    { flag: "sped", indEmit: "0", codSit: "00", codMod: "55" },
    { chvNfe: 1, _id: 0 }
  ).count();
};

const consultaChavePropriaXml = async () => {
  return await RegC100Model.find(
    { flag: "xml", indEmit: "0", codMod: "55" },
    { chvNfe: 1, _id: 0 }
  ).count();
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
// totalizadorC170PorCfop();
// totalizadorItensPorCfopSped("1117");
const xml = [];
const sped = [];
consultaChavePropriaXml().then(res => xml.push(res));
consultaChavePropriaSped().then(res => sped.push(res));
