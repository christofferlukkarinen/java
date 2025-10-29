let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'LOSE!';
    } else if (computerMove === 'paper') {
      result = 'WIN!';
    } else if (computerMove === 'scissors') {
      result = 'TIE!';
    }
  }

  if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'WIN!'
    } else if (computerMove === 'paper') {
      result = 'TIE!';
    } else if (computerMove === 'scissors') {
      result = 'LOSE!'
    }
  }
  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'TIE!'
    } else if (computerMove === 'paper') {
      result = 'LOSE!';
    } else if (computerMove === 'scissors') {
      result = 'WIN!'
    }
  }
  if (result === 'WIN!') {
    score.wins += 1;
  } else if (result === 'LOSE!') {
    score.losses += 1;
  } else {
    score.ties += 1;
  }
  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `
      You <img src=images/${playerMove}-emoji.png class="move-icon"> <img src=images/${computerMove}-emoji.png class="move-icon"> Computer`;

}
function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `
        Wins: ${score.wins}
        Losses: ${score.losses}
        Ties: ${score.ties}`;
}

function pickComputerMove() {
  let computerMove = '';
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = ('rock');
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = ('paper');
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = ('scissors');
  }
  return computerMove;
}