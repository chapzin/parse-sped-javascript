const regD001 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D001') {
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
    }
  }
}

const regD100 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D100') {
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
    }
  }
}

const regD101 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D101') {
    return {
      reg: ln[1],
      vlFcpUfDest: ln[2],
      vlIcmsUfDest: ln[3],
      vlIcmsUfRem: ln[4],
      reg0000,
    }
  }
}

const regD110 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D110') {
    return {
      reg: ln[1],
      numItem: ln[2],
      codItem: ln[3],
      vlServ: ln[4],
      vlOut: ln[5],
      reg0000,
    }
  }
}

const regD120 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D120') {
    return {
      reg: ln[1],
      codMunOrig: ln[2],
      codMunDest: ln[3],
      veicId: ln[4],
      ufId: ln[5],
      reg0000,
    }
  }
}

const regD130 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D130') {
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
    }
  }
}

const regD140 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D140') {
    return {
      reg: ln[1],
      codPartConsg: ln[2],
      codMunOrig: ln[3],
      codMunDest: ln[4],
      indVeic: ln[5],
      veicId: ln[6],
      indNav: ln[7],
      viagem: ln[8],
      vlFretLiq: ln[9],
      vlDespPort: ln[10],
      vlDespCarDesc: ln[11],
      vlOut: ln[12],
      vlFrtBrt: ln[13],
      vlFrtMm: ln[14],
      reg0000,
    }
  }
}

const regD150 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D150') {
    return {
      reg: ln[1],
      codMunOrig: ln[2],
      codMunDest: ln[3],
      veicId: ln[4],
      viagem: ln[5],
      indTfa: ln[6],
      vlPesoTx: ln[7],
      vlTxTerr: ln[8],
      vlTxRed: ln[9],
      vlOut: ln[10],
      vlTxAdv: ln[11],
      reg0000,
    }
  }
}

const regD160 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D160') {
    return {
      reg: ln[1],
      despacho: ln[2],
      cnpjCpfRem: ln[3],
      ieRem: ln[4],
      codMunOri: ln[5],
      cnpjCpfDest: ln[6],
      ieDest: ln[7],
      codMunDest: ln[8],
      reg0000,
    }
  }
}

const regD161 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D161') {
    return {
      reg: ln[1],
      indCarga: ln[2],
      cnpjCpfCol: ln[3],
      ieCol: ln[4],
      codMunCol: ln[5],
      cnpjCpfEntg: ln[6],
      ieEntg: ln[7],
      codMunEntg: ln[8],
      reg0000,
    }
  }
}

const regD162 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D162') {
    return {
      reg: ln[1],
      codMod: ln[2],
      ser: ln[3],
      numDoc: ln[4],
      dtDoc: ln[5],
      vlDoc: ln[6],
      vlMerc: ln[7],
      qtdVol: ln[8],
      pesoBrt: ln[9],
      pesoLiq: ln[10],
      reg0000,
    }
  }
}

const regD170 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D170') {
    return {
      reg: ln[1],
      codPartConsg: ln[2],
      codPartRed: ln[3],
      codMunOrig: ln[4],
      codMunDest: ln[5],
      otm: ln[6],
      indNatFrt: ln[7],
      vlLiqFrt: ln[8],
      vlGris: ln[9],
      vlPdg: ln[10],
      vlOut: ln[11],
      vlFrt: ln[12],
      veicId: ln[13],
      ufId: ln[14],
      reg0000,
    }
  }
}

const regD180 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D180') {
    return {
      reg: ln[1],
      numSeq: ln[2],
      indEmit: ln[3],
      cnpjCpfEmit: ln[4],
      ufEmit: ln[5],
      ieEmit: ln[6],
      codMunOrig: ln[7],
      cnpjCpfTom: ln[8],
      ufTom: ln[9],
      ieTom: ln[10],
      codMunDest: ln[11],
      codMod: ln[12],
      ser: ln[13],
      sub: ln[14],
      numDoc: ln[15],
      dtDoc: ln[16],
      vlDoc: ln[17],
      reg0000,
    }
  }
}

const regD190 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D190') {
    return {
      reg: ln[1],
      cstIcms: ln[2],
      cfop: ln[3],
      aliqIcms: ln[4],
      vlOpr: ln[5],
      vlBcIcms: ln[6],
      vlIcms: ln[7],
      vlRedBc: ln[8],
      codObs: ln[9],
      reg0000,
    }
  }
}

const regD195 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D195') {
    return {
      reg: ln[1],
      codObs: ln[2],
      txtCompl: ln[3],
      reg0000,
    }
  }
}

