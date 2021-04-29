const body = document.querySelector("body");
const newGameButton = document.querySelector("#newGameButton");
const gameArea = document.querySelector(".gameArea");
const welcomeScreen = document.querySelector("#welcomeScreen");
const easyMode = document.querySelector(".easyMode");
const hardMode = document.querySelector(".hardMode");
const inputBox = document.querySelector("#inputBox");
const guesses = document.querySelector("#guesses");
const textOutput = document.querySelector("#textOutput");
const attemptsToShow = document.querySelector("#attempts");
const lowSection = document.querySelector("#low");
const highSection = document.querySelector("#high");
const space = document.querySelector("#space");
const rangeOutput = document.querySelector("#rangeOutput");

let computerGuess;
let userGuesses = [];
let attempts = 0;
let maxGuesses;
let low = 0;
let high = 100;

function startGame() {
  welcomeScreen.style.display = "none";
  gameArea.style.display = "block";
}
function gameEnded() {
  newGameButton.style.display = "inline";
  inputBox.setAttribute("readonly", "readonly");
}

function updateRange() {
  rangeOutput.innerHTML = `${low + 1}-${high}`;
  rangeOutput.style.marginLeft = low + "%";
  rangeOutput.style.marginRight = 100 - high + "%";
  rangeOutput.classList.add("flash");

  lowSection.style.flex = low + "%";
  lowSection.style.background = "#ef7b54";

  space.style.flex = high - low + "%";
  space.style.background = "#82cce9";

  highSection.style.flex = 100 - high + "%";
  highSection.style.background = "#ef7b54";
}

body.onload = function init() {
  computerGuess = Math.floor(Math.random() * 100 + 1);
  newGameButton.style.display = "none";
  gameArea.style.display = "none";
};

easyMode.onclick = function easyMode() {
  maxGuesses = 10;
  startGame();
};

hardMode.onclick = function hardMode() {
  maxGuesses = 5;
  startGame();
};

newGameButton.onclick = function newGame() {
  window.location.reload();
};

inputBox.onchange = function compareGuess() {
  const userGuess = Number(inputBox.value);
  userGuesses.push(" " + userGuess);
  guesses.innerHTML = userGuesses;
  attempts++;
  attemptsToShow.innerHTML = attempts;

  if (attempts < maxGuesses) {
    if (userGuess > computerGuess) {
      if (userGuess < high) high = userGuess;
      textOutput.innerHTML = "Your guess is to high &#129488;";
      inputBox.value = "";
    } else if (userGuess < computerGuess) {
      if (userGuess > low) low = userGuess;
      textOutput.innerHTML = "Your guess is to low &#129300;";
      inputBox.value = "";
    } else {
      textOutput.innerHTML = `Correct!! You got it in ${attempts} attempts &#129395;`;
      gameEnded();
    }
  } else {
    if (userGuess > computerGuess) {
      textOutput.innerHTML =
        "You lose! &#129402; <br> The number was " + computerGuess;
      gameEnded();
    } else if (userGuess < computerGuess) {
      textOutput.innerHTML =
        "You lose! &#129402; <br> The number was " + computerGuess;
      gameEnded();
    } else {
      textOutput.innerHTML = `Correct!! You got it in ${attempts} attempts &#129395;`;
      gameEnded();
    }
  }
  updateRange();
};
