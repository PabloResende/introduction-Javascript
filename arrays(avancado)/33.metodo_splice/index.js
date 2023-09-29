//               -5       -4     -3       -2       -1 
//                0        1      2        3        4
const nomes = ['maria', 'jõao', 'anna', 'pedro', 'diego']

const removidos2 = nomes.slice(-3, 5) // a partir de -3
// remove até o elemento 5 (não índice)
const removidos = nomes.splice(4, 1); // a partir do índice 4, remove 1 elemento
console.log(nomes, removidos)
// [ 'maria', 'jõao', 'anna', 'pedro' ] [ 'diego' ]
console.log(nomes, removidos2)
// [ 'maria', 'jõao', 'anna', 'pedro' ] [ 'anna', 'pedro', 'diego' ]

