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
console.log(pessoa1)