const regD197 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D197') {
    return {
      reg: ln[1],
      codAj: ln[2],
      descrComplAj: ln[3],
      codItem: ln[4],
      vlBcIcms: ln[5],
      aliqIcms: ln[6],
      vlIcms: ln[7],
      vlOutros: ln[8],
      reg0000,
    }
  }
}

const regD300 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D300') {
    return {
      reg: ln[1],
      codMod: ln[2],
      ser: ln[3],
      sub: ln[4],
      numDocIni: ln[5],
      numDocFin: ln[6],
      cstIcms: ln[7],
      cfop: ln[8],
      aliqIcms: ln[9],
      dtDoc: ln[10],
      vlOpr: ln[11],
      vlDesc: ln[12],
      vlServ: ln[13],
      vlSeg: ln[14],
      vlOutDesp: ln[15],
      vlBcIcms: ln[16],
      vlIcms: ln[17],
      vlRedBc: ln[18],
      codObs: ln[19],
      codCta: ln[20],
      reg0000,
    }
  }
}

const regD301 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D301') {
    return {
      reg: ln[1],
      numDocCanc: ln[2],
      reg0000,
    }
  }
}

const regD310 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D310') {
    return {
      reg: ln[1],
      codMunOrig: ln[2],
      vlServ: ln[3],
      vlBcIcms: ln[4],
      vlIcms: ln[5],
      reg0000,
    }
  }
}

const regD350 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D350') {
    return {
      reg: ln[1],
      codMod: ln[2],
      ecfMod: ln[3],
      ecfFab: ln[4],
      ecfCx: ln[5],
      reg0000,
    }
  }
}

const regD355 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D355') {
    return {
      reg: ln[1],
      dtDoc: ln[2],
      cro: ln[3],
      crz: ln[4],
      numCooFin: ln[5],
      gtFin: ln[6],
      vlBrt: ln[7],
      reg0000,
    }
  }
}

const regD360 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D360') {
    return {
      reg: ln[1],
      vlPis: ln[2],
      vlCofins: ln[3],
      reg0000,
    }
  }
}

const regD365 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D365') {
    return {
      reg: ln[1],
      codTotPar: ln[2],
      vlrAcumTot: ln[3],
      nrTot: ln[4],
      descrNrTot: ln[5],
      reg0000,
    }
  }
}

const regD370 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D370') {
    return {
      reg: ln[1],
      codMunOrig: ln[2],
      vlServ: ln[3],
      qtdBilh: ln[4],
      vlBcIcms: ln[5],
      vlIcms: ln[6],
      reg0000,
    }
  }
}

const regD390 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D390') {
    return {
      reg: ln[1],
      cstIcms: ln[2],
      cfop: ln[3],
      aliqIcms: ln[4],
      vlOpr: ln[5],
      vlBcIssqn: ln[6],
      aliqIssqn: ln[7],
      vlIssqn: ln[8],
      vlBcIcms: ln[9],
      vlIcms: ln[10],
      codObs: ln[11],
      reg0000,
    }
  }
}

const regD400 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D400') {
    return {
      reg: ln[1],
      codPart: ln[2],
      codMod: ln[3],
      codSit: ln[4],
      ser: ln[5],
      sub: ln[6],
      numDoc: ln[7],
      dtDoc: ln[8],
      vlDoc: ln[9],
      vlDesc: ln[10],
      vlServ: ln[11],
      vlBcIcms: ln[12],
      vlIcms: ln[13],
      vlPis: ln[14],
      vlCofins: ln[15],
      codCta: ln[16],
      reg0000,
    }
  }
}

const regD410 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D410') {
    return {
      reg: ln[1],
      codMod: ln[2],
      ser: ln[3],
      sub: ln[4],
      numDocIni: ln[5],
      numDocFin: ln[6],
      dtDoc: ln[7],
      cstIcms: ln[8],
      cfop: ln[9],
      aliqIcms: ln[10],
      vlOpr: ln[11],
      vlDesc: ln[12],
      vlServ: ln[13],
      vlBcIcms: ln[14],
      vlIcms: ln[15],
      reg0000,
    }
  }
}

const regD411 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D411') {
    return {
      reg: ln[1],
      numDocCanc: ln[2],
      reg0000,
    }
  }
}

const regD420 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D420') {
    return {
      reg: ln[1],
      codMunOrig: ln[2],
      vlServ: ln[3],
      vlBcIcms: ln[4],
      vlIcms: ln[5],
      reg0000,
    }
  }
}

const regD500 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D500') {
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
      dtDoc: ln[10],
      dtAP: ln[11],
      vlDoc: ln[12],
      vlDesc: ln[13],
      vlServ: ln[14],
      vlServNt: ln[15],
      vlTerc: ln[16],
      vlDa: ln[17],
      vlBcIcms: ln[18],
      vlIcms: ln[19],
      codInf: ln[20],
      vlPis: ln[21],
      vlCofins: ln[22],
      codCta: ln[23],
      tpAssinante: ln[24],
      reg0000,
    }
  }
}

