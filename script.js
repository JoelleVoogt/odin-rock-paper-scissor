const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

rockBtn.addEventListener("click", () => (playRound("rock")));
paperBtn.addEventListener("click", () => (playRound("paper")));
scissorsBtn.addEventListener("click", () => (playRound("scissors")));

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

function playRound(playerChoice){
    const computerChoice = getComputerChoice();

    if (playerChoice === computerChoice){
        return "It's a tie!";
    }else if (playerChoice === "rock" && computerChoice === "paper"){
        return "Computer wins! Paper wraps rock."
    }else if (playerChoice === "rock" && computerChoice === "scissors"){
        return "Player wins! Rock smashes scissors."
    }else if (playerChoice === "paper" && computerChoice === "rock"){
        return "Player wins! Paper wraps rock."
    }else if (playerChoice === "paper" && computerChoice === "scissors"){
        return "Computer wins! Scissors cut paper."
    }else if (playerChoice === "scissors" && computerChoice === "rock"){
        return "Computer wins! Rock smashes scissors."
    }else if(playerChoice === "scissors" && computerChoice === "paper"){
        return "Player wins! Scissors cut paper."
    }else{
        return "No weapons were chosen."
    }
};











//We gaan knoppen ophalen
//We gaan de mens keuze opties geven en daaruit iets laten kiezen
//We gaan de knoppen waardes geven
//We gaan de computer een random keuze laten maken
//We gaan meten wie de winaar is
//We gaan een resultaat meegeven per ronde en uitleg geven waarom iemand wint
//We gaan de eindscore van 3 bijhouden
//We gaan een reset knop maken



// prompt("What weapon do you pick? Rock, Paper or Scissors? >:)"); 