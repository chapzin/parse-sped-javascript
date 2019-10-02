const fs = require("fs");
const path = require("path");
const NFe = require("djf-nfe");
const RegC100 = require("../app/models/classes/ClassRegC100");

const files = fs.readdirSync(path.resolve("uploads", "xmls"));

const lerXml = file => {
  return fs.readFileSync(path.resolve("uploads", "xmls", file), "utf-8");
};

let regC100 = new RegC100((reg = "C100"));

files.forEach(file => {
  let nfe = NFe(lerXml(file).toString());
  let info = nfe.identificacaoNFe();
  let emitente = nfe.emitente();
  let protocolo = nfe.informacoesProtocolo();
  let regC100 = new RegC100(
    (reg = "C100"),
    (indOper = info.tipoOperacao()),
    (indEmit = info.dataEmissao()),
    (codPart = emitente.cpf() || emitente.cnpj()),
    (codMod = "55"),
    (codSit = "00"),
    (ser = info.serie()),
    (numDoc = info.nrNota()),
    (chvNfe = protocolo.chave() || "nfe sem protocolo")
  );
  // console.log(lerXml(file).toString());
  console.log(regC100);
});
