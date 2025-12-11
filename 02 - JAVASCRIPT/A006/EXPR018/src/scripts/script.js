let palavras = []

const adicionarPalavra = () => {
    
    const palavra = document.getElementById('palavra').value

    if (palavra != '') {

        palavras.push(palavra)

        document.getElementById('resultado').textContent = 'Suas palavras cadastradas são: ' + palavras
    } else {
        document.getElementById('resultado').textContent = "Insira uma palavra!"
    }

    document.getElementById('palavra').value = ''

}

const excluirPalavra = () => {

    palavras.pop()

    if (palavras.length >= 1) {
        document.getElementById('resultado').textContent = 'Suas palavras cadastradas são: ' + palavras
    } else {
        document.getElementById('resultado').textContent = 'Sem palavras cadastradas '
    }

}

