const regE001 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "E001") {
    return {
      reg: ln[1],
      indMov: ln[2],
      reg0000,
    };
  }
};

const regE100 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "E100") {
    return {
      reg: ln[1],
      dtIni: ln[2],
      dtFin: ln[3],
      reg0000,
    };
  }
};

const regE110 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "E110") {
    return {
      reg: ln[1],
      vlTotDebitos: ln[2],
      vlAjDebitos: ln[3],
      vlTotAjDebitos: ln[4],
      vlEstornosCred: ln[5],
      vlTotCreditos: ln[6],
      vlAjCreditos: ln[7],
      vlTotAjCreditos: ln[8],
      vlEstornosDeb: ln[9],
      vlSldCredorAt: ln[10],
      vlSldApurado: ln[11],
      vlTotDed: ln[12],
      vlIcmsRecolher: ln[13],
      vlSldCredorTransportar: ln[14],
      debEsp: ln[15],
      reg0000,
    };
  }
};

const regE111 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "E111") {
    return {
      reg: ln[1],
      codAjApur: ln[2],
      DescrComplAj: ln[3],
      vlAjApur: ln[4],
      reg0000,
    };
  }
};

const regE112 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "E112") {
    return {
      reg: ln[1],
      numDa: ln[2],
      numProc: ln[3],
      indProc: ln[4],
      proc: ln[5],
      txtCompl: ln[6],
      reg0000,
    };
  }
};

const regE113 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "E113") {
    return {
      reg: ln[1],
      codPart: ln[2],
      codMod: ln[3],
      ser: ln[4],
      sub: ln[5],
      numDoc: ln[6],
      dtDoc: ln[7],
      codItem: ln[8],
      vlAjItem: ln[9],
      chvDoce: ln[10],
      reg0000,
    };
  }
};

const regE115 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "E115") {
    return {
      reg: ln[1],
      codInfAdic: ln[2],
      vlInfAdic: ln[3],
      descrComplAj: ln[4],
      reg0000,
    };
  }
};

const regE116 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "E116") {
    return {
      reg: ln[1],
      codOr: ln[2],
      vlOr: ln[3],
      dtVcto: ln[4],
      codRec: ln[5],
      numProc: ln[6],
      indProc: ln[7],
      proc: ln[8],
      txtCompl: ln[9],
      mesRef: ln[10],
      reg0000,
    };
  }
};

const regE200 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "E200") {
    return {
      reg: ln[1],
      uf: ln[2],
      dtIni: ln[3],
      dtFin: ln[4],
      reg0000,
    };
  }
};

const regE210 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "E210") {
    return {
      reg: ln[1],
      indMovSt: ln[2],
      vlSldCredAntSt: ln[3],
      vlDevolSt: ln[4],
      vlRessarcSt: ln[5],
      vlOutCredSt: ln[6],
      vlAjCreditosSt: ln[7],
      vlRetencaoSt: ln[8],
      vlOutDebSt: ln[9],
      vlAjDebitosSt: ln[10],
      vlSldDevAntSt: ln[11],
      vlDevolucoesSt: ln[12],
      vlIcmsRecolSt: ln[13],
      vlSldCredStTransportar: ln[14],
      debEspSt: ln[15],
      reg0000,
    };
  }
};

const regE220 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "E220") {
    return {
      reg: ln[1],
      codAjApur: ln[2],
      descrComplAj: ln[3],
      vlAjApur: ln[4],
      reg0000,
    };
  }
};

const regE230 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "E230") {
    return {
      reg: ln[1],
      numDa: ln[2],
      numProc: ln[3],
      indProc: ln[4],
      proc: ln[5],
      txtCompl: ln[6],
      reg0000,
    };
  }
};

const regE240 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "E240") {
    return {
      reg: ln[1],
      codPart: ln[2],
      codMod: ln[3],
      ser: ln[4],
      sub: ln[5],
      numDoc: ln[6],
      dtDoc: ln[7],
      codItem: ln[8],
      vlAjItem: ln[9],
      chvDoce: ln[10],
      reg0000,
    };
  }
};

const regE250 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "E250") {
    return {
      reg: ln[1],
      codOr: ln[2],
      vlOr: ln[3],
      dtVcto: ln[4],
      codRec: ln[5],
      numProc: ln[6],
      indProc: ln[7],
      proc: ln[8],
      txtCompl: ln[9],
      mesRef: ln[10],
      reg0000,
    };
  }
};

const regE300 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "E300") {
    return {
      reg: ln[1],
      uf: ln[2],
      dtIni: ln[3],
      dtFin: ln[4],
      reg0000,
    };
  }
};

