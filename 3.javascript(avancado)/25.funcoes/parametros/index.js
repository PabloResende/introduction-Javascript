function funcao(a, b = 2) {
  // forma melhor de atribuir um valor padrão ao B se por acaso ele não ganhar um mais a frente
  console.log(a + b);
}

funcao(2); // somente o valor de A está sendo passado, portanto B irá assumir seu valor padrão

function conta(operador, acumulador, ...numeros) {
  // os três pontinhos antes de 'numero' dizem que após os índices de 'operador' e de 'acumulador' todo o resto pertence á 'numeros'
  for (let numero of numeros) {
    // com 'of' ele pega os numeros de 'numero' e com 'in' pega os índices
    if (operador === "+") {
      acumulador += numero;
    }
    if (operador === "-") {
      acumulador -= numero;
    }
    if (operador === "/") {
      acumulador /= numero;
    }
    if (operador === "*") {
      acumulador *= numero;
    }
    console.log(acumulador);
  }
}

conta("*", 2, 20, 30, 40, 50); // dessa forma tudo depois de 0 pertence á 'numeros'
// conta("+", 0, [10, 20, 30, 40]); dessa forma também, porém assim não precisa dos três pontinhos

// refatorando...

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
