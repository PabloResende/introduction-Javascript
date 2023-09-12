// número é divisível por 3 retorna fizz
// número é divisível por 5 retorna buzz
// número é divisível por 2 e por 5 retorna FizzBuzz
// Número não é divisível por 3 nem por 5 retorna o próprio número
// use a função com números de 10 a 100

// pro 

const FizzBuzz = (n) => n % 3 === 0 && n % 5 === 0 ? 'FizzBuzz' : n && n % 5 === 0 ? 'Buzz' : n && n % 3 === 0 ? 'Fizz' : n;

for (let i = 0; i <= 100; i ++) {
    console.log(i, FizzBuzz(i))
}

// noob

function FizzBuzz(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero
}

for (let i = 0; i <= 100; i++) {
    console.log(i, FizzBuzz(i))
}
