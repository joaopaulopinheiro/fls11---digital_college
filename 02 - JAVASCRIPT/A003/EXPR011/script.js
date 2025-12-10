// EXPR011 - 1 A 3

// 1. PEÇA AO USUÁRIO UM NÚMERO INTEIRO E DIGA SE É PAR OU IMPAR.

console.log('==== IMPAR OU PAR ====')

const numero = Number(prompt('Digite um número inteiro: '))

if (numero % 2 == 0) {
    console.log('O número digitado é PAR')
} else {
    console.log('O número digitado é IMPAR')
}

// 2. PEÇA 3 NÚMEROS AO USUÁRIO E IMPRIMA O MAIOR DELES.

console.log('==== MAIOR NUMERO ====')

const num1 = Number(prompt('Digite um primeiro número: '))
const num2 = Number(prompt('Digite um segundo número: '))
const num3 = Number(prompt('Digite um terceiro número: '))

let maior

if (num1 >= num2 && num2 >= num3) {
    maior = num1
} else if (num3 >= num2){
    maior = num3
} else {
    maior = num2
}

console.log('O maior número entre os três digitados foi: ' + maior)

// 3. GUARDE UMA SENHA SECRETA NUMA VARIÁVEL DO SEU CÓDIGO, PEÇA AO USUÁRIO PARA DIGITAR A SENHA SECRETA, SE ELE ACERTAR IMPRIMA: ACESSO PERMITIDO! CASO CONTRARIO IMPRIMA: ACESSO NEGADO!

console.log('==== SENHA SECRETA ====')

const senha = 1298

let resposta = Number(prompt('Digite uma senha de 4 dígitos: '))

if (senha === resposta) {
    console.log('Acesso Permitido!')
} else {
    console.log('Acesso Negado!')
}