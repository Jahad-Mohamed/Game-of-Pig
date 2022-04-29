"use strict";

// SELECTING ELEMENTS
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const score0El = document.getElementById("score--0"); // OR document.querySelector('#score--0') // id includes hashtag
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//  ADD BUTTONS VARIABLE

// Starting Condition

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// Roll dice functionality

// 1. add event listener on btn and generate random number 1-6
btnRoll.addEventListener("click", function () {
  const dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);

  // 2. Display dice roll
  diceEl.classList.remove("hidden");
  diceEl.src = `./public/dice-${dice}.png`;

  // 3. check if 1 is rolled
  if (dice !== 1) {
    currentScore += dice;

    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // switch to next player
    switchPlayer();
  }
});

btnHold.addEventListener("click", function () {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  switchPlayer();
});
