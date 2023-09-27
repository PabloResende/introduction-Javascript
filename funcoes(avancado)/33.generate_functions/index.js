function* Geradora () {
    yield 'primeiro'

    yield 'segundo'

    yield 'terceiro'
}

const g1 = Geradora();
console.log(g1.next().value) // primeiro
console.log(g1.next().value) // segundo
console.log(g1.next().value) // terceiro
// a cada console.log vai para o próximo 'yield'
for( let valor of g1) {
    console.log(valor) // isso ira imprimir a mesma coisa de cima porém só se não tiver esses console.log
}