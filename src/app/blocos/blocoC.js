const {
  convertToFloat,
  convertStringToDateSped
} = require("../util/conversores");
const NFe = require("djf-nfe");
const { lerXml } = require("../util/utilidades");
const RegC100 = require("../models/classes/ClassRegC100");
const RegC170 = require("../models/classes/ClassRegC170");

const regC001 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C001") {
    return {
      reg: ln[1],
      indMov: ln[2],
      flag: "sped",
      reg0000
    };
  }
};

const regC100Xml = (file, cnpj) => {
  let nfe = NFe(lerXml(file).toString());
  let info = nfe.identificacaoNFe();
  let emitente = nfe.emitente();
  let destinatario = nfe.destinatario();
  let protocolo = nfe.informacoesProtocolo();
  let total = nfe.total();
  var _indOper = 1;
  if (cnpj === emitente.cpf || cnpj === emitente.cnpj()) {
    _indOper = 0;
  }
  let regC100 = new RegC100(
    (reg = "C100"),
    (indOper = info.tipoOperacao()),
    (indEmit = _indOper),
    (codPart = emitente.cpf() || emitente.cnpj()),
    (codDest = destinatario.cpf() || destinatario.cnpj()),
    (codMod = "55"),
    (codSit = "00"),
    (ser = info.serie()),
    (numDoc = info.nrNota()),
    (chvNfe = protocolo.chave() || "nfe sem protocolo"),
    (dtDoc = info.dataEmissao()),
    (dtES = info.dataEmissao()),
    (vlDoc = total.valorNota()),
    (indPgto = "0"),
    (vlDesc = total.valorDesconto()),
    (vlAbatNt = 0),
    (vlMerc = total.valorProdutos()),
    (indFrt = "0"),
    (vlFrt = total.valorFrete()),
    (vlSeg = total.valorSeguro()),
    (vlOutDa = total.valorOutrasDespesas()),
    (vlBcIcms = total.baseCalculoIcms()),
    (vlIcms = total.valorIcms()),
    (vlBcIcmsSt = total.baseCalculoIcmsST()),
    (vlIcmsSt = total.valorIcmsST()),
    (vlIpi = total.valorIPI()),
    (vlPis = total.valorPIS()),
    (vlCofins = total.valorCOFINS()),
    (vlPisSt = "0.00"),
    (vlCofinsSt = "0.00"),
    (flag = "xml")
  );
  return regC100;
};

const regC100Sped = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C100") {
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
      dtDoc: convertStringToDateSped(ln[10]),
      dtES: convertStringToDateSped(ln[11]),
      vlDoc: convertToFloat(ln[12]),
      indPgto: ln[13],
      vlDesc: convertToFloat(ln[14]),
      vlAbatNt: convertToFloat(ln[15]),
      vlMerc: convertToFloat(ln[16]),
      indFrt: ln[17],
      vlFrt: convertToFloat(ln[18]),
      vlSeg: convertToFloat(ln[19]),
      vlOutDa: convertToFloat(ln[20]),
      vlBcIcms: convertToFloat(ln[21]),
      vlIcms: convertToFloat(ln[22]),
      vlBcIcmsSt: convertToFloat(ln[23]),
      vlIcmsSt: convertToFloat(ln[24]),
      vlIpi: convertToFloat(ln[25]),
      vlPis: convertToFloat(ln[26]),
      vlCofins: convertToFloat(ln[27]),
      vlPisSt: convertToFloat(ln[28]),
      vlCofinsSt: convertToFloat(ln[29]),
      flag: "sped",
      reg0000
    };
  }
};

const regC101 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C101") {
    return {
      reg: ln[1],
      vlFcpUfDest: convertToFloat(ln[2]),
      vlIcmsUfDest: convertToFloat(ln[3]),
      vlIcmsUfRem: convertToFloat(ln[4]),
      flag: "sped",
      reg0000
    };
  }
};

const regC105 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C105") {
    return {
      reg: ln[1],
      oper: ln[2],
      uf: ln[3],
      flag: "sped",
      reg0000
    };
  }
};

const regC110 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C110") {
    return {
      reg: ln[1],
      codInf: ln[2],
      txtCompl: ln[3],
      flag: "sped",
      reg0000
    };
  }
};

