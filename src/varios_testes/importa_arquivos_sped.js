const fs = require("fs");
const {
  reg0000,
  reg0005,
  reg0100,
  reg0150,
  reg0190,
  reg0200,
  reg0220
} = require("../app/blocos/bloco0");
const { regC100, regC170 } = require("../app/blocos/blocoC");
const { regH010 } = require("../app/blocos/blocoH");
const { reg9999 } = require("../app/blocos/bloco9");
const path = require("path");
const mongoose = require("mongoose");
const Reg0000Model = require("../app/models/Bloco0/Reg0000");
const Reg0005Model = require("../app/models/Bloco0/Reg0005");
const Reg0100Model = require("../app/models/Bloco0/Reg0100");
const Reg0150Model = require("../app/models/Bloco0/Reg0150");
const Reg0190Model = require("../app/models/Bloco0/Reg0190");
const Reg0200Model = require("../app/models/Bloco0/Reg0200");
const Reg0220Model = require("../app/models/Bloco0/Reg0220");
const RegC100Model = require("../app/models/BlocoC/RegC100");
const RegC170Model = require("../app/models/BlocoC/RegC170");
const RegH010Model = require("../app/models/BlocoH/RegH010");
const LineByLineReader = require("line-by-line");
const { mongodb } = require("../config/database");
const timeStart = Date.now();

const readSped = file => {
  let r0000 = {};
  let reg0200p = {};
  let regC100p = {};
  const sped = new LineByLineReader(path.resolve("uploads", "speds", file));
  const database = uri => {
    mongoose.connect(uri, {
      useCreateIndex: true,
      useNewUrlParser: true
    });
  };
  database(mongodb.uri);

  sped.on("line", line => {
    if (reg0000(line)) {
      r0000 = reg0000(line);
      Reg0000Model.create(r0000, (err, result) => {
        if (err) {
          console.log(err);
        } else {
        }
      });
    }

    if (reg0005(line, r0000)) {
      Reg0005Model.create(reg0005(line, r0000), (err, result) => {
        if (err) {
          console.log(err);
        } else {
        }
      });
    }

    if (reg0100(line, r0000)) {
      Reg0100Model.create(reg0100(line, r0000), (err, result) => {
        if (err) {
          console.log(err);
        } else {
        }
      });
    }

    if (reg0150(line, r0000)) {
      Reg0150Model.create(reg0150(line, r0000), (err, result) => {
        if (err) {
          console.log(err);
        } else {
        }
      });
    }

    if (reg0190(line, r0000)) {
      Reg0190Model.create(reg0190(line, r0000), (err, result) => {
        if (err) {
          console.log(err);
        } else {
        }
      });
    }
    if (reg0200(line, r0000)) {
      reg0200p = reg0200(line, r0000);
      Reg0200Model.create(reg0200(line, r0000), (err, result) => {
        if (err) {
          console.log(err);
        } else {
        }
      });
    }

    if (reg0220(line, reg0200p, r0000)) {
      Reg0220Model.create(reg0220(line, reg0200p, r0000), (err, result) => {
        if (err) {
          console.log(err);
        } else {
        }
      });
    }

    if (regC100(line, r0000)) {
      regC100p = regC100(line, r0000);
      RegC100Model.create(regC100(line, r0000), (err, result) => {
        if (err) {
          console.log(err);
        } else {
        }
      });
    }

    if (regC170(line, regC100p, r0000)) {
      RegC170Model.create(regC170(line, regC100p, r0000), (err, result) => {
        if (err) {
          console.log(err);
        } else {
        }
      });
    }
    if (regH010(line, r0000)) {
      RegH010Model.create(regH010(line, r0000), (err, result) => {
        if (err) {
          console.log(err);
        } else {
        }
      });
    }

    if (reg9999(line, r0000)) {
      console.log("-=-=-=-=- FIM DO ARQUIVO SPED -=-=-=-=-=-=-");
      const timeEnd = Date.now();
      console.log(
        `Duração da importação ${((timeEnd - timeStart) / 1000).toFixed(
          2
        )} segundos...`
      );

      // break;
    }
  });
};

const files = fs.readdirSync(path.resolve("uploads", "speds"));

files.forEach(file => {
  readSped(file);
});
