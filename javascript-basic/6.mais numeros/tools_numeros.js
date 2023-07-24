let num1 = 1;
let num2 = 2.1;

console.log(num1.toString() + num2) //o resultado será 12.1
// isso ocorre porque num1 virou uma string e ao somar com num2 gerou foi uma concatenação de 1 + 2.1
//usar o tostring em uma console log altera o valor da variável apenas de forma temporária
console.log(num1)

//para alterar o valor de forma permanente é preciso fazer:

num1 = num1.toString();

//para ver o numero da variável em forma de binário basta colocar um 2 dentro dos parenteses
// exemplo:
// num1 = num1.toString(2);