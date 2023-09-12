// jeito noob de fazer:

// console.log('linha 0')
// console.log('linha 1')
// console.log('linha 2')
// console.log('linha 3')
// console.log('linha 4')
// console.log('linha 5')

// i = index



for(let i = 0; i <= 5; i++) {
    console.log(`linha ${i}`)
    // enquanto i for menor ou igual á 5 adicina mais 1
} 

// e então a iteração é adicionado ao final de 'linha'
// agora ao invés de usar 6 console.log
// se usa uma simples estrutura de repetição:
// linha 0
// linha 1
// linha 2
// linha 3
// linha 4
// linha 5

// para fazer de forma reversa:

for( let i = 100; i >= 0; i -= 10) { //faz a iteração de 10 em 10
    console.log(i)
}

// para ver se é par ou impar:

for(let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar;'
    console.log(par)
} // se o número é divisível por 2 retorna 'par' se não retorna 'impar'

const frutas = ['maça', 'pêra', 'abacaxi'];

for(let i = 0; i < frutas.length; i++) { // conta quantos índices tem no array usando length
    console.log(`índice ${i}`, frutas[i])
} // também é possível fazer iterações com arrays

