// regras:

//não podemos criar constantes com palavras reservadas
// constante precisam ter nomes significativos;
// constante não podem começar com números;
// também não podem ter - ou espaços;
// ao invés disso se usa camelCase, exemplo:
// pabloSilva, nomeCompleto;
// as constante são Case-sensitive,
// quer dizer que letras minúsculas e maiúsculas
// são diferentes, ou seja, pablo é diferente de Pablo
// não podemos mudar o valor da constante;
// não utilize var e sim const.

const numero1 = 5;
const numero2 = 10;

const resultado = numero1 * numero2;
const segundoResultado = resultado * 2;

console.log(resultado);
console.log(typeof segundoResultado);
console.log(segundoResultado);
//typeoff serve para ver o tipo

//resultado:

//50
//number
//100