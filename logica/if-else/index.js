// 'if' pode ser usado sozinha e apenas ele
//pode ter vários 'else if', porém apenas um 'else' 



const hora = 10;

if (hora >= 0 && hora <= 11) {
    console.log('bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('boa tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('boa noite')
} else {
    console.log('olá') //pro caso da hora estar fora de range
}
//jeito não clean