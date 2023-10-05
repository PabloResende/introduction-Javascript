// Função para calcular o salário
function calcularSalario(numeroDias) {
    return numeroDias * 45;
}

document.addEventListener("DOMContentLoaded", function() {
    const diasInput = document.getElementById("dias");
    const calcularButton = document.getElementById("calcular");
    const resultado = document.getElementById("resultado");

    calcularButton.addEventListener("click", function() {
        const numeroDias = parseInt(diasInput.value, 10);

        if (!isNaN(numeroDias)) {
            const salario = calcularSalario(numeroDias);
            resultado.textContent = `Salário calculado: R$ ${salario.toFixed(2)}`;
        } else {
            resultado.textContent = "Por favor, insira um número válido de dias.";
        }
    });
});
