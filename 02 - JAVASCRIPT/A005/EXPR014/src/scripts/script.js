const calcularIMC = () => {
    const peso = Number(document.getElementById('peso').value)
    const altura = Number(document.getElementById('altura').value)

    const imc = peso / (altura * altura)

    if (imc < 18.5) {
        document.getElementById('resultado-imc').textContent = 'IMC < 18,5 Kg/m2'
        document.getElementById('classificacao-imc').textContent = 'Baixo Peso'

        document.getElementById('resultado-imc').style.backgroundColor = 'yellow'
        document.getElementById('classificacao-imc').style.backgroundColor = 'yellow'

    } else if (imc < 24.9) {
        document.getElementById('resultado-imc').textContent = 'IMC >= 18,5 e < 24,9 Kg/m2'
        document.getElementById('classificacao-imc').textContent = 'Peso Normal'

        document.getElementById('resultado-imc').style.backgroundColor = 'green'
        document.getElementById('classificacao-imc').style.backgroundColor = 'green'

    } else if (imc < 29.9) {
        document.getElementById('resultado-imc').textContent = 'IMC >= 25 e < 29,9 Kg/m2'
        document.getElementById('classificacao-imc').textContent = 'Sobrepeso'

        document.getElementById('resultado-imc').style.backgroundColor = 'orange'
        document.getElementById('classificacao-imc').style.backgroundColor = 'orange'

    } else if (imc < 34.9) {
        document.getElementById('resultado-imc').textContent = 'IMC >= 30 e < 34,9 Kg/m2'
        document.getElementById('classificacao-imc').textContent = 'Obesidade Grau I'

        document.getElementById('resultado-imc').style.backgroundColor = 'red'
        document.getElementById('classificacao-imc').style.backgroundColor = 'red'

    } else if (imc < 39.9) {
        document.getElementById('resultado-imc').textContent = 'IMC >= 35 e < 39,9 Kg/m2'
        document.getElementById('classificacao-imc').textContent = 'Obesidade Grau II'

        document.getElementById('resultado-imc').style.backgroundColor = 'firebrick'
        document.getElementById('classificacao-imc').style.backgroundColor = 'firebrick'

    } else {
        document.getElementById('resultado-imc').textContent = 'IMC >= 40 Kg/m2'
        document.getElementById('classificacao-imc').textContent = 'Obesidade Grau III'

        document.getElementById('resultado-imc').style.backgroundColor = 'darkred'
        document.getElementById('classificacao-imc').style.backgroundColor = 'darkred'
    }

    document.getElementById('container-imc').style.display = 'block'

    if (peso != ' ' && altura != ' ' ) {
        document.getElementById('resultado').textContent = "Seu IMC é igual a " + imc
        document.getElementById('container-header').style.display = 'flex'
        document.getElementById('container').style.alignItems = 'flex-start'
        

    } else {
        document.getElementById('resultado').textContent = "INFORME OS DADOS CORRETAMENTE!"
        document.getElementById('resultado').style.backgroundColor = "#404040"
        document.getElementById('resultado').style.color = "white"
        document.getElementById('resultado').style.padding = "5px 10px"
        document.getElementById('container-header').style.display = 'none'
        document.getElementById('container').style.alignItems = 'center'
    }

}

const resetarButao = () => {
    document.getElementById('peso').value = ' '
    document.getElementById('altura').value = ' '
    document.getElementById('resultado').textContent = ' '

    document.getElementById('resultado-imc').style.backgroundColor = ' '
    document.getElementById('classificacao-imc').style.backgroundColor = ' '
    document.getElementById('container-imc').style.display = 'none'
}