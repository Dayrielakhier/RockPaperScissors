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
const results = document.querySelector("#results")

const para = document.createElement("p")
const score = document.createElement("p")
const ann = document.createElement("p")

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
        para.textContent = "You win! Rock beats scissors.";
        results.appendChild(para);
        ++humanScore
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        para.textContent = "You win! Paper beats rock.";
        results.appendChild(para);
        ++humanScore
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        para.textContent = "You win! Scissors beats paper.";
        results.appendChild(para);
        ++humanScore
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        para.textContent = "You lose! Paper beats rock.";
        results.appendChild(para);
        ++computerScore
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        para.textContent = "You lose! Scissors beats paper.";
        results.appendChild(para);
        ++computerScore
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        para.textContent = "You lose! Rock beats scissors.";
        results.appendChild(para);
        ++computerScore
    } else {
        para.textContent = "It's a draw!";
        results.appendChild(para)
    };
    score.textContent = `Your score: ${humanScore}; Computer score: ${computerScore}`
    results.appendChild(score)

    if (humanScore === 5) {
        ann.textContent = "Human wins. Computer loses."
        results.appendChild(ann)
    } else if (computerScore === 5) {
        ann.textContent = "Human loses. Computer wins."
        results.appendChild(ann)
    } 
}

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

rock.addEventListener("click", () => playRound("rock", getComputerChoice()))
paper.addEventListener("click", () => playRound("paper", getComputerChoice()))
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()))

