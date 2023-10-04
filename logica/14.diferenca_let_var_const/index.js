const verdadeira = true;

// let tem escopo de bloco {...dentro de chaves igual á bloco}
// Var só tem escopo de função

let nomeLet = "Luiz"; // não pode ser redeclarada
var nomeVar = "Luiz"; // pode ser redeclarada

if (verdadeira) {
  let nomeLet = "Otávio"; // é possível reatribuir um valor a 'let nome = ...' pq aqui é como se fosse outra variável 'let nome = ...'
  var nomeVar = "Rogério"; // redeclarando
  console.log(nomeLet, nomeVar); // Otávio Rogério

  if (verdadeira) {
    var nomeVar = "Ronaldo"; // redeclarando
    let nomeLet = "Outra coisa";
    console.log(nomeLet, nomeVar); // Outra coisa Ronaldo
    // dentro do escopo do if o que vale é o último valor dado á let nome
    // cada escopo do if diferente tem seu próprio 'let nome', ou seja, dá erro se chamar a variável antes de definir ela, mesmo que ela já exista em outro escopo
  }
}
