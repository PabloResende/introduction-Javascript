const nome = 'pablo silva'

for( let i = 0; i < nome.length; i++) {
    console.log(nome[i]) // pablo silva
} 

// com for of:

for (let i of nome) {
    console.log(i) //tem que chamar o iterador senão o resultado será nome sendoo repetido o mesmo tanto de índices dele próprio
}

// for of não funciona com objetos
// for in retorna índice ou chave (arrrays e objetos)
// for clássico funciona com iterações (arrays e strings) 
