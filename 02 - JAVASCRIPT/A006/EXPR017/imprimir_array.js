//EXPR017 - 1. Solicite ao usuário 3 nomes por meio do prompt, guarde num array e imprima os nomes quando ele terminar de digitar o terceiro nome.

let nomes = []


const solicitarNomes = () => {

    if (nomes.length < 3) {

        let nome = prompt("Digite o " + (nomes.length + 1) + "° nome: ")
        nomes.push(nome)

        solicitarNomes()

    } else {
        console.log('Os nomes digitados foram: ' + '\n' + nomes)
    }

}

console.log ('==== IMPRIMIR NOMES ====')

solicitarNomes()