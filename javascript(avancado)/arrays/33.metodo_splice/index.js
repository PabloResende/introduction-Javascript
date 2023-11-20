//               -5       -4     -3       -2       -1
//                0        1      2        3        4
const nomes = ["maria", "jõao", "anna", "pedro", "diego"];

const removidos2 = nomes.slice(-3, 5); // no índice -3 remove até o elemento 5 (não índice)

const removidos = nomes.splice(4, 1); // a partir do índice 4, remove 1 elemento

console.log(nomes, removidos);
// [ 'maria', 'jõao', 'anna', 'pedro' ] [ 'diego' ]

console.log(nomes, removidos2);
// [ 'maria', 'jõao', 'anna', 'pedro' ] [ 'anna', 'pedro', 'diego' ]

/////////////////////////////////////////////////////////////////////////////

const nomes2 = ["maria", "jõao", "anna", "pedro", "diego"];

const removidos3 = nomes2.splice(-2, Number.MAX_VALUE); //no índice -2, remove tudo até o máximo possível á frente

console.log(nomes2, removidos3);
// [ 'maria', 'jõao', 'anna' ] [ 'pedro', 'diego' ]

const addiciona = nomes2.splice(3, 0, "pedro", "diego"); // no índice três adicona os elementos 'pedro' e 'diego'

console.log(nomes2); // [ 'maria', 'jõao', 'anna', 'pedro', 'diego' ] voltou ao que era

const addicionaEremove = nomes2.splice(3, 1, "marco"); // no índice 3 remove 1 elemento e adiciona 'marco

console.log(nomes2); // [ 'maria', 'jõao', 'anna', 'marco', 'diego' ]

/////////////////////////////////////////////////////////////////////////////

const nomes3 = ["maria", "jõao", "anna", "pedro", "diego"];

// pop
console.log(nomes3.splice(-1, 1)) // removeu o último
// [ 'diego' ]

// shift
console.log(nomes3.splice(0, 1)) // remove o primeiro
// [ 'maria' ]

// push
nomes3.splice(nomes3.length, 0, 'otávio') // adiciona no final
console.log(nomes3) // [ 'jõao', 'anna', 'pedro', 'otávio' ]

// unshift

nomes3.splice(0, 1, 'miranda') // adiciona no início
console.log(nomes3) // [ 'miranda', 'anna', 'pedro', 'otávio' ]