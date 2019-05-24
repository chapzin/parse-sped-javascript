const regC001 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C001') {
    return {
      reg: ln[1],
      indMov: ln[2],
      reg0000,
    }
  }
}

const regC100 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C100') {
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
      dtES: ln[11],
      vlDoc: ln[12],
      indPgto: ln[13],
      vlDesc: ln[14],
      vlAbatNt: ln[15],
      vlMerc: ln[16],
      indFrt: ln[17],
      vlFrt: ln[18],
      vlSeg: ln[19],
      vlOutDa: ln[20],
      vlBcIcms: ln[21],
      vlIcms: ln[22],
      vlBcIcmsSt: ln[23],
      vlIcmsSt: ln[24],
      vlIpi: ln[25],
      vlPis: ln[26],
      vlCofins: ln[27],
      vlPisSt: ln[28],
      vlCofinsSt: ln[29],
      reg0000,
    }
  }
}

const regC101 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C101') {
    return {
      reg: ln[1],
      vlFcpUfDest: ln[2],
      vlIcmsUfDest: ln[3],
      vlIcmsUfRem: ln[4],
      reg0000,
    }
  }
}

const regC105 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C105') {
    return {
      reg: ln[1],
      oper: ln[2],
      uf: ln[3],
      reg0000,
    }
  }
}

const regC110 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C110') {
    return {
      reg: ln[1],
      codInf: ln[2],
      txtCompl: ln[3],
      reg0000,
    }
  }
}

const regC111 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C111') {
    return {
      reg: ln[1],
      numProc: ln[2],
      indProc: ln[3],
      reg0000,
    }
  }
}

const regC112 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C112') {
    return {
      reg: ln[1],
      codDa: ln[2],
      uf: ln[3],
      numDa: ln[4],
      codAut: ln[5],
      vlDa: ln[6],
      dtVcto: ln[7],
      dtPgto: ln[8],
      reg0000,
    }
  }
}

const regC113 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C113') {
    return {
      reg: ln[1],
      indOper: ln[2],
      indEmit: ln[3],
      codPart: ln[4],
      codMod: ln[5],
      ser: ln[6],
      sub: ln[7],
      numDoc: ln[8],
      dtDoc: ln[9],
      chvDoce: ln[10],
      reg0000,
    }
  }
}

const regC114 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C114') {
    return {
      reg: ln[1],
      codMod: ln[2],
      ecfFab: ln[3],
      ecfCx: ln[4],
      numDoc: ln[5],
      dtDoc: ln[6],
      reg0000,
    }
  }
}

const regC115 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C115') {
    return {
      reg: ln[1],
      indCarga: ln[2],
      cnpjCol: ln[3],
      ieCol: ln[4],
      cpfCol: ln[5],
      codMunCol: ln[6],
      cnpjEntg: ln[7],
      ieEntg: ln[8],
      cpfEntg: ln[9],
      codMunEntg: ln[10],
      reg0000,
    }
  }
}

const regC116 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C116') {
    return {
      reg: ln[1],
      codMod: ln[2],
      nrSat: ln[3],
      chvCfe: ln[4],
      numCfe: ln[5],
      dtDoc: ln[6],
      reg0000,
    }
  }
}

const regC120 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C120') {
    return {
      reg: ln[1],
      codDocImp: ln[2],
      numDocImp: ln[3],
      pisImp: ln[4],
      cofinsImp: ln[5],
      numAcdraw: ln[6],
      reg0000,
    }
  }
}

const regC130 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C130') {
    return {
      reg: ln[1],
      vlServNt: ln[2],
      vlBcIssqn: ln[3],
      vlIssqn: ln[4],
      vlBcIrrf: ln[5],
      vlIrrf: ln[6],
      vlBcPrev: ln[7],
      vlPrev: ln[8],
      reg0000,
    }
  }
}

const regC140 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C140') {
    return {
      reg: ln[1],
      indEmit: ln[2],
      indTit: ln[3],
      descTit: ln[4],
      numTit: ln[5],
      qtdParc: ln[6],
      vlTit: ln[7],
      reg0000,
    }
  }
}

