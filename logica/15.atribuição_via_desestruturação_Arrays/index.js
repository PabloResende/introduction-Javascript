// atribuição via desestruturação;


let a = 'A'
let b = 'B'
let c = 'C'

console.log(a, b, c); // A B C
// colocar sempre ponto e vírgula depois do console.log

[a, b, c] = [1, 2, 3] // 1 2 3 
// desestruturação das variáveis
// que passam as ter novos valores

console.log(a, b, c);

// ou:

const numeros = [2, 4, 8];
[a, b, c] = numeros

console.log(a, b, c) // 2 4 8
