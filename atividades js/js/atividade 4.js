let anoA = 2022;
let anoN = Number(prompt("Digite o ano que nasceu"));
let idade = anoA - anoN;

if (idade >= 18) {
  alert(`Você possui ${idade} anos, então poderá votar em ${anoA}`);
} else if (idade >= 16 && idade < 18) {
  alert(`Você possui ${idade} anos, pode votar de forma facultativa`);
} else {
  alert(`Você possui ${idade} anos, então não poderá votar em ${anoA}`);
}
