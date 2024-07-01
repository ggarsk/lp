let nome = prompt('Olá, usuário(a)! Insira seu nome:')
let idade = parseInt(prompt('Agora insira sua idade:'))
let altura = parseFloat(prompt('E quanto você tem de altura?'))
let peso = parseFloat(prompt('Quanto você pesa?'))

if (isNaN(idade) || isNaN(altura) || isNaN(peso)){
    alert('Por favor, insira valores válidos. Apenas números...')
} else {
    let imc = peso / (altura * altura)

    let limites = [
        { limite: 20, msg: `Você está abaixo do peso! Seu IMC é ${imc}.` },
        { limite: 25, msg: `Peso Ideal. Seu IMC é ${imc}.` },
        { limite: 30, msg: `Sobrepeso. Seu IMC é ${imc}.` },
        { limite: 35, msg: `Obesidade Moderada. Seu IMC é ${imc}.` },
        { limite: 40, msg: `Obesidade Severa. Seu IMC é ${imc}.` },
        { limite: 50, msg: `Obesidade Mórbida. Seu IMC é ${imc}.` }
    ]
    let mensagem = limites.find(item => imc <= item.limite)
    if (mensagem) {
        alert(mensagem.msg)
    } else {
        alert('O IMC é muito alto para os limites configurados.')
    }
}