const regC111 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C111") {
    return {
      reg: ln[1],
      numProc: ln[2],
      indProc: ln[3],
      flag: "sped",
      reg0000
    };
  }
};

const regC112 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C112") {
    return {
      reg: ln[1],
      codDa: ln[2],
      uf: ln[3],
      numDa: ln[4],
      codAut: ln[5],
      vlDa: convertToFloat(ln[6]),
      dtVcto: convertStringToDateSped(ln[7]),
      dtPgto: convertStringToDateSped(ln[8]),
      flag: "sped",
      reg0000
    };
  }
};

const regC113 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C113") {
    return {
      reg: ln[1],
      indOper: ln[2],
      indEmit: ln[3],
      codPart: ln[4],
      codMod: ln[5],
      ser: ln[6],
      sub: ln[7],
      numDoc: ln[8],
      dtDoc: convertStringToDateSped(ln[9]),
      chvDoce: ln[10],
      flag: "sped",
      reg0000
    };
  }
};

const regC114 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C114") {
    return {
      reg: ln[1],
      codMod: ln[2],
      ecfFab: ln[3],
      ecfCx: ln[4],
      numDoc: ln[5],
      dtDoc: convertStringToDateSped(ln[6]),
      flag: "sped",
      reg0000
    };
  }
};

const regC115 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C115") {
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
      flag: "sped",
      reg0000
    };
  }
};

const regC116 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C116") {
    return {
      reg: ln[1],
      codMod: ln[2],
      nrSat: ln[3],
      chvCfe: ln[4],
      numCfe: ln[5],
      dtDoc: convertStringToDateSped(ln[6]),
      flag: "sped",
      reg0000
    };
  }
};

const regC120 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C120") {
    return {
      reg: ln[1],
      codDocImp: ln[2],
      numDocImp: ln[3],
      pisImp: ln[4],
      cofinsImp: ln[5],
      numAcdraw: ln[6],
      flag: "sped",
      reg0000
    };
  }
};

const regC130 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C130") {
    return {
      reg: ln[1],
      vlServNt: convertToFloat(ln[2]),
      vlBcIssqn: convertToFloat(ln[3]),
      vlIssqn: convertToFloat(ln[4]),
      vlBcIrrf: convertToFloat(ln[5]),
      vlIrrf: convertToFloat(ln[6]),
      vlBcPrev: convertToFloat(ln[7]),
      vlPrev: convertToFloat(ln[8]),
      flag: "sped",
      reg0000
    };
  }
};

const regC140 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C140") {
    return {
      reg: ln[1],
      indEmit: ln[2],
      indTit: ln[3],
      descTit: ln[4],
      numTit: ln[5],
      qtdParc: ln[6],
      vlTit: convertToFloat(ln[7]),
      flag: "sped",
      reg0000
    };
  }
};

const regC141 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C141") {
    return {
      reg: ln[1],
      numParc: ln[2],
      dtVcto: convertStringToDateSped(ln[3]),
      vlParc: convertToFloat(ln[4]),
      flag: "sped",
      reg0000
    };
  }
};

const regC160 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C160") {
    return {
      reg: ln[1],
      codPart: ln[2],
      veicId: ln[3],
      qtdVol: ln[4],
      pesoBrt: convertToFloat(ln[5]),
      pesoLiq: convertToFloat(ln[6]),
      ufId: ln[7],
      flag: "sped",
      reg0000
    };
  }
};

const regC165 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C165") {
    return {
      reg: ln[1],
      codPart: ln[2],
      veicId: ln[3],
      codAut: ln[4],
      nrPasse: ln[5],
      hora: ln[6],
      temper: ln[7],
      qtdVol: ln[8],
      pesoBrt: convertToFloat(ln[9]),
      pesoLiq: convertToFloat(ln[10]),
      nomMot: ln[11],
      cpf: ln[12],
      ufId: ln[13],
      flag: "sped",
      reg0000
    };
  }
};

