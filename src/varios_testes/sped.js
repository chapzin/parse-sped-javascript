const fs = require('fs')
const { reg0000, reg0005, reg0100, reg0150, reg0190, reg0200, reg0220, reg0990 } = require('../app/blocos/bloco0')
const { regC100 } = require('../app/blocos/blocoC')
const { reg9999 } = require('../app/blocos/bloco9')
const path = require('path')
const mongoose = require('mongoose')
const Reg0000Model = require('../app/models/Reg0000')
const Reg0005Model = require('../app/models/Reg0005')
const Reg0100Model = require('../app/models/Reg0100')
const Reg0150Model = require('../app/models/Reg0150')
const Reg0190Model = require('../app/models/Reg0190')
const Reg0200Model = require('../app/models/Reg0200')
const Reg0220Model = require('../app/models/Reg0220')
const RegC100Model = require('../app/models/RegC100')

const { mongodb } = require('../config/database')
const timeStart = Date.now()
const lineReader = (file) => {
  return require('readline').createInterface({
    input: fs.createReadStream(file),
  })
}
let r0000 = {}
let reg0200p = {}
const sped = lineReader(path.resolve('uploads', 'sped.txt'))
const database = (uri) => {
  mongoose.connect(uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
  })
}
database(mongodb.uri)

sped.on('line', (line) => {
  if (reg0000(line)) {
    r0000 = reg0000(line)
    console.log(r0000)
    Reg0000Model.create(r0000, (err, result) => {
      if (err) {
        console.log(err)
      } else {
        // console.log('Adicionado reg0000')
      }
    })
  }

  if (reg0005(line, r0000)) {
    Reg0005Model.create(reg0005(line, r0000), (err, result) => {
      if (err) {
        console.log(err)
      } else {
        // console.log('Adicionado reg0005')
      }
    })
  }

  if (reg0100(line, r0000)) {
    Reg0100Model.create(reg0100(line, r0000), (err, result) => {
      if (err) {
        console.log(err)
      } else {
        // console.log('Adicionado reg0100')
      }
    })
  }

  if (reg0150(line, r0000)) {
    Reg0150Model.create(reg0150(line, r0000), (err, result) => {
      if (err) {
        console.log(err)
      } else {
        // console.log('Adicionado reg0150')
      }
    })
  }

  if (reg0190(line, r0000)) {
    Reg0190Model.create(reg0190(line, r0000), (err, result) => {
      if (err) {
        console.log(err)
      } else {
        // console.log('Adicionado reg0190')
      }
    })
  }
  if (reg0200(line, r0000)) {
    reg0200p = reg0200(line, r0000)
    Reg0200Model.create(reg0200(line, r0000), (err, result) => {
      if (err) {
        console.log(err)
      } else {
        // console.log('Adicionado reg0200')
      }
    })
  }

  if (reg0220(line, reg0200p, r0000)) {
    Reg0220Model.create(reg0220(line, reg0200p, r0000), (err, result) => {
      if (err) {
        console.log(err)
      } else {
        // console.log('Adicionado reg0220')
      }
    })
  }

  if (regC100(line, r0000)) {
    // console.log(regC100(line, r0000))
    RegC100Model.create(regC100(line, r0000), (err, result) => {
      if (err) {
        console.log(err)
      } else {
        // console.log('Adicionado regC100')
      }
    })
  }
  if (reg9999(line, r0000)) {
    console.log('-=-=-=-=- FIM DO ARQUIVO SPED -=-=-=-=-=-=-')
    const timeEnd = Date.now()
    console.log(`Duração da importação ${((timeEnd - timeStart) / 1000).toFixed(2)} segundos...`)
    // break;
  }
})
