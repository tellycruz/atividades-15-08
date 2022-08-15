let precoTabela = Number(prompt("Qual o valor do produto?")); //valor do produto
console.log(precoTabela);
let quant_Parcela = prompt("Quantidade de parcelas(até 5X sem juros!):"); // numero de parcelas
console.log(quant_Parcela);
let valor_parcela = precoTabela / quant_Parcela;
console.log(valor_parcela);

let jurosA = Number(precoTabela / 100) * 6;
let jurosB = Number(precoTabela / 100) * 13;

let valorA = Number(precoTabela + jurosA);
let valorB = Number(precoTabela + jurosB);

if (quant_Parcela < 1) {
  alert(`Valor: R$${precoTabela}`);
} else if (quant_Parcela >= 2 && quant_Parcela <= 5) {
  alert(
    `Valor do produto: R$${precoTabela}\nNúmero de parcelas: ${quant_Parcela}X\nValor da parcela: R$${valor_parcela}`
  );
} else if (quant_Parcela >= 6 && quant_Parcela <= 10) {
  alert(
    `Valor do produto: R$${precoTabela}\nNúmero de parcelas: ${quant_Parcela}X\nValor da parcela: R$${valor_parcela}\nValor de juros: R$${jurosA}\nValor total: R$${valorA}`
  );
} else if (quant_Parcela >= 11 && quant_Parcela <= 15) {
  alert(
    `Valor do produto: R$${precoTabela}\nNúmero de parcelas: ${quant_Parcela}X\nValor da parcela: R$${valor_parcela}\nValor de juros: R$${jurosB}\nValor total: R$${valorB}`
  );
} else {
  alert("Máximo de 15 parcelas");
}
