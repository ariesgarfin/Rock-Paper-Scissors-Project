const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Start Game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });
    //Computer Options
    const computerOptions = ["ROCK", "PAPER", "SCISSORS"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          compareHands(this.textContent, computerChoice);
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);
        //Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");
    //Tie
    if (playerChoice === computerChoice) {
      winner.textContent = "TIE";
      return;
    }
    //Rock
    if (playerChoice === "ROCK") {
      if (computerChoice === "SCISSORS") {
        winner.textContent = "YOU WIN";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "OPPONENT WINS";
        cScore++;
        updateScore();
        return;
      }
    }
    //Paper
    if (playerChoice === "PAPER") {
      if (computerChoice === "SCISSORS") {
        winner.textContent = "OPPONENT WINS";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "YOU WIN";
        pScore++;
        updateScore();
        return;
      }
    }
    //Scissors
    if (playerChoice === "SCISSORS") {
      if (computerChoice === "ROCK") {
        winner.textContent = "OPPONENT WINS";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "YOU WIN";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  var audio = new Audio('../assets/summer-strut-infraction-main-version16209-01-17(1).mp3')
  audio.play();
  
  //Inner Function
  startGame();
  playMatch();
};

//start Game Function
game();