// camisa, lapis, caneca === produto
// é isso o que esses três item tem em comum
// porém cada item tem suas específicações como
// camisa = cor, caneca = material (exemplo)

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};

Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco); 
  // dessa forma eu estou linkando 'Camiseta' á 'Produto'
}
