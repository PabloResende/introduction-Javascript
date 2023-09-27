// factory function

function criaPessoa(nome, altura, peso) {
  return {
    nome,

    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },

    fala(assunto) {
      // quando uma função está dentro de outra o nome disso é método
      return `${nome} ${this.sobrenome} está falando sobre ${assunto}`;
    },

    sobrenome: "Otávio", // a única forma de acessar 'sobrenome' é através do 'this'
    peso: peso,
    altura: altura,

    // getter   se usa para quando só se quer obter o valor
    get imc() {
      // usar o get faz com que imc finja ser um atributo do objeto
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2); // até duas casas decimais
    },
  };
}

const p1 = criaPessoa("Luiz", 1.6, 59);
console.log(p1.imc);
console.log(p1.fala("JavaScript"));
console.log(p1.sobrenome); // isso é igual usar this