const regC170Xml = (file, cnpj) => {
  const regsC170 = [];
  const nfe = NFe(lerXml(file).toString());
  const info = nfe.identificacaoNFe();
  const emitente = nfe.emitente();
  const destinatario = nfe.destinatario();
  const protocolo = nfe.informacoesProtocolo();
  const total = nfe.total();
  const regC100xmlok = regC100Xml(file, cnpj);
  const totalItens = nfe.nrItens();

  for (let i = 1; i <= totalItens; i++) {
    let item = nfe.item(i);
    let icms = item.imposto().icms();
    let ipi = item.imposto().ipi();
    let pis = item.imposto().pis();

    let _cstIpi = "";
    let _aliqIpi = "";
    let _vlIpi = "";
    let _BcIpi = "";

    if (item.imposto().ipi()) {
      _cstIpi = ipi.cst();
      _aliqIpi = ipi.porcentagemIPI();
      _vlIpi = ipi.valorIPI();
      _BcIpi = ipi.baseCalculo();
    }

    let cofins = item.imposto().cofins();
    const regC170 = new RegC170(
      (reg = "C170"),
      (numItem = i),
      (codItem = item.codigo()),
      (descrCompl = item.descricao()),
      (qtd = item.quantidadeComercial()),
      (unid = item.unidadeComercial()),
      (vlItem = item.valorUnitario() * qtd),
      (vlDesc = item.valorDesconto()),
      (indMov = "0"),
      (cstIcms = `${icms.origem()}${icms.cst()}`),
      (cfop = item.cfop()),
      (codNat = ""),
      (vlBcIcms = icms.baseCalculo()),
      (aliqIcms = icms.porcetagemIcms()),
      (vlIcms = icms.valorIcms()),
      (vlBcIcmsSt = icms.baseCalculoIcmsST()),
      (aliqSt = icms.porcetagemIcmsST()),
      (vlIcmsSt = icms.valorIcmsST()),
      (indApur = ""),
      (cstIpi = _cstIpi),
      (codEnq = ""),
      (vlBcIpi = _BcIpi),
      (aliIpi = _aliqIpi),
      (vlIpi = _vlIpi),
      (cstPis = pis.cst()),
      (vlBcPis = pis.baseCalculo()),
      (aliqPis = pis.porcentagemPIS()),
      (quantBcPis = ""),
      (aliqPis2 = ""),
      (vlPis = pis.valorPIS()),
      (cstCofins = cofins.cst()),
      (vlBcCofins = cofins.baseCalculo()),
      (aliCofins = cofins.porcentagemCOFINS()),
      (quantBcCofins = ""),
      (aliCofins2 = ""),
      (vlCofins = cofins.valorCOFINS()),
      (codCta = ""),
      (flag = "xml"),
      (regC100 = regC100xmlok)
    );
    regsC170.push(regC170);
  }
  return regsC170;
};

const regC170 = (line, regC100, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C170") {
    return {
      reg: ln[1],
      numItem: ln[2],
      codItem: ln[3],
      descrCompl: ln[4],
      qtd: convertToFloat(ln[5]),
      unid: ln[6],
      vlItem: convertToFloat(ln[7]),
      vlDesc: convertToFloat(ln[8]),
      indMov: ln[9],
      cstIcms: ln[10],
      cfop: ln[11],
      codNat: ln[12],
      vlBcIcms: convertToFloat(ln[13]),
      aliqIcms: convertToFloat(ln[14]),
      vlIcms: convertToFloat(ln[15]),
      vlBcIcmsSt: convertToFloat(ln[16]),
      aliqSt: convertToFloat(ln[17]),
      vlIcmsSt: convertToFloat(ln[18]),
      indApur: ln[19],
      cstIpi: ln[20],
      codEnq: ln[21],
      vlBcIpi: convertToFloat(ln[22]),
      aliqIpi: convertToFloat(ln[23]),
      vlIpi: convertToFloat(ln[24]),
      cstPis: ln[25],
      vlBcPis: convertToFloat(ln[26]),
      aliqPis: convertToFloat(ln[27]),
      quantBcPis: convertToFloat(ln[28]),
      aliqPis2: convertToFloat(ln[29]),
      vlPis: convertToFloat(ln[30]),
      cstCofins: ln[31],
      vlBcCofins: convertToFloat(ln[32]),
      aliqCofins: convertToFloat(ln[33]),
      quantBcCofins: convertToFloat(ln[34]),
      aliqCofins2: convertToFloat(ln[35]),
      vlCofins: convertToFloat(ln[36]),
      codCta: ln[37],
      flag: "sped",
      regC100,
      reg0000
    };
  }
};

const regC171 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C171") {
    return {
      reg: ln[1],
      numTanque: ln[2],
      qtde: ln[3],
      flag: "sped",
      reg0000
    };
  }
};

