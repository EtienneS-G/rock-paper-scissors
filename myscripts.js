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
    } else if (playerSelection=="rock" && computerSelection=="scissors" || playerSelection=="paper" && computerSelection=="rock" || playerSelection=="scissors" && computerSelection=="paper"){
        message = `You Win! ${playerSelection} beats ${computerSelection}`
    } else {
        message = `You Lose! ${computerSelection} beats ${playerSelection}`
    }
    return(message)
}

// Creating a function that allows the game to be played 5 times //

function game(){
    for (let i = 1; i <= 5; i++){
        console.log(playRound(prompt("What is your selection?"),getComputerChoice()))
    }
}

game()
