function funcao(a, b =2 ) { // forma melhor de atribuir um valor padrão ao B se por acaso ele não ganhar um mais a frente
    console.log(a + b)
}

funcao(2) // somente o valor de A está sendo passado, portanto B irá assumir seu valor padrão