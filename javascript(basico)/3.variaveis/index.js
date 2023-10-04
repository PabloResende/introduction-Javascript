// regras:

// variáveis precisam ter nomes significativos;
// variáveis não podem começar com números;
// também não podem ter - ou espaços;
// ao invés disso se usa camelCase, exemplo:
// pabloSilva, nomeCompleto;
// as variáveis são Case-sensitive,
// quer dizer que letras minúsculas e maiúsculas
// são diferentes, ou seja, pablo é diferente de Pablo
// não podemos redeclarar variáveis com let, 
// mas é possível faze-lo de outra forma;
// não utilize var e sim let.
// não podemos criar variáveis com palavras reservadas como class

let nome = 'joão';

console.log(nome, 'nasceu em 1984');
console.log('Em 2000', nome, 'conheceu Maria');
console.log('nome', 'casou se com Maria em 2012');
console.log('Maria teve 1 filho com' ,nome, 'em 2015');
console.log('O filho de', nome ,'se chama Eduardo');

// resultado:

// joão nasceu em 1984
// Em 2000 joão conheceu Maria
// nome casou se com Maria em 2012
// Maria teve 1 filho com joão em 2015
// O filho de joão se chama Eduardo
