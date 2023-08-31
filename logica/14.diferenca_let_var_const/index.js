const verdadeira = true;

// let tem escopo de bloco {...dentro de chaves igual á bloco}
// Var só tem escopo de função

let nome = 'Luiz'; // não pode ser redeclarada
var nome2 = 'Luiz'; // pode ser redeclarada

if (verdadeira) {
    let nome = 'Otávio' // é possível reatribuir um valor a 'let nome = ...' pq aqui é como se fosse outra variável 'let nome = ...'
    var nome2 = 'Rogério' // redeclarando
    console.log( nome, nome2) // Otávio Rogério

    if (verdadeira) {
        var nome2 = 'Ronaldo' // redeclarando
        let nome = 'Outra coisa';
        console.log(nome, nome2) // Outra coisa Ronaldo
        // dentro do escopo do if o que vale é o último valor dado á let nome
        // cada escopo do if diferente tem seu próprio 'let nome', ou seja, dá erro se chamar a variável antes de definir ela, mesmo que ela já exista em outro escopo
    }
}