const regC141 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C141') {
    return {
      reg: ln[1],
      numParc: ln[2],
      dtVcto: ln[3],
      vlParc: ln[4],
      reg0000,
    }
  }
}

const regC160 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C160') {
    return {
      reg: ln[1],
      codPart: ln[2],
      veicId: ln[3],
      qtdVol: ln[4],
      pesoBrt: ln[5],
      pesoLiq: ln[6],
      ufId: ln[7],
      reg0000,
    }
  }
}

const regC165 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C165') {
    return {
      reg: ln[1],
      codPart: ln[2],
      veicId: ln[3],
      codAut: ln[4],
      nrPasse: ln[5],
      hora: ln[6],
      temper: ln[7],
      qtdVol: ln[8],
      pesoBrt: ln[9],
      pesoLiq: ln[10],
      nomMot: ln[11],
      cpf: ln[12],
      ufId: ln[13],
      reg0000,
    }
  }
}

const regC170 = (line, regC100, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C170') {
    return {
      reg: ln[1],
      numItem: ln[2],
      codItem: ln[3],
      descrCompl: ln[4],
      qtd: ln[5],
      unid: ln[6],
      vlItem: ln[7],
      vlDesc: ln[8],
      indMov: ln[9],
      cstIcms: ln[10],
      cfop: ln[11],
      codNat: ln[12],
      vlBcIcms: ln[13],
      aliqIcms: ln[14],
      vlIcms: ln[15],
      vlBcIcmsSt: ln[16],
      aliqSt: ln[17],
      vlIcmsSt: ln[18],
      indApur: ln[19],
      cstIpi: ln[20],
      codEnq: ln[21],
      vlBcIpi: ln[22],
      aliqIpi: ln[23],
      vlIpi: ln[24],
      cstPis: ln[25],
      vlBcPis: ln[26],
      aliqPis: ln[27],
      quantBcPis: ln[28],
      aliqPis2: ln[29],
      vlPis: ln[30],
      cstCofins: ln[31],
      vlBcCofins: ln[32],
      aliqCofins: ln[33],
      quantBcCofins: ln[34],
      aliqCofins2: ln[35],
      vlCofins: ln[36],
      codCta: ln[37],
      chaveNfe: regC100.chaveNfe,
      reg0000,
    }
  }
}

const regC171 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C171') {
    return {
      reg: ln[1],
      numTanque: ln[2],
      qtde: ln[3],
      reg0000,
    }
  }
}

const regC172 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C172') {
    return {
      reg: ln[1],
      vlBcIssqn: ln[2],
      aliqIssqn: ln[3],
      vlIssqn: ln[4],
      reg0000,
    }
  }
}

const regC173 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C173') {
    return {
      reg: ln[1],
      loteMed: ln[2],
      qtdItem: ln[3],
      dtFab: ln[4],
      dtVal: ln[5],
      indMed: ln[6],
      tpProd: ln[7],
      vlTabMax: ln[8],
      reg0000,
    }
  }
}

const regC174 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C174') {
    return {
      reg: ln[1],
      indArm: ln[2],
      numArm: ln[3],
      descrCompl: ln[4],
      reg0000,
    }
  }
}

const regC175 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C175') {
    return {
      reg: ln[1],
      indVeicOper: ln[2],
      cnpj: ln[3],
      uf: ln[4],
      chassiVeic: ln[5],
      reg0000,
    }
  }
}

