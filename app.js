// Rock definition

const rock = document.querySelector("#rock");

rock.addEventListener("click", playerRock());

function playerRock() {
  computerPlay("rock", computerPlay());
  console.log("test");
}

// Paper definition

const paper = document.querySelector("#papers");

paper.addEventListener("click", playerPaper());

function playerPaper() {
  computerPlay("paper", computerPlay());
  console.log("test");
}

// Scissors definition

const scissors = document.querySelector("#scissors");

scissors.addEventListener('click', playerScissors());

function playerScissors() {
computerPlay("scissors", computerPlay());
console.log("test");
}

//

function computerPlay() {
  let computerChoice = ["Rock", "Paper", "Scissors"];
  let computerSelection =
    computerChoice[Math.floor(Math.random() * computerChoice.length)];
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "Scissors") {
    alert("You win! Rock beats Scissors!");
    return playerSelection;
  } else if (playerSelection === "rock" && computerSelection === "Paper") {
    alert("You lose! Rock loses to Paper!");
  } else if (playerSelection === "rock" && computerSelection === "Rock") {
    alert("It's a tie between player and computer");
  } else if (playerSelection === "paper" && computerSelection === "Scissors") {
    alert("You lose! Paper loses to Scissors");
  } else if (playerSelection === "paper" && computerSelection === "Rock") {
    alert("You win! Paper beats Rock!");
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
    alert("You win! Scissors beats Paper!");
  } else {
    alert("Sorry bucko");
  }
}
