let a = Number(prompt("Digite o primeiro valor"));
let b = Number(prompt("Digite o segundo valor"));
let c = Number(prompt("Digite o terceiro valor"));

if (a === b && a === c && b === c) {
  alert("Triângulo equilátero");
} else if (a != b && a != c && b != c) {
  alert("Triângulo escaleno");
} else a === b || a === c || b === c;
alert("Triângulo isósceles");
