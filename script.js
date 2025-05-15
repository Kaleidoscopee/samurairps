// Competition's random Results
const num = Math.floor(Math.random() * 3);
const result = num === 0 ? "rock" : num === 1 ? "paper" : "scissors";


// Rock Button Logic
document.getElementById("rock").addEventListener("click", function() {
    if (result === "rock") {
        document.getElementById("outcome").innerHTML = "It's a tie!";
    } else if (result === "paper") {
        document.getElementById("outcome").innerHTML = "You lose! Paper beats rock.";
    } else {
        document.getElementById("outcome").innerHTML = "You win! Rock beats scissors.";
    };
})

// Paper Button Logic
document.getElementById("paper").addEventListener("click", function() {
    if (result === "paper") {
        document.getElementById("outcome").innerHTML = "It's a tie!";
    } else if (result === "scissor") {
        document.getElementById("outcome").innerHTML = "You lose! Scissor beats paper.";
    } else {
        document.getElementById("outcome").innerHTML = "You win! Paper beats Rock.";
    };
})

// Scissor Button Logic
document.getElementById("scissor").addEventListener("click", function() {
    if (result === "scissor") {
        document.getElementById("outcome").innerHTML = "It's a tie!";
    } else if (result === "rock") {
        document.getElementById("outcome").innerHTML = "You lose! Paper beats rock.";
    } else {
        document.getElementById("outcome").innerHTML = "You win! Rock beats scissors.";
    };
})
