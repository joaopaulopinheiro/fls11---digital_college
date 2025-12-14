let escolhaMaquina = 0
let resultado = document.getElementById('resultado')

let p = document.createElement('p')
let p2 = document.createElement('p')
let p3 = document.createElement('p')

const escolhaPedra = ()=> {

    resultado.appendChild.p = ''
    resultado.appendChild.p2 = ''
    resultado.appendChild.p3 = ''

    escolhaMaquina = Math.floor(Math.random()* 3) + 1

    p.innerHTML = '<strong>Jogada Escolhida</strong>: Pedra'
    resultado.appendChild(p)

    if (escolhaMaquina == 1) {

        p2.innerHTML = '<strong>Jogada Máquina</strong>: Pedra'
        resultado.appendChild(p2)

        p3.innerHTML = '<strong>Resultado</strong>: Empate'
        resultado.appendChild(p3)
        
    } else if (escolhaMaquina == 2) {
   
        p2.innerHTML = '<strong>Jogada Máquina</strong>: Papel'
        resultado.appendChild(p2)

        p3.innerHTML = '<strong>Resultado:</strong> A máquina venceu!'
        resultado.appendChild(p3)

    } else {

        p2.innerHTML = '<strong>Jogada Máquina</strong>: Tesoura'
        resultado.appendChild(p2)

        p3.innerHTML = '<strong>Resultado:</strong> Você venceu!'
        resultado.appendChild(p3)

    }
    
}

const escolhaPapel = ()=> {

    resultado.appendChild.p = ''
    resultado.appendChild.p2 = ''
    resultado.appendChild.p3 = ''

    escolhaMaquina = Math.floor(Math.random()* 3) + 1

    p.innerHTML = '<strong>Jogada Escolhida</strong>: Papel'
    resultado.appendChild(p)

    if (escolhaMaquina == 1) {

        p2.innerHTML = '<strong>Jogada Máquina</strong>: Pedra'
        resultado.appendChild(p2)

        p3.innerHTML = '<strong>Resultado</strong>: Você venceu!'
        resultado.appendChild(p3)
        
    } else if (escolhaMaquina == 2) {
   
        p2.innerHTML = '<strong>Jogada Máquina</strong>: Papel'
        resultado.appendChild(p2)

        p3.innerHTML = '<strong>Resultado:</strong> Empate'
        resultado.appendChild(p3)

    } else {

        p2.innerHTML = '<strong>Jogada Máquina</strong>: Tesoura'
        resultado.appendChild(p2)

        p3.innerHTML = '<strong>Resultado:</strong> A máquina venceu!'
        resultado.appendChild(p3)

    }
    
}

const escolhaTesoura = ()=> {

    resultado.appendChild.p = ''
    resultado.appendChild.p2 = ''
    resultado.appendChild.p3 = ''

    escolhaMaquina = Math.floor(Math.random()* 3) + 1

    p.innerHTML = '<strong>Jogada Escolhida</strong>: Tesoura'
    resultado.appendChild(p)

    if (escolhaMaquina == 1) {

        p2.innerHTML = '<strong>Jogada Máquina</strong>: Pedra'
        resultado.appendChild(p2)

        p3.innerHTML = '<strong>Resultado</strong>: A máquina venceu!'
        resultado.appendChild(p3)
        
    } else if (escolhaMaquina == 2) {
   
        p2.innerHTML = '<strong>Jogada Máquina</strong>: Papel'
        resultado.appendChild(p2)

        p3.innerHTML = '<strong>Resultado:</strong> Você venceu!'
        resultado.appendChild(p3)

    } else {

        p2.innerHTML = '<strong>Jogada Máquina</strong>: Tesoura'
        resultado.appendChild(p2)

        p3.innerHTML = '<strong>Resultado:</strong> Empate'
        resultado.appendChild(p3)

    }
    
}