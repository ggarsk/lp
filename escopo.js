let start = prompt('Olá, mero mortal! Vamos começar esse algoritmo para entendermos sobre escopo e declaração de variáveis em js?(y/n)')

if (start === 'y') {
    const nome = prompt('Qual é seu nome?') // Variável em js do tipo string, definida como const (constante). Significa que o valor da variável não altera até o fim da execução do algoritmo

    let idade = parseInt(prompt('Qual sua idade?')) // Variável em js do tipo number, definida como let. Apesar de seu valor poder alterar (João ficar mais velho), quase sempre a idade é a mesma durante 365 dias. Só siga o roteiro 

    let peso = Number(prompt('quantos quilos você pesa?')) // Variável em js do tipo number, também definida como let. O valor dessa variável pode alterar de um dia pro outro, afinal é o peso de João

    if (idade === 20 || peso === 60 && nome === 'João'){ // Se uma dessas 3 condições forem verdadeiras, entraremos no if. Se não, entraremos no else. || quer dizer "ou". && quer dizer "e"
        console.log(`Entramos no if.`)
    } else {
        console.log('Entramos no else.')
    }

    console.log(`Olá! Seu nome é ${nome}, você tem ${idade} anos e pesa ${peso}kg!`)
} else {
    alert('Que pena :(')
}

// Verificação simples para ver se as variáveis de dentro do primeiro bloco de if podem ser acessadas fora dele
console.log(`Olá! Meu nome é ${nome}, tenho ${idade} anos e peso ${peso}kg!`)
// Claro que, no console, vamos ver a mensagem "Uncaught ReferenceError: nome is not defined", mas esse console.log é para fins de teste e exercitar o conhecimento!



/* 
Neste exemplo podemos ver algumas coisas importantes sobre a definição de variáveis em JavaScript. Para começar, não usamos mais a declaração var por questões de boas práticas e escopo, uma vez que é possível sobrescrever variáveis globais acidentalmente e causar bugs difíceis de identificar.

Em vez disso, usamos const e let para a declaração de variáveis:

const: Para valores que não mudarão durante a execução do algoritmo. É ideal para constantes e valores imutáveis.
let: Para valores que podem ou irão mudar durante a execução do algoritmo.
Ambas as declarações respeitam o escopo de bloco. Ou seja, não podem ser acessadas de fora do bloco onde foram declaradas, como vimos na linha 21 a 23 :)

Uma explicação adicional e importante é que objetos e arrays declarados como const podem ter seus valores internos alterados livremente, mesmo que a referência ao objeto ou array em si não possa ser reatribuída.


const a = 10; // Declara uma variável constante e atribui o valor 10
a = 20; // Aqui tenta mudar o valor, o que vai exibir a mensagem TypeError: Assignment to constant variable

const obj = { key: "value" };
obj.key = "new value"; // Isso é permitido, por que vamos modificar uma propriedade do objeto, não a referência do objeto em si

const arr = [1, 2, 3];
arr.push(4); // Isso é permitido, por que estamos modificando o conteúdo do array, não a referência do array em si
*/

















