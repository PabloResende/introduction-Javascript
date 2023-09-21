function fibonacci(n) {
    if (typeof n !== 'number' || n <= 0 || Math.floor(n) !== n) {
        throw new Error('O argumento fornecido deve ser um número inteiro positivo');
    }

    let fib = [0, 1]; // Os primeiros dois números na sequência de Fibonacci

    for(let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; // Calcula o próximo número na sequência
    }

    return fib[n - 1]; // Retorna o n-ésimo número
}

console.log(fibonacci(100))