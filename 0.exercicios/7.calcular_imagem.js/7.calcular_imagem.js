// jeito sênior

const ePaisagem = (x, y) =>
  x > y ? "está em modo paisagem" : "não está em modo paisagem";

console.log(ePaisagem(1920, 1080));

// jeito específico porém ainda foda:

const ePaisagemFoda = (x, y) =>
  x === 1608 && y === 408
    ? "está em modo paisagem"
    : "não está em modo paisagem";
console.log(ePaisagemFoda(1608, 408));

// jeito nelson

function ePaisagemNelson(x, y) {
  if (x === 1608 && y === 408) {
    return "está em modo paisagem";
  } else {
    return "não está em modo paisagem";
  }
}

const confere = ePaisagemNelson(1366, 768);
console.log(confere);