const regC176 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C176') {
    return {
      reg: ln[1],
      codModUltE: ln[2],
      numDocUltE: ln[3],
      serUltE: ln[4],
      dtUltE: ln[5],
      codPartUltE: ln[6],
      quantUltE: ln[7],
      vlUnitUltE: ln[8],
      vlUnitBcSt: ln[9],
      chaveNfeUlt: ln[10],
      numItemUltE: ln[11],
      vlUnitBcIcmsUltE: ln[12],
      AliqIcmsUltE: ln[13],
      vlUnitLimiteBcIcmsUltE: ln[14],
      vlUnitIcmsUltE: ln[15],
      aliqStUltE: ln[16],
      vlUnitRes: ln[17],
      codRespRet: ln[18],
      codMotRes: ln[19],
      chaveNfeRet: ln[20],
      codPartNfeRet: ln[21],
      serNfeRet: ln[22],
      numNfeRet: ln[23],
      itemNfeRet: ln[24],
      codDa: ln[25],
      numDa: ln[26],
      reg0000,
    }
  }
}

const regC177 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C177') {
    return {
      reg: ln[1],
      codSeloIpi: ln[2],
      qtSeloIpi: ln[3],
      reg0000,
    }
  }
}

const regC178 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C178') {
    return {
      reg: ln[1],
      clEnq: ln[2],
      vlUnid: ln[3],
      quantPad: ln[4],
      reg0000,
    }
  }
}

const regC179 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C179') {
    return {
      reg: ln[1],
      BcStOrigDest: ln[2],
      IcmsStRep: ln[3],
      IcmsStCompl: ln[4],
      bcRet: ln[5],
      icmsRet: ln[6],
      reg0000,
    }
  }
}

const regC190 = (line, regC100, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C190') {
    return {
      reg: ln[1],
      cstIcms: ln[2],
      cfop: ln[3],
      aliqIcms: ln[4],
      vlOpr: ln[5],
      vlBcIcms: ln[6],
      vlIcms: ln[7],
      vlBcIcmsSt: ln[8],
      vlIcmsSt: ln[9],
      vlRedBc: ln[10],
      vlIpi: ln[11],
      codObs: ln[12],
      chvNfe: regC100.chaveNfe,
      reg0000,
    }
  }
}

const regC195 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C195') {
    return {
      reg: ln[1],
      codObs: ln[2],
      txtCompl: ln[3],
      reg0000,
    }
  }
}

const regC197 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C197') {
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

const regC300 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C300') {
    return {
      reg: ln[1],
      codMod: ln[2],
      ser: ln[3],
      sub: ln[4],
      numDocIni: ln[5],
      NumDocFin: ln[6],
      dtDoc: ln[7],
      vlDoc: ln[8],
      vlPis: ln[9],
      vlCofins: ln[10],
      codCta: ln[11],
      reg0000,
    }
  }
}

const regC310 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C310') {
    return {
      reg: ln[1],
      numDocCanc: ln[2],
      reg0000,
    }
  }
}

const regC320 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C320') {
    return {
      reg: ln[1],
      cstIcms: ln[2],
      cfop: ln[3],
      aliqIcms: ln[4],
      vlOpr: ln[5],
      vlBcImcs: ln[6],
      vlIcms: ln[7],
      vlRedBc: ln[8],
      codObs: ln[9],
      reg0000,
    }
  }
}

const regC321 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C321') {
    return {
      reg: ln[1],
      codItem: ln[2],
      qtd: ln[3],
      unid: ln[4],
      vlItem: ln[5],
      vlDesc: ln[6],
      vlBcIcms: ln[7],
      vlIcms: ln[8],
      vlPis: ln[9],
      vlCofins: ln[10],
      reg0000,
    }
  }
}

const regC350 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C350') {
    return {
      reg: ln[1],
      ser: ln[2],
      subSer: ln[3],
      numDoc: ln[4],
      dtDoc: ln[5],
      cnpjCpf: ln[6],
      vlMerc: ln[7],
      vlDoc: ln[8],
      vlDesc: ln[9],
      vlPis: ln[10],
      vlCofins: ln[11],
      codCta: ln[12],
      reg0000,
    }
  }
}

const regC370 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C370') {
    return {
      reg: ln[1],
      numItem: ln[2],
      codItem: ln[3],
      qtd: ln[4],
      unid: ln[5],
      vlItem: ln[6],
      vlDesc: ln[7],
      reg0000,
    }
  }
}

const regC390 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C390') {
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

const regC400 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C400') {
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

