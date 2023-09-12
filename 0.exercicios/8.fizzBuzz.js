// escreva uma função que recebe um número e retorna;
// número é divisível por 3 = fizz
// número é divisível por 5 = buzz
// número é divisível por 2 e por 5 = FizzBuzz
// Número não é divisível por 3 nem por 5 retorna o próprio número
// checa se é um número
// use a função com números de 10 a 100

const Fizz = (x) => x % 3 === 0 ? 'Fizz' : x;
const Buzz = (y) => y % 5 === 0 ? 'Buzz' : y;
const FizzBuzz = (z) => z % 5 && 3 === 0 ? 'FizzBuzz' : z;

console.log(Fizz(9), Buzz(10), FizzBuzz(25))