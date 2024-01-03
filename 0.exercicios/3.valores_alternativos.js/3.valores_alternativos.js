let varA = 'a';
let varB = 'b';
let varC = 'c'; 
 
//o desafio é fazer as variáveis aparecerem na seguinte ordem: b, c, a
//porém não pode apenas trocar o valor de varA por b diretamente;

const varAtemp = varA;

varA = varB;
varB = varC;
varC = varAtemp;

console.log(varA, varB, varC);

//maneira antiga de fazer
//jeito melhor: 

[varA, varB, varC] = [varB, varC, varA]
