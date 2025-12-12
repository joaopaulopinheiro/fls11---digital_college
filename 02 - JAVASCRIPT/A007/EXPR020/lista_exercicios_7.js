// EXPR020 - 1 e 2


// 1. Receber uma string e inverter usando for (sem usar funções prontas), exemplo: javascript -> tpircsavaj  

let palavra = prompt(`Digite uma palavra de sua escolha: `)

let inverter = []
let letras = palavra.split('')

for (let i = 1; i <= letras.length; i++) {

    inverter.push(letras[letras.length - i])

}

console.log(`\nA palavra escolhida foi: ${palavra}, ela invertida fica assim ${inverter.join('')}`)


// 2. Exiba o seguinte menu no console: "Digite o número da opção desejada 1 - Calcular média 2 - Calcular IMC 3 - Somar números 4 - Sair " Caso o usuário digite 4, encerrar o programa. Caso digite uma opção inválida, solicite novamente que ele digite uma das opções do menu. Caso ele digite uma das três opções válidas, siga com a função desejada, cada item (de 1 a 3) deve ter uma função separada para realizar o cálculo.

const calcularMEDIA = (valores) => {

    let soma = 0

    for (let i = 0; i < valores.length; i++) {

        soma = soma + valores[i]

    }

    let media = soma/valores.length

    return media

}

const calcularIMC = (peso, altura) => {

    let imc = peso / (altura * altura)
    let resultado = ''

    if (imc < 18.5) {
        resultado = 'Baixo Peso'

    } else if (imc < 24.9) {
        resultado = 'Peso Normal'

    } else if (imc < 29.9) {
        resultado = 'Sobrepeso'

    } else if (imc < 34.9) {
        resultado= 'Obesidade Grau I'

    } else if (imc < 39.9) {
        resultado = 'Obesidade Grau II'

    } else {
        resultado = 'Obesidade Grau III'
    }

    return [imc, resultado]

}

const calcularSOMA = (valores) => {

    let soma = 0

    for (let i = 0; i < valores.length; i++) {

        soma = soma + valores[i]

    }

    return soma

}

let quantidade = 0
let valores = []
let opcao = 0

while (opcao != 4) {
    
    console.log('====   MENU INTERATIVO  ====')
    console.log('==== 1 - Calcular média ====')
    console.log('==== 2 - Calcular IMC   ====')
    console.log('==== 3 - Somar números  ====')
    console.log('==== 4 - Sair           ====')

    opcao = Number(prompt(`Digite o número da opção desejada: `))

    if (opcao == 1) {

        quantidade = Number(prompt(`\nDigite a quantidade de números que deseja calcular: `))

        for (let i = 0; i < quantidade; i++) {

            valores[i] = Number(prompt(`Digite o ${i + 1} valor: `))

        }

        let media = calcularMEDIA(valores)

        console.log(`O cálculo da média foi igual a ${media} \n`)

    } else if (opcao == 2) {

        let peso = Number(prompt(`\nDigite o seu peso(Kg): `))
        let altura = Number(prompt(`Digite sua altura(m): `))

        let resultado = calcularIMC(peso, altura)

        console.log(`O cálculo do IMC foi igual a ${resultado[0].toFixed(1)} \nSua categoria: ${resultado[1]}\n`)

    } else if (opcao == 3) {

        quantidade = Number(prompt(`\nDigite a quantidade de números que deseja calcular: `))

        for (let i = 0; i < quantidade; i++) {

            valores[i] = Number(prompt(`Digite o ${i + 1} valor: `))

        }

        let soma = calcularSOMA(valores)

        console.log(`O cálculo da soma foi igual a ${soma}\n`)

    } else if (opcao > 4) {

        opcao = Number(prompt(`Digite o número da opção desejada: `))

    }

}

console.log(`\nPrograma ENCERRADO!`)