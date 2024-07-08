// Script de exercício para colocar em prática IF/ELSE e operadores lógicos E e OU

let fome = prompt('Ei! Você está com fome?')
let dindin = prompt('E você tem dinheiro?')
let restauranteAberto = prompt('Seu restaurante favorito está aberto?')

if(fome === 'não'){
    console.log('Parece que a janta vai ser em casa hoje :(')
} else if(dindin === 'não' || restauranteAberto === 'não'){
    console.log('Parece que a janta vai ser em casa hoje :(')
} else if(dindin === 'sim' && restauranteAberto === 'sim'){
    console.log('Hoje a janta vai ser no seu restaurante favorito!')
}














