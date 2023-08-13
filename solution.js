let playerPoint = 0;
let pcPoint = 0;

function getComputerChoise() {
  let choiceArray = ["ROCK", "PAPER", "SCISSORS"];
  let computerChoice =
    choiceArray[Math.floor(Math.random() * choiceArray.length)];
  return computerChoice;
}

function playRound() {
  let userChoice = prompt("Choice: Rock, Paper or scissors").toUpperCase();
  let pcChoice = getComputerChoise();
  console.log(`User choice: ${userChoice} // PC choice: ${pcChoice}`);

  if (
    userChoice === "ROCK" ||
    userChoice === "SCISSORS" ||
    userChoice === "PAPER"
  ) {
    if (userChoice === pcChoice) {
      console.log("It´s a tie!");
    } else if (
      (userChoice === "ROCK" && pcChoice === "SCISSORS") ||
      (userChoice === "PAPER" && pcChoice === "ROCK") ||
      (userChoice === "SCISSORS" && pcChoice === "PAPER")
    ) {
      console.log(`You WIN, ${userChoice} beats ${pcChoice}`);
      playerPoint += 1;
    } else {
      console.log(`You losse, ${pcChoice} beats ${userChoice}`);
      pcPoint += 1;
    }
  } else {
    console.log(userChoice + " is ivalid, enter a correct choise");
  }
}

function game() {
  console.log(`Partial results: Player: ${playerPoint}, PC: ${pcPoint}`);
  for (let games = 1; games <= 5; games++) {
    console.log("-_-_-_-_-_-_-");
    playRound();
    console.log(`Game ${games} of 5`);
    console.log(`Partial results: Player: ${playerPoint}, PC: ${pcPoint}`);
  }
  console.log("___Game Over___");
  console.log("Player points final: " + playerPoint);
  console.log("PC points final: " + pcPoint);
  if (playerPoint > pcPoint) {
    console.log("Te winner is USER, with " + playerPoint + " points");
  } else if (playerPoint < pcPoint) {
    console.log("Te winner is PC, with " + pcPoint + " points");
  } else {
    console.log("The final result is Tie!");
  }
}

game();
