// Filter -> sempre retorna a mesma quantiade de elementos
// retorna números maiores que 10 (nesse exemplo, não é uma regra)
// normal

const numbers = [1, 20, 50, 2, 4, 6, 70, 80, 8, 9, 0, 15, 12];

function callBackFilter(value) {
  if (value > 10) {
    return true;
  } else {
    return false;
  }
}

const returnFilter = numbers.filter(callBackFilter);
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

