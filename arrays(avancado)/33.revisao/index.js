const nome = ['anna', 'joana', 'maria'] // array literal
const nomes = new Array ('Pablo', 'James', 'Finn') // construtor do array

nome[2] = 'joão'
console.log(nome) // [ 'anna', 'joana', 'joão' ]
delete nome[2]
console.log(nome) // [ 'anna', 'joana', <1 empty item> ]