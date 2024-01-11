const calculadora = {
  somar: function (x, y) {
    console.log(x + y);
  },
  dividir: function (x, y) {
    console.log(x % y);
  },
  multiplicar: function (x, y) {
    console.log(x * y);
  },
};

const somar = calculadora["somar"];
const dividir = calculadora["dividir"];
const multiplicar = calculadora["multiplicar"];

somar(2, 3);
dividir(4, 4);
multiplicar(6, 5);
