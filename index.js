function getComputerChoise() {
  let choiseArray = ["ROCK", "PAPER", "SCISSORS"];
  let range = Math.floor(Math.random() * choiseArray.length);
  let computerChoise = choiseArray[range];

  return computerChoise;
}
getComputerChoise();

// let playerSelect = "rock";
// let playerSelection = playerSelect.toUpperCase();

function playRound(computer) {
  let playerSelect = prompt("Choise: Paper, Scissors or Rock");
  let playerSelection = playerSelect.toUpperCase();

  console.log("Selection of player: ", playerSelection);
  console.log("Selection of computer: ", computer);
  let counterPc = 0;
  let counterPlayer = 0;

  if (
    playerSelection === "SCISSORS" ||
    playerSelection === "PAPER" ||
    playerSelection === "ROCK"
  ) {
    if (playerSelection === "ROCK" && computer === "PAPER") {
      counterPc++;
      return console.log("You Lose! Paper beats Rock");
    } else if (playerSelection === "ROCK" && computer === "SCISSORS") {
      counterPlayer++;
      return console.log("You Win! Rock beats Scissors");
    } else if (playerSelection === "PAPER" && computer === "ROCK") {
      counterPlayer++;
      return console.log("You Win! Paper beats Rock");
    } else if (playerSelection === "PAPER" && computer === "SCISSORS") {
      counterPc++;
      return console.log("You Lose! Scissors beats Paper");
    } else if (playerSelection === "SCISSORS" && computer === "ROCK") {
      counterPc++;
      return console.log("You Lose! Rock beats Scissors");
    } else if (playerSelection === "SCISSORS" && computer === "PAPER") {
      counterPlayer++;
      return console.log("You win! Scissors beats Paper");
    } else {
      return console.log("Tie!!!");
    }
  } else {
    alert("Your choise is incorrect");
  }
  console.log(`Result: Player: ${counterPlayer} - PC: ${counterPc}`);
}

const game = () => {
  for (i = 1; i <= 5; i++) {
    playRound(getComputerChoise());

    console.log(`Game number: ${i}`);
    console.log("___ ___ ___ ___");
  }
  return console.log("*** GAME OVER ***");
  console.log("Counter???", counterPc);
};

game();
