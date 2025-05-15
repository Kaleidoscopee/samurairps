// Score Variables
let playerScore = 0;
let computerScore = 0;

// Competition's random Results
function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);
    return num === 0 ? "rock" : num === 1 ? "paper" : "scissors";
}

// Update Score
function updateScore() {
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
}

// Event Listeners for Player's Choice
document.getElementById("rock").addEventListener("click", () => handleChoice("rock"));
document.getElementById("paper").addEventListener("click", () => handleChoice("paper"));
document.getElementById("scissor").addEventListener("click", () => handleChoice("scissor"));

// Player's Choice -> Computer's Choice
function handleChoice(playerChoice) {
    const computer = getComputerChoice();
    let outcome = "";

    if (playerChoice === computer) {
        outcome = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computer === "scissors") ||
        (playerChoice === "paper" && computer === "rock") ||
        (playerChoice === "scissor" && computer === "paper")
    ) {
        playerScore++;
        outcome = `You win! ${capitalize(playerChoice)} beats ${computer}.`;
    } else {
        computerScore++;
        outcome = `You lose! ${capitalize(computer)} beats ${playerChoice}.`;
    }

    document.getElementById("outcome").textContent = outcome;
    updateScore();
}
 // Capitalize the first letter Rock, Paper, Scissors
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

