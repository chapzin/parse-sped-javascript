const calculaIcms = (vlProd, vlFrete, vlSeguro, vlDespAcessorias, descontos, aliqOrig) => {
  const bcIcms = vlProd + vlFrete + vlSeguro + vlDespAcessorias - descontos
  const vlIcms = bcIcms * (aliqOrig / 100)
  return {
    bcIcms,
    vlIcms,
  }
}

const calculaIcmsSt = (
  vlProd,
  vlIpi,
  vlFrete,
  vlSeguro,
  vlDespAcessorias,
  vlDesconto,
  aliqOrig,
  aliqInter,
  aliqMVA,
) => {
  // const bcSt = (vlProd + vlIpi + vlFrete + vlSeguro + vlDespAcessorias - vlDesconto) * (1 + aliqMVA / 100)
  // console.log(bcSt)
  // const icmsProprio = vlProd * (aliqOrig / 100)
  // console.log(icmsProprio)
  // const mvaVlSemDeducao = bcSt * (aliqOrig / 100)
  // console.log(mvaVlSemDeducao)
  // return mvaVlSemDeducao - icmsProprio
  const baseIcmsProprio = vlProd + vlFrete + vlSeguro + vlDespAcessorias - vlDesconto
  console.log(baseIcmsProprio)
  const icmsPropria = baseIcmsProprio * (aliqInter / 100)
  console.log(icmsPropria)
  const baseIcmsSt = (vlProd + vlIpi + vlFrete + vlSeguro + vlDespAcessorias - vlDesconto) * (1 + aliqMVA / 100)
  console.log(baseIcmsSt)
  const vlIcmsSt = baseIcmsSt * (aliqOrig / 100) - icmsPropria
  console.log(vlIcmsSt)
  return vlIcmsSt
}

console.log(calculaIcms(100, 0, 0, 0, 0, 18))
console.log(calculaIcmsSt(100, 0, 0, 0, 0, 0, 18, 12, 71.78))
