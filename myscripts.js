// creating a variable for each player's score

let playerScore = 0
let computerScore = 0

// add those variables into the HTML

document.querySelector('#player').textContent = playerScore
document.querySelector('#computer').textContent = computerScore

// Making a function that can return the computer's selected weapon //

function getComputerChoice(){
    let number = Math.ceil(Math.random()*3)
    let choice 
    if (number == 1) {
        choice = "rock";
    } else if (number == 2) {
        choice = "paper";
    } else {
        choice = "scissors"
    }
    return(choice)
}

// Making a function that plays a round of rock paper scissors //

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    let message

    if (playerSelection == computerSelection) {
        message = "It's a tie!"
    } else if (playerSelection=="rock" && computerSelection=="scissors" || playerSelection=="paper" && computerSelection=="rock" ||
        playerSelection=="scissors" && computerSelection=="paper") {
        message = `You Win! ${playerSelection} beats ${computerSelection}`
        playerScore++
        document.querySelector('#player').textContent = playerScore
    } else {
        message = `You Lose! ${computerSelection} beats ${playerSelection}`
        computerScore++
        document.querySelector('#computer').textContent = computerScore
    }
    return(message)
}

// creating objects for the DOM elements

let rockButton = document.querySelector('#rock')
let paperButton = document.querySelector('#paper')
let scissorsButton = document.querySelector('#scissors')
let resultsDiv = document.querySelector("#result")

// adding the event listeners to each of the buttons 

rockButton.addEventListener('click', function(e) {
    resultsDiv.textContent = playRound('rock',getComputerChoice())
    console.log(computerScore)
})

paperButton.addEventListener('click', function(e) {
    resultsDiv.textContent = playRound('paper',getComputerChoice())
})

scissorsButton.addEventListener('click', function(e) {
    resultsDiv.textContent = playRound('scissors',getComputerChoice())
})



