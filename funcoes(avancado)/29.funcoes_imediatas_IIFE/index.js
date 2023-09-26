// IIFE === Imediately invoked function expression

// uma boa forma de criar uma função protegida do escopo global
// tudo dentro dela é isolado, mesmo nomes de variáveis iguais não são dadas como erradas:

(function(){
    const nome = 'Pablo'
    console.log(nome)
})(); // está função vai ser executada automaticamente
// útil em situações extritamente simples

const nome = 'Pedro' // mesmo já tendo uma variável com este nome não dá erro, pois o escopo da função de cima é fechado diferente do de baixo que é global

