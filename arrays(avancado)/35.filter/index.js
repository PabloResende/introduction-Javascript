// normal:

const numero = [1, 20, 50, 2, 4, 6, 70, 80, 8, 9, 0, 15, 12];

function callBackFilter(valor) {
  if (valor > 10) {
    return true;
  } else {
    return false;
  }
}

const retornaFiltrados = numero.filter(callBackFilter);
console.log(retornaFiltrados);

// melhor:

const numeros = [1, 20, 50, 2, 4, 6, 70, 80, 8, 9, 0, 15, 12];

const retornaFiltradosClean = numeros.filter((valor) => valor > 10);
console.log(retornaFiltradosClean);
