function soma (x, y) { //para criar uma função é usado advinha só? function
    //daí é definido um nome para essa função que irá receber parâmetros

    const resultado = x + y; // aqui os parâmetros estão passando por uma constante que
    // que faz as somas deles, porém estes estão sem valores ainda

    console.log('olá mundo'); //este console log serve para mostrar que nada pode ser passado depois do return

    return resultado; //então é retornado a 'ação' que foi feita com os parâmetros que nesse caso foi a soma
}

const resultado = soma(2, 2); //aqui é onde os valores dos parâmetros é definido
console.log(resultado) // aqui é para visualizar a constante que atribuiu valor aos parâmetros