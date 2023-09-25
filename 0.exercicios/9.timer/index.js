function getHourToSeconds(seconds) {
  const data = new Date(seconds * 1000);
  return data.toLocaleDateString("pt-BR", {
    hours12: false,
    timeZone: "GMT", // também pode ser UTC, 
    // isso serve para não pegar a minha timezone
  });
}

const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

iniciar.addEventListener("click", function (event) {});
