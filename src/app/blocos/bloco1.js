const reg1001 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "1001") {
    return {
      reg: ln[1],
      indMod: ln[2],
      reg0000,
    };
  }
};

const reg1010 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "1010") {
    return {
      reg: ln[1],
      indExp: ln[2],
      indCcrf: ln[3],
      indComb: ln[4],
      indUsina: ln[5],
      indVa: ln[6],
      indEe: ln[7],
      indCart: ln[8],
      indForm: ln[9],
      indAer: ln[10],
      indGiaf1: ln[11],
      indGiaf3: ln[12],
      indGiaf4: ln[13],
      reg0000,
    };
  }
};

const reg1100 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "1100") {
    return {
      reg: ln[1],
      indDoc: ln[2],
      nroDe: ln[3],
      dtDe: ln[4],
      natExp: ln[5],
      nroRe: ln[6],
      dtRe: ln[7],
      chcEmb: ln[8],
      dtChc: ln[9],
      dtAvb: ln[10],
      tpChc: ln[11],
      pais: ln[12],
      reg0000,
    };
  }
};

const reg1105 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "1105") {
    return {
      reg: ln[1],
      codMod: ln[2],
      serie: ln[3],
      numDoc: ln[4],
      chvNfe: ln[5],
      dtDoc: ln[6],
      codItem: ln[7],
      reg0000,
    };
  }
};

const reg1110 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "1110") {
    return {
      reg: ln[1],
      codPart: ln[2],
      codMod: ln[3],
      ser: ln[4],
      numDoc: ln[5],
      dtDoc: ln[6],
      chvNfe: ln[7],
      nrMemo: ln[8],
      qtd: ln[9],
      unid: ln[10],
      reg0000,
    };
  }
};

const reg1200 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "1200") {
    return {
      reg: ln[1],
      codAjApur: ln[2],
      sldCred: ln[3],
      credApr: ln[4],
      credReceb: ln[5],
      credUtil: ln[6],
      sldCredFim: ln[7],
      reg0000,
    };
  }
};

const reg1210 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "1210") {
    return {
      reg: ln[1],
      tipoUtil: ln[2],
      vlCredUtil: ln[3],
      chvDoce: ln[4],
      reg0000,
    };
  }
};

const reg1300 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "1300") {
    return {
      reg: ln[1],
      codItem: ln[2],
      dtFech: ln[3],
      estqAbert: ln[4],
      volEntr: ln[5],
      volDisp: ln[6],
      volSaidas: ln[7],
      estqEscr: ln[8],
      valAjPerda: ln[9],
      valAjGanho: ln[10],
      fechFisico: ln[11],
      reg0000,
    };
  }
};

const reg1310 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "1310") {
    return {
      reg: ln[1],
      numTanque: ln[2],
      estQAbert: ln[3],
      volEntr: ln[4],
      volDisp: ln[5],
      volSaidas: ln[6],
      estqEscr: ln[7],
      valAjPerda: ln[8],
      fechFisico: ln[9],
      reg0000,
    };
  }
};
const reg1320 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "1320") {
    return {
      reg: ln[1],
      numBico: ln[2],
      nrInterv: ln[3],
      motInterv: ln[4],
      nomInterv: ln[5],
      cnpjInterv: ln[6],
      cpfInterv: ln[7],
      valFecha: ln[8],
      valAbert: ln[9],
      volAferi: ln[10],
      volVendas: ln[11],
      reg0000,
    };
  }
};

const reg1350 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "1350") {
    return {
      reg: ln[1],
      serie: ln[2],
      fabricante: ln[3],
      modelo: ln[4],
      tipoMedicao: ln[5],
      reg0000,
    };
  }
};

const reg1360 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "1360") {
    return {
      reg: ln[1],
      numLacre: ln[2],
      dtAplicacao: ln[3],
      reg0000,
    };
  }
};

const reg1370 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "1370") {
    return {
      reg: ln[1],
      numBico: ln[2],
      codItem: ln[3],
      numTanque: ln[4],
      reg0000,
    };
  }
};

const reg1390 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "1390") {
    return {
      reg: ln[1],
      codProd: ln[2],
      reg0000,
    };
  }
};

const reg1391 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "1391") {
    return {
      reg: ln[1],
      dtRegistro: ln[2],
      qtdMoid: ln[3],
      estqIni: ln[4],
      qtdProduz: ln[5],
      entAnidHid: ln[6],
      outrEntr: ln[7],
      perda: ln[8],
      cons: ln[9],
      saiAniHid: ln[10],
      saidas: ln[11],
      estqFin: ln[12],
      estqIniMel: ln[13],
      prodDiaMel: ln[14],
      utilMel: ln[15],
      prodAlcMel: ln[16],
      obs: ln[17],
      reg0000,
    };
  }
};

const reg1400 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "1400") {
    return {
      reg: ln[1],
      codItemIpm: ln[2],
      mun: ln[3],
      valor: ln[4],
      reg0000,
    };
  }
};

const reg1500 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "1500") {
    return {
      reg: ln[1],
      indOper: ln[2],
      indEmit: ln[3],
      codPart: ln[4],
      codMod: ln[5],
      codSit: ln[6],
      ser: ln[7],
      sub: ln[8],
      codCons: ln[9],
      numDoc: ln[10],
      dtDoc: ln[11],
      dtES: ln[12],
      vlDoc: ln[13],
      vlDesc: ln[14],
      vlForn: ln[15],
      vlServNt: ln[16],
      vlTerc: ln[17],
      vlDa: ln[18],
      vlBcIcms: ln[19],
      vlIcms: ln[20],
      vlBcIcmsSt: ln[21],
      vlIcmsSt: ln[22],
      codInf: ln[23],
      vlPis: ln[24],
      vlCofins: ln[25],
      tpLigacao: ln[26],
      codGrupoTensao: ln[27],
      reg0000,
    };
  }
};