const regC172 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C172") {
    return {
      reg: ln[1],
      vlBcIssqn: convertToFloat(ln[2]),
      aliqIssqn: convertToFloat(ln[3]),
      vlIssqn: convertToFloat(ln[4]),
      flag: "sped",
      reg0000
    };
  }
};

const regC173 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C173") {
    return {
      reg: ln[1],
      loteMed: ln[2],
      qtdItem: convertToFloat(ln[3]),
      dtFab: convertStringToDateSped(ln[4]),
      dtVal: convertStringToDateSped(ln[5]),
      indMed: ln[6],
      tpProd: ln[7],
      vlTabMax: convertToFloat(ln[8]),
      flag: "sped",
      reg0000
    };
  }
};

const regC174 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C174") {
    return {
      reg: ln[1],
      indArm: ln[2],
      numArm: ln[3],
      descrCompl: ln[4],
      flag: "sped",
      reg0000
    };
  }
};

const regC175 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C175") {
    return {
      reg: ln[1],
      indVeicOper: ln[2],
      cnpj: ln[3],
      uf: ln[4],
      chassiVeic: ln[5],
      flag: "sped",
      reg0000
    };
  }
};

const regC176 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C176") {
    return {
      reg: ln[1],
      codModUltE: ln[2],
      numDocUltE: ln[3],
      serUltE: ln[4],
      dtUltE: ln[5],
      codPartUltE: ln[6],
      quantUltE: ln[7],
      vlUnitUltE: convertToFloat(ln[8]),
      vlUnitBcSt: convertToFloat(ln[9]),
      chaveNfeUlt: ln[10],
      numItemUltE: ln[11],
      vlUnitBcIcmsUltE: convertToFloat(ln[12]),
      aliqIcmsUltE: convertToFloat(ln[13]),
      vlUnitLimiteBcIcmsUltE: convertToFloat(ln[14]),
      vlUnitIcmsUltE: convertToFloat(ln[15]),
      aliqStUltE: convertToFloat(ln[16]),
      vlUnitRes: convertToFloat(ln[17]),
      codRespRet: ln[18],
      codMotRes: ln[19],
      chaveNfeRet: ln[20],
      codPartNfeRet: ln[21],
      serNfeRet: ln[22],
      numNfeRet: ln[23],
      itemNfeRet: ln[24],
      codDa: ln[25],
      numDa: ln[26],
      flag: "sped",
      reg0000
    };
  }
};

const regC177 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C177") {
    return {
      reg: ln[1],
      codSeloIpi: ln[2],
      qtSeloIpi: ln[3],
      flag: "sped",
      reg0000
    };
  }
};

const regC178 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C178") {
    return {
      reg: ln[1],
      clEnq: ln[2],
      vlUnid: convertToFloat(ln[3]),
      quantPad: convertToFloat(ln[4]),
      flag: "sped",
      reg0000
    };
  }
};

const regC179 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C179") {
    return {
      reg: ln[1],
      bcStOrigDest: convertToFloat(ln[2]),
      icmsStRep: convertToFloat(ln[3]),
      icmsStCompl: convertToFloat(ln[4]),
      bcRet: convertToFloat(ln[5]),
      icmsRet: convertToFloat(ln[6]),
      flag: "sped",
      reg0000
    };
  }
};

const regC190 = (line, regC100, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C190") {
    return {
      reg: ln[1],
      cstIcms: ln[2],
      cfop: ln[3],
      aliqIcms: convertToFloat(ln[4]),
      vlOpr: convertToFloat(ln[5]),
      vlBcIcms: convertToFloat(ln[6]),
      vlIcms: convertToFloat(ln[7]),
      vlBcIcmsSt: convertToFloat(ln[8]),
      vlIcmsSt: convertToFloat(ln[9]),
      vlRedBc: convertToFloat(ln[10]),
      vlIpi: convertToFloat(ln[11]),
      codObs: ln[12],
      chvNfe: regC100.chaveNfe,
      flag: "sped",
      reg0000
    };
  }
};

const regC195 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C195") {
    return {
      reg: ln[1],
      codObs: ln[2],
      txtCompl: ln[3],
      flag: "sped",
      reg0000
    };
  }
};

