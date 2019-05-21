const fs = require('fs')
const { reg0000, reg0005, reg0100, reg0150, reg0190, reg0200, reg0220, reg0990 } = require('../app/blocos/bloco0')
const path = require('path')
const mongoose = require('mongoose')
const Reg0000Model = require('../app/models/Reg0000')
const Reg0005Model = require('../app/models/Reg0005')
const Reg0100Model = require('../app/models/Reg0100')
const Reg0150Model = require('../app/models/Reg0150')
const Reg0190Model = require('../app/models/Reg0190')
const Reg0200Model = require('../app/models/Reg0200')

const { mongodb } = require('../config/database')

const lineReader = (file) => {
  return require('readline').createInterface({
    input: fs.createReadStream(file),
  })
}
let regInicial = {}
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
    regInicial = reg0000(line)
    Reg0000Model.create(regInicial, (err, result) => {
      if (err) {
        console.log(err)
      } else {
        // console.log(result)
      }
    })

    // console.log(add)
  }

  if (reg0005(line, regInicial)) {
    const reg0005p = reg0005(line, regInicial)
    Reg0005Model.create(reg0005p, (err, result) => {
      if (err) {
        console.log(err)
      } else {
        console.log(result)
      }
    })
  }

  if (reg0100(line, regInicial)) {
    Reg0100Model.create(reg0100(line, regInicial), (err, result) => {
      if (err) {
        console.log(err)
      } else {
        // console.log(result)
      }
    })
  }

  if (reg0150(line, regInicial)) {
    Reg0150Model.create(reg0150(line, regInicial), (err, result) => {
      if (err) {
        console.log(err)
      } else {
        // console.log(result)
      }
    })
  }

  if (reg0190(line, regInicial)) {
    Reg0190Model.create(reg0190(line, regInicial), (err, result) => {
      if (err) {
        console.log(err)
      } else {
        // console.log(result)
      }
    })
  }
  if (reg0200(line, regInicial)) {
    reg0200p = reg0200(line, regInicial)
    Reg0200Model.create(reg0200p, (err, result) => {
      if (err) {
        console.log(err)
      } else {
        // console.log(result)
      }
    })
  }
  // if (reg0220(line, reg0200p, regInicial)) {
  // console.log(reg0220(line, reg0200p, regInicial))
  // }
  // reg0005(line, regInicial)
  // reg0990(line, regInicial)
  // reg0200(line);
  // reg0220(line);
})
