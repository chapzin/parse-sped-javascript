const fs = require("fs");
const { reg0990 } = require("./bloco0");

const lineReader = file => {
  return require("readline").createInterface({
    input: fs.createReadStream(file),
  });
};

const sped = lineReader("02-2017v2.txt");

sped.on("line", line => {
  reg0990(line);
  // reg0200(line);
  // reg0220(line);
});
