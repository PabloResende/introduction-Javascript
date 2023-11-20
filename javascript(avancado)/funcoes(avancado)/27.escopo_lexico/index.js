const nome = 'Pablo'

function falaNome() {
    console.log(nome)
}

falaNome() // isso é escopo léxico, acessar outras funções/variáveis de fora do escopo, ou seja, os seus vizinhos

function usaFalaNome () {
    falaNome()
}

usaFalaNome() // o resultado será Pablo, pois essa função executa a de cima que executa a const 'nome'