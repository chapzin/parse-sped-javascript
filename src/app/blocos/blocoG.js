const regG001 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "G001") {
    return {
      reg: ln[1],
      indMov: ln[2],
      reg0000,
    };
  }
};

const regG110 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "G100") {
    return {
      reg: ln[1],
      dtIni: ln[2],
      dtFin: ln[3],
      saldoInIcms: ln[4],
      somParc: ln[5],
      vlTribExp: ln[6],
      vlTotal: ln[7],
      indPerSai: ln[8],
      icmsAprop: ln[9],
      somIcmsOc: ln[10],
      reg0000,
    };
  }
};

const regG125 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "G125") {
    return {
      reg: ln[1],
      codIndBem: ln[2],
      dtMov: ln[3],
      tipoMov: ln[4],
      vlImobIcmsOp: ln[5],
      vlImobIcmsSt: ln[6],
      vlImobIcmsFrt: ln[7],
      vlImobIcmsDif: ln[8],
      numParc: ln[9],
      vlParcPass: ln[10],
      reg0000,
    };
  }
};

const regG126 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "G126") {
    return {
      reg: ln[1],
      dtIni: ln[2],
      dtFin: ln[3],
      numParc: ln[4],
      vlParcPass: ln[5],
      vlTribOc: ln[6],
      vlTotal: ln[7],
      indPerSai: ln[8],
      vlParcAprop: ln[9],
      reg0000,
    };
  }
};

const regG130 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "G130") {
    return {
      reg: ln[1],
      indEmit: ln[2],
      codPart: ln[3],
      codMod: ln[4],
      serie: ln[5],
      numDoc: ln[6],
      chvNfeCte: ln[7],
      dtDoc: ln[8],
      reg0000,
    };
  }
};

const regG140 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "G140") {
    return {
      reg: ln[1],
      numItem: ln[2],
      codItem: ln[3],
      reg0000,
    };
  }
};

const regG990 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "G990") {
    return {
      reg: ln[1],
      qtdLinG: ln[2],
      reg0000,
    };
  }
};

module.exports = { regG001, regG110, regG125, regG126, regG130, regG140 };
