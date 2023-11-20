// Object.defineProperty() - Object.defineProperties()
// útil em casa de objetos mais 'sensíveis'
// serve para impor 'regras' para a manipulação de objetos

function Produto(nome, preco, estoque) {
  // constructor function
  this.nome, this.preco, this.estoque;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    value: estoque, // valor
    writable: true, // pode alterar? true || false
    configurable: false, // configurável? true || false
    // ou seja o valor de estoque pode ser mudado pois está true (writable)
    // porém não pode ser nem deletado (configurable)
  });

  // quase a mesma coisa, porém mais prática, pq se pode definir mais objetos
  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: nome,
      writable: true,
      configurable: true,
    },
    preco: {
      enumerable: true,
      value: preco,
      writable: true,
      configurable: true,
    },
  });
}

const produto1 = new Produto("camisa", 20, 3);
console.log(produto1);
