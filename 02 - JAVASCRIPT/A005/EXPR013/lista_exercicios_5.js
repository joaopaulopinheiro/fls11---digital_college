// EXPR013 1 A 3

// FAÇA UM PROGRAMA QUE SORTEIE 6 NÚMEROS DA MEGA SENA E IMPRIMA PARA O USUÁRIO.

const megaSena = () => {
  let num1 = Math.floor(Math.random()*61)
  let num2 = Math.floor(Math.random()*61)
  let num3 = Math.floor(Math.random()*61)
  let num4 = Math.floor(Math.random()*61)
  let num5 = Math.floor(Math.random()*61)
  let num6 = Math.floor(Math.random()*61)
  
  if (num1 === num2 || num1 === num3 || num1 === num4 || num1 === num5 || num1 === num6) {
    num1 = Math.floor(Math.random()*61)
    
  } else if (num2 === num3 || num2 === num4 || num2 === num5 || num2 === num6) {
    num2 = Math.floor(Math.random()*61)
      
  } else if (num3 === num4 || num3 === num5 || num3 === num6) {
    num3 = Math.floor(Math.random()*61)
    
  } else if (num4 === num5 || num4 === num6) {
    num4 = Math.floor(Math.random()*61)
    
  } else if (num5 === num6) {
    num5 = Math.floor(Math.random()*61)
    
  } else {
    console.log('Nenhum número repetido!')
  } 
  
  console.log('Bola número 01: ' + num1)
  console.log('Bola número 02: ' + num2)
  console.log('Bola número 03: ' + num3)
  console.log('Bola número 04: ' + num4)
  console.log('Bola número 05: ' + num5)
  console.log('Bola número 06: ' + num6)
}

console.log('==== SORTEIO MEGA SENA ====')

megaSena()


//2. FAÇA UM PROGRAMA QUE SORTEIE 6 NÚMEROS DA MEGA SENA E IMPRIMA PARA O USUÁRIO. (Usando só um IF)

const sorteadorMega = () => {
  let num1 = Math.floor(Math.random()*61)
  let num2 = Math.floor(Math.random()*61)
  let num3 = Math.floor(Math.random()*61)
  let num4 = Math.floor(Math.random()*61)
  let num5 = Math.floor(Math.random()*61)
  let num6 = Math.floor(Math.random()*61)
  
  comparadorMega(num1, num2, num3, num4, num5, num6)
}

const comparadorMega = (num1, num2, num3, num4, num5, num6) => {

  if (num1 != num2 && num1 != num3 && num1 != num4 && num1 != num5 && num1 != num6 && num2 != num3 && num2 != num4 && num2 != num5 && num2 != num6 && num3 != num4 && num3 != num5 && num3 != num6 && num4 != num5 && num4 != num6 && num5 != num6) {
    
    console.log(num1, num2, num3, num4, num5, num6)
                
  } else {
    sorteadorMega()
  }
  
}

console.log('==== SORTEIO MEGA SENA ====')

console.log('Os números sorteados são: ')

sorteadorMega()

//3. SOLICITE AO USUÁRIO UM NÚMERO DE 0 A 10. CASO ELE DIGITE UM NÚMERO VÁLIDO, IMPRIMA O VALOR.
// CASO SEJA UM VALOR FORA DO INTERVALO, IMPRIMA "VALOR INVÁLIDO"

const solicitarNumero = ()=> {
  
  let num = Number(prompt('Digite um número de 0 a 10: '))
  
  if (num >= 0 && num <= 10) {
    console.log('Número digitado: ' + num)
  } else {
    console.log('Número inválido!')
    solicitarNumero(num)
  }
  
} 

console.log('==== SORTEAR NUMERO VALIDO ====')

solicitarNumero()