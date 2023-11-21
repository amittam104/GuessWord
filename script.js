"use strict";
// PROBLEM BREAKDOWN
// 1. Store 10 fruit names in an array
// 2. Create Variable for user guess (queryselector)
// 3. Variable for Start button
// 4. Variable for Number of charaters of the random word
// 5. Variable for current game status
// 6. Variable for Play again button

// After user clicks on start game then Get the random word from the array and store it in a variable
// User clicks the guess button and the user guessws word and the random word from the array will get compared. If the word is same then User Wins the game and the same will be reflected on the message. If user guess is wrong then the numbers of lives gets reduced.
// If numbers of lives goes below 1 then user losses the game

const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Grapes",
  "Watermelon",
  "Mango",
  "Strawberry",
  "Pineapple",
  "Kiwi",
  "Cherry",
];

let guess = document.querySelector(".guess");
let guessButton = document.querySelector(".guess-button");
let start = document.querySelector(".start");
let length = document.querySelector(".length");
let gameStatus = document.querySelector(".status");
let again = document.querySelector(".again");
let lives = document.querySelector(".lives");
let randomFruit = "";

const wordGenrator = function () {
  let indexNumber = Math.trunc(Math.random() * 9 + 1);
  randomFruit = fruits[indexNumber];
  length.textContent = randomFruit.length;
  // console.log(randomFruit);
};

start.addEventListener("click", wordGenrator);

const guesser = function () {
  if (guess.value === randomFruit) {
    gameStatus.textContent = "You Win! 🏆";
  } else if (guess.value === "") {
    gameStatus.textContent = "No Input 🔴";
  } else {
    gameStatus.textContent = "Wrong Guess! ❌";
    lives.textContent--;
    if (lives.textContent < 1) {
      gameStatus.textContent = `You Lost! 💥 Your fruit was ${randomFruit}`;
      lives.textContent = 0;
    }
  }
};

guessButton.addEventListener("click", guesser);

again.addEventListener("click", function () {
  gameStatus.textContent = "Let's Start";
  lives.textContent = 3;
  guess.value = "";
  wordGenrator();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    guesser();
  }
});
