// antes:

const error = "número, operador ou acumulador inválido";

const calculo = (operador, acumulador, numeros) => {
  for (let numero of numeros) {
    operador === "+"
      ? (acumulador += numero)
      : operador === "*"
      ? (acumulador *= numero)
      : operador === "/"
      ? (acumulador /= numero)
      : operador === "-"
      ? (acumulador -= numero)
      : error;
    console.log(acumulador);
  }
};

calculo("+", 1, [20, 30, 40, 50]);

// depois:

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

