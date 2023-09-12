const frutas = ['maça', 'pera', 'abacaxi']

for( let i in frutas) {
    console.log(frutas[i]) // maça pera abaxi
} // uma forma mais simples de iterar sobre os elementos do array

const pessoa = {
    nome: 'pablo',
    sobrenome: 'silva',
    idade: 20
};

for( let i in pessoa) {
    console.log(pessoa[i]) //pablo silva
}

// for of não funciona com objetos
// for in retorna índice ou chave (arrrays e objetos)
// for clássico funciona com iterações (arrays e strings) 
