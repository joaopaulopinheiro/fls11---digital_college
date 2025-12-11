const calcularMEDIA = () => {
    const nota1 = Number(document.getElementById('nota1').value)
    const nota2 = Number(document.getElementById('nota2').value)

    const media = (nota1 + nota2) / 2

    if (media < 5) {
        document.getElementById('resultado-media').textContent = 'MEDIA < 5,0'
        document.getElementById('situacao-media').textContent = 'REPROVADO!'

        document.getElementById('resultado-media').style.backgroundColor = 'red'
        document.getElementById('situacao-media').style.backgroundColor = 'red'

    } else if (media < 7) {
        document.getElementById('resultado-media').textContent = 'MEDIA >= 5,0 e < 7,0'
        document.getElementById('situacao-media').textContent = 'EM RECUPERAÇÃO!'

        document.getElementById('resultado-media').style.backgroundColor = 'orange'
        document.getElementById('situacao-media').style.backgroundColor = 'orange'

    } else {
        document.getElementById('resultado-media').textContent = 'MEDIA >= 7,0'
        document.getElementById('situacao-media').textContent = 'APROVADO!'

        document.getElementById('resultado-media').style.backgroundColor = 'green'
        document.getElementById('situacao-media').style.backgroundColor = 'green'

    }

    document.getElementById('container-media').style.display = 'block'

    if (nota1 != ' ' && nota2 != ' ' && media <= 10 ) {
        document.getElementById('resultado').textContent = "Sua média é igual a " + media
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
    document.getElementById('nota1').value = ' '
    document.getElementById('nota2').value = ' '
    document.getElementById('resultado').textContent = ' '

    document.getElementById('resultado-media').style.backgroundColor = ' '
    document.getElementById('situacao-media').style.backgroundColor = ' '
    document.getElementById('container-media').style.display = 'none'
}