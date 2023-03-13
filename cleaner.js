'use strict';

// // cleaner and refactored code from the index.js file

const checked = document.querySelector('.check');

// //
function getRandom() {
  return Math.trunc(Math.random() * 5) + 1;
}

// //
// global variables
let score = 10;
let disableButton = false;
let highScore = 0;

// // function to change the text content
const changeTextContent = content => {
  document.querySelector('.message').textContent = content;
};

// //
checked.addEventListener('click', e => {
  let secretNumber = getRandom();

  const guess = Number(document.querySelector('.guess').value);

  // when the player wins
  if (guess === secretNumber) {
    changeTextContent('😂 correct 🤩😁');
    score++;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundImage =
      'radial-gradient(green, green)';
    document.querySelector('.number').style.width = 'clamp(15rem, 3vw, 25rem)';
    document.querySelector('.number').textContent = secretNumber;

    // // // setting highscore logic
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when the quess is too high
  } else if (guess && guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? changeTextContent('too  high 🥺😔😔')
        : changeTextContent('too  low 🥺😔😔');
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector(
        'body'
      ).style.backgroundImage = `radial-gradient(rgba(210, 0, 20, 0.2), rgba(255, 0, 0, 0.5)`;
    } else {
      changeTextContent('ow, you lost');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.check').setAttribute('disabled', disableButton);
    }
  } else {
    changeTextContent('choose a number');
  }
  console.log('your guess is ', guess, 'the secretNumber is', secretNumber);
});

// // implementing the play again button
document.querySelector('.again').addEventListener('click', e => {
  //   location.reload();
  score = 10;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = '🤷‍♂️ start guessing..';
  document.querySelector(
    'body'
  ).style.backgroundImage = `radial-gradient(rgba(210, 0, 20, 0.2), rgba(255, 0, 0, 0.5)`;
  document.querySelector('.number').style.width = '8rem';
  document.querySelector('.check').disabled = false;
});
