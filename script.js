let numberOne = prompt("Digite o primeiro número:")
let numberTwo = prompt("Digite o segundo número:")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let mult = numberOne * numberTwo
let div = (numberOne / numberTwo).toFixed(2)
let divRest = numberOne % numberTwo

if(numberOne == numberTwo) {
  alert(`Você inseriu dois números iguais: ${numberOne} e ${numberTwo}`)
} else {
  alert(`Você inseriu dois números diferentes: ${numberOne} e ${numberTwo}`)
}


if (sum % 2 == 0) {
  alert(`A soma dos dois números é ${sum} e o resultado é par.`)
} else {
  alert(`A soma dos dois números é ${sum} e o resultado é impar.`)
}

alert(`A subtração dos dois números é ${sub}`)
alert(`A multiplicação dos dois números é ${mult}`)
alert(`A divisão dos dois números é ${div}`)
alert(`O resto da divisão dos dois números é ${divRest}`)