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

// refatorar essa bagaça kk