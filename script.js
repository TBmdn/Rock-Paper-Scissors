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
            return 'SCISSORS';
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
            getHumanChoice();
    }
}