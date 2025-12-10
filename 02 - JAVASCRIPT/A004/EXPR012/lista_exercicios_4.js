// EXPR012 - 1 A 4

/*1. PEÇA AO USUARIO DUAS NOTAS, E INFORME A SITUAÇÃO FINAL
MÉDIA MAIOR OU IGUAL A 7 ESTÁ APROVADO!
MÉDIA ENTRE 4 E 6.7 ESTÁ EM RECUPERAÇÃO
MÉDIA MENORES QUE 4 ESTÁ REPROVADO! */ 

console.log('==== SITUACAO ALUNO ====')

let nota1 = Number(prompt('Digite a primeira nota: '))
let nota2 = Number(prompt('Digite a segunda nota: '))

let media = (nota1 + nota2) / 2

if (media >= 7) {
    console.log('O aluno está APROVADO!')
} else if (media >= 4 && media < 7) {
    console.log('O aluno está em RECUPERACAO!')
} else {
    console.log('O aluno está REPROVADO!')
}

/*2. PEÇA AO USUARIO DUAS NOTAS, E INFORME A SITUAÇÃO FINAL
MÉDIA MAIOR OU IGUAL A 7 ESTÁ APROVADO!
MÉDIA ENTRE 4 E 6.7 ESTÁ EM RECUPERAÇÃO
MÉDIA MENORES QUE 4 ESTÁ REPROVADO! (Sem o OPERADOR &&)*/ 

console.log('==== SITUACAO ALUNO ====')

let notaUm = Number(prompt('Digite a primeira nota: '))
let notaDois = Number(prompt('Digite a segunda nota: '))

let mediaNotas = (notaUm + notaDois) / 2

if (mediaNotas < 4) {
    console.log('O aluno está REPROVADO!')
} else if (mediaNotas < 7) {
    console.log('O aluno está em RECUPERACAO!')
} else {
    console.log('O aluno está APROVADO!')
}

/*3. SOLICITE AO USUARIO SEU NOME E TELEFONE, PASSE ESSES DADOS COMO ARGUMENTOS PARA UMA FUNÇÃO.
A FUNÇÃO DEVE RECEBER OS DADOS E IMPRIMIR A MENSAGEM (MAIUSCULA): 'OLÁ FULANO. SEU NÚMERO É: 85 99999 */

function mensagem(nomeUsuario, contatoUsuario) {
    console.log('OLÁ, ' + nomeUsuario.toUpperCase() + '. SEU NÚMERO É: ' + contatoUsuario)
}

console.log('==== MENSAGEM PERSONALIZADA ====')

const nome = prompt('Digite o seu nome: ')
const telefone = prompt('Digite o seu telefone (11D): ')

mensagem(nome, telefone)

//4. CRIE UMA FUNÇÃO QUE CALCULE O DESCONTO DE IMPOSTO DE RENDA BASEADO NA ALIQUOTA DA TABELA DE IRRF.

function calcularDescontoIR(salarioNovo) {

    if (salarioNovo <= 2428.28) {
        console.log('Nessa faixa de salário, você foi isento de desconto!')

    } else if (salarioNovo <= 2826.65) {
        salarioNovo = salarioNovo * 0.925
        console.log('Nessa faixa de salário, você teve um desconto de 7,5%. Seu salário deduzido ficou: R$' + salarioNovo)

    } else if (salarioNovo <= 3751.05) {
        salarioNovo = salarioNovo * 0.85
        console.log('Nessa faixa de salário, você teve um desconto de 15%. Seu salário deduzido ficou: R$' + salarioNovo)

    } else if (salarioNovo <= 4664.68) {
        salarioNovo = salarioNovo * 0.775
        console.log('Nessa faixa de salário, você teve um desconto de 22,5%. Seu salário deduzido ficou: R$' + salarioNovo)

    } else {
        salarioNovo = salarioNovo * 0.725
        console.log('Nessa faixa de salário, você teve um desconto de 27,5%. Seu salário deduzido ficou: R$' + salarioNovo)
    }

}

console.log('==== CALCULO IMPOSTO DE RENDA ====')

const salarioBruto = Number(prompt('Digite o seu salário: R$'))

calcularDescontoIR(salarioBruto)