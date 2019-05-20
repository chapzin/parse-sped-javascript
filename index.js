// const fs = require("fs");
// const lineReader = require("readline").createInterface({
//   input: fs.createReadStream("inv2016_final.csv"),
// });

// const calculaConvert = (qtd, valor) => {
//   const qtd2 = parseFloat(qtd.replace(",", "."));
//   const vl2 = parseFloat(valor.replace(",", "."));
//   const total = (qtd2 * vl2).toFixed(2);
//   return total.toString().replace(".", ",");
// };

// const parseLinha = ln => {
//   return {
//     codProd: ln[0],
//     descProd: ln[1],
//     und: ln[2],
//     tipo: ln[3],
//     qtdIni: ln[4],
//     vlUniInicial: ln[5],
//     vlTotInicial: calculaConvert(ln[4], ln[5]),
//     qtdFin: ln[6],
//     vlUniFinal: ln[7],
//     vlTotFinal: calculaConvert(ln[6], ln[7]),
//   };
// };

// const Reg0200InvInicial = ({ qtdIni, codProd, und, descProd }) => {
//   if (qtdIni != "0") {
//     const lnFinal = `|0200|${codProd}|${descProd}|||${und}|00|||||||`;
//     console.log(lnFinal);
//   }
// };

// const Reg0200InvFinal = ({ qtdFin, codProd, und, descProd }) => {
//   if (qtdFin != "0") {
//     const lnFinal = `|0200|${codProd}|${descProd}|||${und}|00|||||||`;
//     console.log(lnFinal);
//   }
// };

// const H010InventarioInicial = ({
//   qtdIni,
//   codProd,
//   und,
//   vlUniInicial,
//   vlTotInicial,
// }) => {
//   if (qtdIni != "0") {
//     const lnFinal = `|H010|${codProd}|${und}|${qtdIni}|${vlUniInicial}|${vlTotInicial}|0|||116010001||`;
//     console.log(lnFinal);
//   }
// };

// const H010InventarioFinal = ({
//   qtdFin,
//   codProd,
//   und,
//   vlUniFinal,
//   vlTotFinal,
// }) => {
//   if (qtdFin != "0") {
//     const lnFinal = `|H010|${codProd}|${und}|${qtdFin}|${vlUniFinal}|${vlTotFinal}|0|||116010001||`;
//     console.log(lnFinal);
//   }
// };

// lineReader.on("line", line => {
//   const ln = line.split(";");
//   // Reg0200InvInicial(parseLinha(ln));
//   // H010InventarioInicial(parseLinha(ln));
//   // Reg0200InvFinal(parseLinha(ln));
//   H010InventarioFinal(parseLinha(ln));
// });
