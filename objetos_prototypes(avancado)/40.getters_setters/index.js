function produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty (this, 'estoque', {
        enumerable: true,
        configurable: true
    })
}