const regB001 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "B001") {
    return {
      reg: ln[1],
      indDad: ln[2],
      flag: "sped",
      reg0000
    };
  }
};

const regB020 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "B020") {
    return {
      reg: ln[1],
      indOper: ln[2],
      indEmit: ln[3],
      codPart: ln[4],
      codMod: ln[5],
      codSit: ln[6],
      ser: ln[7],
      numDoc: ln[8],
      chvNfe: ln[9],
      dtDoc: ln[10],
      codMunServ: ln[11],
      vlCont: ln[12],
      vlMatTerc: ln[13],
      vlSub: ln[14],
      vlIsntIss: ln[15],
      vlDedBc: ln[16],
      vlBcIss: ln[17],
      vlBcIssRt: ln[18],
      vlIssRt: ln[19],
      vlIss: ln[20],
      codInfObs: ln[21],
      flag: "sped",
      reg0000
    };
  }
};

const regB025 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "B025") {
    return {
      reg: ln[1],
      vlContP: ln[2],
      vlBcIssP: ln[3],
      aliqIss: ln[4],
      vlIssP: ln[5],
      vlIsntIssP: ln[6],
      codServ: ln[7],
      flag: "sped",
      reg0000
    };
  }
};

const regB030 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "B030") {
    return {
      reg: ln[1],
      codMod: ln[2],
      ser: ln[3],
      numDocIni: ln[4],
      numDocFin: ln[5],
      dtDoc: ln[6],
      qtdCanc: ln[7],
      vlCont: ln[8],
      vlIsntIss: ln[9],
      vlBcIss: ln[10],
      vlIss: ln[11],
      codInfObs: ln[12],
      flag: "sped",
      reg0000
    };
  }
};

const regB035 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "B035") {
    return {
      reg: ln[1],
      vlContP: ln[2],
      vlBcIssP: ln[3],
      aliqIss: ln[4],
      vlIssP: ln[5],
      vlIsntIssP: ln[6],
      codServ: ln[7],
      flag: "sped",
      reg0000
    };
  }
};

const regB350 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "B350") {
    return {
      reg: ln[1],
      codCtd: ln[2],
      ctaIss: ln[3],
      ctaCosif: ln[4],
      qtdOcor: ln[5],
      codServ: ln[6],
      vlCont: ln[7],
      vlBcIss: ln[8],
      aliqIss: ln[9],
      vlIss: ln[10],
      codInfObs: ln[11],
      flag: "sped",
      reg0000
    };
  }
};

const regB420 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "B420") {
    return {
      reg: ln[1],
      vlCont: ln[2],
      vlBcIss: ln[3],
      aliqIss: ln[4],
      vlIsntIss: ln[5],
      vlIss: ln[6],
      codServ: ln[7],
      flag: "sped",
      reg0000
    };
  }
};

const regB440 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "B440") {
    return {
      reg: ln[1],
      indOper: ln[2],
      codPart: ln[3],
      vlContRt: ln[4],
      vlBcIssRt: ln[5],
      vlIssRt: ln[6],
      flag: "sped",
      reg0000
    };
  }
};

const regB460 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "B460") {
    return {
      reg: ln[1],
      indDed: ln[2],
      vlDed: ln[3],
      numProc: ln[4],
      indProc: ln[5],
      proc: ln[6],
      codInfObs: ln[7],
      indObr: ln[8],
      flag: "sped",
      reg0000
    };
  }
};

const regB470 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "B470") {
    return {
      reg: ln[1],
      vlCont: ln[2],
      vlMatTerc: ln[3],
      vlMatProp: ln[4],
      vlSub: ln[5],
      vlIsnt: ln[6],
      vlDedBc: ln[7],
      vlBcIss: ln[8],
      vlBcIssRt: ln[9],
      vlIss: ln[10],
      vlIssRt: ln[11],
      vlDed: ln[12],
      vlIssRec: ln[13],
      vlIssSt: ln[14],
      vlIssRecUni: ln[15],
      flag: "sped",
      reg0000
    };
  }
};

const regB500 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "B500") {
    return {
      reg: ln[1],
      vlRec: ln[2],
      qtdProf: ln[3],
      vlOr: ln[5],
      flag: "sped",
      reg0000
    };
  }
};

const regB510 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "B510") {
    return {
      reg: ln[1],
      indProf: ln[2],
      indEsc: ln[3],
      indSoc: ln[4],
      cpf: ln[5],
      nome: ln[6],
      flag: "sped",
      reg0000
    };
  }
};

const regB990 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "B990") {
    return {
      reg: ln[1],
      qtdLinB: ln[2],
      flag: "sped",
      reg0000
    };
  }
};

module.exports = {
  regB001,
  regB020,
  regB025,
  regB030,
  regB035,
  regB350,
  regB420,
  regB440,
  regB460,
  regB470,
  regB500,
  regB510,
  regB990
};
