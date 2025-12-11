const conversorFahrenheit = () => {
    const celsius = Number(document.getElementById('grau').value)

    const Fahrenheit = (celsius * 1.8) + 32

    document.getElementById('container-conversor').style.display = 'block'

    if (celsius != ' ') {
        document.getElementById('container-header').style.display = 'flex'
        document.getElementById('container').style.alignItems = 'flex-start'

        document.getElementById('cabecalho').textContent = 'Celsius p/ Fahrenheit'
        document.getElementById('resultado-conversor').textContent = Fahrenheit + '° F'

    } else {
        document.getElementById('container-header').style.display = 'none'
        document.getElementById('container').style.alignItems = 'center'
    }

}

const conversorKelvin = () => {
    const celsius = Number(document.getElementById('grau').value)

    const Kelvin = celsius + 273.15

    document.getElementById('container-conversor').style.display = 'block'

    if (celsius != ' ') {
        document.getElementById('container-header').style.display = 'flex'
        document.getElementById('container').style.alignItems = 'flex-start'

        document.getElementById('cabecalho').textContent = 'Celsius p/ Kelvin'
        document.getElementById('resultado-conversor').textContent = Kelvin + '° K'

    } else {
        document.getElementById('container-header').style.display = 'none'
        document.getElementById('container').style.alignItems = 'center'
    }

}

const resetarButao = () => {
    document.getElementById('grau').value = ' '
    document.getElementById('container-conversor').style.display = 'none'

}