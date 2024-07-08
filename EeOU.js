let idade = Number(prompt('Qual sua idade?'))
let nome = prompt('Qual é seu nome?')

if(idade === 20 && nome === 'Gabriel'){ // Verifica se idade é do tipo number e se tem valor de 20 E verifica se nome é do tipo string e tem o valor de 'Gabriel'
    console.log('Seu nome é Gabriel e você tem 20 anos') // o resultado da operação do if com && foi true se essa mensagem entrar no console
}

if(idade === 20 || nome === 'Gabriel'){ // Verifica se idade é do tipo number e se tem o valor de 20 OU se nome é do tipo string e tem o valor de 'Gabriel'
    console.log('Seu nome é Gabriel OU você tem 20 anos') // o resultado da operação do if com || foi true se essa mensagem entrar no console
} else {
    console.log('Seu nome não é Gabriel e você não tem 20 anos') // o resultado da operação do if com || foi false se essa mensagem entrar no console
}

/* OPERADORES LÓGICOS AND e OR
AND - Representado por && - Compara dois valores ou condições e retorna true se ambos forem verdadeiros ou false se um ou outro for false ou ambos forem false.
Ex: 
let a = 20
let b = 10

(a > 19 && b < 19) / true  - 20 é maior que 20 (E) 10 é menor que 19
(a > 21 && b < 19) / false - 20 não é maior que 21 (E) apesar de 10 ser menor que 19

OR - Representado por || - Compara dois valores ou condições e retorna true se pelo menos uma condição for verdadeira. Retorna false quando ambas forem false.
Ex:
let a = 20
let b = 10

(a > 19 || b < 19) / true - 20 é maior que 19 (OU) e 10 é menor que 19
(a > 21 || b < 9)  / false - 20 não é maior que 21 (OU) e 10 não é menor que 9
(a > 30 || b < 12) / true - 20 não é maior que 30 (OU) mas 10 é menor que 12
*/

/* OUTROS OPERADORES LÓGICOS
NOT - Representado por ! - Este operador inverte o valor de uma expressão booleana. Se o valor for true, se tornará false e vice-versa
Ex:
a = true
b = false

(!a) / a agora é false
(!b) / b agora é true
(!(a && b)) / true 
Confesso que fiquei bem confuso com essa linha 41, mas eis aqui a explicação:
! (not) nega O RESULTADO do parênteses (a && b), não o valor booleano de a e b.

Veja
(a && b) é false, se seguirmos que a agora é false e b agora é true
(!(a && b)) é true, por que ! nega o resultado do parênteses interno

Isso explodiu minha mente!
*/

/* RESUMO
&& - AND. Verdadeiro se as todas as condições forem true.
|| - OR. Verdadeiro se pelo menos UMA das condições forem true. Falso se ambas forem false.
!  - NOT. Inverte o valor de uma expressão booleana.
*/

/* COMPARADORES
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