'use strict';

// console.log(document.querySelector('.start_guess').textContent);
// document.querySelector('.start_guess').textContent = 'Correct Number!';
// console.log(
//   (document.querySelector('.start_guess').textContent = 'Correct Number!')
// );
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score_int').textContent = 10;

// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 21);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when the player does not input anything
  if (!guess) {
    document.querySelector('.start_guess').textContent = 'No number!😢';

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.start_guess').textContent = 'Correct Number!👻';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore_int').textContent = highscore;
    }

    //when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.start_guess').textContent = 'Too high!📈';
      score--;
      document.querySelector('.score_int').textContent = score;
    } else {
      document.querySelector('.start_guess').textContent = 'You loose!😭';
      document.querySelector('.score_int').textContent = 0;
    }
    //when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.start_guess').textContent = 'Too low!📈';
      score--;
      document.querySelector('.score_int').textContent = score;
    } else {
      document.querySelector('.start_guess').textContent = 'You loose!😭';
      document.querySelector('.score_int').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score_int').textContent = score;
  secretNumber = Math.trunc(Math.random() * 21);
  document.querySelector('.start_guess').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#242424';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
