function funcao(a, b =2 ) { // forma melhor de atribuir um valor padrão ao B se por acaso ele não ganhar um mais a frente
    console.log(a + b)
}

funcao(2) // somente o valor de A está sendo passado, portanto B irá assumir seu valor padrão

function conta(operador, acumulador, ...numeros){ 
    // os três pontinhos antes de 'numero' dizem que após os índices de 'operador' e de 'acumulador' todo o resto pertence á 'numeros'
    console.log(operador, acumulador, numeros)
}

conta('+', 0, 20, 30, 40, 50); // dessa forma tudo depois de 0 pertence á 'numeros'
conta('+', 0, [10, 20, 30, 40]) // dessa forma também porém assim não precisa dos três pontinhos