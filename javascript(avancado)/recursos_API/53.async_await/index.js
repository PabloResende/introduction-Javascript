function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function waitPlease(msg, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("Bad Value");
        return;
      }
      resolve(msg.toUpperCase() + " - Passei na promise");
    });
  });
}

async function executa() {
  const fase1 = await waitPlease("fase 1", rand(1, 3));
  console.log(fase1);
  const fase2 = await waitPlease("fase 2", rand(1, 3));
  console.log(fase2);
  const fase3 = await waitPlease("fase 3", rand(1, 3));
  console.log(fase3);
}
executa()

// dessa forma fica mais clean, e evitamos cenários semelhantes ao 'callback hell'

// para tratar erros é bem simples, basta englobar tudo dentra do escopo da função em um enorme try/catch:

async function executa() {
    try {
        const fase1 = await waitPlease("fase 1", rand(1, 3));
        console.log(fase1);
        const fase2 = await waitPlease("fase 2", rand(1, 3));
        console.log(fase2);
        const fase3 = await waitPlease(123  , rand(1, 3)); // vai dar erro
        console.log(fase3);
    } catch(e) {
        console.error(e);
    }
  }
  executa()

  // antes de uma promise for resolvido, ela fica em estado pendente:

  // pending -> pendente
  // fullfilled -> resolvida
  // rejected -> rejeitada