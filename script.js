const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const showResults = document.getElementById('results');
const updatePlayerScore = document.getElementById('playerscore');
const updateComputerScore = document.getElementById('computerscore');

const handleRock = () => playRound("Rock");
const handlePaper = () => playRound("Paper");
const handleScissors = () => playRound("Scissors");

rockBtn.addEventListener("click", handleRock);
paperBtn.addEventListener("click", handlePaper);
scissorsBtn.addEventListener("click", handleScissors);

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

function hasPlayerWonTheRound (playerChoice, computerChoice){
    return (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
    );
};

let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice){
    const computerChoice = getComputerChoice();

    if (hasPlayerWonTheRound(playerChoice, computerChoice)){
        playerScore++;
        showResults.innerText = `Player wins! ${playerChoice} beats ${computerChoice}`;
        updatePlayerScore.innerText = "Player: " + playerScore;
        endGame();
    }else if (playerChoice === computerChoice){
        showResults.innerText = "It's a tie!";
        endGame();
    } else{
        computerScore++;
        showResults.innerText = `Computer wins! ${computerChoice} beats ${playerChoice}`;
        updateComputerScore.innerText = "Computer: " + computerScore;
        endGame();
    }
};

function stopButtons(){
    rockBtn.removeEventListener("click", handleRock);
    paperBtn.removeEventListener("click", handlePaper);
    scissorsBtn.removeEventListener("click", handleScissors);
}

function endGame(){
    if (playerScore === 3){
        showResults.innerText = "Game over: You win! Well done!";
        stopButtons();
    }else if (computerScore === 3){
        showResults.innerText = "Game over: Computer won! Better luck next time!";
        stopButtons();
    }
};