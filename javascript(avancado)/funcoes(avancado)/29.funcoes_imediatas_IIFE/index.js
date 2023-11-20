// IIFE === Imediately invoked function expression

// uma boa forma de criar uma função protegida do escopo global
// tudo dentro dela é isolado, mesmo nomes de variáveis iguais não são dadas como erradas:

(function(){
    const nome = 'Pedro'
    console.log(nome)
})(); // se precisar passar argumentos a algum parâmetro pode se usar esse () no final...
// está função vai ser executada automaticamente
// útil em situações extritamente simples, ou se por acaso tiver que criar todo um sistema isolado

const nome = 'Jão'; // mesmo já tendo uma variável com este nome não dá erro, pois o escopo da função de cima é fechado diferente do de baixo que é global
console.log(nome);

(function (idade, peso, altura){
    const nome = 'Pablo'
    const sobrenome = 'silva'
    console.log(`${nome} ${sobrenome}, tem ${idade} anos, ${peso}kg e ${altura} de altura`)
}) (20, 58, 1.65);