const pontuacaoUsuario = 999;

// if else normal:

if (pontoUsuario >= 1000) {
  console.log("Usuário VIP");
} else {
  console.log("Usuário normal");
}

// operador ternário:
// (condicao) ? true : false;

const nivelUsuario =
  pontuacaoUsuario >= 1000 ? "usuário VIP" : "Usuário normal";

// outro jeito:

const corUsuario = "Pink";
const corPadrao = corUsuario || "Preta";

// é importante entender que apesar de  muito prática, pode ser 'perigoso' usa-l0
// em caso de if/else simples, é ótimo, porém para um lógica muito longa fica horrível de ler, e pode dar muita dor de cabeça para adicionar novas condições, isto porque muito provavelmente terá que reescrever boa parte do ternário