const regC197 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C197") {
    return {
      reg: ln[1],
      codAj: ln[2],
      descrComplAj: ln[3],
      codItem: ln[4],
      vlBcIcms: convertToFloat(ln[5]),
      aliqIcms: convertToFloat(ln[6]),
      vlIcms: convertToFloat(ln[7]),
      vlOutros: convertToFloat(ln[8]),
      flag: "sped",
      reg0000
    };
  }
};

const regC300 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C300") {
    return {
      reg: ln[1],
      codMod: ln[2],
      ser: ln[3],
      sub: ln[4],
      numDocIni: ln[5],
      NumDocFin: ln[6],
      dtDoc: convertStringToDateSped(ln[7]),
      vlDoc: convertToFloat(ln[8]),
      vlPis: convertToFloat(ln[9]),
      vlCofins: convertToFloat(ln[10]),
      codCta: ln[11],
      flag: "sped",
      reg0000
    };
  }
};

const regC310 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C310") {
    return {
      reg: ln[1],
      numDocCanc: ln[2],
      flag: "sped",
      reg0000
    };
  }
};

const regC320 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C320") {
    return {
      reg: ln[1],
      cstIcms: ln[2],
      cfop: ln[3],
      aliqIcms: convertToFloat(ln[4]),
      vlOpr: convertToFloat(ln[5]),
      vlBcImcs: convertToFloat(ln[6]),
      vlIcms: convertToFloat(ln[7]),
      vlRedBc: convertToFloat(ln[8]),
      codObs: ln[9],
      flag: "sped",
      reg0000
    };
  }
};

const regC321 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C321") {
    return {
      reg: ln[1],
      codItem: ln[2],
      qtd: ln[3],
      unid: ln[4],
      vlItem: convertToFloat(ln[5]),
      vlDesc: convertToFloat(ln[6]),
      vlBcIcms: convertToFloat(ln[7]),
      vlIcms: convertToFloat(ln[8]),
      vlPis: convertToFloat(ln[9]),
      vlCofins: convertToFloat(ln[10]),
      flag: "sped",
      reg0000
    };
  }
};

const regC350 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C350") {
    return {
      reg: ln[1],
      ser: ln[2],
      subSer: ln[3],
      numDoc: ln[4],
      dtDoc: convertStringToDateSped(ln[5]),
      cnpjCpf: ln[6],
      vlMerc: convertToFloat(ln[7]),
      vlDoc: convertToFloat(ln[8]),
      vlDesc: convertToFloat(ln[9]),
      vlPis: convertToFloat(ln[10]),
      vlCofins: convertToFloat(ln[11]),
      codCta: ln[12],
      flag: "sped",
      reg0000
    };
  }
};

const regC370 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C370") {
    return {
      reg: ln[1],
      numItem: ln[2],
      codItem: ln[3],
      qtd: ln[4],
      unid: ln[5],
      vlItem: convertToFloat(ln[6]),
      vlDesc: convertToFloat(ln[7]),
      flag: "sped",
      reg0000
    };
  }
};

const regC390 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C390") {
    return {
      reg: ln[1],
      cstIcms: ln[2],
      cfop: ln[3],
      aliqIcms: convertToFloat(ln[4]),
      vlOpr: convertToFloat(ln[5]),
      vlBcIcms: convertToFloat(ln[6]),
      vlIcms: convertToFloat(ln[7]),
      vlRedBc: convertToFloat(ln[8]),
      codObs: ln[9],
      flag: "sped",
      reg0000
    };
  }
};

const regC400 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C400") {
    return {
      reg: ln[1],
      codMod: ln[2],
      ecfMod: ln[3],
      ecfFab: ln[4],
      ecfCx: ln[5],
      flag: "sped",
      reg0000
    };
  }
};

const regC405 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C405") {
    return {
      reg: ln[1],
      dtDoc: convertStringToDateSped(ln[2]),
      cro: ln[3],
      crz: ln[4],
      numCooFin: ln[5],
      gtFin: convertToFloat(ln[6]),
      vlBrt: convertToFloat(ln[7]),
      flag: "sped",
      reg0000
    };
  }
};

const regC410 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C410") {
    return {
      reg: ln[1],
      vlPis: convertToFloat(ln[2]),
      vlCofins: convertToFloat(ln[3]),
      flag: "sped",
      reg0000
    };
  }
};

