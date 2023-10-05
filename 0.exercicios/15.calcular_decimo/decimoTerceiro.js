function calcularDecimo(numeroMeses) { 
    return (1350 / 12) * numeroMeses;
}

document.addEventListener("DOMContentLoaded", function () {
    const mesesInput = document.getElementById("meses");
    const calcularDecimoButton = document.getElementById("calcularDecimo");
    const decimoResultado = document.getElementById("decimo");

    calcularDecimoButton.addEventListener("click", function () {
        const meses = parseInt(mesesInput.value, 10);

        if (!isNaN(meses)) {
            const decimoTerceiro = calcularDecimo(meses);
            decimoResultado.textContent = `Décimo terceiro: R$ ${decimoTerceiro.toFixed(2)}`;
        } else {
            decimoResultado.textContent = "Por favor, insira um valor válido";
        }
    });
});