const regC405 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C405') {
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

const regC410 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C410') {
    return {
      reg: ln[1],
      vlPis: ln[2],
      vlCofins: ln[3],
      reg0000,
    }
  }
}

const regC420 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C420') {
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

const regC425 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C425') {
    return {
      reg: ln[1],
      codItem: ln[2],
      qtd: ln[3],
      unid: ln[4],
      vlItem: ln[5],
      vlPis: ln[6],
      vlCofins: ln[7],
      reg0000,
    }
  }
}

const regC460 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C460') {
    return {
      reg: ln[1],
      codMod: ln[2],
      codSit: ln[3],
      numDoc: ln[4],
      dtDoc: ln[5],
      vlDoc: ln[6],
      vlPis: ln[7],
      vlCofins: ln[8],
      cpfCnpj: ln[9],
      nomAdq: ln[10],
      reg0000,
    }
  }
}

const regC465 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C465') {
    return {
      reg: ln[1],
      chvNfe: ln[2],
      numCcf: ln[3],
      reg0000,
    }
  }
}

const regC470 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C470') {
    return {
      reg: ln[1],
      codItem: ln[2],
      qtd: ln[3],
      qtdCanc: ln[4],
      unid: ln[5],
      vlItem: ln[6],
      cstIcms: ln[7],
      cfop: ln[8],
      aliqIcms: ln[9],
      vlPis: ln[10],
      vlCofins: ln[11],
      reg0000,
    }
  }
}

const regC490 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C490') {
    return {
      reg: ln[1],
      cstIcms: ln[2],
      cfop: ln[3],
      aliqIcms: ln[4],
      vlOpr: ln[5],
      vlBcIcms: ln[6],
      vlIcms: ln[7],
      codObs: ln[8],
      reg0000,
    }
  }
}

const regC495 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C495') {
    return {
      reg: ln[1],
      aliqIcms: ln[2],
      codItem: ln[3],
      qtd: ln[4],
      qtdCanc: ln[5],
      unid: ln[6],
      vlItem: ln[7],
      vlDesc: ln[8],
      vlCanc: ln[9],
      vlAcmo: ln[10],
      vlBcIcms: ln[11],
      vlIcms: ln[12],
      vlIsen: ln[13],
      vlNt: ln[14],
      vlIcmsSt: ln[15],
      reg0000,
    }
  }
}

const regC500 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C500') {
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
      TpLigacao: ln[26],
      codGrupoTensao: ln[27],
      reg0000,
    }
  }
}

const regC510 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C510') {
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
    }
  }
}

const regC590 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C590') {
    return {
      reg: ln[1],
      cstIcms: ln[2],
      cfop: ln[3],
      aliqIcms: ln[4],
      vlOpr: ln[5],
      vlBcIcms: ln[6],
      vlIcms: ln[7],
      vlBcIcmsSt: ln[8],
      vlIcmsSt: ln[9],
      vlRedBc: ln[10],
      codObs: ln[11],
      reg0000,
    }
  }
}

const regC600 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C600') {
    return {
      reg: ln[1],
      codMod: ln[2],
      codMun: ln[3],
      ser: ln[4],
      sub: ln[5],
      codCons: ln[6],
      qtdCons: ln[7],
      qtdCanc: ln[8],
      dtDoc: ln[9],
      vlDoc: ln[10],
      vlDesc: ln[11],
      cons: ln[12],
      vlForn: ln[13],
      vlServNt: ln[14],
      vlTerc: ln[15],
      vlDa: ln[16],
      vlBcIcms: ln[17],
      vlIcms: ln[18],
      vlBcIcmsSt: ln[19],
      vlIcmsSt: ln[20],
      vlPis: ln[21],
      vlCofins: ln[22],
      reg0000,
    }
  }
}

const regC601 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C601') {
    return {
      reg: ln[1],
      numDocCanc: ln[2],
      reg0000,
    }
  }
}