const regD510 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D510') {
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
      vlBcIcmsUf: ln[14],
      vlIcmsUf: ln[15],
      indRec: ln[16],
      codPart: ln[17],
      vlPis: ln[18],
      vlCofins: ln[19],
      codCta: ln[20],
      reg0000,
    }
  }
}

const regD530 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D530') {
    return {
      reg: ln[1],
      indServ: ln[2],
      dtIniServ: ln[3],
      dtFinServ: ln[4],
      perFiscal: ln[5],
      codArea: ln[6],
      Terminal: ln[7],
      reg0000,
    }
  }
}

const regD590 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D590') {
    return {
      reg: ln[1],
      cstIcms: ln[2],
      cfop: ln[3],
      aliqIcms: ln[4],
      vlOpr: ln[5],
      vlBcIcms: ln[6],
      vlIcms: ln[7],
      vlBcIcmsUf: ln[8],
      vlIcmsUf: ln[9],
      vlRedBc: ln[10],
      codObs: ln[11],
      reg0000,
    }
  }
}

const regD600 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D600') {
    return {
      reg: ln[1],
      codMod: ln[2],
      codMun: ln[3],
      ser: ln[4],
      sub: ln[5],
      codCons: ln[6],
      qtdCons: ln[7],
      dtDoc: ln[8],
      vlDoc: ln[9],
      vlDesc: ln[10],
      vlServ: ln[11],
      vlServNt: ln[12],
      vlTerc: ln[13],
      vlDa: ln[14],
      vlBcIcms: ln[15],
      vlIcms: ln[16],
      vlPis: ln[17],
      vlCofins: ln[18],
      reg0000,
    }
  }
}

const regD610 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D610') {
    return {
      reg: ln[1],
      codClass: ln[2],
      codItem: ln[3],
      qtd: ln[4],
      unid: ln[5],
      vlItem: ln[6],
      vlDesc: ln[7],
      cstIcms: ln[8],
      cfop: ln[9],
      aliqIcms: ln[10],
      vlBcIcms: ln[11],
      vlIcms: ln[12],
      vlBcIcmsUf: ln[13],
      vlIcmsUf: ln[14],
      vlRedBc: ln[15],
      vlPis: ln[16],
      vlCofins: ln[17],
      codCta: ln[18],
      reg0000,
    }
  }
}

const regD690 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D690') {
    return {
      reg: ln[1],
      cstIcms: ln[2],
      cfop: ln[3],
      aliqIcms: ln[4],
      vlOpr: ln[5],
      vlBcIcms: ln[6],
      vlIcms: ln[7],
      vlBcIcmsUf: ln[8],
      vlIcmsUf: ln[9],
      vlRedBc: ln[10],
      codObs: ln[11],
      reg0000,
    }
  }
}

const regD695 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D695') {
    return {
      reg: ln[1],
      codMod: ln[2],
      ser: ln[3],
      nroOrdIni: ln[4],
      nroOrdFin: ln[5],
      dtDocIni: ln[6],
      dtDocFin: ln[7],
      nomMest: ln[8],
      chvCodDig: ln[9],
      reg0000,
    }
  }
}

const regD696 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D696') {
    return {
      reg: ln[1],
      cstIcms: ln[2],
      cfop: ln[3],
      aliqIcms: ln[4],
      vlOpr: ln[5],
      vlBcIcms: ln[6],
      vlIcms: ln[7],
      vlBcIcmsUf: ln[8],
      vlIcmsUf: ln[9],
      vlRedBc: ln[10],
      codObs: ln[11],
      reg0000,
    }
  }
}

const regD697 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D697') {
    return {
      reg: ln[1],
      uf: ln[2],
      vlBcIcms: ln[3],
      vlIcms: ln[4],
      reg0000,
    }
  }
}

const regD990 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'D990') {
    return {
      reg: ln[1],
      qtdLinD: ln[2],
      reg0000,
    }
  }
}

module.exports = {
  regD001,
  regD101,
  regD110,
  regD120,
  regD130,
  regD140,
  regD150,
  regD160,
  regD161,
  regD162,
  regD170,
  regD180,
  regD190,
  regD195,
  regD197,
  regD300,
  regD301,
  regD310,
  regD350,
  regD355,
  regD360,
  regD370,
  regD390,
  regD400,
  regD410,
  regD411,
  regD420,
  regD500,
  regD510,
  regD530,
  regD590,
  regD600,
  regD610,
  regD690,
  regD695,
  regD696,
  regD697,
  regD990,
}
