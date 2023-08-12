function getComputerChoise() {
  let choiceArray = ["ROCK", "PAPER", "SCISSORS"];
  let computerChoice =
    choiceArray[Math.floor(Math.random() * choiceArray.length)];
  return computerChoice;
}

function playRound(playerPoint) {
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
      playerPoint = 1;
      console.log("Player point:", playerPoint);
    } else {
      console.log(`You losse, ${pcChoice} beats ${userChoice}`);
    }
  } else {
    console.log(userChoice + " is ivalid, enter a correct choise");
  }
}
let playerPoint = 0;
function game() {
  for (let games = 1; games <= 5; games++) {
    playRound(playerPoint);
    console.log(`Game ${games} of 5`);
    let base = 0;
    let wins = base + playerPoint;
    console.log("wins: ", wins);
  }
  console.log("___Game Over___");
}

game();
