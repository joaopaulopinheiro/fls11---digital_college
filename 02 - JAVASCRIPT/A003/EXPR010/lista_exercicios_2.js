// EXPR010 - 1 A 4

//1. PEÇA A IDADE DO USUÁRIO E DIGA SE ELE É MAIOR DE IDADE OU MENOR DE IDADE.

console.log("=== VERIFICAÇÃO DE MAIORIDADE ===")
const idade = Number(prompt("Digite sua idade: "))

if (idade < 18) {
console.log('\nSua idade é de ' + idade + ' anos' + '\nPortanto, você é menor de idade!')
}

if (idade >= 18) {
console.log('\nSua idade é de ' + idade + ' anos' + '\nPortanto, você é maior de idade!')
}

//2. PEÇA A IDADE DO USUÁRIO E DIGA SE ELE É MAIOR DE IDADE OU MENOR DE IDADE (Apenas 1 IF).

console.log("=== VERIFICAÇÃO DE MAIORIDADE ===")

const idadeUsuario = Number(prompt("Digite sua idade: "))
let maioridade = "maior"

if (idadeUsuario < 18) {
maioridade = "menor"
}

console.log("\nSua idade é de " + idadeUsuario + " anos" + "\nPortanto, você é " + maioridade + " de idade!")

/*3. NOSSA LOJA TODA EM PROMOÇÃO, VOCÊ RECEBE 10% DE DESCONTO EM QUALQUER DEPARTAMENTO. SE COMPRAR MAIS DE 500,00 O DESCONTO É DE 15%
 
PEÇA AO USUÁRIO O VALOR TOTAL DA COMPRA. E APLIQUE A LÓGICA CITADA ACIMA, MOSTRANDO O VALOR QUE ELE DEVE PAGAR NO FINAL.*/

console.log("===== DESCONTO 10% OU 15% =====")

const valor = Number(prompt("Digite o valor da sua compra: R$"))

let desconto = valor * 0.90
let mensagem = "10%"

if (valor > 500) {
desconto = valor * 0.85
mensagem = "15%"
}

console.log("\nO valor da sua compra foi de R$" + valor + "\nEntão, o seu desconto foi de " + mensagem + "\nE o total a se pago é de R$" + desconto)

/*4. NOSSA LOJA TODA EM PROMOÇÃO, VOCÊ RECEBE 10% DE DESCONTO EM QUALQUER DEPARTAMENTO. SE COMPRAR MAIS DE 500,00 O DESCONTO É DE 15%
 
PEÇA AO USUÁRIO O VALOR TOTAL DA COMPRA. E APLIQUE A LÓGICA CITADA ACIMA, MOSTRANDO O VALOR QUE ELE DEVE PAGAR NO FINAL. (Adaptação IF ELSE)*/

console.log("===== DESCONTO 10% OU 15% =====")

const valorCompra = Number(prompt("Digite o valor da sua compra: R$"))

let desconto1
let mensagem1

if (valorCompra > 500) {
    desconto1 = valorCompra * 0.85
    mensagem1 = "15%"
} else {
    desconto1 = valorCompra * 0.90
    mensagem1 = "10%"
}

console.log("\nO valor da sua compra foi de R$" + valorCompra + "\nEntão, o seu desconto foi de " + mensagem1 + "\nE o total a se pago é de R$" + desconto1)