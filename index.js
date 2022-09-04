let playerRock = document.getElementById("player-rock");
let playerPaper = document.getElementById("player-paper");
let playerScissors = document.getElementById("player-scissors");

let shootButton = document.getElementById("shoot-button");

let computerCard = document.getElementById("computer-card");

let scoreSlider = document.getElementById("score-slider");
let playerOutcome = document.getElementById("player-outcome");
let computerOutcome = document.getElementById("computer-outcome");
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let continueButton = document.getElementById("continue-button");
let resetButton = document.getElementById("reset-button");

let playerSelection = [0,0,0];
let playerScoreCounter = 0;
let computerScoreCounter = 0;

const randomComputerPick = () => {
    return Math.floor(Math.random()*3)
}

const showScoreSlider = () => {
    scoreSlider.style.left = "0vh";
}

const hideScoreSlider = () => {
    scoreSlider.style.left = "100vw";
}

const showComputerPick = (computerPick) => {
    switch(computerPick) {
        case 0:
            computerCard.classList.add("computer-card-rock");
            break;
        case 1:
            computerCard.classList.add("computer-card-paper");
            break;
        case 2:
            computerCard.classList.add("computer-card-scissors");
            break;
    }
}

const playerWins = () => {
    showScoreSlider();
    playerScoreCounter += 1;
    playerScore.innerText = playerScoreCounter;
    playerOutcome.classList.add("outcome-winner");
}

const draw = () => {
    showScoreSlider();
}

const computerWins = () => {
    showScoreSlider();
    computerScoreCounter += 1;
    computerScore.innerText = computerScoreCounter;
    computerOutcome.classList.add("outcome-winner")
}

const setOutcomes = (computer, player) => {
    switch(computer) {
        case 0:
            computerOutcome.className = "computer-outcome outcome-rock";
            break;
        case 1:
            computerOutcome.className = "computer-outcome outcome-paper";
            break;
        case 2:
            computerOutcome.className = "computer-outcome outcome-scissors";
            break;
    }

    switch(player) {
        case 0:
            playerOutcome.className = "player-outcome outcome-rock";
            break;
        case 1:
            playerOutcome.className = "player-outcome outcome-paper";
            break;
        case 2:
            playerOutcome.className = "player-outcome outcome-scissors";
            break;
    }
}

const scoreGame = (computerPick) => {
    showComputerPick(computerPick);

    switch(computerPick) {
        case 0:
            if(playerSelection[0] == 1) {
                setOutcomes(0,0);
                draw(computerPick);
                return;
            }else if(playerSelection[1] == 1) {
                setOutcomes(0,1);
                playerWins(computerPick);
                return;
            }else {
                setOutcomes(0,2);
                computerWins(computerPick);
                return;
            }
            break;
        case 1:
            if(playerSelection[0] == 1) {
                setOutcomes(1,0);
                computerWins(computerPick);
                return;
            }else if(playerSelection[1] == 1) {
                setOutcomes(1,1);
                draw(computerPick);
                return;
            }else {
                setOutcomes(1,2);
                playerWins(computerPick);
                return;
            }
            break;
        case 2:
            if(playerSelection[0] == 1) {
                setOutcomes(2,0);
                playerWins(computerPick);
                return;
            }else if(playerSelection[1] == 1) {
                setOutcomes(2,1);
                computerWins(computerPick);
                return;
            }else {
                setOutcomes(2,2);
                draw(computerPick);
                return;
            }
            break;
    }
}

const handleShootButton = () => {
    if(playerSelection.indexOf(1) == -1) {
        alert("Please make a rock, paper, or scissors selection.");
        return;
    }

    let computerPick = randomComputerPick();

    scoreGame(computerPick);
}

shootButton.addEventListener("click", handleShootButton);

const handleRockSelection = () => {
    if(playerSelection.indexOf(1) == 0) {
        playerRock.classList.remove("player-card-rock-dimmed");
        playerPaper.classList.remove("player-card-paper-dimmed");
        playerScissors.classList.remove("player-card-scissors-dimmed");
        playerSelection = [0,0,0];
        return;
    }

    playerSelection = [1,0,0];

    if(playerRock.className.search("dimmed") != -1) {
        playerRock.classList.remove("player-card-rock-dimmed");
    }

    if(playerPaper.className.search("dimmed") == -1) {
        playerPaper.classList.add("player-card-paper-dimmed")
    }

    if(playerScissors.className.search("dimmed") == -1) {
        playerScissors.classList.add("player-card-scissors-dimmed")
    }
}

const handlePaperSelection = () => {
    if(playerSelection.indexOf(1) == 1) {
        playerRock.classList.remove("player-card-rock-dimmed");
        playerPaper.classList.remove("player-card-paper-dimmed");
        playerScissors.classList.remove("player-card-scissors-dimmed");
        playerSelection = [0,0,0];
        return;
    }

    playerSelection = [0,1,0];

    if(playerPaper.className.search("dimmed") != -1) {
        playerPaper.classList.remove("player-card-paper-dimmed");
    }

    if(playerRock.className.search("dimmed") == -1) {
        playerRock.classList.add("player-card-rock-dimmed")
    }

    if(playerScissors.className.search("dimmed") == -1) {
        playerScissors.classList.add("player-card-scissors-dimmed")
    }
}

const handleScissorsSelection = () => {
    if(playerSelection.indexOf(1) == 2) {
        playerRock.classList.remove("player-card-rock-dimmed");
        playerPaper.classList.remove("player-card-paper-dimmed");
        playerScissors.classList.remove("player-card-scissors-dimmed");
        playerSelection = [0,0,0];
        return;
    }

    playerSelection = [0,0,1];

    if(playerScissors.className.search("dimmed") != -1) {
        playerScissors.classList.remove("player-card-scissors-dimmed");
    }

    if(playerRock.className.search("dimmed") == -1) {
        playerRock.classList.add("player-card-rock-dimmed")
    }

    if(playerPaper.className.search("dimmed") == -1) {
        playerPaper.classList.add("player-card-paper-dimmed")
    }
}

playerRock.addEventListener("click", handleRockSelection);
playerPaper.addEventListener("click", handlePaperSelection);
playerScissors.addEventListener("click", handleScissorsSelection);

const handleContinue = () => {
    hideScoreSlider();
    playerSelection = [0,0,0];
    playerRock.className = "card player-card-rock";
    playerPaper.className = "card player-card-paper";
    playerScissors.className = "card player-card-scissors";
    computerCard.className = "card computer-card";
}

continueButton.addEventListener("click", handleContinue);

const handleReset = () => {
    playerSelection = [0,0,0];
    playerScoreCounter = 0;
    computerScoreCounter = 0;
    playerScore.innerText = playerScoreCounter;
    computerScore.innerText = computerScoreCounter;
    playerRock.className = "card player-card-rock";
    playerPaper.className = "card player-card-paper";
    playerScissors.className = "card player-card-scissors";
    computerCard.className = "card computer-card";
    hideScoreSlider();
}

resetButton.addEventListener("click", handleReset);