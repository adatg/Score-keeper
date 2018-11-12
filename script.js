var playerOneScore = document.querySelector('#playerOneScore');
var playerTwoScore = document.querySelector('#playerTwoScore');

var btnOne = document.querySelector('#playerOne');
var btnTwo = document.querySelector('#playerTwo');
var btnReset = document.querySelector('#reset');

var numInput = document.querySelector('#chooseNumber');
var game = document.querySelector('#numberChosen')

var p1Score = 0;
var p2Score = 0;
var gameOver = false;

var score = 5;

numInput.addEventListener('change', function(){
	game.textContent = this.value;
	score = Number(this.value);
	reset();
});

btnOne.addEventListener("click", function() {
	if(!gameOver){
  		p1Score++;
  		if(p1Score === score) {
  			gameOver = true;
  			playerOneScore.classList.add('green');
  		}
  	playerOneScore.textContent = p1Score;
  }
});

btnTwo.addEventListener("click", function() {
  	if(!gameOver){
  		p2Score++;
  		if(p2Score === score) {
  			gameOver = true;
  			playerTwoScore.classList.add('green');
  		}
  	playerTwoScore.textContent = p2Score;
  }
});

btnReset.addEventListener('click', function(){
	reset();
});

function reset(){
	p1Score = 0;
	p2Score = 0;
	playerOneScore.textContent = 0;
	playerTwoScore.textContent = 0;
	playerOneScore.classList.remove('green');
	playerTwoScore.classList.remove('green');
	gameOver = false;
};