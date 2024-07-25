function getComputerChoice(){
    let randomChoice = Math.floor(Math.random() * 3);

    switch (randomChoice){
        case 0:
            console.log(`Computer : ROCK`);
            return 'ROCK';
            break;
        case 1:
            console.log(`Computer : PAPER`);
            return 'PAPER';
            break;
        case 2:
            console.log(`Computer : SCISSOR`);
            return 'SCISSOR';
            break;
    }
}

function getHumanChoice(){
    let choice = prompt('Enter you choice :').toUpperCase();

    switch(choice){
        case 'ROCK':
            console.log(`You : ROCK`);
            return choice;
            break;
        case 'PAPER':
            console.log(`You : PAPER`);
            return choice;
            break;
        case 'SCISSOR':
            console.log(`You : SCISSOR`);
            return choice;
            break;
        default:
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

function playRound(computerChoice,humanChoice){
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

let humanScore = 0,computerScore = 0;

console.log(playRound(getComputerChoice(),getHumanChoice()));