// IIFE === Imediately invoked function expression

// uma boa forma de criar uma função protegida do escopo global
// tudo dentro dela é isolado, mesmo nomes de variáveis iguais não são dadas como erradas:

(function(){
    const nome = 'Pablo'
    console.log(nome)
})(); // se precisar passar argumentos a algum parâmetro pode se usar esse () no final...
// está função vai ser executada automaticamente
// útil em situações extritamente simples, ou se por acaso tiver que criar todo um sistema isolado

const nome = 'Pedro' // mesmo já tendo uma variável com este nome não dá erro, pois o escopo da função de cima é fechado diferente do de baixo que é global

(function (idade, peso, altura){
    const nome = 'Pablo'
    const sobrenome = 'silva'
})