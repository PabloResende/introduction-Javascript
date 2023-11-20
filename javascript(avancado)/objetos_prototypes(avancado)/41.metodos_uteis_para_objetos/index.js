/*

Object.values
Object.entries ( mostra os valores do objeto em um array)
Object.assign(des, any)
Object.getOwnPropertyDescriptor (o, 'prop' // retorna as propriedades do objeto, isto é, se o objeto é writable, configurable entre outras)

// já vimos:

... (spread)
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedades)

*/

// assign ou spread:

const produto = { nome: "produto", preco: 1.28 };
const caneca = Object.assign({}, produto, { material: "porcelana" });
// ou
const copo = {
  ...produto,
  material: "vidro",
};

caneca.nome = "Caneca";
caneca.preco = 2.3;
copo.nome = "Copo";
copo.preco = 4;
console.log(produto); // { nome: 'produto', preco: 1.28 }
console.log(caneca); // { nome: 'Caneca', preco: 2.3, material: 'porcelana' }
console.log(copo); // { nome: 'Copo', preco: 4, material: 'vidro' }

//

const carro = { marca: "Mercedez", preco: 500000 };
Object.freeze(carro); // com isso nada do objeto 'carro' pode ser alterado

const nave = { modelo: "AE-27", preco: 5000000 };
