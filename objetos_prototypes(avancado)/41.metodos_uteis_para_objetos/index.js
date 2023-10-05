/*

Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')

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

const carro = {marca: 'Mercedez', preco: 500.000}
Object.freeze(carro) // com isso nada do objeto 'carro' pode ser alterado

