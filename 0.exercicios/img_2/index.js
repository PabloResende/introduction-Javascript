// Seleciona o elemento HTML com o ID 'formulario' e guarda-o na variável 'form'
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (event) {
    // Adiciona um ouvinte de evento para o evento 'submit' no formulário
    event.preventDefault();
    // Previne o comportamento padrão de envio do formulário, que seria atualizar a página
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');
    // Pego todo o input de altura e peso

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    // Pega o valor das inputs peso e altura

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida');
        return;
    }

    const imc = getImc (); 
});

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criarP () {
    const p = document.createElement('p');
    return p;
}

// Declaração da função 'setResultado', que recebe uma mensagem como parâmetro
function setResultado (msg) {
    const resultado = document.querySelector('#resultado');
    // Seleciona o elemento HTML com o ID 'resultado' e guarda-o na variável 'resultado'
    resultado.innerHTML = '';
    // Limpa o conteúdo dentro do elemento 'resultado'
    const p = criarP();
}
