$( document).ready(function() {

// have my image move when i hit the keydown for player one
    var playerOne = $("html").keydown(function(evt){   	
    	if(evt.which == 80){
            $("#playerOne").animate({left: "+=40"},100);   
        } 
// declare winner by setting a position and set html player 1 won
        if($("#playerOne").position().left > 1100){
            $(".winnerPlacement").html("Player One Wins");
        }
    });

// have my image move when i hit the keydown for player two
    var playerTwo = $("html").keydown(function(evt1){
    	if(evt1.which == 81){
            $("#playerTwo").animate({left: "+=40"},100);    
        } 
// declare winner by setting a position and set html player 2 won
        if($("#playerTwo").position().left > 1100){
            $(".winnerPlacement").html("Player Two Wins");
        }
	});

// set button to reload page
    $('#restartButton').click(function() {
    location.reload();
    });

});