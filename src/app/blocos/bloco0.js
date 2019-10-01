const {
  convertToFloat,
  convertStringToDateSped
} = require("../util/conversores");

const reg0000 = line => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "0000") {
    return {
      reg: ln[1],
      codVer: ln[2],
      codFin: ln[3],
      dtIni: convertStringToDateSped(ln[4]),
      dtFin: convertStringToDateSped(ln[5]),
      nome: ln[6],
      cnpj: ln[7],
      cpf: ln[8],
      uf: ln[9],
      ie: ln[10],
      codMun: ln[11],
      im: ln[12],
      suframa: ln[13],
      indPerfil: ln[14],
      indAtiv: ln[15],
      flag: "sped"
    };
  }
};

const reg0005 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "0005") {
    return {
      reg: ln[1],
      fantasia: ln[2],
      cep: ln[3],
      end: ln[4],
      num: ln[5],
      compl: ln[6],
      bairro: ln[7],
      fone: ln[8],
      fax: ln[9],
      email: ln[10],
      flag: "sped",
      reg0000
    };
  }
};

const reg0015 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "0015") {
    return {
      reg: ln[1],
      ufSt: ln[2],
      ieSt: ln[3],
      flag: "sped",
      reg0000
    };
  }
};

const reg0100 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "0100") {
    return {
      reg: ln[1],
      nome: ln[2],
      cpf: ln[3],
      crc: ln[4],
      cnpj: ln[5],
      cep: ln[6],
      end: ln[7],
      num: ln[8],
      compl: ln[9],
      bairro: ln[10],
      fone: ln[11],
      fax: ln[12],
      email: ln[13],
      codMun: ln[14],
      flag: "sped",
      reg0000
    };
  }
};

const reg0150 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "0150") {
    return {
      reg: ln[1],
      codPart: ln[2],
      nome: ln[3],
      codPais: ln[4],
      cnpj: ln[5],
      cpf: ln[6],
      ie: ln[7],
      codMun: ln[8],
      suframa: ln[9],
      end: ln[10],
      num: ln[11],
      compl: ln[12],
      bairro: ln[13],
      flag: "sped",
      reg0000
    };
  }
};

const reg0175 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "0175") {
    return {
      reg: ln[1],
      dtAlt: ln[2],
      nrCampo: ln[3],
      contAnt: ln[4],
      flag: "sped",
      reg0000
    };
  }
};

const reg0190 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "0190") {
    return {
      reg: ln[1],
      unid: ln[2],
      descr: ln[3],
      flag: "sped",
      reg0000
    };
  }
};

const reg0200 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "0200") {
    return {
      reg: ln[1],
      codItem: ln[2],
      descrItem: ln[3],
      codBarra: ln[4],
      codAntItem: ln[5],
      unidInv: ln[6],
      tipoItem: ln[7],
      codNcm: ln[8],
      exIpi: ln[9],
      codGen: ln[10],
      codLst: ln[11],
      aliqIcms: convertToFloat(ln[12]),
      cest: ln[13],
      reg0220: [],
      flag: "sped",
      reg0000
    };
  }
};

const reg0205 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "0205") {
    return {
      reg: ln[1],
      descrAntItem: ln[2],
      dtIni: convertStringToDateSped(ln[3]),
      dtFim: convertStringToDateSped(ln[4]),
      codAntItem: ln[5],
      flag: "sped",
      reg0000
    };
  }
};

const reg0206 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "0206") {
    return {
      reg: ln[1],
      codComb: ln[2],
      flag: "sped",
      reg0000
    };
  }
};

const reg0220 = (line, reg0200, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "0220") {
    return {
      reg: ln[1],
      unidConv: ln[2],
      fatConv: convertToFloat(ln[3]),
      codItem: reg0200.codItem,
      flag: "sped",
      reg0000
    };
  }
};

const reg0300 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "0300") {
    return {
      reg: ln[1],
      codIndBem: ln[2],
      IdentMerc: ln[3],
      codPrnc: ln[4],
      codCta: ln[5],
      nrParc: ln[6],
      flag: "sped",
      reg0000
    };
  }
};

const reg0305 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "0305") {
    return {
      reg: ln[1],
      codCcus: ln[2],
      func: ln[3],
      vidaUtil: ln[4],
      flag: "sped"
    };
  }
};

const reg0400 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "0400") {
    return {
      reg: ln[1],
      codNat: ln[2],
      descrNat: ln[3],
      flag: "sped",
      reg0000
    };
  }
};

const reg0450 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "0450") {
    return {
      reg: ln[1],
      codInf: ln[2],
      txt: ln[3],
      flag: "sped",
      reg0000
    };
  }
};

const reg0460 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "0460") {
    return {
      reg: ln[1],
      codObs: ln[2],
      txt: ln[3],
      flag: "sped",
      reg0000
    };
  }
};

const reg0500 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "0500") {
    return {
      reg: ln[1],
      dtAlt: convertStringToDateSped(ln[2]),
      codNatCc: ln[3],
      indCta: ln[4],
      nivel: ln[5],
      codCta: ln[6],
      nomeCta: ln[7],
      flag: "sped",
      reg0000
    };
  }
};

const reg0600 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "0600") {
    return {
      reg: ln[1],
      dtAlt: convertStringToDateSped(ln[2]),
      codCcus: ln[3],
      ccus: ln[4],
      flag: "sped",
      reg0000
    };
  }
};

const reg0990 = (line, reg0000) => {
  const ln = line.split("|");
  if (line[0] == "|" && ln[1] == "0990") {
    return {
      reg: ln[1],
      qtdLin: ln[2],
      flag: "sped",
      reg0000
    };
  }
};

module.exports = {
  reg0000,
  reg0005,
  reg0015,
  reg0100,
  reg0150,
  reg0175,
  reg0190,
  reg0200,
  reg0205,
  reg0206,
  reg0220,
  reg0300,
  reg0305,
  reg0400,
  reg0450,
  reg0460,
  reg0500,
  reg0600,
  reg0990
};
