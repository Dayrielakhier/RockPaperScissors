let choice = Math.random() * 3

function getComputerChoice() {
    if (choice <= 1) {
        choice = "rock"
    } else if (choice <= 2) {
        choice = "paper"
    } else {
        choice = "scissors"
    }
    return choice
}

function getHumanChoice() {
    return prompt('Please input "rock", "paper", or "scissors".');
}

let humanScore = 0
let computerScore = 0

/* 
1. playRound function takes the human and computer player choices as arguments,
2. plays a single round,
3. increments the round winner's score,
4. logs a winner announcement, such as: "You win! Paper beats Rock",
5. make humanChoice parameter case-insensitive.
*/

function playRound(humanChoice, computerChoice) {
    if (humanChoice === undefined || null) {
        return null
    } else if (!(humanChoice.toLowerCase() === "rock" || 
    humanChoice.toLowerCase() === "paper" || 
    humanChoice.toLowerCase() === "scissors")) {
        return null
    } else {
        humanChoice = humanChoice.toLowerCase()
    };
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors.");
        ++humanScore
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock.");
        ++humanScore
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats paper.");
        ++humanScore
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log ("You lose! Paper beats rock.");
        ++computerScore
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats paper.");
        ++computerScore
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors.");
        ++computerScore
    } else {
        console.log("It's a draw!")
    };
    console.log(`Your score: ${humanScore}; Computer score: ${computerScore}`)
}


/*
1. playGame function calls playRound 5 times to play 5 rounds,
2. keeps track of the scores,
3. declares a winner, a loser or a draw.
*/

function playGame() {
    playRound(getHumanChoice(), getComputerChoice()); 
    playRound(getHumanChoice(), getComputerChoice()); 
    playRound(getHumanChoice(), getComputerChoice()); 
    playRound(getHumanChoice(), getComputerChoice()); 
    playRound(getHumanChoice(), getComputerChoice()); 
    if (humanScore > computerScore) {
        console.log("Human wins. Computer loses.")
    } else if (computerScore > humanScore) {
        console.log("Human loses. Computer wins.")
    } else {
        console.log("It's a draw!")
    }
}

playGame()