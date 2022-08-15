let eleitores = prompt("Digite a quantidade de eleitores no município: ");
let brancos = prompt("Digite o total de votos em branco:");
let nulos = prompt("Digite o total de votos em nulos:");
let validos = prompt("Digite o total de votos em validos:");
let soma = brancos + nulos + validos;

let percentBr = (brancos / eleitores) * 100;
let percentnl = (nulos / eleitores) * 100;
let percentvl = (validos / eleitores) * 100;

if (eleitores > soma) {
  alert("O número de votos supera a quantidade de eleitores!");
} else {
  alert(
    `\tTotal de eleitores: ${eleitores} % \n\tTotal de votos brancos: ${percentBr} % \n\tTotal de votos nulos: ${percentnl} % \n\tTotal de votos válidos: ${percentvl} %`
  );
}
