let playerScore = 0;
let computerScore = 0;
let rounds = [];
let options = ["rock", "paper", "scissors"];
let history = document.getElementById("history");
let playScore = document.getElementById("playscore");
let comScore = document.getElementById("comscore");



function computerPlay() {
    return options[Math.floor(Math.random() * 3)];
}

function rock() {

  let audio = new Audio('sounds/rock (2).mp3'); 
  audio.play();

  let computerSelection = computerPlay();
  let roundResult = playRound("rock", computerSelection);
  rounds.push(roundResult);
  updateHistory();


}

function paper() {
    let audio = new Audio('sounds/paper (2).mp3'); 
    audio.play();

    let computerSelection = computerPlay();
    let roundResult = playRound("paper", computerSelection);
    rounds.push(roundResult);
    updateHistory();
}


function scissors() {
    let audio = new Audio('sounds/scissors (2).mp3'); 
    audio.play();

    let computerSelection = computerPlay();
    let roundResult = playRound("scissors", computerSelection);
    rounds.push(roundResult);
    updateHistory();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Draw, It's a Tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        playScore.value = playerScore;
        return "Woah, You Win! " + playerSelection + " beats " + computerSelection;
        
  
    } else {
        computerScore++;
        comScore.value = computerScore;
        return "Oops, You Lose! " + computerSelection + " beats " + playerSelection;
    }
   ;
}
function updateHistory() {
    history.innerHTML = "";
    for (var i = 0; i < rounds.length; i++) {
        var roundResult = document.createElement("p");
        roundResult.textContent = rounds[i];
        history.appendChild(roundResult);
    }
    if (rounds.length >= 5) {
        var finalResult = document.createElement("p");
        finalResult.textContent =
            "Final Result: Player - " +
            playerScore +
            ", Computer - " +
            computerScore;
        history.appendChild(finalResult); disableButtons();

        let audio = new Audio('sounds/win.mp3'); 
        audio.play();
    }
}
function disableButtons() {
    var options = document.getElementById("options").getElementsByTagName("img");
    for (var i = 0; i < options.length; i++) {
        options[i].style.pointerEvents = "none";
        options[i].style.opacity = "0.5";
    }
}

function resetGame() {
    let audio = new Audio('sounds/button.mp3'); 
    audio.play();
    playerScore = 0;
    computerScore = 0;
    rounds = [];
    playScore.value = "";
    comScore.value = "";
    history.innerHTML = "";
    var options = document.getElementById("options").getElementsByTagName("img");
    for (var i = 0; i < options.length; i++) {
        options[i].style.pointerEvents = "auto";
        options[i].style.opacity = "1";
    }
   
}
function btn() {

    let audio = new Audio('sounds/button.mp3'); 
    audio.play();
}