const regC420 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C420") {
    return {
      reg: ln[1],
      codTotPar: ln[2],
      vlrAcumTot: convertToFloat(ln[3]),
      nrTot: ln[4],
      descrNrTot: ln[5],
      flag: "sped",
      reg0000
    };
  }
};

const regC425 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C425") {
    return {
      reg: ln[1],
      codItem: ln[2],
      qtd: ln[3],
      unid: ln[4],
      vlItem: convertToFloat(ln[5]),
      vlPis: convertToFloat(ln[6]),
      vlCofins: convertToFloat(ln[7]),
      flag: "sped",
      reg0000
    };
  }
};

const regC460 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C460") {
    return {
      reg: ln[1],
      codMod: ln[2],
      codSit: ln[3],
      numDoc: ln[4],
      dtDoc: convertStringToDateSped(ln[5]),
      vlDoc: convertToFloat(ln[6]),
      vlPis: convertToFloat(ln[7]),
      vlCofins: convertToFloat(ln[8]),
      cpfCnpj: ln[9],
      nomAdq: ln[10],
      flag: "sped",
      reg0000
    };
  }
};

const regC465 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C465") {
    return {
      reg: ln[1],
      chvNfe: ln[2],
      numCcf: ln[3],
      flag: "sped",
      reg0000
    };
  }
};

const regC470 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C470") {
    return {
      reg: ln[1],
      codItem: ln[2],
      qtd: convertToFloat(ln[3]),
      qtdCanc: convertToFloat(ln[4]),
      unid: ln[5],
      vlItem: convertToFloat(ln[6]),
      cstIcms: ln[7],
      cfop: ln[8],
      aliqIcms: convertToFloat(ln[9]),
      vlPis: convertToFloat(ln[10]),
      vlCofins: convertToFloat(ln[11]),
      flag: "sped",
      reg0000
    };
  }
};

const regC490 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C490") {
    return {
      reg: ln[1],
      cstIcms: ln[2],
      cfop: ln[3],
      aliqIcms: convertToFloat(ln[4]),
      vlOpr: convertToFloat(ln[5]),
      vlBcIcms: convertToFloat(ln[6]),
      vlIcms: convertToFloat(ln[7]),
      codObs: ln[8],
      flag: "sped",
      reg0000
    };
  }
};

const regC495 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C495") {
    return {
      reg: ln[1],
      aliqIcms: convertToFloat(ln[2]),
      codItem: ln[3],
      qtd: convertToFloat(ln[4]),
      qtdCanc: convertToFloat(ln[5]),
      unid: ln[6],
      vlItem: convertToFloat(ln[7]),
      vlDesc: convertToFloat(ln[8]),
      vlCanc: convertToFloat(ln[9]),
      vlAcmo: convertToFloat(ln[10]),
      vlBcIcms: convertToFloat(ln[11]),
      vlIcms: convertToFloat(ln[12]),
      vlIsen: convertToFloat(ln[13]),
      vlNt: convertToFloat(ln[14]),
      vlIcmsSt: convertToFloat(ln[15]),
      flag: "sped",
      reg0000
    };
  }
};

const regC500 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C500") {
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
      dtDoc: convertStringToDateSped(ln[11]),
      dtES: convertStringToDateSped(ln[12]),
      vlDoc: convertToFloat(ln[13]),
      vlDesc: convertToFloat(ln[14]),
      vlForn: convertToFloat(ln[15]),
      vlServNt: convertToFloat(ln[16]),
      vlTerc: convertToFloat(ln[17]),
      vlDa: convertToFloat(ln[18]),
      vlBcIcms: convertToFloat(ln[19]),
      vlIcms: convertToFloat(ln[20]),
      vlBcIcmsSt: convertToFloat(ln[21]),
      vlIcmsSt: convertToFloat(ln[22]),
      codInf: ln[23],
      vlPis: convertToFloat(ln[24]),
      vlCofins: convertToFloat(ln[25]),
      tpLigacao: ln[26],
      codGrupoTensao: ln[27],
      flag: "sped",
      reg0000
    };
  }
};

