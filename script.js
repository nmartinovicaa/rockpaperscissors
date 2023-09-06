const SELECTION_DICT = {0: 'rock', 1: 'paper', 2: 'scissors'}
let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let selectionNumber = Math.floor(Math.random() * (3-0) + 0);
    return SELECTION_DICT[selectionNumber]
}

function playerSelection() {


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

const rockButton = document.querySelector(".rock")
const paperButton = document.querySelector(".paper")
const scissorsButton = document.querySelector(".scissors")
const resultsDiv = document.querySelector(".results")
const scoreboardDiv = document.querySelector(".scoreboard")

rockButton.addEventListener('click', function() {
    let winner = playSingleRound('rock',getComputerChoice())
    scoreboardDiv.textContent = ''
    winnerDetermination(winner)
    resultsDiv.textContent = winner
    if (humanScore === 5)
    {
    scoreboardDiv.textContent = `Human wins!!    Computer: ${computerScore}    Human: ${humanScore}`
    humanScore = 0;
    computerScore = 0;
    }
    else if (computerScore === 5)
    {
        scoreboardDiv.textContent = `Computer wins!!    Computer: ${computerScore}    Human: ${humanScore}`
        humanScore = 0;
        computerScore = 0;
    } else {
        scoreboardDiv.textContent = `Computer: ${computerScore}    Human: ${humanScore}`
    }


})

paperButton.addEventListener('click', function() {
    scoreboardDiv.textContent = ''
    let winner = playSingleRound('paper',getComputerChoice())
    winnerDetermination(winner)
    resultsDiv.textContent = winner
    if (humanScore === 5)
    {
    scoreboardDiv.textContent = `Human wins!!    Computer: ${computerScore}    Human: ${humanScore}`
    humanScore = 0;
    computerScore = 0;
    }
    else if (computerScore === 5)
    {
        scoreboardDiv.textContent = `Computer wins!!    Computer: ${computerScore}    Human: ${humanScore}`
    } else {
        scoreboardDiv.textContent = `Computer: ${computerScore}    Human: ${humanScore}`
        humanScore = 0;
        computerScore = 0;
    }

})

scissorsButton.addEventListener('click',function() {
    scoreboardDiv.textContent = ''
    let winner = playSingleRound('scissors',getComputerChoice())
    winnerDetermination(winner)
    resultsDiv.textContent = winner
    if (humanScore === 5)
    {
    scoreboardDiv.textContent = `Human wins!!    Computer: ${computerScore}    Human: ${humanScore}`
    humanScore = 0;
    computerScore = 0;
    }
    else if (computerScore === 5)
    {
        scoreboardDiv.textContent = `Computer wins!!    Computer: ${computerScore}    Human: ${humanScore}`
        humanScore = 0;
        computerScore = 0;
    } else {
        scoreboardDiv.textContent = `Computer: ${computerScore}    Human: ${humanScore}`
    }
    humanScore = 0;
    computerScore = 0;

})


function winnerDetermination(results)
{
    if (results[0] === 'P')
    {
        humanScore++
    } else if (results[0] === 'C')
    {
        computerScore++
    }

}
