function saudacao() {
    console.log('bom dia')
}

saudacao(); // sempre que for chamar uma função, é preciso usar os parenteses para que ela seja executada

// é possível passar parâmetros dentro de funções, porém estes argumentos só vão ganhar um valor quando a função for chamada e executada, onde será passado um argumento:

function saudacao(nome) { // aqui é o parâmetro ainda sem valor
    console.log(`bom dia ${nome}`)
}

saudacao('Pablo'); // aqui é o argumento
// assim é melhor já que a função se torta reutilizável

saudacao('Anna'); // 'Bom dia Anna'
saudacao('Jão'); // 'Bom dia Jão'

function saudacao(nome) {
    return `Bom dia ${nome}`;
} // a funcção irá retornar 'undefined' caso não seja usado o 'return'
// sempre use um retorne e não um console.log por exemplo, é uma boa prática
// nada é executado depois de return

const variavel = saudacao('Luiz');
console.log(variavel) // 'Bom dia Luiz'

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2)); // 4
console.log(soma(34, 10)); // 44
console.log(soma(406, 38)); // 444

function nomeSobrenome(nome, sobrenome) {
    const saudacao = `bem vindo ${nome} ${sobrenome}`
    return saudacao;
}

console.log(nomeSobrenome('pablo', 'silva')); // é útil separar dessa forma por vírgula quando for string, caso contrário irá aparecer um undefined após a execução da função
