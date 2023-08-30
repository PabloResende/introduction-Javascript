// Seleciona o elemento HTML com o ID 'formulario' e guarda-o na variável 'form'
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (event) {
    // Adiciona um ouvinte de evento para o evento 'submit' no formulário
    event.preventDefault();
    // Previne o comportamento padrão de envio do formulário, que seria atualizar a página
    console.log('envento previnido')
    // Exibe uma mensagem no console para indicar que o evento foi prevenido
    setResultado('olá mundo!')
    // Chama a função 'setResultado' passando a mensagem 'olá mundo!'
});

// Declaração da função 'setResultado', que recebe uma mensagem como parâmetro
function setResultado (msg) {
    const resultado = document.querySelector('#resultado');
    // Seleciona o elemento HTML com o ID 'resultado' e guarda-o na variável 'resultado'
    resultado.innerHTML = '';
    // Limpa o conteúdo dentro do elemento 'resultado'
    const p = document.createElement('p');
    // Cria um novo elemento HTML do tipo 'p' (parágrafo)
    p.classList.add('paragrafo-resultado');
    // Adiciona a classe 'paragrafo-resultado' ao elemento 'p'
    p.innerHTML = 'Qualquer coisa';
    // Define o conteúdo interno do elemento 'p' como 'Qualquer coisa'
    resultado.appendChild(p);
    // Adiciona o elemento 'p' como filho do elemento 'resultado'
}
