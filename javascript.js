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
