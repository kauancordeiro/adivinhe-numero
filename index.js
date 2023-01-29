let computerNumber
let userNumbers = []
let attempts = 0
let maxGuesses = 9

function newGame() {
    window.location.reload()
}

function init() {

    computerNumber = Math.floor(Math.random() * 100 + 1)
    console.log(computerNumber)
    document.getElementById("textOutput").innerHTML = "Dificuldade: Fácil (10 tentativas)<br><br> Insira o número abaixo:"



}
console.log(maxGuesses)

function easy() {
    maxGuesses = 9
    console.log(maxGuesses)
    document.getElementById("textOutput").innerHTML = "Dificuldade: Fácil (10 tentativas)<br><br> Insira o número abaixo:"
}
function medium() {
    maxGuesses = 5
    console.log(maxGuesses)
    document.getElementById("textOutput").innerHTML = "Dificuldade: Médio (6 tentativas)<br><br> Insira o número abaixo:"
}
function hard() {
    maxGuesses = 2
    console.log(maxGuesses)
    document.getElementById("textOutput").innerHTML = "Dificuldade: Dificil (3 tentativas)<br><br> Insira o número abaixo:"
}



function compareNumbers() {
    const userNumber = Number(document.getElementById("inputBox").value)
    if (userNumber <= 100) {
        userNumbers.push(" " + userNumber)
        document.getElementById("guesses").innerHTML = userNumbers

        if (attempts < maxGuesses) {
            if (userNumber > computerNumber) {
                document.getElementById("textOutput").innerHTML = "Seu número é mais alto"
                document.getElementById("inputBox").value = ""
                attempts++
                document.getElementById("attempts").innerHTML = attempts
            }
            else if (userNumber < computerNumber) {
                document.getElementById("textOutput").innerHTML = "Seu número é mais baixo"
                document.getElementById("inputBox").value = ""
                attempts++
                document.getElementById("attempts").innerHTML = attempts
            }
            else {
                document.getElementById("textOutput").innerHTML = "Você acertou!!"
                document.getElementById("attempts").innerHTML = attempts
                document.getElementById("inputBox").setAttribute("Readonly", "Readonly")
            }
        } else {
            attempts++
            document.getElementById("attempts").innerHTML = attempts
            document.getElementById("textOutput").innerHTML = "Você perdeu, a resposta é: " + computerNumber
            document.getElementById("inputBox").setAttribute("Readonly", "Readonly")
        }
    }
    else {
        document.getElementById("textOutput").innerHTML = "Digite um número menor ou igual a 100"
    }
}




