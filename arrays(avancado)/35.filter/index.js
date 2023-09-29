// nesse exemplo o filter irá retornar números maiores que 10

const numeros = [1, 20, 50, 2, 4, 6, 70, 80, 8, 9, 0, 15, 12];

function callBackFilter(valor) {
  if (valor > 10) {
    return true;
  } else {
    return false;
  }
}
const retornaFiltrados = numeros.filter(callBackFilter);
console.log(retornaFiltrados);

// ou:

const retornaFiltradosClean = numeros.filter((valor) => {
  return valor > 10;
});

console.log(retornaFiltradosClean);
