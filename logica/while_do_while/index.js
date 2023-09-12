let i = 0;

while (i <= 10){
    console.log(i)
    // sempre deve se atualizar a variável de controle (i++) após o console.log:
    i ++ // caso contrário i nunca saira de 0, e será sempre verdadeiro portanto imprimirá o i infinitamente
}
// o iterador deve ser definido antes, porém ainda é uma estrutura de controle bem simples e semelhante ao for

// para while iterar sobre string:

const nome = 'pablo';
let index = 0;

while (index < nome.length) {
    console.log(nome[index]);
    index++;
} //fazer iteração com string ou array usando while é desnecessário visto que se tem o for

function random(min, max) { //função que pega um valor aleatório entre um range
    const r = Math.random() * ( max - min) + min;
    return Math.floor(r); // arredonda para baixo
}

let rand = random(1, 50);
console.log(rand)

// o do while roda o código depois checa se a condição é verdadeira
