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
        //alert(playerOne[0]+":"+playerOne[2]+"  *START*  "+playerTwo[0]+":"+playerTwo[2]);

        fighter1_txt.innerHTML = fighters[0].name + ': ' + fighters[0].health;
        fighter2_txt.innerHTML = fighters[1].name + ': ' + fighters[1].health;

            //random formula is - Math.floor(Math.random() * (max - min) + min);
            //Variable indicating what the damage will be
            var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage *.5);
            var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage *.5);


            //Players health actually being deducted after the random amount is taken.
            fighters[0].health-=f1;
            fighters[1].health-=f2;
			
			//The Printing of the Player's Name and Health after the damages
            console.log(fighters[0].name + ': ' + fighters[0].health + " " + fighters[1].name + ': ' + fighters[1].health);

            //Variable to check to see if there is a winner
            var result = winnerCheck();

            console.log(result);

            round_txt.innerHTML = "Round " + round + " Results: " + result;
            round++;
            if (result==="No Winner")
            {

                //alert(playerOne[0]+":"+playerOne[2]+"  *ROUND "+round+" OVER"+"*  "+playerTwo[0]+":"+playerTwo[2]);

                fighter1_txt.innerHTML = fighters[0].name + ': ' + fighters[0].health;
                fighter2_txt.innerHTML = fighters[1].name + ': ' + fighters[1].health;


            } else{
                //alert(result);
                fighter1_txt.innerHTML = result;
                fighter2_txt.innerHTML = "";

                //break;
                //Cancel the Event Listener
                button.removeEventListener("click", fight, false);

                document.querySelector('.buttonblue').innerHTML = 'Done';
            }


    }
			//The creation of the function used to check to see if there is a winner yet
    function winnerCheck(){
    		//Defining the initial string value for the "result" value as "no winner"
        var result="No Winner";
        	//If player one's health is less than 1 and player two's health is less than one then it will run the result of "You both Die"
        if (fighters[0].health < 1 && fighters[1].health < 1)
        {
            result = "You Both Die";
            //Otherwise if Player One's health is less than 1 then Player 2 wins
        } else if(fighters[0].health < 1){
            result = fighters[1].name+" WINS!!!"
            //This is the opposite where Player 1 will win if the previous two if statements are false
        } else if (fighters[1].health < 1)
        {
            result = fighters[0].name+" WINS!!!"
        }
       return result;
    }

})();