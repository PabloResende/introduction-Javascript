// construtora -> molde (classe)

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => {
    this.nome + " " + this.sobrenome;
  };
}

// isso é uma instância:

const pessoa1 = new Pessoa("luiz", "algusto");
const pessoa2 = new Pessoa("joão", "paulo");
console.log(pessoa1);

// mais sobre prototypes

const homem = {
  sexo: "masculino",
};

const Pedro = {
  nome: Pedro,
  idade: 20,
  __proto__: homem,
};

Object.setPrototypeOf(Pedro, homem);

const Joao = {
  nome: Joao,
  idade: 17,
  __proto__: homem,
};

Object.setPrototypeOf(Joao, homem);

// outra forma de definir o prototype de um objeto

const moto = {
  tipo: moto,
};

const SusukiIntruder = Object.create(moto);
(SusukiIntruder.ano = 1995),
(SusukiIntruder.cor = "preta")


