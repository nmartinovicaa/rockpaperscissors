const SELECTION_DICT = {0: 'rock', 1: 'paper', 2: 'scissors'}
let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let selectionNumber = Math.floor(Math.random() * (3-0) + 0);
    return SELECTION_DICT[selectionNumber]
}

function playerSelection() {
    let playerChoice = prompt('Pick Rock, Paper, or Scissors')

    while (playerChoice.toLowerCase() !== ('rock') && playerChoice.toLowerCase() !== ('paper') && playerChoice.toLowerCase() !== ('scissors')) {
        alert('Please select Rock, Paper, or Scissors only')
        playerChoice = prompt('Pick Rock, Paper, or Scissors')
    }

    return playerChoice.toLowerCase()
}

function playSingleRound(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        return  `It's a tie!`
    }
    else if (playerSelection === 'rock')
    {
        if (computerSelection === 'paper')
        {
            return `Computer Wins!  ${computerSelection} beats ${playerSelection}`
        }
        else
        {
            return `Player Wins!  ${playerSelection} beats ${computerSelection}`
        }
    }
    else if (playerSelection === 'paper')
    {
        if (computerSelection === 'scissors')
        {
            return `Computer Wins!  ${computerSelection} beats ${playerSelection}`
        }
        else
        {
            return `Player Wins!  ${playerSelection} beats ${computerSelection}`
        }
    }
    else
    {
        if (computerSelection === 'rock')
        {
            return `Computer Wins!  ${computerSelection} beats ${playerSelection}`
        }
        else
        {
            return `Player Wins!  ${playerSelection} beats ${computerSelection}`
        }
    }
}

function play() {

    for (let i = 0; i < 5; i++)
    {
        let roundWinner = playSingleRound(playerSelection(),getComputerChoice())
        if (roundWinner[0] === 'C')
        {
            computerScore++;
        }
        else if (roundWinner[0] === 'P')
        {
            humanScore++;
        }
        console.log(roundWinner)
    }
    console.log(`Final Score: Computer: ${computerScore}    Human: ${humanScore}`)

}
