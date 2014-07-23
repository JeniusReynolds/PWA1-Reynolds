/**
 * Duel Fight Game - FINISHED

 Assignment 1
 Part 3/3 of series
 Updated Key - By Jonathan Reynolds
 7/25/2014
*/

// Main Function that will be running when the site loads.
(function(){
	//Initial indication that the program has started and the "Battle" has begun
    console.log("FIGHT!!!");

    //Defining variables that are using objects from the DOM
    var fighter1_txt = document.getElementById('kabal');
    var fighter2_txt = document.getElementById('kratos');
    var round_txt = document.getElementById('round');
    var button = document.getElementById('fight_btn');

    //Adding the click listener event instead of the onClick
    button.addEventListener("click",fight,false);

    //Variable being created for each player name
    //var playerOne = ['Spiderman',20,100];
    //var playerTwo = ["Batman",20,100];
    //Variable Indicating each player's damage meter
    //var player1Damage = 20;
    //var player2Damage = 20;
    //Variable indicating each player's initial health level.
    //var playerOneHealth = 100;
    //var playerTwoHealth = 100;

    //Using an array with 2 fighter objects to contain fighter information
    var fighters = [
        {
            name:'Kabal',
            damage:20,
            health:100
        },
        {
            name:'Kratos',
            damage:20,
            health:100
        }
    ];

    //Starting Round number variable
    var round= 1;

    //Adding innerHTML Text
    round_txt.innerHTML = "Click Fight Button to Start";
    fighter1_txt.innerHTML = fighters[0].name + ': ' + fighters[0].health;
    fighter2_txt.innerHTML = fighters[1].name + ': ' + fighters[1].health;

	//Function that will start the "Fighting" Sequence.
    function fight(){
    	//Alert that will indicate each player's name and health level at the start of each round.
        alert(playerOne[0]+":"+playerOne[2]+"  *START*  "+playerTwo[0]+":"+playerTwo[2]);
        for (var i = 0; i < 10; i++)
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            //Variable indicating what the minimum damage is for each player
            var minDamage1 = playerOne[1] * .5;
            var minDamage2 = playerTwo[1] * .5;
            //Variables indicating what the final deduction amounts will be for the individual player's health
            var f1 = Math.floor(Math.random()*(playerOne[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(playerTwo[1]-minDamage2)+minDamage2);

            //Players health actually being deducted after the random amount is taken.
            playerOne[2]-=f1;
            playerTwo[2]-=f2;
			
			//The Printing of the Player's Name and Health after the damages
            console.log(playerOne[0]+": "+playerOne[2] + " " + playerTwo[0]+":"+playerTwo[2]);

            //Variable to check to see if there is a winner
            var result = winnerCheck();
            //beginning of an If/Else statement that will check to see if there is a winner. The statement is checking the results of the winnerCheck function that was ran in the above line.
            console.log(result);
            if (result==="no winner")
            {
            //IF there is no winner then there will be an alert prompt displaying the player and their health along with the round number
                round++;
                alert(playerOne[0]+":"+playerOne[2]+"  *ROUND "+round+" OVER"+"*  "+playerTwo[0]+":"+playerTwo[2]);

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
        if (playerOne[2]<1 && playerTwo[2]<1)
        {
            result = "You Both Die";
            //Otherwise if Player One's health is less than 1 then Player 2 wins
        } else if(playerOne[2]<1){
            result =playerTwo[0]+" WINS!!!"
            //This is the opposite where Player 1 will win if the previous two if statements are false
        } else if (playerTwo[2]<1)
        {
            result = playerOne[0]+" WINS!!!"
        };
       return result;
    };

    /*******  The program gets started below *******/
    fight();

})();