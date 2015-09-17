//will need a player, a board and a game


function Player(marker, isActive) {
  this.marker = marker; //will be set to x or o
  this.isActive = isActive; //will be toggled t or f to know whose turn
};

//can change turns by toggling isActive for a player 
Player.prototype.changeTurns = function(){
  if(isActive === true) {
    isActive = false;
  }
  else {
    isActive = true;
  }
};
//make empty 2d array (will be all null) so can compare null vs != null to see if square is empty & can be played
function Board() { 
  var boardSize = 3;
  var board = [];
  for(var row = 0; row < boardSize; row++) {
    board.push([]);
    for(var col = 0; col < boardSize; col++){
      board[row].push(null);
    }
  }
  this.board = board;
};



Board.prototype.mark = function(xcord, ycord, marker){ //this marks a square with the current players marker
  if(!this.isMarkedYet(xcord, ycord)) {
    this.board[xcord][ycord] = marker;
  }
};

Board.prototype.isMarkedYet = function(){ //checks if the array spot is null or not.if its not null it has been marked already
  if(this.board[xcord][ycord] !== null){
    return this.board[xcord][ycord];
  } 
  else {
    return false;
  }
};


function Game(){
  var playerOne = new Player("X", true);
  var playerTwo = new Player("O", false);
  var board = new Board();
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
  this.board = board;
};

Game.prototype.getTurns = function(){ //returns whose turn it is
  if(this.playerOne.isActive === true) {
    return this.playerOne;
  }
  else {
    return this.playerTwo;
  }
}






var makeBoardBackground = function(){
 $("#inner-div").append("<div class='game-area'><div class='row'><div class='col-md-4 odd'></div><div class='col-md-4 even'></div><div class='col-md-4 odd'></div></div><div class='row'><div class='col-md-4 even'></div><div class='col-md-4 odd'></div><div class='col-md-4 even'></div></div><div class='row'><div class='col-md-4 odd'></div><div class='col-md-4 even'></div><div class='col-md-4 odd'></div></div></div>");
  };

$(document).ready(function(){

 $("#play").click(function(event){
   event.preventDefault();
   makeBoardBackground();
   var myBoard = new Board();
   console.log(myBoard);
   var newGame = new Game();
   console.log(newGame);
//   $(".player-one-score").text(blankfornow));
//   $(".player-two-score").text(blankfornow));

   });//end of submit event

 $("#reset").click(function(event){
   event.preventDefault();
   $(".game-area").remove();

 });


 });//end of file