const fs = require("fs");
const path = require("path");

const lerXml = file => {
  return fs.readFileSync(path.resolve("uploads", "xmls", file), "utf-8");
};

module.exports = { lerXml };