const reg1510 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "1510") {
    return {
      reg: ln[1],
      numItem: ln[2],
      codItem: ln[3],
      codClass: ln[4],
      qtd: ln[5],
      unid: ln[6],
      vlItem: ln[7],
      vlDesc: ln[8],
      cstIcms: ln[9],
      cfop: ln[10],
      vlBcIcms: ln[11],
      aliqIcms: ln[12],
      vlIcms: ln[13],
      vlBcIcmsSt: ln[14],
      aliqSt: ln[15],
      vlIcmsSt: ln[16],
      indRec: ln[17],
      codPart: ln[18],
      vlPis: ln[19],
      vlCofins: ln[20],
      codCta: ln[21],
      reg0000,
    };
  }
};

const reg1600 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "1600") {
    return {
      reg: ln[1],
      codPart: ln[2],
      totCredito: ln[3],
      totDebito: ln[4],
      reg0000,
    };
  }
};

const reg1700 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "1700") {
    return {
      reg: ln[1],
      codDisp: ln[2],
      codMod: ln[3],
      ser: ln[4],
      sub: ln[5],
      numDocIni: ln[6],
      numDocFin: ln[7],
      numAut: ln[8],
      reg0000,
    };
  }
};

const reg1710 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "1710") {
    return {
      reg: ln[1],
      numDocIni: ln[2],
      numDocFin: ln[3],
      reg0000,
    };
  }
};

const reg1800 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "1800") {
    return {
      reg: ln[1],
      vlCarga: ln[2],
      vlPass: ln[3],
      vlFat: ln[4],
      indRat: ln[5],
      vlIcmsAnt: ln[6],
      vlBcIcms: ln[7],
      vlIcmsApur: ln[8],
      vlBcIcmsApur: ln[9],
      vlDif: ln[10],
      reg0000,
    };
  }
};

const reg1900 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "1900") {
    return {
      reg: ln[1],
      indApurIcms: ln[2],
      descrComplOutApur: ln[3],
      reg0000,
    };
  }
};

const reg1910 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "1910") {
    return {
      reg: ln[1],
      dtIni: ln[2],
      dtFin: ln[3],
      reg0000,
    };
  }
};

const reg1920 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "1920") {
    return {
      reg: ln[1],
      vlTotTransfDebitosOa: ln[2],
      vlTotAjDebitosOa: ln[3],
      vlEstornosCredOa: ln[4],
      vlTotTransCreditosOa: ln[5],
      vlTotAjCreditosOa: ln[6],
      vlEstornosDebOa: ln[7],
      vlSldCredorAntOa: ln[8],
      vlSldApuradoOa: ln[9],
      vlTotDeb: ln[10],
      vlIcmsRecolherOa: ln[11],
      vlSldCredorTranspOa: ln[12],
      debEspOa: ln[13],
      reg0000,
    };
  }
};

const reg1921 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "1921") {
    return {
      reg: ln[1],
      codAjApur: ln[2],
      descrComplAj: ln[3],
      vlAjApur: ln[4],
      reg0000,
    };
  }
};

const reg1922 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "1922") {
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

const reg1923 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "1923") {
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

const reg1925 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "1925") {
    return {
      reg: ln[1],
      codInfAdic: ln[2],
      vlInfAdic: ln[3],
      descrComplAj: ln[4],
      reg0000,
    };
  }
};

const reg1926 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "1926") {
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

const reg1960 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "1960") {
    return {
      reg: ln[1],
      indAp: ln[2],
      g101: ln[3],
      g102: ln[4],
      g103: ln[5],
      g104: ln[6],
      g105: ln[7],
      g106: ln[8],
      g107: ln[9],
      g108: ln[10],
      g109: ln[11],
      g110: ln[12],
      g111: ln[13],
      reg0000,
    };
  }
};

const reg1970 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "1970") {
    return {
      reg: ln[1],
      indAp: ln[2],
      g301: ln[3],
      g302: ln[4],
      g303: ln[5],
      g304: ln[6],
      g305: ln[7],
      g306: ln[8],
      g307: ln[9],
      g30T: ln[10],
      g308: ln[11],
      g309: ln[12],
      reg0000,
    };
  }
};

const reg1975 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "1975") {
    return {
      reg: ln[1],
      aliqImpBase: ln[2],
      g310: ln[3],
      g311: ln[4],
      g312: ln[5],
      reg0000,
    };
  }
};

const reg1980 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "1980") {
    return {
      reg: ln[1],
      indAp: ln[2],
      g401: ln[3],
      g402: ln[4],
      g403: ln[5],
      g404: ln[6],
      g405: ln[7],
      g406: ln[8],
      g407: ln[9],
      g408: ln[10],
      g409: ln[11],
      g410: ln[12],
      g411: ln[13],
      g412: ln[14],
      reg0000,
    };
  }
};

const reg1990 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "1990") {
    return {
      reg: ln[1],
      qtdLin1: ln[2],
      reg0000,
    };
  }
};

module.exports = {
  reg1001,
  reg1010,
  reg1100,
  reg1105,
  reg1110,
  reg1200,
  reg1210,
  reg1300,
  reg1310,
  reg1320,
  reg1350,
  reg1360,
  reg1370,
  reg1390,
  reg1391,
  reg1400,
  reg1500,
  reg1510,
  reg1600,
  reg1700,
  reg1710,
  reg1800,
  reg1900,
  reg1910,
  reg1920,
  reg1921,
  reg1922,
  reg1923,
  reg1925,
  reg1926,
  reg1960,
  reg1970,
  reg1975,
  reg1980,
  reg1990,
};
