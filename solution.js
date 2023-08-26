let playerPoint = 0;
let pcPoint = 0;
let userChoice = "";
let pcChoice = "";

// player choice
function choiceUser() {
  return new Promise((resolve) => {
    const rock = document.querySelector("#rock");
    rock.addEventListener("click", () => {
      resolve("ROCK");
    });
    const paper = document.querySelector("#paper");
    paper.addEventListener("click", () => {
      resolve("PAPER");
    });
    const scissors = document.querySelector("#scissors");
    scissors.addEventListener("click", () => {
      resolve("SCISSORS");
    });
  });
}

// computer choise
function getComputerChoise() {
  let choiceArray = ["ROCK", "PAPER", "SCISSORS"];
  let computerChoice =
    choiceArray[Math.floor(Math.random() * choiceArray.length)];
  return computerChoice;
}

// game logic
function playRound(userChoice, pcChoice) {
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

// game structure
async function game() {
  console.log(`Partial results: Player: ${playerPoint}, PC: ${pcPoint}`);
  for (let games = 1; games <= 5; games++) {
    const userChoice = await choiceUser();
    const pcChoice = getComputerChoise();
    playRound(userChoice, pcChoice);
    const inGame = document.querySelector("#inGame");
    const choices = document.querySelector("#Choices");
    if (choices) {
      choices.textContent = `PC: ${pcChoice} -- USER: ${userChoice}`;
      inGame.appendChild(choices);
    }
    const gaming = document.querySelector("#games");
    const score = document.querySelector("#score");

    if (games > 0) {
      gaming.textContent = `Game ${games} of 5`;
      inGame.appendChild(gaming);
      score.textContent = `Partial Score: USER: ${playerPoint} // PC: ${pcPoint}`;
      inGame.appendChild(score);
    }

    const result = document.querySelector("#result");
    if (games === 5) {
      if (playerPoint > pcPoint) {
        result.textContent = "You WIN!!!";
      } else if (playerPoint < pcPoint) {
        result.textContent = "You LOOSE!!!";
      } else {
        result.textContent = "It`s a TIE!!!";
      }
      const buttonReset = document.createElement("button");
      buttonReset.classList.add("buttonReset");
      buttonReset.textContent = "Play Again";
      buttonReset.id = "#reset";
      inGame.appendChild(buttonReset);
      buttonReset.addEventListener("click", () => {
        location.reload();
      });
    }
  }
}

buttonStart = document.querySelector("#start");
buttonStart.addEventListener("click", () => {
  game();
});

// game();
