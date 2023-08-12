function getComputerChoise() {
  let choiceArray = ["ROCK", "PAPER", "SCISSORS"];
  let computerChoice =
    choiceArray[Math.floor(Math.random() * choiceArray.length)];

  return computerChoice;
}
getComputerChoise();

// let playerSelect = "rock";
// let playerSelection = playerSelect.toUpperCase();

function playRound(computerChoice, counterPc, counterPlayer) {
  let playerSelect = prompt("Choise: Paper, Scissors or Rock");
  let playerSelection = playerSelect.toUpperCase();

  console.log("Selection of player: ", playerSelection);
  console.log("Selection of computer: ", computerChoice);

  if (
    playerSelection === "SCISSORS" ||
    playerSelection === "PAPER" ||
    playerSelection === "ROCK"
  ) {
    if (playerSelection === "ROCK" && computerChoice === "PAPER") {
      console.log("You Lose! Paper beats Rock");
      counterPc++;
    } else if (playerSelection === "ROCK" && computerChoice === "SCISSORS") {
      console.log("You Win! Rock beats Scissors");
      counterPlayer++;
    } else if (playerSelection === "PAPER" && computerChoice === "ROCK") {
      console.log("You Win! Paper beats Rock");
      counterPlayer++;
    } else if (playerSelection === "PAPER" && computerChoice === "SCISSORS") {
      console.log("You Lose! Scissors beats Paper");
      counterPc++;
    } else if (playerSelection === "SCISSORS" && computerChoice === "ROCK") {
      console.log("You Lose! Rock beats Scissors");
      counterPc++;
    } else if (playerSelection === "SCISSORS" && computerChoice === "PAPER") {
      console.log("You win! Scissors beats Paper");
      counterPlayer++;
    } else {
      console.log("Tie!!!");
    }
  } else {
    console.log("Your choise is incorrect");
  }
  console.log(`Result: Player: ${counterPlayer} - PC: ${counterPc}`);
}

const game = () => {
  let counterPc = 0;
  let counterPlayer = 0;
  for (let i = 1; i <= 5; i++) {
    playRound(getComputerChoise(), counterPc, counterPlayer);

    console.log(`Game number: ${i}`);

    console.log("___ ___ ___ ___");
  }
  console.log("*** GAME OVER ***");
};

game();