const regC610 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C610') {
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
      vlBcIcmsSt: ln[13],
      vlIcmsSt: ln[14],
      vlPis: ln[15],
      vlCofins: ln[16],
      codCta: ln[17],
      reg0000,
    }
  }
}

const regC690 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C690') {
    return {
      reg: ln[1],
      cstIcms: ln[2],
      cfop: ln[3],
      aliqIcms: ln[4],
      vlOpr: ln[5],
      vlBcIcms: ln[6],
      vlIcms: ln[7],
      vlRedBc: ln[8],
      vlBcIcmsSt: ln[9],
      vlIcmsSt: ln[10],
      codObs: ln[11],
      reg0000,
    }
  }
}

const regC700 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C700') {
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

const regC790 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C790') {
    return {
      reg: ln[1],
      cstIcms: ln[2],
      cfop: ln[3],
      aliqIcms: ln[4],
      vlOpr: ln[5],
      vlBcIcms: ln[6],
      vlIcms: ln[7],
      vlBcIcmsSt: ln[8],
      vlIcmsSt: ln[9],
      VlRedBc: ln[10],
      codObs: ln[11],
      reg0000,
    }
  }
}

const regC791 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C791') {
    return {
      reg: ln[1],
      uf: ln[2],
      vlBcIcmsSt: ln[3],
      vlIcmsSt: ln[4],
      reg0000,
    }
  }
}

const regC800 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C800') {
    return {
      reg: ln[1],
      codMod: ln[2],
      codSit: ln[3],
      numCfe: ln[4],
      dtDoc: ln[5],
      vlCfe: ln[6],
      vlPis: ln[7],
      vlCofins: ln[8],
      cnpjCpf: ln[9],
      nrSat: ln[10],
      chvCfe: ln[11],
      vlDesc: ln[12],
      vlMerc: ln[13],
      vlOutDa: ln[14],
      vlIcms: ln[15],
      vlPisSt: ln[16],
      vlCofinsSt: ln[17],
      reg0000,
    }
  }
}

const regC850 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C850') {
    return {
      reg: ln[1],
      cstIcms: ln[2],
      cfop: ln[3],
      aliqIcms: ln[4],
      vlOpr: ln[5],
      vlBcIcms: ln[6],
      vlIcms: ln[7],
      codObs: ln[8],
      reg0000,
    }
  }
}

const regC860 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C860') {
    return {
      reg: ln[1],
      codMod: ln[2],
      nrSat: ln[3],
      dtDoc: ln[4],
      docIni: ln[5],
      docFim: ln[6],
      reg0000,
    }
  }
}

const regC890 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C890') {
    return {
      reg: ln[1],
      cstIcms: ln[2],
      cfop: ln[3],
      aliqIcms: ln[4],
      vlOpr: ln[5],
      vlBcIcms: ln[6],
      vlIcms: ln[7],
      codObs: ln[8],
      reg0000,
    }
  }
}

const regC990 = (line, reg0000) => {
  const ln = line.split('|')
  if (line[0] == '|' && ln[1] == 'C990') {
    return {
      reg: ln[1],
      qtdLinC: ln[2],
      reg0000,
    }
  }
}

module.exports = {
  regC001,
  regC100,
  regC101,
  regC105,
  regC110,
  regC111,
  regC112,
  regC113,
  regC114,
  regC115,
  regC116,
  regC120,
  regC130,
  regC140,
  regC141,
  regC160,
  regC165,
  regC170,
  regC171,
  regC172,
  regC173,
  regC174,
  regC175,
  regC176,
  regC177,
  regC178,
  regC179,
  regC190,
  regC195,
  regC197,
  regC300,
  regC310,
  regC320,
  regC321,
  regC350,
  regC370,
  regC390,
  regC400,
  regC405,
  regC410,
  regC420,
  regC425,
  regC460,
  regC465,
  regC470,
  regC490,
  regC495,
  regC500,
  regC510,
  regC590,
  regC600,
  regC601,
  regC610,
  regC690,
  regC700,
  regC790,
  regC791,
  regC800,
  regC850,
  regC860,
  regC890,
  regC990,
}
