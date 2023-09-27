

function criaPessoa(nome) {
    return {
        nome,
        fala(assunto) { // quando uma função está dentro de outra o nome disso é método
            return `${nome} ${this.sobrenome} está falando sobre ${assunto}`
        },
        sobrenome: 'Otávio' // a única forma de acessar 'sobrenome' é através do 'this'
    };
}

const p1 = criaPessoa ('Luiz');
console.log(    p1.fala('JavaScript'))
console.log(p1.sobrenome) // isso é igual usar this