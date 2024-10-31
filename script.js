let humanScore = 0,computerScore = 0;
const choices = document.getElementById('choices');
const dashboard = document.getElementById('dashboard');
const rockBtn = document.getElementById('Rock');
const paperBtn = document.getElementById('Paper');
const scissorBtn = document.getElementById('Scissor');
const userChoicePara = document.getElementById('user-choice');
const computerChoicePara = document.getElementById('computer-choice');
const roundResultPara = document.getElementById('round-result');
const scorePara = document.getElementById('score');

function getComputerChoice(){
    // generates a random number between 1 and 3 
    let randomChoice = Math.floor(Math.random() * 3);

    switch (randomChoice){
        case 0:
            return 'ROCK';
            break;
        case 1:
            return 'PAPER';
            break;
        case 2:
            return 'SCISSOR';
            break;
    }
}

function scoreBoard(){
    scorePara.textContent = `Your score: ${humanScore}, Computer score: ${computerScore}`;
}

function youLose(winnerChoice,loserChoice){
    roundResultPara.textContent = `You lose!, ${winnerChoice} beats ${loserChoice}`;
}

function youWin(winnerChoice,loserChoice){
    roundResultPara.textContent = `You win!, ${winnerChoice} beats ${loserChoice}`;
}

function printChoices(computerChoice,humanChoice){
    userChoicePara.textContent = `You :${humanChoice}`;
    computerChoicePara.textContent = `Computer :${computerChoice}`;
}

function playRound(computerChoice,humanChoice){
    printChoices(computerChoice,humanChoice);
    if (computerChoice == humanChoice) {
        roundResultPara.textContent = 'Draw!';
        scoreBoard();
    }
    else{
        switch(computerChoice){
            case 'ROCK':
                if(humanChoice == 'PAPER'){
                    ++humanScore;
                    youWin(humanChoice,computerChoice);
                    scoreBoard();
                }
                else{
                    ++computerScore;
                    youLose(computerChoice,humanChoice);
                    scoreBoard();
                }
                break;
            case 'PAPER':
                if(humanChoice == 'ROCK'){
                    ++computerScore;
                    youLose(computerChoice,humanChoice);
                    scoreBoard();
                }
                else{
                    ++humanScore;
                    youWin(humanChoice,computerChoice);
                    scoreBoard();
                }
                break;
            case 'SCISSOR':
                if (humanChoice == 'ROCK') {
                    ++humanScore;
                    youWin(humanChoice,computerChoice);
                    scoreBoard();
                }
                else{
                    ++computerScore;
                    youLose(computerChoice,humanChoice);
                    scoreBoard();
                }
                break;
        }
    }
    if (humanScore == 5) {
        choices.setAttribute("style","display: none;");
        let gameResultPara = document.createElement('p');
        gameResultPara.textContent = 'Great! You win the game';
        dashboard.appendChild(gameResultPara);
        playAgain();
    }
    else if (computerScore == 5) {
        choices.setAttribute("style","display: none;");
        let gameResultPara = document.createElement('p');
        gameResultPara.textContent = 'Sorry! You lose the game';
        dashboard.appendChild(gameResultPara);
        playAgain();
    }
}

// a function that add a button to reload the page if the user wants to play another game 
function playAgain(){
    let plyAgainBtn = document.createElement('button');
    let plyAgainPara = document.createElement('p');
    plyAgainBtn.textContent = 'Play Again';
    plyAgainPara.textContent = 'let\'s play another game';
    dashboard.appendChild(plyAgainPara);
    dashboard.appendChild(plyAgainBtn);

    // location.reload is method to reload the page
    plyAgainBtn.addEventListener('click',() => location.reload());
}

rockBtn.addEventListener("click", () => playRound(getComputerChoice(),"ROCK"));
paperBtn.addEventListener("click", () => playRound(getComputerChoice(),"PAPER"));
scissorBtn.addEventListener("click", () => playRound(getComputerChoice(),"SCISSOR"));
