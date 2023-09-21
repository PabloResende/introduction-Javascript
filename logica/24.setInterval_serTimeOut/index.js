function mostraHora() {
  let data = new Date();

  return data.toLocaleTimeString("pt-br", {
    hour12: false,
  });
}

console.log(mostraHora()); // função básica que retorna hora atual

const timer = setInterval(function () {
  console.log(mostraHora());
}, 1000); // cria uma função anonima que tem a tarefa de executar 'mostraHora' a cada 1000s

setTimeout(function () {
  clearInterval(timer);
}, 5000);

// diferente de setInterval, setTimout só é executado uma vez após chegar no tempo estipulado

setTimeout(() => {
  console.log("olá");
}, 1000); // como o tempo desse setTimeout é menor que o de cima ele é executado durante:

// 15:00:17
// 15:00:18
// olá
// 15:00:19
// 15:00:20
// 15:00:21

const mensagem = setInterval(() => {
  console.log("ei");
}, 1000); // forma simples de fazer uma mensagem aparecer a cada determinado intervalo

const paraIntervalo = setTimeout( function(){
    clearInterval(mensagem) // forma útil de parar um intervalo
}, 5000)