let idade = Number(prompt('Qual sua idade?'))
let nome = prompt('Qual é seu nome?')

if(idade === 20 && nome === 'Gabriel'){
    console.log('Seu nome é Gabriel e você tem 20 anos')
}

if(idade === 20 || nome === 'Gabriel'){
    console.log('Seu nome é Gabriel OU você tem 20 anos')
} else {
    console.log('Seu nome não é Gabriel e você não tem 20 anos')
}

/* OUTROS COMPARADORES
==  - Igualdade         - Esse tipo verifica a igualdade do valor dos itens comparados, não seu tipo. Ex: 2 == '2' / true <- 2 tipo number é igual a 2 tipo string
=== - Estrita igualdade - Esse tipo verifica a iguldade do valor dos itens E o tipo. Ex: 2 === '2' / false <- 2 tipo number não é igual a 2 tipo string
!=  - Diferença         - Esse tipo verifica a diferença do valor dos itens comparados, não seu tipo. Ex: 2 != '2' / false <- 2 tipo number não é diferente de 2 tipo string
!== - Estrita diferença - Esse tipo verifica a diferença do valor dos itens comparados E o tipo. Ex: 2 !== '2' / true <- 2 tipo number é difernte de 2 tipo string

COMPARADORES RELACIONAIS (talvez dispensem explicações haha)
>   - Maior que          - Esse tipo verifica se um número é maior que o outro. Ex: 2 > 1 / true <- 2 é maior que 1   
<   - Menor que          - Esse tipo verifica se um número é menor que o outro. Ex: 2 < 5 / true <- 2 é menor que 5
>=  - Maior ou igual     - Esse tipo verifica se um número é maior OU igual ao outro. Ex: 2 >= 1 / true <- 2 é maior ou igual a 1. | 2 >= 2 /true <- 2 é maior ou igual a 2
<=  - Menor ou igual     - Esse tipo verifica se um número é menor OU igual ao outro. Ex: 2 <= 1 / false <- 2 não é menor ou igual a 1. | 1 <= 2 / true <- 1 é menor ou igual a 2
*/