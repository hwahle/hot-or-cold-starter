var newGameNumber = 0;


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

  	/*--- New Game ---*/
  	$("a.new").click(function(){
  		var newGame = location.reload();

  	});

});


