// Score Variables
let playerScore = 0;
let computerScore = 0;

// Timer Variables
let timer;
let timeLeft = 5;

// Competition's random Results
function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);
    return num === 0 ? "rock" : num === 1 ? "paper" : "scissors";
}

// Update Score Display
function updateScore() {
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
}

// Start the countdown timer for player choice
function startTimer() {
    timeLeft = 5;
    document.getElementById("timer").textContent = timeLeft;
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            // Auto lose round if player doesn't pick in time
            computerScore++;
            updateScore();
            document.getElementById("outcome").textContent = "Time's up! You lose this round.";
            disableButtons();
            setTimeout(() => {
                resetButtons();
            }, 1500);
        }
    }, 1000);
}

// Enable buttons and restart timer for next round
function resetButtons() {
    if (playerScore < 5 && computerScore < 5) {
        document.getElementById("rock").disabled = false;
        document.getElementById("paper").disabled = false;
        document.getElementById("scissor").disabled = false;
        startTimer();
    }
}

// Disable choice buttons to prevent multiple clicks
function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissor").disabled = true;
}

// Capitalize first letter of choice for display
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Handle player choice, compare to computer, update outcome and scores
function handleChoice(playerChoice) {
    clearInterval(timer); // Stop timer on choice
    disableButtons();

    const computer = getComputerChoice();

    // Display choices
    document.getElementById("player-choice").textContent = capitalize(playerChoice);
    document.getElementById("computer-choice").textContent = capitalize(computer);

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

    updateScore();

    // Check for game winner
    if (playerScore === 5 || computerScore === 5) {
        const winner = playerScore === 5 ? "You win the game!" : "Computer wins the game!";
        outcome += `\n${winner}`;
        disableButtons();
    } else {
        // Wait 1.5s then enable buttons and restart timer for next round
        setTimeout(() => {
            resetButtons();
        }, 1500);
    }

    document.getElementById("outcome").textContent = outcome;
}

// Reset entire game, scores, UI, and start timer
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScore();

    document.getElementById("outcome").textContent = "Game reset. Choose One.";
    document.getElementById("player-choice").textContent = "None";
    document.getElementById("computer-choice").textContent = "None";

    resetButtons(); // Enable buttons + start timer
}

// Attach event listeners for player choice buttons
document.getElementById("rock").addEventListener("click", () => handleChoice("rock"));
document.getElementById("paper").addEventListener("click", () => handleChoice("paper"));
document.getElementById("scissor").addEventListener("click", () => handleChoice("scissor"));

// Attach event listener for reset button
document.getElementById("reset").addEventListener("click", resetGame);

// Initialize game on page load
resetGame();