function getComputerChoice(){
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

function getHumanChoice(){
    let choice = prompt('Enter you choice :').toUpperCase();

    switch(choice){
        case 'ROCK':
            return choice;
            break;
        case 'PAPER':
            return choice;
            break;
        case 'SCISSOR':
            return choice;
            break;
        default:
            console.log(`error! enter your choice correctly`);
            getHumanChoice();
    }
}

function scoreBoard(){
    console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`);
}

function youLose(winnerChoice,loserChoice){
    console.log(`You lose!, ${winnerChoice} beats ${loserChoice}`);
}
function youWin(winnerChoice,loserChoice){
    console.log(`You Win!, ${winnerChoice} beats ${loserChoice}`);
}

function printChoices(computerChoice,humanChoice){
    console.log(`You: ${humanChoice}`);
    console.log(`Computer: ${computerChoice}`);
}

function playRound(computerChoice,humanChoice){
    printChoices(computerChoice,humanChoice);
    if (computerChoice == humanChoice) {
        console.log('Draw!');
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
}

function playGame(){
    playRound(getComputerChoice(),getHumanChoice());
    playRound(getComputerChoice(),getHumanChoice());
    playRound(getComputerChoice(),getHumanChoice());
    playRound(getComputerChoice(),getHumanChoice());
    playRound(getComputerChoice(),getHumanChoice());
    if (humanScore == computerScore) {
        console.log(`Draw!`);
    }
    else if (humanScore < computerScore) {
        console.log(`You Lose!`);
    }
    else {
        console.log(`You Win`);
    }
}

let humanScore = 0,computerScore = 0;
console.log(playGame());