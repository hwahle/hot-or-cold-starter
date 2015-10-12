var newGameNumber = 0,
	guesses = [];


$(document).ready(function(){

	/*--- generate random number between 1 and 100 ---*/
	
  		newGameNumber = Math.floor((Math.random() * 100) + 0);
  		console.log(newGameNumber);

	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$("form").submit(function(evt) {
  		evt.preventDefault();
  		checkUserGuess();
  	});
  	/*--- New Game ---*/
  	$("a.new").click(function(){
  		var newGame = location.reload();

  	});

});

  	/*--- add to guess list ---*/
  function addToList(blueArea) {
  	guesses.push(blueArea);
  	$("#count").text(guesses.length);
  	$("ul#guessList").append("<li>" + blueArea + "</li>");
  }
/*--create write function for guess list---*/
  	function write(txt) {
  		document.getElementById("feedback").innerHTML = txt;
  	}

/*---checks if user guess is hot or cold---*/
  	function checkUserGuess() {
  		var userGuess = parseInt($("#userGuess").val()),
  		theDifference = Math.abs(newGameNumber - userGuess);
  		
 	
 	/*--- debug ---*/
 	console.log("newGameNumber:" + newGameNumber);
 	console.log("userGuess:" + userGuess);
 	console.log("theDifference:" + theDifference);

 	addToList(userGuess);

 	if (theDifference < 10)
 		write("On Fire");
 	else if (theDifference < 25)
 		write("Hotter");
 	else if (theDifference < 50)
 		write("Warm");
 	else if (theDifference < 75)
 		write("Cold");
 	else if (theDifference < 100)
 		write("Freezing");
 	else if (theDifference == 0)
 		write("Great work! You Guessed Correctly!");
  					
  		
  	}
  		





