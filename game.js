let randomNum = () => Math.floor(Math.random() * 3);

let getComputerChoice = () => randomNum();

const computerScoreDisplay = document.getElementById("computer-score");
const playerScoreDisplay = document.getElementById("player-score");

const computerChoiceDisplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("player-choice");

const winnerText = document.getElementById("winner-text");

console.log(computerScoreDisplay.textContent);

function numToChoice(num){
    switch(num){
    case 0:
        return 'Rock';
    case 1:
        return 'Paper';
    case 2:
        return 'Scissors';
    default:
        return "Invalid Selection";
    }
}

function choiceToNum(choice){
    switch(choice.toLowerCase()){
    case 'rock':
        return 0;
    case 'paper':
        return 1;
    case 'scissors':
        return 2;
    default:
        return "Invalid Selection";
    }
}
function checkWinner(){
    if (computerScore == 5) console.log("Computer Wins!");
}

function playRound(playerSelection, computerSelection){

    playerChoiceDisplay.textContent = numToChoice(playerSelection);
    computerChoiceDisplay.textContent = numToChoice(computerSelection);

    const battleVal = playerSelection - computerSelection;
    if (battleVal == 0){

        return `You tie! You both chose ${numToChoice(playerSelection)}`;
    }
    else if (battleVal == 1 || battleVal == -2){
        playerScore += 1;
        playerScoreDisplay.textContent = playerScore;
        return `You win! ${numToChoice(playerSelection)} beats ${numToChoice(computerSelection)}`;
    } 
    computerScore += 1;
    computerScoreDisplay.textContent = computerScore;
    return `You lose! ${numToChoice(computerSelection)} beats ${numToChoice(playerSelection)}`;
}

function game(){
    for (let i = 0; i < 5; i++){
        console.log(playRound(choiceToNum(prompt("Pick rock, paper, or scissors:")), getComputerChoice()));
        console.log(`Your Score: ${playerScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }
}
let computerScore = 0, playerScore = 0;
//game();



let buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach((element) => {
    element.addEventListener('click', () => {
        winnerText.innerText = (playRound(Number(element.value), getComputerChoice()));
    });
});

