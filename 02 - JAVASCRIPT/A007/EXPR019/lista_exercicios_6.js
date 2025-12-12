// EXPR019 - 1 a 4

// 1. SOLICITE AO USUÁRIO UMA SENHA DE NO MÍNIMO 8 DÍGITOS, CASO ELE DIGITE ALGO MENOR QUE 8 DÍGITOS,
// SOLICITE NOVAMENTE A SENHA, ATÉ QUE ELE DIGITE 8 OU MAIS DÍGITOS. 

console.log('==== SOLICITAR SENHA ====')

let senha = prompt('Digite uma senha (mínimo 8 dígitos): ')

while (senha.length < 8) {
   
    senha = prompt('Senha Inválida! Mínimo 8 dígitos. Digite novamente uma senha:')

}

console.log('Senha cadastrada com sucesso!')

// 2. UTILIZANDO O WHILE, SOLICITE QUE O USUÁRIO DIGITE 3 NÚMEROS DE DIFERENTES VALORES

let lista = []

while (lista.length < 3) {

    let valor = Number(prompt(`Digite o ${lista.length + 1}° valor: `))

    if (lista.includes(valor)) {

        console.log(`Número repetido! Digite um valor diferente!`)

    } else {

        lista.push(valor)
 
    }

}

console.log(`Sucesso! Os números cadastrados foram: ${lista}`)

// 3. SOLICITE AO USUÁRIO UM NÚMERO MÁXIMO PARA CONTAGEM E IMPRIMA TODOS OS VALORES PARES DE 0 AO VALOR DIGITADO

const maximo = Number(prompt(`Digite um valor máximo para contagem: `))

let pares = []

console.log(`Valores pares: `)

for (let i = 0; i <= maximo; i = i + 2) {
    
    pares.push(i)

}

console.log(pares)

// 4. PERCORRA UM ARRAY E IMPRIMA A QUANTIDADE DE VALORES QUE SÃO MAIORES QUE 10

let numeros = [2,5,12,50,3]

let contador = 0

for (let i = 0; i < numeros.length; i++) {

    if (numeros[i] > 10){

        contador++

    }

}

console.log(`Existem ${contador} valores que são maiores que 10.`)