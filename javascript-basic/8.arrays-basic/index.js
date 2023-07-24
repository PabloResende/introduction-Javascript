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
