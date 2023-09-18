function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-br', {
        hour12: false
    })
}

console.log(mostraHora()); // função básica que retorna hora atual