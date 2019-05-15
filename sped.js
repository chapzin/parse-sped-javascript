const fs = require("fs");
const { reg0000, reg0005, reg0200, reg0220, reg0990 } = require("./bloco0");

const lineReader = file => {
  return require("readline").createInterface({
    input: fs.createReadStream(file),
  });
};
let regInicial = {};
let reg0200p = {};
const sped = lineReader("02-2017v2.txt");

sped.on("line", line => {
  if (reg0000(line)) {
    regInicial = reg0000(line);
  }
  if (reg0200(line, regInicial)) {
    reg0200p = reg0200(line, regInicial);
  }
  if (reg0220(line, reg0200p, regInicial)) {
    console.log(reg0220(line, reg0200p, regInicial));
  }
  reg0005(line, regInicial);
  reg0990(line, regInicial);
  // reg0200(line);
  // reg0220(line);
});
