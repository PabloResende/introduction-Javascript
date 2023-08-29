// 'if' pode ser usado sozinha e apenas ele
//pode ter vários 'else if', porém apenas um 'else' 
//pode se usar apenas 'if' e 'else' ou apenas 'if' e 'else if'


//jeito não clean:

const hora = 10;

if (hora >= 0 && hora <= 11) {
    console.log('bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('boa tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('boa noite')
} else {
    console.log('olá');
}

// para deixar o código mais limpo e diminuir a quantidade de if e elses, pode ser usado um operador condicional ternário:

const hour = 10;
const message =
  hour >= 0 && hour <= 11 ? 'bom dia' :
  hour >= 12 && hour <= 17 ? 'boa tarde' :
  hour >= 18 && hour <= 23 ? 'boa noite' :
  'olá';

console.log(message);

//Obs: faça os códigos sempre em inglês!
