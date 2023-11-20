// filter retorna um novo array
// recebe função de callback
// Filter -> sempre retorna a mesma quantiade de elementos
// retorna números maiores que 10 (nesse exemplo, não é uma regra)
// normal

const numbers = [1, 20, 50, 2, 4, 6, 70, 80, 8, 9, 0, 15, 12];

function callBackFilter(value) {
  if (value > 10) {
    return true; // se é maior que 10 é true
  } else {
    return false; // se for menor que 10 é false
  }
}

const returnFilter = numbers.filter(callBackFilter); // callBackFilter não está sendo executada, isso porque quem está fazendo isso é o 'filter', basicamente, para cada elemento do array o 'filter' executa a função 'callBackFilter'
console.log(returnFilter);

// or

const betterReturnFilter = numbers.filter((value) => value > 10);
console.log(betterReturnFilter);

// outro exemplo:

const pessoa = [
  { nome: "Maria", idade: 20 },
  { nome: "Jão", idade: 90 },
  { nome: "Beto", idade: 2 },
  { nome: "Gabriela", idade: 16 },
  { nome: "Luiz", idade: 30 },
  { nome: "Marco", idade: 5 },
];

const pessoaNomeGrande = pessoa.filter((obj) => obj.nome.length >= 5);
const pessoaMaisVelhas = pessoa.filter((obj) => obj.idade >= 20);
const nomeTerminaComA = pessoa.filter((obj) =>
  obj.nome.toLocaleLowerCase().endsWith("a")
);
console.log(pessoaNomeGrande);
console.log(pessoaMaisVelhas);
console.log(nomeTerminaComA);
