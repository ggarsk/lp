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
if (fome === "não" || dindin === 'não'){
    console.log('Parece que a janta vai ser em casa hoje :(')
} else if(dindin === 'sim' && restauranteAberto === 'sim'){
    console.log('Hoje a janta vai ser no seu restaurante favorito!')
} else {
    console.log('Peça um delivery!')
}