const buttons = document.querySelectorAll("button");
const div = document.querySelector("div");

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
};



let computerScore = 0;
let humanScore = 0;

function playRound (computerChoice, humanChoice) {
    // computer = rock
    console.log(`Computer choice is ${computerChoice}, Human choice is ${humanChoice}`);
    if (computerScore === 5 || humanScore === 5) {
        console.log('Game Over');
        if (computerScore>humanScore){
            div.innerText = 'Computer wins';
        }
        else{
            div.innerText = "You win";
        };
        
    }
    else{
        if (computerChoice === "rock" && humanChoice === "paper" ) {
            ++humanScore;
            // div.innerText = `You win! Paper beats Rock.`
            div.innerText = `Your score is ${humanScore} and the computer's score is ${computerScore}`;
        }
        else if (computerChoice === "rock" && humanChoice === "scissor") {
            ++computerScore;
            // div.innerText = 'You lose! Rock beats Scissor.';
            div.innerText = `Your score is ${humanScore} and the computer's score is ${computerScore}`;
        }
        else if (computerChoice === "rock" && humanChoice === "rock") {
            // div.innerText ='Its a draw';
            div.innerText =`Your score is ${humanScore} and the computer's score is ${computerScore}`;
        }
        // computer = paper
        else if (computerChoice === "paper" && humanChoice === "paper") {
            // div.innerText ='Its a draw';
            div.innerText =`Your score is ${humanScore} and the computer's score is ${computerScore}`;
        }
        else if (computerChoice === "paper" && humanChoice === "rock") {
            ++computerScore;
            // div.innerText ='You lose! Paper beats Rock.';
            div.innerText =`Your score is ${humanScore} and the computer's score is ${computerScore}`;
        }
        else if (computerChoice === "paper" && humanChoice === "scissor") {
            ++humanScore;
            // div.innerText ='You win! Scissors beat paper.';
            div.innerText =`Your score is ${humanScore} and the computer's score is ${computerScore}`;
        }
        // computer = scissor
        else if (computerChoice === "scissor" && humanChoice === "paper") {
            ++computerScore;
            // div.innerText ='You lose! Scissors beat paper.';
            div.innerText =`Your score is ${humanScore} and the computer's score is ${computerScore}`;
        }
        else if (computerChoice === "scissor" && humanChoice === "rock") {
            ++humanScore;
            // div.innerText ='You win! Rock beats Scissors.';
            div.innerText =`Your score is ${humanScore} and the computer's score is ${computerScore}`;
            
        }
        else if (computerChoice === "scissor" && humanChoice === "scissor") {
            // div.innerText = 'Its a draw.';
            div.innerText = `Your score is ${humanScore} and the computer's score is ${computerScore}`;
        }
        else {
            div.innerText =`Your score is ${humanScore} and the computer's score is ${computerScore}`;
        }
    }
    
};


buttons.forEach((button) => {

    button.addEventListener("click", () => {
        const humanChoice = button.id; // Capture the human choice
        const computerChoice = getComputerChoice(); // Get the computer's choice
        playRound(computerChoice, humanChoice); // Trigger playRound with both choices
})});

