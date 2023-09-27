const criaPessoa = (nome, sobrenome, idade, peso, altura) => {
  return {
    nome,
    sobrenome,
    idade,
    peso,
    altura,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    }
  };
};

// cria duas pessoas usando uma função:
const criaPessoa1 = criaPessoa("Anna", "Luiza", 15, 50, 1.6);
const criaPessoa2 = criaPessoa("Pablo", "silva", 20, 58, 1.6);

console.log(`${criaPessoa2.nome} tem ${criaPessoa2.idade} anos`);
// Pablo tem 20 anos

console.log(criaPessoa1.nomeCompleto);
// Anna Luiza

console.log(criaPessoa2);
// {
//     nome: 'Pablo',
//     sobrenome: 'silva',
//     idade: 20,
//     peso: 58,
//     altura: 1.6,
//     nomeCompleto: [Getter]
//   }

console.log(criaPessoa1.nome, criaPessoa1.sobrenome);
// Anna Luiza