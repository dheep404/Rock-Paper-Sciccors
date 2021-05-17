const title = "Rock, Paper, Scissors?";
var playerScore = 0;
var compScore = 0;
var drawScore = 0;

plyScr = document.getElementById("playerScore");
cmpScr = document.getElementById("computerScore");
drawScr = document.getElementById("draw");
resetbutton = document.getElementById("resetScore")

// Have fun!

function playGame(playerMove) {
    let randomNumber = getRandomInt()
    let computerMove = getRandomMove(randomNumber)
    let wins = compareMoves(playerMove, computerMove)
    scoreCard(wins)
}

function getRandomInt() {
    return Math.floor(Math.random() * 3)
}

function getRandomMove(number) {

    if (number == 0) {
        return 'ROCK'
    } else if (number == 1) {
        return 'PAPER'
    } else if (number == 2) {
        return 'SCISSORS'
    }
}

function compareMoves(playerChoice, compChoice) {

    if (playerChoice == compChoice) {
        alert('DRAW')
        return 1
    } else if (
        (playerChoice == 'SCISSORS' && compChoice == 'ROCK') ||
        (playerChoice == 'ROCK' && compChoice == 'SCISSORS') ||
        (playerChoice == 'PAPER' && compChoice == 'ROCK')
    ) {
        alert('COMP WINS')
        return 2
    } else {
        alert('PLAYER WINS')
        return 3
    }
}

function scoreCard(result) {

    if (result == 1) {
        drawScore++
        drawScr.innerHTML = drawScore
    } else if (result == 2) {
        compScore++
        cmpScr.innerHTML = compScore
    } else if (result == 3) {
        playerScore++
        plyScr.innerHTML = playerScore
    }
}

function resetScores() {
    drawScore = 0
    drawScr.innerHTML = drawScore
    compScore = 0
    cmpScr.innerHTML = compScore
    playerScore = 0
    plyScr.innerHTML = playerScore

}