const regE310ate2016 = (line, reg0000) => {
  if (parseInt(reg0000.dtIni.slice(4, 8)) <= 2016) {
    const ln = line.split("|");
    if (line[0] == "|" && ln[1] == "E310") {
      return {
        reg: ln[1],
        indMovDifal: ln[2],
        vlSldCredAntDifal: ln[3],
        vlTotDebitosDifal: ln[4],
        vlOutDebDifal: ln[5],
        vlTotDebFcp: ln[6],
        vlTotCreditosDifal: ln[7],
        vlTotCredFcp: ln[8],
        vlOutCredDifal: ln[9],
        vlSldDevAntDifal: ln[10],
        vlDeducoesDifal: ln[11],
        vlRecol: ln[12],
        vlSldCredTransportar: ln[13],
        debEspDifal: ln[14],
        reg0000,
      };
    }
  }
};

const regE310depois2016 = (line, reg0000) => {
  if (parseInt(reg0000.dtIni.slice(4, 8)) >= 2017) {
    const ln = line.split("|");
    if (line[0] == "|" && ln[1] == "E310") {
      return {
        reg: ln[1],
        indMovFcpDifal: ln[2],
        vlSldCredAntDifal: ln[3],
        vlTotDebitosDifal: ln[4],
        vlOutDebDifal: ln[5],
        vlTotCreditosDifal: ln[6],
        vlOutCredDifal: ln[7],
        vlSldDevAntDifal: ln[8],
        vlDeducoesDifal: ln[9],
        vlRecolDifal: ln[10],
        vlSldCredTransportarDifal: ln[11],
        DebEspDifal: ln[12],
        vlSldCredAntFcp: ln[13],
        vlTotDebFcp: ln[14],
        vlOutDebFcp: ln[15],
        vlTotCredFcp: ln[16],
        vlOutCredFcp: ln[17],
        vlSldDevAntFcp: ln[18],
        vlDeducoesFcp: ln[19],
        vlRecolFcp: ln[20],
        vlSldCredTransportarFcp: ln[21],
        debEspFcp: ln[22],
        reg0000,
      };
    }
  }
};

const regE311 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "E311") {
    return {
      reg: ln[1],
      codAjApur: ln[2],
      descrComplAj: ln[3],
      vlAjApur: ln[4],
      reg0000,
    };
  }
};

const regE312 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "E312") {
    return {
      reg: ln[1],
      numDa: ln[2],
      numProc: ln[3],
      indProc: ln[4],
      proc: ln[5],
      txtCompl: ln[6],
      reg0000,
    };
  }
};

const regE313 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "E313") {
    return {
      reg: ln[1],
      codPart: ln[2],
      codMod: ln[3],
      ser: ln[4],
      sub: ln[5],
      numDoc: ln[6],
      chvDoce: ln[7],
      dtDoc: ln[8],
      codItem: ln[9],
      vlAjItem: ln[10],
      reg0000,
    };
  }
};

const regE316 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "E316") {
    return {
      reg: ln[1],
      codOr: ln[2],
      vlOr: ln[3],
      dtVcto: ln[4],
      codRec: ln[5],
      numProc: ln[6],
      indProc: ln[7],
      proc: ln[8],
      txtCompl: ln[9],
      mesRef: ln[10],
      reg0000,
    };
  }
};

const regE500 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "E500") {
    return {
      reg: ln[1],
      indApur: ln[2],
      dtIni: ln[3],
      dtFin: ln[4],
      reg0000,
    };
  }
};

const regE510 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "E510") {
    return {
      reg: ln[1],
      cfop: ln[2],
      cstIpi: ln[3],
      vlContIpi: ln[4],
      vlBcIpi: ln[5],
      vlIpi: ln[6],
      reg0000,
    };
  }
};

const regE520 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "E520") {
    return {
      reg: ln[1],
      vlSdAntIpi: ln[2],
      vlDebIpi: ln[3],
      vlCredIpi: ln[4],
      vlOdIpi: ln[5],
      vlOcIpi: ln[6],
      vlScIpi: ln[7],
      vlSdIpi: ln[8],
      reg0000,
    };
  }
};

const regE530 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "E530") {
    return {
      reg: ln[1],
      indAj: ln[2],
      vlAj: ln[3],
      codAj: ln[4],
      indDoc: ln[5],
      numDoc: ln[6],
      descrAj: ln[7],
      reg0000,
    };
  }
};

const regE531 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "E531") {
    return {
      reg: ln[1],
      codPart: ln[2],
      codMod: ln[3],
      ser: ln[4],
      sub: ln[5],
      numDoc: ln[6],
      dtDoc: ln[7],
      codItem: ln[8],
      vlAjItem: ln[9],
      chvNfe: ln[10],
      reg0000,
    };
  }
};

const regE990 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "E990") {
    return {
      reg: ln[1],
      qtdLinE: ln[2],
      reg0000,
    };
  }
};

module.exports = {
  regE001,
  regE100,
  regE110,
  regE111,
  regE112,
  regE113,
  regE115,
  regE116,
  regE200,
  regE210,
  regE220,
  regE230,
  regE240,
  regE250,
  regE300,
  regE310ate2016,
  regE310depois2016,
  regE311,
  regE312,
  regE313,
  regE316,
  regE500,
  regE510,
  regE520,
  regE530,
  regE531,
  regE990,
};
