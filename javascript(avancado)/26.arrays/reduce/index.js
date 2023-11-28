// o papel do reduce é reduzir o array á um único elemento

const numbers = [1, 20, 50, 2, 4, 6, 70, 80, 8, 9, 0, 15, 12];

const total = numbers.reduce((acumulador, valor) => {
  return (acumulador += valor);
}, 0); // o zero é o valor do acumulador

const numerosPar = numbers.reduce((acumulador, valor) => {
  if (valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []); // o acumulador nesse caso é um array vázio

const dobroNumeros = numbers.reduce((acumulador, valor) => {
  acumulador.push(valor * 2);
  return acumulador;
}, []);

console.log(total);
console.log(numerosPar); // teria sido melhor se feito com Filter
console.log(dobroNumeros); // teria sido melhor se feito com map

const pessoa = [
  { nome: "Maria", idade: 20 },
  { nome: "Jão", idade: 90 },
  { nome: "Beto", idade: 2 },
  { nome: "Gabriela", idade: 16 },
  { nome: "Luiz", idade: 30 },
  { nome: "Marco", idade: 5 },
];

const maisVelha = pessoa.reduce((acumulador, valor) => {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor
}); // como não foi passado nenhum valor para o acumulador, o primeiro elemento do array se torna o acumulador

console.log(maisVelha);