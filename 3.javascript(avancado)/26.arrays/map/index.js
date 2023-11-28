// map muda os valores
// retorna um novo array
// recebe uma função de callback

const numbers = [1, 20, 50, 2, 4, 6, 70, 80, 8, 9, 0, 15, 12];
const numerosEmDobro = numbers.map((valor) => valor * 2);
console.log(numerosEmDobro); // simples assim vai dobrar todos os elementos do array

const pessoa = [
  { nome: "Maria", idade: 20 },
  { nome: "Jão", idade: 90 },
  { nome: "Beto", idade: 2 },
  { nome: "Gabriela", idade: 16 },
  { nome: "Luiz", idade: 30 },
  { nome: "Marco", idade: 5 },
];

const nomePessoa = pessoa.map((obj) => obj.nome);

const nomeIdade = pessoa.map((obj) => obj.idade); // dessa forma retorna sem o objeto

const nomeIdadeObjeto = pessoa.map((obj) => ({ idade: obj.idade })); // dessa forma retorna como objeto

const comIds = pessoa.map((obj, id) => {
  obj.id = id;
  return obj; // dessa forma estou alterando o valor do objeto original
});

const comIdsCopia = pessoa.map((obj, id) => {
  const newObjeto = { ...obj };
  newObjeto.id = id;
  return newObjeto; // dessa forma estou copiando o objeto para não mudar o original
});


console.log(nomePessoa);
// [ 'Maria', 'Jão', 'Beto', 'Gabriela', 'Luiz', 'Marco' ]
console.log(nomeIdade);
// [ 20, 90, 2, 16, 30, 5 ]
console.log(nomeIdadeObjeto);
// [ { idade: 20 }, { idade: 90 }, { idade: 2 }, { idade: 16 }, { idade: 30 }, { idade: 5 } ]
console.log(comIds); // [{ nome: 'Maria', idade: 20, id: 0 },{ nome: 'Jão', idade: 90, id: 1 }, { nome: 'Beto', idade: 2, id: 2 }, { nome: 'Gabriela', idade: 16, id: 3 }, { nome: 'Luiz', idade: 30, id: 4 }, { nome: 'Marco', idade: 5, id: 5 }]
console.log(comIdsCopia);
// [ { nome: 'Maria', idade: 20, id: 0 }, { nome: 'Jão', idade: 90, id: 1 }, { nome: 'Beto', idade: 2, id: 2 },{ nome: 'Gabriela', idade: 16, id: 3 },{ nome: 'Luiz', idade: 30, id: 4 },{ nome: 'Marco', idade: 5, id: 5 } ]