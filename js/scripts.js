// function Game() {
//   this.;
//   this.;
//   this.;
//   this.;
//   this.;
//   this.;
// }

//function Board()




// var resetFields = function(){
//   $("input#player1name").val("");
//   $("input#player2name").val("");
//   };

$(document).ready(function(){

 $("#play").click(function(event){
   event.preventDefault();
   $("#inner-div").append("<div class='game-area'><div class='row'><div class='col-md-4 odd'></div><div class='col-md-4 even'></div><div class='col-md-4 odd'></div></div><div class='row'><div class='col-md-4 even'></div><div class='col-md-4 odd'></div><div class='col-md-4 even'></div></div><div class='row'><div class='col-md-4 odd'></div><div class='col-md-4 even'></div><div class='col-md-4 odd'></div></div></div>");


//   $(".player-one-score").text(blankfornow));
//   $(".player-two-score").text(blankfornow));
  
//   //resetFields();

   });//end of submit event

 $("#reset").click(function(event){
   event.preventDefault();
   $(".game-area").remove();

 });


 });//end of file