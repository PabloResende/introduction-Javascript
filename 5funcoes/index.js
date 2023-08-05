function soma (x, y) { //para criar uma função é usado advinha só? function
    //daí é definido um nome para essa função que irá receber parâmetros

    const resultado = x + y; // aqui os parâmetros estão passando por uma constante que
    // que faz as somas deles, porém estes estão sem valores ainda

    console.log('olá mundo'); //este console log serve para mostrar que nada pode ser passado depois do return

    return resultado; //então é retornado a 'ação' que foi feita com os parâmetros que nesse caso foi a soma
}

const resultado = soma(2, 2); //aqui é onde os argumentos dos parâmetros são definidos
console.log(resultado) // aqui é para visualizar a constante que atribuiu valor aos parâmetros

// --------------------------------------------- // ------------------------------------------------------ //

//outra forma de fazer funções:

const raiz = function (n) {
    return n ** 0.5 //ou 1/2
}; //precisa terminar com ; nesse jeito de fazer

console.log(raiz(9));
console.log(raiz(25));
console.log(raiz(65));
