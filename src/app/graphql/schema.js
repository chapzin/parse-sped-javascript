const { gql } = require('apollo-server-express')
const Reg0000Mongo = require('../models/Reg0000')
const RegC100Mongo = require('../models/RegC100')

const typeDefs = gql`
  type Query {
    "Pesquisa Cabeçalho Arquivo Sped Fiscal"
    getAllReg0000: [Reg0000]
    "Pesquisa Cabeçalho notas fiscais Arquivo Sped Fiscal"
    getAllRegC100(codSit: String): [RegC100]
  }

  type Reg0000 {
    reg: String
    codVer: String
    codFin: String
    dtIni: String
    dtFin: String
    nome: String
    cnpj: String
    cpf: String
    uf: String
    ie: String
    codMun: String
    im: String
    suframa: String
    indPerfil: String
    indAtiv: String
  }

  type RegC100 {
    reg: String
    indOper: String
    indEmit: String
    codPart: String
    codMod: String
    codSit: String
    ser: String
    numDoc: String
    chvNfe: String
    dtDoc: String
    dtES: String
    vlDoc: String
    indPgto: String
    vlDesc: String
    vlAbatNt: String
    vlMerc: String
    indFrt: String
    vlFrt: String
    vlSeg: String
    vlOutDa: String
    vlBcIcms: String
    vlIcms: String
    vlBcIcmsSt: String
    vlIcmsSt: String
    vlIpi: String
    vlPis: String
    vlCofins: String
    vlPisSt: String
    vlCofinsSt: String
    reg0000: Reg0000
  }
`
const resolvers = {
  Query: {
    getAllReg0000: () => Reg0000Mongo.find(),
    getAllRegC100: (_, { codSit }) => {
      if (!codSit) {
        return RegC100Mongo.find()
          .where('chvNfe')
          .ne('')
      }
      return RegC100Mongo.find({ codSit: codSit })
        .where('chvNfe')
        .ne('')
    },
  },
}

module.exports = { typeDefs, resolvers }
