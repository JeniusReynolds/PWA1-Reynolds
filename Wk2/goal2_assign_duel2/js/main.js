/**
 * Duel Fight Game - FINISHED
 * Date: 4/09/13

 Assignment 1
 Part 2/3 of series
 Updated Key - By Jonathan Reynolds
 7/18/2014
*/

// Main Function that will be running when the site loads.
(function(){
	//Initial indication that the program has started and the "Battle" has begun
    console.log("FIGHT!!!");

    //Variable being created for each player name
    var playerOne = ['Spiderman',20,100];
    var playerTwo = ["Batman",20,100];

    //Variable Indicating each player's damage meter
    //var player1Damage = 20;
    var player2Damage = 20;

    //Variable indicating each player's initial health level.
    //var playerOneHealth = 100;
    var playerTwoHealth = 100;

    //Starting Round number variable
    var round=0;

	//Function that will start the "Fighting" Sequence.
    function fight(){
    	//Alert that will indicate each player's name and health level at the start of each round.
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);
        for (var i = 0; i < 10; i++)
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            //Variable indicating what the minimum damage is for each player
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            //Variables indicating what the final deduction amounts will be for the individual player's health
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            //Players health actually being deducted after the random amount is taken.
            playerOneHealth-=f1;
            playerTwoHealth-=f2;
			
			//The Printing of the Player's Name and Health after the damages
            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);

            //Variable to check to see if there is a winner
            var result = winnerCheck();
            //beginning of an If/Else statement that will check to see if there is a winner. The statement is checking the results of the winnerCheck function that was ran in the above line.
            console.log(result);
            if (result==="no winner")
            {
            //IF there is no winner then there will be an alert prompt displaying the player and their health along with the round number
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);

            } else{
                alert(result);
                break;
            };

          };
    };
			//The creation of the function used to check to see if there is a winner yet
    function winnerCheck(){
    		//Defining the initial string value for the "result" value as "no winner"
        var result="no winner";
        	//If player one's health is less than 1 and player two's health is less than one then it will run the result of "You both Die"
        if (playerOneHealth<1 && playerTwoHealth<1)
        {
            result = "You Both Die";
            //Otherwise if Player One's health is less than 1 then Player 2 wins
        } else if(playerOneHealth<1){
            result =playerTwoName+" WINS!!!"
            //This is the opposite where Player 1 will win if the previous two if statements are false
        } else if (playerTwoHealth<1)
        {
            result = playerOneName+" WINS!!!"
        };
       return result;
    };

    /*******  The program gets started below *******/
    fight();

})();