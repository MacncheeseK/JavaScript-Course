
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

//const autoPlay =()=>{

//}
const autoPlayElement =document.querySelector('.js-auto-play-button')
autoPlayElement.addEventListener('click',()=>autoPlay())
function autoPlay(){
  if(!isAutoPlaying){
    autoPlayElement.innerHTML ='Stop Playing';
    interval = setInterval(()=>{
      const playerMove = pickComputerMove();
      playGame(playerMove); 
    }, 1000);
    isAutoPlaying=true;
  }else{
    clearInterval(interval);
    autoPlayElement.innerHTML= 'Auto Play';
    isAutoPlaying =false;
  }
  
}

document.querySelector('.js-rock-button').addEventListener('click', () =>{
  playGame('rock');
})
document.querySelector('.js-paper-button').addEventListener('click', () =>{
  playGame('paper');
})
document.querySelector('.js-scissors-button').addEventListener('click', () =>{
  playGame('scissors');
})
document.querySelector('.js-reset-score-button').addEventListener('click',()=>confirmation());

document.body.addEventListener('keydown',(event) =>{
  if(event.key ===  'r'){
    playGame('rock');
  }else if(event.key === 'p'){
    playGame('paper');
  }else if(event.key ==='s'){
    playGame('scissors');
  }else if(event.key ==='a'){
    autoPlay();
  }else if(event.key ==='Backspace'){
    confirmation();
  }
})

function restScore(){
  score.wins=0; 
  score.losses=0;
  score.ties=0;
  localStorage.removeItem('score');
  updateScoreElement();
}
function confirmation(){
  const confirmationElement = document.querySelector('.js-confirmation-message');
  confirmationElement.innerHTML= 'Are you sure you want to reset  the score? <button class="yes-button js-yes-button">Yes</button> <button class="no-button js-no-button">NO</button>'
  document.querySelector('.js-yes-button').addEventListener('click',()=>{
    restScore();
    confirmationElement.innerHTML='';
  });
  document.querySelector('.js-no-button').addEventListener('click',()=> confirmationElement.innerHTML='');

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

