'use strict';

let secretNumber = Math.trunc(Math.random() * 21);
let score = 20;
let highscore = 0;
const displayStartGuess = function (startGuess) {
  document.querySelector('.start_guess').textContent = startGuess;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when the player does not input anything
  if (!guess) {
    displayStartGuess('No number!😢');

    //when player wins
  } else if (guess === secretNumber) {
    displayStartGuess('Correct Number!👻');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore_int').textContent = highscore;
    }
  }
  //when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayStartGuess(guess > secretNumber ? 'Too high!📈' : 'Too low!📈');
      score--;
      document.querySelector('.score_int').textContent = score;
    } else {
      displayStartGuess('You loose!😭');
      document.querySelector('.score_int').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score_int').textContent = score;
  secretNumber = Math.trunc(Math.random() * 21);
  displayStartGuess('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#242424';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
