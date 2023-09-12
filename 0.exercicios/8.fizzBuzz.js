// escreva uma função que recebe um número e retorna;
// número é divisível por 3 = fizz
// número é divisível por 5 = buzz
// número é divisível por 2 e por 5 = FizzBuzz
// Número não é divisível por 3 nem por 5 retorna o próprio número
// use a função com números de 10 a 100

const FizzBuzz = (n) => n % 3 === 0 && n % 5 === 0 ? 'FizzBuzz' : n && n % 5 === 0 ? 'Buzz' : n && n % 3 === 0 ? 'Fizz' : n;

for (let i = 0; i <= 100; i ++) {
    console.log( i, FizzBuzz(i))
}