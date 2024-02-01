i = 10;

return new Promise((resolve, reject) => {
  if (i === 10) {
    resolve(console.log("IS A NUMBER"));
  } else {
    reject(console.log("NaN"));
  }
});

// uma promisse dá forma mais simples o possível

const genero = {
  homem: "homem",
  mulher: "mulher",
};

function Pessoa(nome, idade, generoNasc) {
  const pessoa = Object.create(genero);
  pessoa.nome = nome;
  pessoa.idade = idade;
  pessoa.genero = generoNasc;

  const ConferePessoa = () => {
    return new Promise((resolve, reject) => {
      typeof pessoa.nome === "string" &&
      typeof pessoa.idade == "number" &&
      typeof pessoa.genero === "string"
        ? resolve()
        : reject(new Error("Pessoa não existe"));
    });
  };

  ConferePessoa()
    .then(() => {
      console.log(pessoa1);
    })
    .catch((error) => {
      console.error(error.message);
    });

  return pessoa;
}

const pessoa1 = Pessoa('12', 12, "homem");
