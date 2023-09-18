try {
    console.log('abri um arquivo') // é executado
    console.log('manipulei o arquivo e deu erro') // é executado
    console.log(A) // dá erro e pula pro catch
    console.log('fechei o arquivo') // não é executado por causa do erro, mesmo não estando errado
} catch {
    console.log('tratando o erro...') // é executado pois existe um erro
} finally {
    console.log('sempre executa com ou sem erro') // sempre é executado
}

function retornaData(data) {
    if (data && !(data instanceof Date)) { // confere se a data foi enviado e se ela é uma instância de Date
        throw new TypeError ('esperando instância de Date') // se não for uma instância de Date retorna esse erro
    }

    if (!data) {
        data = new Date(); // se data não foi enviada, ela é criada
    }
}