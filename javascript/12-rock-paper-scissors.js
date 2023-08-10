
let score = JSON.parse(localStorage.getItem('score')) ||{
  wins: 0,
  losses: 0,
  ties: 0   
}

updateScoreElement()
/*
if(!score){
  score={
    wins: 0,
    losses: 0,
    ties: 0   
  }
}
*/
let isAutoPlaying =false;
let interval;

function autoPlay(){
  if(!isAutoPlaying){
    interval = setInterval(function(){
      const playerMove = pickComputerMove();
      playGame(playerMove); 
    }, 1000);
    isAutoPlaying=true;
  }else{
    clearInterval(interval);
    isAutoPlaying =false;
  }
  
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
    
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  if(result ==='You win.'){
   score.wins++;
  }else if(result==='You lose.'){
    score.losses++;
  }else if(result==='Tie.'){
    score.ties++;
  }

  localStorage.setItem('score', JSON.stringify(score));
  updateResultElement(result);
  updateMoveElement(playerMove,computerMove);
  updateScoreElement();
  

  //alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result} \nwins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}
function updateScoreElement(){
  document.querySelector('.js-score').innerHTML= `wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
function updateResultElement(result){
  document.querySelector('.js-result').innerHTML = result;
}
function updateMoveElement(playerMove,computerMove){
  document.querySelector('.js-move').innerHTML  = `you <img src="images/${playerMove}-emoji.png" class="move-icon"><img src="images/${computerMove}-emoji.png" class="move-icon"> computer`;
}
