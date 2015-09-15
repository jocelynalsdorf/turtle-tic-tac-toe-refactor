var replacer = function(sentence, word, replacement) {
  //check for user error
  if((word.length === 0) || (replacement.length === 0)|| (sentence.length === 0) ) {
      return false;
  }
  //create RegExp object so that it can be passed into replace method
  var regex = new RegExp(word, "gi");
  var fixedSentence = sentence.replace(regex, replacement);

  return fixedSentence;

};


$(document).ready(function(){
 var endEvent = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
  $("form#replacer").submit(function(event){
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var word = $("input#word").val();
    var replacement = $("input#replacement").val();
    var result = replacer(sentence, word, replacement);
    $(".final").text(" ");
    
    if(!result) {
      $(".final").text("Uggh there was some sort of problem encountered. Try again");
    } else {
      $(".final").text(result);
    }

    $("#result").show().addClass("animated bounceInLeft").one(endEvent,
      function(){
        $(this).removeClass("animated bounceInLeft");
    });


  });//end of submit event
});//end of file