const operador = "*";
const numeros = [10, 20, 30];
let acumulador = 2;

for (let numero of numeros)

switch (operador) {
  case "+":
    acumulador += numero;
    break;
  case "-":
    acumulador -= numero;
    break;
  case "*":
    acumulador *= numero;
    break;
  case "/":
    acumulador /= numero;
    break;
  default:
    throw new console.error('número ou operador inválido');
}

console.log(acumulador)