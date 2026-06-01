const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

rockBtn.addEventListener("click", () => (playRound("Rock")));
paperBtn.addEventListener("click", () => (playRound("Paper")));
scissorsBtn.addEventListener("click", () => (playRound("Scissors")));

function playRound(choice){
    if 
}


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
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