// Script de exercício para colocar em prática IF/ELSE e operadores lógicos E e OU

let fome = prompt('Ei! Você está com fome? (sim/não)')
let dindin = prompt('E você tem dinheiro? (sim/não)')
let restauranteAberto = prompt('Seu restaurante favorito está aberto? (sim/não)')

// PRIMEIRA RESOLUÇÃO EM QUE CHEGUEI
// if(fome === 'não'){
//     console.log('Parece que a janta vai ser em casa hoje :(')
// } else if(dindin === 'não' || restauranteAberto === 'não'){
//     console.log('Parece que a janta vai ser em casa hoje :(')
// } else if(dindin === 'sim' && restauranteAberto === 'sim'){
//     console.log('Hoje a janta vai ser no seu restaurante favorito!')
// } else if(dindin === 'sim' && restauranteAberto === 'não'){
//     console.log('Peça um delivery!')
// }

// RESOLUÇÃO QUE CHEGUEI AO PENSAR MELHOR
if (fome === "não" || dindin === 'não'){ // Se não tiver fome OU não tiver dinheiro, a janta será em casa
    console.log('Parece que a janta vai ser em casa hoje :(')
} else if(dindin === 'sim' && restauranteAberto === 'sim'){ // A linha 19 já verifica se tem fome ou não. Se tiver, entra neste bloco. Agora, se tiver dinheiro e o restaurante estiver aberto, a janta será no restaurante favorito
    console.log('Hoje a janta vai ser no seu restaurante favorito!')
} else { // Se tiver dinheiro mas o restaurante estiver fechado, peça um deliver OU se não tiver dinheiro para o restaurante, peça um delivery
    console.log('Peça um delivery!')
}