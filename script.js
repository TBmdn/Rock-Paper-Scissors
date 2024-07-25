function getComputerChoice(){
    let randomChoice = Math.floor(Math.random() * 3);

    switch (randomChoice){
        case 0:
            return 'rock'
            break;
        case 1:
            return 'paper'
            break;
        case 2:
            return 'scissor'
            break;
    }
}