//captura o formulário do html
const form = document.querySelector("#formulario");

//adicionou um envemto de escutar
form.addEventListener("submit", function (event) {
  event.preventDefault(); //previnou o formulário de ser enviado
  const inputPeso = event.target.querySelector("#peso");
  const inputAltura = event.target.querySelector("#altura"); //capturou os inputs

  const peso = Number(inputPeso.value); //capturou os valores dos inputs
  const altura = Number(inputAltura.value); //tentou converter para number

  if (!peso) {
    setResultado("Peso inválido", false);
    return;
  }

  if (!altura) {
    setResultado("Altura inválida");
    return;
  }

  const imc = getImc(peso, altura); //calcula imc
  const nivelImc = getNivelImc(imc); //pega os níveis de imc

  const msg = `Seu imc é ${imc} (${nivelImc}).`
  
  setResultado(msg, true)
});

function getNivelImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.9) return nivel[1];
  if (imc < 18.5) return nivel[0];
} //baseado no imc, busca um indice do array
//foi feito de trás pra frente para que ao achar o imc ainda continue a buscar pra evitar erros 

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2); //função que calcula imc
}

function criarP() {
  const p = document.createElement("p");
  return p; //apenas cria um paragrafo
}

function setResultado(msg, isValid) { //recebe uma mensagem e vê se o resultado é válido
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = ""; //limpa o html

  const p = criarP(); //chama a função que cria parágrafo

  if (isValid) {
   p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad')
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
