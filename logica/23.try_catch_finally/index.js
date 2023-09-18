try {
  console.log("abri um arquivo"); // é executado
  console.log("manipulei o arquivo e deu erro"); // é executado
  console.log(A); // dá erro e pula pro catch
  console.log("fechei o arquivo"); // não é executado por causa do erro, mesmo não estando errado
} catch {
  console.log("tratando o erro..."); // é executado pois existe um erro
} finally {
  console.log("sempre executa com ou sem erro"); // sempre é executado
}

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    // confere se a data foi enviado e se ela é uma instância de Date
    throw new TypeError("esperando instância de Date"); // se não for uma instância de Date retorna esse erro // throw retorna um erro de tipo, útil para pq é mais específico
  }

  if (!data) {
    data = new Date(); // se data não foi enviada, ela é criada
  }

  return data.toLocaleTimeString("pt-br", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

try {
  const data = new Date("01-01-1970 12:58:00");
  const hora = retornaHora(data); // vai mostrar a hora da data acima, porém se nada for passado como argumento irá printar a data atual
  console.log(hora);
} catch {
  //
} finally {
  console.log("tenha um bom dia");
}
