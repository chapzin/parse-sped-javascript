const Reg0000 = require('../models/Reg0000')
const fs = require('fs')
const path = require('path')
const lineReader = (file) => {
  return require('readline').createInterface({
    input: fs.createReadStream(file),
  })
}
const { reg0000 } = require('../blocos/bloco0')
const sped = lineReader(path.resolve('uploads', 'sped.txt'))
const store = async (req, res) => {}

module.exports = { store }
