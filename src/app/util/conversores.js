const convertToFloat = (value) => {
  if (value) {
    const vl2 = value.replace(',', '.')
    return parseFloat(vl2).toFixed(2)
  } else {
    return ''
  }
}

const convertStringToDateSped = (value) => {
  if (value.length == 8) {
    const dia = value.substring(0, 2)
    const mes = parseInt(value.substring(2, 4)) - 1
    const ano = value.substring(4, 8)
    return new Date(ano, mes, dia)
  }
}

module.exports = { convertToFloat, convertStringToDateSped }
