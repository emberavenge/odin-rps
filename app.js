// Rock definition

const rock = document.querySelector("#rock");

rock.addEventListener("click", playRound(playerRock));

function playerRock() {
  return "rock";
}

// Paper definition

const paper = document.querySelector("#papers");

paper.addEventListener("click", playRound(playerPaper));

function playerPaper() {
  return "paper";
}

// Scissors definition

const scissors = document.querySelector("#scissors");

const scoreboardDiv = document.querySelector("#scoreboard");

const playerScore = document.createElement("p");



scissors.addEventListener('click', playRound(playerScissors));

function playerScissors() {
return "scissors";
}


//



function computerPlay() {
  let computerChoice = ["Rock", "Paper", "Scissors"];
  let computerSelection =
    computerChoice[Math.floor(Math.random() * computerChoice.length)];
  return computerSelection;
}


function playRound(playerSelection, computerSelection) {
  let playerPoints = 0
  let computerPoints = 0;

  // switch(playerSelection === "rock" && computerSelection === "Scissors") {
  //   case 1:
  //     playerSelection++;
  // }

  if ( playerPoints && computerPoints !== 5) {
    if (playerSelection === "rock" && computerSelection === "Scissors") {
      return playerPoints++;
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
      return computerPoints++;
    } else if (playerSelection === "rock" && computerSelection === "Rock") {
      alert("It's a tie between player and computer");
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
      return computerPoints++;
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
      return playerPoints++;
    } else if (playerSelection === "paper" && computerSelection === "Paper") {
      alert("It's a tie between player and computer!");
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "Scissors"
    ) {
      alert("It's a tie between player and computer");
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
      alert("You lose! Scissors loses to Rock");
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
      return playerPoints++;
    }
  }
    if (playerPoints === 5) {
      playerScore.textContent = `Player wins with${playerPoints}`;
      scoreboardDiv.appendChild(playerScore);
    }
}
