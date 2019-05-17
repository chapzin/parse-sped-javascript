const regD001 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "D001") {
    return {
      reg: ln[1],
      indOper: ln[2],
      indEmit: ln[3],
      codPart: ln[4],
      codMod: ln[5],
      codSit: ln[6],
      ser: ln[7],
      sub: ln[8],
      numDoc: ln[9],
      chvCte: ln[10],
      dtDoc: ln[11],
      dtAP: ln[12],
      tpCte: ln[13],
      chvCteRef: ln[14],
      vlDoc: ln[15],
      vlDesc: ln[16],
      indFrt: ln[17],
      vlServ: ln[18],
      vlBcIcms: ln[19],
      vlIcms: ln[20],
      vlNt: ln[21],
      codInf: ln[22],
      codCta: ln[23],
      codMunOrig: ln[24],
      codMunDest: ln[25],
      reg0000,
    };
  }
};

const regD101 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "D101") {
    return {
      reg: ln[1],
      vlFcpUfDest: ln[2],
      vlIcmsUfDest: ln[3],
      vlIcmsUfRem: ln[4],
      reg0000,
    };
  }
};

const regD110 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "D110") {
    return {
      reg: ln[1],
      numItem: ln[2],
      codItem: ln[3],
      vlServ: ln[4],
      vlOut: ln[5],
      reg0000,
    };
  }
};

const regD120 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "D120") {
    return {
      reg: ln[1],
      codMunOrig: ln[2],
      codMunDest: ln[3],
      veicId: ln[4],
      ufId: ln[5],
      reg0000,
    };
  }
};

const regD130 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "D130") {
    return {
      reg: ln[1],
      codPartConsg: ln[2],
      codPartRed: ln[3],
      indFrtRed: ln[4],
      codMunOrig: ln[5],
      codMunDest: ln[6],
      veicId: ln[7],
      vlLiqFrt: ln[8],
      vlSecCat: ln[9],
      vlDesp: ln[10],
      vlPedg: ln[11],
      vlOut: ln[12],
      vlFrt: ln[13],
      ufId: ln[14],
      reg0000,
    };
  }
};

module.exports = { regD001, regD101, regD110, regD120, regD130 };
