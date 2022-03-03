const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const scoreboardDiv = document.querySelector("#scoreboard");
const score = document.querySelector("#score");
const cpuScore = document.querySelector("#cpuScore");

rock.addEventListener("click", (e) => {
  e.preventDefault();

  playRound("rock", computerPlay());
});

paper.addEventListener("click", (e) => {
  e.preventDefault();

  playRound("paper", computerPlay());
});

scissors.addEventListener("click", (e) => {
  e.preventDefault();

  playRound("scissors", computerPlay());
});

function addScore(elem) {
  elem.innerText = parseInt(elem.innerText) + 1;
}

function computerPlay() {
  let computerChoice = ["Rock", "Paper", "Scissors"];
  let computerSelection =
    computerChoice[Math.floor(Math.random() * computerChoice.length)];
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "Scissors") {
    addScore(score);
  } else if (playerSelection === "paper" && computerSelection === "Rock") {
    addScore(score);
  } else if (playerSelection === "scissors" && computerSelection === "Paper") {
    addScore(score);
  } else if (computerSelection === "Paper" && playerSelection === "rock") {
    addScore(cpuScore);
  } else if (computerSelection === "Rock" && playerSelection === "scissors") {
    addScore(cpuScore);
  } else if (computerSelection === "Scissors" && playerSelection === "paper") {
    addScore(cpuScore);
  } else if (playerSelection === computerSelection) {
    return "Ït's a tie.";
  }

  if (parseInt(score.innerText) >= 5) {
    alert("Player wins");
  } else if (parseInt(cpuScore.innerText) >= 5) {
    alert("CPU wins");
  }
}
