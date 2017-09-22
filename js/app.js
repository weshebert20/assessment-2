$( document).ready(function() {

	let keyPressOne = [];
	let keyPressTwo = [];


// have my image move when i hit the keydown
    var playerOne = $("html").keydown(function(evt){   	
    	if(evt.which == 80){
            $("#playerOne").animate({left: "+=10"},100);   
        } 

   	// Attempt to declare a winner on keypress

        $(playerOne).keypress(function(){
        	if(keyPressOne == 10){
        		console.log('PLAYER ONE WON!');
        	}
        	});
        	keyPressOne++;
    });    

// have my image move when i hit the keydown
    var playerTwo = $("html").keydown(function(evt1){
    	if(evt1.which == 81){
            $("#playerTwo").animate({left: "+=10"},100);    
        } 

    // Attempt to delare a winner on keypress
 //        $(playerTwo).on("keypress",function(){
 //        	if(keyPressTwo === 100){
 //        		alert('PLAYER TWO WON!');
 //        		}
 //        	});
 //        	keyPressTwo++;
	});

});