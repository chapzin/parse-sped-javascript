const regH001 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "H001") {
    return {
      reg: ln[1],
      indMov: ln[2],
      reg0000,
    };
  }
};

const regH005 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "H005") {
    return {
      reg: ln[1],
      dtInv: ln[2],
      vlInv: ln[3],
      motInv: ln[4],
      reg0000,
    };
  }
};

const regH010 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "H010") {
    return {
      reg: ln[1],
      codItem: ln[2],
      unid: ln[3],
      qtd: ln[4],
      vlUnit: ln[5],
      vlItem: ln[6],
      indProp: ln[7],
      codPart: ln[8],
      txtCompl: ln[9],
      codCta: ln[10],
      vlItemIr: ln[11],
      reg0000,
    };
  }
};

const regH020 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "H020") {
    return {
      reg: ln[1],
      cstIcms: ln[2],
      bcIcms: ln[3],
      vlIcms: ln[4],
      reg0000,
    };
  }
};

const regH990 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "H990") {
    return {
      reg: ln[1],
      qtdLinH: ln[2],
      reg0000,
    };
  }
};

module.exports = { regH001, regH005, regH010, regH020, regH990 };
