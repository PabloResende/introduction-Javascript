function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    falar() {
      console.log(`${this.nome} está falando`);
    },
    comer() {
      console.log(`${this.nome} está comendo`);
    },
    assistir() {
      console.log(`${this.nome} está assistindo`);
    },
  };
}

const p1 = criaPessoa("Luiz", "Otavio");
console.log(p1);

// dessa forma não é tão interessante, para cada ação é criado um novo método, e isso consome performace

// melhor forma de fazer( desaclopamento):

function criaPessoa(nome, sobrenome) {
  const pessoaPrototype = {
    falar() {
      console.log(`${this.nome} está falando`);
    },
    comer() {
      console.log(`${this.nome} está comendo`);
    },
    assistir() {
      console.log(`${this.nome} está assistindo`);
    },
  };
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

const p2 = criaPessoa("Luiz", "Otavio");
console.log(p1);
