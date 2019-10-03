const fs = require("fs");
const path = require("path");

const RegC100Model = require("../app/models/BlocoC/RegC100");
const RegC170Model = require("../app/models/BlocoC/RegC170");
const { regC100Xml, regC170Xml } = require("../app/blocos/blocoC");
const mongoose = require("mongoose");
const { mongodb } = require("../config/database");
const database = uri => {
  mongoose.connect(uri, {
    useCreateIndex: true,
    useNewUrlParser: true
  });
};
database(mongodb.uri);

const files = fs.readdirSync(path.resolve("uploads", "xmls"));

files.forEach(file => {
  let regC100 = regC100Xml(file);
  RegC100Model.create(regC100, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Inseriu ${regC100.chvNfe}`);
    }
  });

  let regC170 = regC170Xml(file);
  regC170.forEach(itemRegC170 => {
    RegC170Model.create(itemRegC170, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Inseriu ${regC100.chvNfe}`);
      }
    });
  });
});
