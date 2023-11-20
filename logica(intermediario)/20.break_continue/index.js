const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let numero of numeros) {

if (numero === 2 || numero === 5) { // quando chega em 2 e 5 pula
    continue;
    } // após o continue, todo o resto é pulado e volta pro ínicio do laço

if (numero === 4) {
    console.log('esse número fugiu')
    continue
}

if (numero === 9) {
    break // se break for true para aqui
}
    
    console.log(numero)
}
