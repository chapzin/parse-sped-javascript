const regK001 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "K001") {
    return {
      reg: ln[1],
      indMov: ln[2],
      flag: "sped",
      reg0000
    };
  }
};

const regK100 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "K100") {
    return {
      reg: ln[1],
      dtIni: ln[2],
      dtFin: ln[3],
      flag: "sped",
      reg0000
    };
  }
};

const regK200 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "K200") {
    return {
      reg: ln[1],
      dtEst: ln[2],
      codItem: ln[3],
      qtd: ln[4],
      indEst: ln[5],
      codPart: ln[6],
      flag: "sped",
      reg0000
    };
  }
};

const regK210 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "K210") {
    return {
      reg: ln[1],
      dtIniOs: ln[2],
      dtFinOs: ln[3],
      codDocOs: ln[4],
      codItemOri: ln[5],
      qtdOri: ln[6],
      flag: "sped",
      reg0000
    };
  }
};

const regK215 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "K215") {
    return {
      reg: ln[1],
      codItemDes: ln[2],
      qtdDes: ln[3],
      flag: "sped",
      reg0000
    };
  }
};

const regK220 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "K220") {
    return {
      reg: ln[1],
      dtMov: ln[2],
      codItemOri: ln[3],
      codItemDest: ln[4],
      qtdOri: ln[5],
      qtdDest: ln[6],
      flag: "sped",
      reg0000
    };
  }
};

const regK230 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "K230") {
    return {
      reg: ln[1],
      dtIniOp: ln[2],
      dtFinOp: ln[3],
      codDocOp: ln[4],
      codItem: ln[5],
      qtdEnc: ln[6],
      flag: "sped",
      reg0000
    };
  }
};

const regK235 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "K235") {
    return {
      reg: ln[1],
      dtSaida: ln[2],
      codItem: ln[3],
      qtd: ln[4],
      codInsSubst: ln[5],
      flag: "sped",
      reg0000
    };
  }
};

const regK250 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "K250") {
    return {
      reg: ln[1],
      dtProd: ln[2],
      codItem: ln[3],
      qtd: ln[4],
      flag: "sped",
      reg0000
    };
  }
};

const regK255 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "K255") {
    return {
      reg: ln[1],
      dtCons: ln[2],
      codItem: ln[3],
      qtd: ln[4],
      codInsSubst: ln[5],
      flag: "sped",
      reg0000
    };
  }
};

const regK260 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "K260") {
    return {
      reg: ln[1],
      codOpOs: ln[2],
      codItem: ln[3],
      dtSaida: ln[4],
      qtdSaida: ln[5],
      dtRet: ln[6],
      qtdRet: ln[7],
      flag: "sped",
      reg0000
    };
  }
};

const regK265 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "K265") {
    return {
      reg: ln[1],
      codItem: ln[2],
      qtdCons: ln[3],
      qtdRet: ln[4],
      flag: "sped",
      reg0000
    };
  }
};

const regK270 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "K270") {
    return {
      reg: ln[1],
      dtIniAp: ln[2],
      dtFinAp: ln[3],
      codOpOs: ln[4],
      codItem: ln[5],
      qtdCorPos: ln[6],
      qtdCorNeg: ln[7],
      origem: ln[8],
      flag: "sped",
      reg0000
    };
  }
};

const regK275 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "K275") {
    return {
      reg: ln[1],
      codItem: ln[2],
      qtdCorPos: ln[3],
      qtdCorNeg: ln[4],
      codInsSubst: ln[5],
      flag: "sped",
      reg0000
    };
  }
};

const regK280 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "K280") {
    return {
      reg: ln[1],
      dtEst: ln[2],
      codItem: ln[3],
      qtdCorPos: ln[4],
      qtdCorNeg: ln[5],
      indEst: ln[6],
      codPart: ln[7],
      flag: "sped",
      reg0000
    };
  }
};

const regK290 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "K290") {
    return {
      reg: ln[1],
      dtIniOp: ln[2],
      dtFinOp: ln[3],
      codDocOp: ln[4],
      flag: "sped",
      reg0000
    };
  }
};

const regK291 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "K291") {
    return {
      reg: ln[1],
      codItem: ln[2],
      qtd: ln[3],
      flag: "sped",
      reg0000
    };
  }
};

const regK292 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "K292") {
    return {
      reg: ln[1],
      codItem: ln[2],
      qtd: ln[3],
      flag: "sped",
      reg0000
    };
  }
};

const regK300 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "K300") {
    return {
      reg: ln[1],
      dtProd: ln[2],
      flag: "sped",
      reg0000
    };
  }
};

const regK301 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "K301") {
    return {
      reg: ln[1],
      codItem: ln[2],
      qtd: ln[3],
      flag: "sped",
      reg0000
    };
  }
};

const regK302 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "K302") {
    return {
      reg: ln[1],
      codItem: ln[2],
      qtd: ln[3],
      flag: "sped",
      reg0000
    };
  }
};

const regK990 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "K990") {
    return {
      reg: ln[1],
      qtdLinK: ln[2],
      flag: "sped",
      reg0000
    };
  }
};

module.exports = {
  regK001,
  regK100,
  regK200,
  regK210,
  regK215,
  regK220,
  regK230,
  regK235,
  regK250,
  regK255,
  regK260,
  regK265,
  regK270,
  regK275,
  regK280,
  regK290,
  regK291,
  regK292,
  regK300,
  regK301,
  regK302,
  regK990
};
