const pontuacaoUsuario = 999;

//if else normal:

if (pontoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal');
}

//operador ternário:
// (condicao) ? true : false;

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'usuário VIP' : 'Usuário normal';

//outro jeito:

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preta'
