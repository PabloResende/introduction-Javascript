const a1 = [1, 2, 3, 4, 5, 6, 7, 8];

for (let valor of a1) {
  console.log(valor);
} // 1 2 3 4 5 6 7 8

// ou...
console.log("----------------------------------------");

a1.forEach((valor) => console.log(valor)); // mesma coisa do de cima

// para somar, tipo um reduce

let total = 0;

a1.forEach(valor => total += valor)
console.log(total) // 26
