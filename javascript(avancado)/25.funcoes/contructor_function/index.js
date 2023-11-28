// função construtora tem que ter a primeira letra maiúscula
// sempre começa com new

function CriaPessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

    const id = 1231341; // isso pode ser visto como um atributo ou método privado, útil para uma validação por exemplo

  this.metodo = function () {
    console.log(this.nome + ": esse é um método");
  };
}

// estes são atributos ou métodos públicos
const p1 = new CriaPessoa("Luiz", "Otávio");
const p2 = new CriaPessoa("Pablo", "Silva");
p2.metodo();
