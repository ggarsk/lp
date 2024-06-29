console.log('Hello, world!') // Mensagem para testar se o JS está linkado corretamente com o HTML.

// Algoritmo de busca linear que explora o funcionamento de funções em js com parâmetros
let num = [10, 12, 16, 18, 22] // Define a lista de números em que o algoritmo deve buscar um número específico

function buscaLinear(num, valorBuscado) { // Função para buscar um número específico na variável da lista de números
    for (let numero of num) { // Loop for que diz "para cada numero da variável num, faça:"
        if (numero === valorBuscado) { // Condição que diz: "se numero for igual ao número específico buscado, retorne true"
            return true // Retorna true se o algoritmo tiver achado o número
        }
    }
    return false // Retorna false se o algoritmo não tiver achado o número
}

if (buscaLinear(num, 120)) { // Chama a função buscaLinear e passa os argumentos para que ela trabalhe. Neste caso, a lista de números e o número que ela deve buscar
    console.log('Valor encontrado!') // Retorna uma mensagem de status positiva para o usuário se o retorno da função for true
} else { 
    console.log('Valor não encontrado') // Retorna uma mensagem de status negativapara o usuário se o retorno da função for false
}

// Algoritmo de busca linear que explora o funcionamento de funções em js com parâmetros
let num2 = [10, 12, 16, 18, 22] // Define a lista de números em que o algoritmo deve buscar um número específico
const valor = 120

function buscaLinear(num2, valor) { // Função para buscar um número específico na variável da lista de números
    for (let numero of num2) { // Loop for que diz "para cada numero da variável num, faça:"
        if (numero === valor) { // Condição que diz: "se numero for igual ao número específico buscado, retorne true"
            return true // Retorna true se o algoritmo tiver achado o número
        }
    }
    return false // Retorna false se o algoritmo não tiver achado o número
}

if (buscaLinear(num2, valor)) { // Chama a função buscaLinear e passa os argumentos para que ela trabalhe. Neste caso, a lista de números e o número que ela deve buscar
    console.log('Valor encontrado!') // Retorna uma mensagem de status positiva para o usuário se o retorno da função for true
} else { 
    console.log('Valor não encontrado') // Retorna uma mensagem de status negativapara o usuário se o retorno da função for false
}

// Talvez você note a diferença entre o algoritmo abaixo da linha 21 e o algoritmo acima da linha 21, mas caso não, eu explico.
// A diferença entre ambos está na forma como quero que o algoritmo pegue o número que quero achar na lista de números.
// Note que, no primeiro algoritmo, eu passo o parâmetro '120' para a função de busca quando vou escrever um console.log (porque ali estamos chamando a função que vai realizar um trabalho), enquanto no segundo algoritmo, eu predefino em uma variável o valor que quero que o algoritmo busque.
// No fim do algoritmo, onde vamos chamar a função, procurar o número e escrever no console uma mensagem de status, eu passo os parâmetros num2 (a lista de números que quero analisar) e valor (o número predefino através de variável que quero que o algoritmo procure).

// Em tese, NADA muda entre os dois. Ambos os algoritmos ainda executam a mesma tarefa. A diferença, agora, está em COMO passamos para o algoritmo a forma que ele deve fazer isso.
