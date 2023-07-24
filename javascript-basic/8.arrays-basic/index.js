            //012345678910
const nome = 'Pablo Silva'
                // 0       1    2    3    4   
const alunos = ['luiz', 'Anna', 1, true, null]
//não é uma boa prática de programação misturar vários elementos
//em um único array
//para acessar um índice específico do array basta pro colchetes com o índice respectivo
console.log(alunos[1]) // resultado 'Anna' (sem as aspas)
console.log(alunos.length); //contará quantos índices tem no array, que é 5
alunos[alunos.length] = 'Luiza' // além de contar também irá adicionar 'Luiza' ao array
console.log(alunos);
console.log(alunos.length)// resultado será 6
//uma forma mais fácil de adicionar elementos a lista:
alunos.push('Estácio')
console.log(alunos.length) //7
alunos.unshift('Lacerda') //adiciona no início da array
alunos[1] = 'Pablo'
console.log(alunos)
console.log((alunos[1]),'ama muito', (alunos[2]),(alunos[6]),(alunos[7]),(alunos[0]),'!!')
//Pablo ama muito Anna Luíza Estácio Lacerda
alunos.pop()//remove o último
//é possível armazenar o elemento removido em uma constante
//e então chamá lo de acordo com o nome dado a constante atrelado ao mesmo
//é claro que essa associação deve ser feita antes de remover o elemento
console.log(alunos)
//para deletar qualquer elemento pode se usar:
delete alunos[3]
console.log(alunos) //[ 'Lacerda', 'Pablo', 'Anna', <1 empty item>, true, null, 'Luiza' ]
console.log(alunos.slice(0,4))//[ 'Lacerda', 'Pablo', 'Anna', <1 empty item> ]
//slice serve para fatiamento
console.log(typeof alunos) //object
//retorna objeto, e não array
//em java um array é um objeto
console.log(alunos instanceof Array) //True
//essa é uma forma de descobrir se você estpa usando array
//se for True é um array
