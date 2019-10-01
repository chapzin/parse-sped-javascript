const reg9001 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "9001") {
    return {
      reg: ln[1],
      indMov: ln[2],
      flag: "sped",
      reg0000
    };
  }
};

const reg9900 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "9900") {
    return {
      reg: ln[1],
      regBlc: ln[2],
      qtdRegBlc: ln[3],
      flag: "sped",
      reg0000
    };
  }
};

const reg9990 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "9990") {
    return {
      reg: ln[1],
      qtdLin9: ln[2],
      flag: "sped",
      reg0000
    };
  }
};

const reg9999 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "9999") {
    return {
      reg: ln[1],
      QtdLin: ln[2],
      flag: "sped",
      reg0000
    };
  }
};

module.exports = {
  reg9001,
  reg9900,
  reg9990,
  reg9999
};
