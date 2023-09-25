const erro = "número, operador ou acumulador inválido";

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
      : erro;
    console.log(acumulador);
  }
};

calculo("+", 1, [20, 30, 40, 50]);

// refatorar essa bagaça kk

const error = "invalid number or operator";

const accumulator = 0;

const calculation = (operator, number) => {
  
}