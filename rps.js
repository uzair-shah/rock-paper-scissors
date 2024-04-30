function getComputerChoice () {
    choiceProbability = Math.random();

    let computerChoice = ""

    if (choiceProbability >= 0 && choiceProbability < 0.3) {
        computerChoice = "rock";
    }
    else if (choiceProbability >= 0.3 && choiceProbability < 0.6) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissor";
    }
    return computerChoice;
}

function getHumanChoice () {
    playerChoice = prompt("Please enter your choice", "Rock");
    return playerChoice.toLowerCase();
}

let computerScore = 0;
let humanScore = 0;

function playRound (computerChoice, humanChoice) {
    // computer = rock
    if (computerChoice === "rock" && humanChoice === "paper" ) {
        ++humanScore;
        console.log(`You win! Paper beats Rock.`);
        console.log(`Your score is ${humanScore} and the computer's score is ${computerScore}`);
    }
    else if (computerChoice === "rock" && humanChoice === "scissor") {
        ++computerScore;
        console.log('You lose! Rock beats Scissor.');
        console.log(`Your score is ${humanScore} and the computer's score is ${computerScore}`)
    }
    else if (computerChoice === "rock" && humanChoice === "rock") {
        console.log('Its a draw');
        console.log(`Your score is ${humanScore} and the computer's score is ${computerScore}`)
    }
    // computer = paper
    else if (computerChoice === "paper" && humanChoice === "paper") {
        console.log('Its a draw');
        console.log(`Your score is ${humanScore} and the computer's score is ${computerScore}`)
    }
    else if (computerChoice === "paper" && humanChoice === "rock") {
        ++computerScore;
        console.log('You lose! Paper beats Rock.');
        console.log(`Your score is ${humanScore} and the computer's score is ${computerScore}`)
    }
    else if (computerChoice === "paper" && humanChoice === "scissor") {
        ++humanScore;
        console.log('You win! Scissors beat paper.');
        console.log(`Your score is ${humanScore} and the computer's score is ${computerScore}`)
    }
    // computer = scissor
    else if (computerChoice === "scissor" && humanChoice === "paper") {
        ++computerScore;
        console.log('You lose! Scissors beat paper.');
        console.log(`Your score is ${humanScore} and the computer's score is ${computerScore}`)
    }
    else if (computerChoice === "scissor" && humanChoice === "rock") {
        ++humanScore;
        console.log('You win! Rock beats Scissors.');
        console.log(`Your score is ${humanScore} and the computer's score is ${computerScore}`)
        
    }
    else if (computerChoice === "scissor" && humanChoice === "scissor") {
        console.log('Its a draw.');
        console.log(`Your score is ${humanScore} and the computer's score is ${computerScore}`)
    }
    else {
        console.log(`Your score is ${humanScore} and the computer's score is ${computerScore}`)
    }
}



function playGame (){
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
      }
    if (humanScore > computerScore) {
        console.log("You win");
    }
    else if (humanScore < computerScore) {
        console.log("Computer wins");
    }
    else {
        console.log("Its a draw")
    }

}
playGame()