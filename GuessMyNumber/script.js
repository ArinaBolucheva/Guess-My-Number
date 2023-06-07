'use strict';

// console.log(document.querySelector('.start_guess').textContent);
// document.querySelector('.start_guess').textContent = 'Correct Number!';
// console.log(
//   (document.querySelector('.start_guess').textContent = 'Correct Number!')
// );
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score_int').textContent = 10;

// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 21);
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.start_guess').textContent = 'No number!😢';
  } else if (guess === secretNumber) {
    document.querySelector('.start_guess').textContent = 'Correct Number!👻';
  } else if (guess > secretNumber) {
    document.querySelector('.start_guess').textContent = 'Too high!📈';
    score--;
    document.querySelector('.score_int').textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector('.start_guess').textContent = 'Too low!📉';
    score--;
    document.querySelector('.score_int').textContent = score;
  }
});
