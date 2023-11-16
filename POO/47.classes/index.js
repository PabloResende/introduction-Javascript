// uma classe é um "jeito" diferente de escrever uma função construtora

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome  = sobrenome;
    }
}

const p1 =  new Pessoa('Pablo', 'Silva')
console.log(p1)

// outro exemplo de classe

class Carro {
    constructor(marca, cor, ano) {
        this.marca = marca;
        this.cor = cor;
        this.ano = ano;
    }
}

const carro1 = new Carro('ford','azul',2002)
console.log(carro1)

