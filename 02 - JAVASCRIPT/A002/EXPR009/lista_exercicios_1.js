// EXPR009 - 1 A 8


// 1. PEÇA AO USUÁRIO DUAS NOTAS, IMPRIMA A MÉDIA DELE.
let nota1 = prompt("Digite a primeira nota: ")
let nota2 = prompt("Digite a segunda nota: ")
let nota1Num = Number(nota1)
let nota2Num = Number(nota2)
let media = (nota1Num + nota2Num) / 2
console.log(media + "\n")

// 2. PEÇA AO USUÁRIO O NOME E O CURSO DELE, IMPRIMA UMA MENSAGEM DE BOAS VINDAS, CONTENDO O NOME E O CURSO NA MENSAGEM.
const nomeUsuario = prompt("Digite o seu nome: ")
const curso = prompt("Digite o seu curso: ")
console.log("Olá, " + nomeUsuario + " do curso de " + curso + "\n" + "Seja muito bem vindo(a)!" + "\n")

// 3. PEÇA AO USUÁRIO O VALOR DE UM PRODUTO, A QUANTIDADE COMPRADA E O VALOR DO DESCONTO. CALCULE O VALOR A PAGAR
let valor = prompt("Digite o valor do produto: ")
let quantidade = prompt("Digite a quantidade comprada: ")
let desconto = prompt("Digite o valor de desconto: ")
const total = (valor * quantidade) - desconto
console.log("O valor final a ser pago é de R$" + total + "\n")

// 4. PEÇA AO USUÁRIO O SEU PESO E ALTURA. CALCULE E IMPRIMA O SEU IMC (ÍNDICE DE MASSA CORPORAL). O IMC É CALCULADO DIVIDINDO O PESO PELA ALTURA AO QUADRADO.
let peso = prompt("Digite o seu peso corporal (kg): ")
let altura = prompt("Digite a sua altura (m): ")
const imc = peso / (altura * altura)
console.log("O seu imc é: " + imc)

//5. Solicite o nome e email do usuário, independente de como ele escreva, imprima uma mensagem com o nome todo maiúsculo e o email minúsculo.

console.log("==== CADASTRO DE EMAIL ====")
let nome = prompt("Digite o seu nome: ")
let email = prompt("Digite o seu email: ")
console.log("\nOlá, " + nome.toUpperCase() + "!\nO email (" + email + ")" + "\nFOI CADASTRADO COM SUCESSO!")

//6. Solicite ao usuário uma temperatura em graus Celsius e imprima o valor da temperatura em grau Fahrenheit.

console.log("==== CONVERSÃO DE TEMPERATURA ====")
let celsius = Number(prompt("Digite uma temperatura (C°): "))
let fahrenheit = 1.8 * celsius + 32
console.log("\nA temperatura de " + celsius + "° celsius equivale a " + fahrenheit + "° fahrenheit!")

//7. Solicite ao usuário o valor de um produto e imprima o valor a pagar, informando que ele teve 15% de desconto.

console.log("==== PRODUTO COM DESCONTO ====")
let valorProduto = Number(prompt('Digite o valor do produto: R$'))
let valorNovo = valorProduto * 0.85
console.log('\nParabéns, você ganhou um desconto de 15% no valor da sua compra.' + "\nO novo valor ficará por R$" + valorNovo)

//8. Solicite ao usuário o valor do salário bruto, desconte 7,5% de IR. Desconte mais 250 reais fixos de INSS. Imprima o valor do salário líquido.

console.log('==== SALÁRIO LÍQUIDO ====')
let salarioBruto = Number(prompt('Digite o valor bruto do seu salário: R$'))
let salarioLiquido = salarioBruto * 0.925 - 250
console.log('\nSalário Bruto: R$' + salarioBruto + '\nDescontos: 7,5% IR e R$250 INSS' + '\nSalário Líquido: R$' + salarioLiquido)