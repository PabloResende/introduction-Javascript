// jeito foda de fazer

const ePaisagem = (x, y) => x === 1608 && y === 408 ? 'está em modo paisagem' : 'não está em modo paisagem';
console.log(ePaisagem(1608, 408))

// jeito nelson

function ePaisagemNelson(x, y) {
    if (x === 1608 && y === 408) {
        return 'está em modo paisagem'
    } else {
        return 'não está em modo paisagem'
    }
}

const confere = ePaisagemNelson(1366, 768)
console.log(confere)