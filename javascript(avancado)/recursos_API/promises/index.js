// no sentido literal, é uma promessa

// serve para resolver o problema das 'callbacks'
// que é uma forma horrível de faze-lo

// resolve ou reject não é obrigatório, porém é de uso geral

function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function waitPlease(msg, time) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject('BAD VALUE');
    setTimeout(() => {
      resolve(msg);
    }, time);
  });
}

waitPlease("Tentando conexão com o banco...", rand(1, 3))
  .then((answer) => {
    console.log(answer);
    return waitPlease("Buscando dados...", rand(1, 3));
  })
  .then((answer) => {
    console.log(answer);
    return waitPlease(123, rand(1, 3));
  })
  .then(() => {
    console.log("Exibe os dados"
);
  })
  .catch((error) => {
    console.log(error); 
  }); // nada é executado após o erro

// Promise.all mostra todas as promeses juntas
// Promise.race retorna o que tiver pronto primeiro, mas continua executando


