const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const showResults = document.getElementById('results');

rockBtn.addEventListener("click", () => (playRound("rock")));
paperBtn.addEventListener("click", () => (playRound("paper")));
scissorsBtn.addEventListener("click", () => (playRound("scissors")));

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice){
    const computerChoice = getComputerChoice();

    if (playerChoice === computerChoice){
        return showResults.innerText = "It's a tie!";
    }else if (playerChoice === "rock" && computerChoice === "paper"){
        computerScore++;
        showResults.innerText = "Computer wins! Paper wraps rock.";
    }else if (playerChoice === "rock" && computerChoice === "scissors"){
        playerScore++;
        showResults.innerText = "Player wins! Rock smashes scissors.";
    }else if (playerChoice === "paper" && computerChoice === "rock"){
        playerScore++;
        showResults.innerText = "Player wins! Paper wraps rock.";
    }else if (playerChoice === "paper" && computerChoice === "scissors"){
        computerScore++;
        showResults.innerText = "Computer wins! Scissors cut paper.";
    }else if (playerChoice === "scissors" && computerChoice === "rock"){
        computerScore++;
        showResults.innerText = "Computer wins! Rock smashes scissors.";
    }else if(playerChoice === "scissors" && computerChoice === "paper"){
        playerScore++;
        showResults.innerText = "Player wins! Scissors cut paper.";
    }else{
        showResults.innerText = "No weapons were chosen.";
    }

    console.log(computerScore);
    console.log(playerScore);
};