const regC510 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C510") {
    return {
      reg: ln[1],
      numItem: ln[2],
      codItem: ln[3],
      codClass: ln[4],
      qtd: ln[5],
      unid: ln[6],
      vlItem: convertToFloat(ln[7]),
      vlDesc: convertToFloat(ln[8]),
      cstIcms: ln[9],
      cfop: ln[10],
      vlBcIcms: convertToFloat(ln[11]),
      aliqIcms: convertToFloat(ln[12]),
      vlIcms: convertToFloat(ln[13]),
      vlBcIcmsSt: convertToFloat(ln[14]),
      aliqSt: convertToFloat(ln[15]),
      vlIcmsSt: convertToFloat(ln[16]),
      indRec: ln[17],
      codPart: ln[18],
      vlPis: convertToFloat(ln[19]),
      vlCofins: convertToFloat(ln[20]),
      codCta: ln[21],
      flag: "sped",
      reg0000
    };
  }
};

const regC590 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C590") {
    return {
      reg: ln[1],
      cstIcms: ln[2],
      cfop: ln[3],
      aliqIcms: convertToFloat(ln[4]),
      vlOpr: convertToFloat(ln[5]),
      vlBcIcms: convertToFloat(ln[6]),
      vlIcms: convertToFloat(ln[7]),
      vlBcIcmsSt: convertToFloat(ln[8]),
      vlIcmsSt: convertToFloat(ln[9]),
      vlRedBc: convertToFloat(ln[10]),
      codObs: ln[11],
      flag: "sped",
      reg0000
    };
  }
};

const regC600 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C600") {
    return {
      reg: ln[1],
      codMod: ln[2],
      codMun: ln[3],
      ser: ln[4],
      sub: ln[5],
      codCons: ln[6],
      qtdCons: ln[7],
      qtdCanc: ln[8],
      dtDoc: convertStringToDateSped(ln[9]),
      vlDoc: convertToFloat(ln[10]),
      vlDesc: convertToFloat(ln[11]),
      cons: ln[12],
      vlForn: convertToFloat(ln[13]),
      vlServNt: convertToFloat(ln[14]),
      vlTerc: convertToFloat(ln[15]),
      vlDa: convertToFloat(ln[16]),
      vlBcIcms: convertToFloat(ln[17]),
      vlIcms: convertToFloat(ln[18]),
      vlBcIcmsSt: convertToFloat(ln[19]),
      vlIcmsSt: convertToFloat(ln[20]),
      vlPis: convertToFloat(ln[21]),
      vlCofins: convertToFloat(ln[22]),
      flag: "sped",
      reg0000
    };
  }
};

const regC601 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C601") {
    return {
      reg: ln[1],
      numDocCanc: ln[2],
      flag: "sped",
      reg0000
    };
  }
};

const regC610 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C610") {
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
      flag: "sped",
      reg0000
    };
  }
};

const regC690 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C690") {
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
      flag: "sped",
      reg0000
    };
  }
};

const regC700 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C700") {
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
      flag: "sped",
      reg0000
    };
  }
};

const regC790 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C790") {
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
      flag: "sped",
      reg0000
    };
  }
};

const regC791 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C791") {
    return {
      reg: ln[1],
      uf: ln[2],
      vlBcIcmsSt: ln[3],
      vlIcmsSt: ln[4],
      flag: "sped",
      reg0000
    };
  }
};

const regC800 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C800") {
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
      flag: "sped",
      reg0000
    };
  }
};

const regC850 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C850") {
    return {
      reg: ln[1],
      cstIcms: ln[2],
      cfop: ln[3],
      aliqIcms: ln[4],
      vlOpr: ln[5],
      vlBcIcms: ln[6],
      vlIcms: ln[7],
      codObs: ln[8],
      flag: "sped",
      reg0000
    };
  }
};

const regC860 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C860") {
    return {
      reg: ln[1],
      codMod: ln[2],
      nrSat: ln[3],
      dtDoc: ln[4],
      docIni: ln[5],
      docFim: ln[6],
      flag: "sped",
      reg0000
    };
  }
};

const regC890 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C890") {
    return {
      reg: ln[1],
      cstIcms: ln[2],
      cfop: ln[3],
      aliqIcms: ln[4],
      vlOpr: ln[5],
      vlBcIcms: ln[6],
      vlIcms: ln[7],
      codObs: ln[8],
      flag: "sped",
      reg0000
    };
  }
};

const regC990 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "C990") {
    return {
      reg: ln[1],
      qtdLinC: ln[2],
      flag: "sped",
      reg0000
    };
  }
};

module.exports = {
  regC001,
  regC100Sped,
  regC100Xml,
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
  regC170Xml,
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
  regC990
};
