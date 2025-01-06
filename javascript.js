let choice = Math.random() * 3

function getComputerChoice() {
    if (choice <= 1) {
        choice = "rock"
    } else if (choice <= 2) {
        choice ="paper"
    } else {
        choice = "scissors"
    }
    return choice
}

function getHumanChoice() {
    return prompt();
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
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats scissors.");
        ++humanScore
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats rock.");
        ++humanScore
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats paper.");
        ++humanScore
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log ("You lose! Paper beats rock.");
        ++computerScore
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats paper.");
        ++computerScore
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats scissors.");
        ++computerScore
    } else {
        console.log("It's a draw!")
    };
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

