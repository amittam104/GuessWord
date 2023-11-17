"use strict";
// PROBLEM BREAKDOWN
// 1. Store 10 fruit names in an array
// 2. Create Variable for user guess (queryselector)
// 3. Variable for Start button
// 4. Variable for Number of charaters of the random word
// 5. Variable for current game status
// 6. Variable for Play again button

// After user clicks on start game then Get the random word from the array and store it in a variable

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
let guessButton = document.querySelector(".btn-guess");
let start = document.querySelector(".start");
let length = document.querySelector(".length");
let status = document.querySelector(".status");
let again = document.querySelector(".again");
let lives = document.querySelector(".lives");
let randomFruit = "";

start.addEventListener("click", function () {
  let indexNumber = Math.trunc(Math.random() * 9 + 1);
  let randomFruit = fruits[indexNumber];
  console.log(randomFruit);
});

guessButton.addEventListener("click", function () {});
