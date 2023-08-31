/* operadores de comparação

> maior que
< menor que
>= maior igual a
<= menor igual a
== igualdade(não recomendado)
=== valor estrita
!= diferente (não recomendado)
!== diferente estrito

*/

console.log(10 > 5); //true, 10 é maior que 5

const expressao = 10 >= 5;
console.log(expressao) //nesse caso, sendo igual ou maior já consta como true

console.log(10 === 10); //true, tanto o valor quanto o tipo são iguais;
console.log(10 === '10') //false, pois o valor é igual mas o tipo é diferente
console.log(10 == '10'); //consta como true mesmo sendo de tipos diferentes

console.log(10 != '10'); //false, mesmo sendo tipos diferentes aponta como iguais, por isso não é recomendado
console.log(10 !== '10'); //true, aqui é o contrário, aponta como diferentes pois são tipos diferentes
