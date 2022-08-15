let num1 = Number(prompt("Digite um valor: "));
console.log(num1);
let num2 = Number(prompt("Digite o segundo valor: "));
console.log(num2);
let num3 = Number(prompt("Digite o terceeiro valor: "));
console.log(num3);
let soma = num1 + num2 + num3;
let media = (num1 + num2 + num3) / 3;
let produto = num1 * num2 * num3;

if (num1 == num2 || num2 == num3 || num3 == num1) {
  alert("Você repetiu algum número na digitação!");
}

console.log("A soma dos valores é: ", soma);
console.log("A média dos valores é :", media.toFixed(0));
console.log("O produto dos valores é: ", produto);

if (num1 > num2 && num1 > num3) {
  console.log(num1, " é maior.");
} else if (num2 > num1 && num2 > num3) {
  console.log(num2, "é maior.");
} else {
  console.log(num3, " é maior.");
}

if (num1 < num2 && num1 < num3) {
  console.log(num1, " é menor.");
} else if (num2 < num1 && num2 < num3) {
  console.log(num2, "é menor.");
} else {
  console.log(num3, " é menor.");
}
