// quando se sabe que o código pode gerar um erro, se usa try/catch para que o usuário não veja o erro no console

try {
  console.log(naoExisto);
} catch (err) {
  console.log("naoExisto não existe");
} //forma básica do try e catch


function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("x e y precisam ser números"); // Throw lança o erro e new cria, seguido da mensagem de erro (NÃO PRECISA DO NEW)
    // porém é útil usar o new pois é possível declarar o tipo de erro ocorrido o que ajuda o desenvolvedor
  }

  return x + y; // se o erro for capturado a função não chega ao fim
}

try {
  console.log(soma(1, 2));
  console.log(soma("1", 2));
} catch (error) {
//   console.log(error); // não é legal mostrar o erro na tela
  console.log('ao invés disso, mostre um erro mais amigável')
}


