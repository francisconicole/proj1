//Author: Nicole Francisco
//Email: franciscon@knights.ucf.edu

//-----variables used to add the person's name and sets up the functions to fill in the blanks for the game to progress.
	var playerName = "";
	var str = "";
	var stage = 0;
	var restart = "What is your [playerName] child?"; //states what will pop up in the textSpot when you type restart.
	
//---------------------------------------------------------------------------------------		
	function check(e){
		if(e.keyCode == 13) checkEnter(); //allows the game to move forward on clicking the button
	}
		
	function checkEnter(e) {
		str = document.getElementById("enterText").value;
            str = str.toLowerCase(); //makes everything lowercase
            
            //clears the text box when the player clicks the "move on" button.
            
            document.getElementById("enterText").value = ""
			
			if(str == "restart") {
				stage = 0;
				console.log(stage);
			}
				switch(stage) {   //---this allows for the stages to switch when a decision is made so the game can progress
				
				//each case below is a group of code that takes the decisions process and makes it work.  Each part of the game requires the user to input a word that will cause the game to advance.  These blocks represent each phase and the decision that needs to be made.
					case 0:
							//this allows users to restart at anytime in the game.
						if(str == "restart") {
							document.getElementById("textSpot").innerHTML = restart;
							document.getElementById("imageSpot").src="../images/god.gif";
							document.getElementById("sound").src = "../audio/amazingGrace.mp3";//http://mp3skull.com/mp3/amazing_grace.html accessed on 9-30-14
						}
						else {
							stage = 1; //this occurs if restart is not typed and after the name.
							document.getElementById("textSpot").innerHTML = "Will you come and listen to my tale? [yes]";
							document.getElementById("imageSpot").src="../images/god.gif";
							document.getElementById("sound").src = "../audio/amazingGrace.mp3";//http://mp3skull.com/mp3/amazing_grace.html accessed on 9-30-14
							playerName = str;
							text.s1 = "Thank you " + playerName + ". There are parts of the bible stories missing. You have to find them and put them back where they are supposed to be.  Thank you and go forth my child. Would you like to go [forward]?";
						}
							break; //stops running after this action...like a pause before the next step instead of trying to run the whole script.
						
					case 1:
						if(str == "yes") {
							stage = 2;
							document.getElementById("textSpot").innerHTML = "Thank you " + playerName + ". There are parts of the bible stories missing. You have to find them and put them back where they are supposed to be.  Thank you and go forth my child. Would you like to go [forward]?";
							document.getElementById("imageSpot").src="../images/god.gif";
							document.getElementById("sound").src = "../audio/amazingGrace.mp3";//http://mp3skull.com/mp3/amazing_grace.html accessed on 9-30-14
						}
						break;
							
					case 2: //start
						if(str =="forward") {
							stage = 3;
							document.getElementById("textSpot").innerHTML = "You have found yourself in the woods.  You can hear the crickets chirping. You find your path blocked by a tree. Would you like to go [around] or [right]?";
							document.getElementById("imageSpot").src="../images/forest.png";
							document.getElementById("sound").src = "../audio/crickets.mp3";
						}
						break;
						
					case 3: //start.forward
						if(str == "around") {
							stage = 4;
							document.getElementById("textSpot").innerHTML = "You find yourself standing on the edge of a desert.  You see someone standing there. Do you [talk] or go keep [going]";
							document.getElementById("imageSpot").src="../images/manDesert.jpg";
							document.getElementById("sound").src = "../audio/coyote.mp3";
						}
						else if(str == "right") { //looks all the way to it's end.
							stage = 5;
							document.getElementById("textSpot").innerHTML = "You find yourself standing on the edge of a cliff. You look around for a short time and turn back to look for a [easy] path through the desert.";
							document.getElementById("imageSpot").src="../images/cliff.png";
							document.getElementById("sound").src = "../audio/wind.mp3";//http://www.freesfx.co.uk/ accessed on 9-20-14
						}
						break;
							
					case 4: //start.forward.around
						if(str == "talk") {
							stage = 6;
							document.getElementById("textSpot").innerHTML =	"You ask who he is and he replies that he is Philip traveling around on his camel.  He tells you of a woman who says her name is Eve and that she is very hungry.  He tells you that she is to the right of the mountains.  Will you [seek] eve or [turn]";
							document.getElementById("imageSpot").src="../images/desertMan.jpg";
							document.getElementById("sound").src = "../audio/coyote.mp3";
						}
						else if(str == "going") {
							stage = 7;
							document.getElementById("textSpot").innerHTML =	"You see a man looking upset. Do you [speak] to him or [ignore] him.";
							document.getElementById("imageSpot").src="../images/noahLost.jpg"; //http://www.coloring.ws/christian.htm accessed on 9-14-14
							document.getElementById("sound").src = audio.l4;
						}
						break;
							
					case 5: //start.forward.right
						if(str == "easy") {
							stage = 8;
							document.getElementById("textSpot").innerHTML = "You come across a snake who bites you.  GAME OVER!! Would you like to [restart]?";
							document.getElementById("imageSpot").src="../images/snake.jpg";//http://www.coloring.ws/christian.htm accessed on 9-14-14
							document.getElementById("sound").src = "../audio/death.mp3";
						}
						break;							
							
					case 6: //start.forward.around.talkDM
						if(str == "seek") {
							stage = 8;
							document.getElementById("textSpot").innerHTML = "You find yourself facing mountains and you can see a weeping woman standing against the mountain.  You can hear the howls of the wolves echoing off the mountains. Will you [chat] or [leave] direction right.";
							document.getElementById("imageSpot").src="../images/mountain.jpg";
							document.getElementById("sound").src = "../audio/howling.mp3";//http://www.freesfx.co.uk/ accessed on 9-20-14
						}
						else if(str == "turn") {
							stage = 9;
							document.getElementById("textSpot").innerHTML =	"You find yourself at a lake.  Looking around you see how pretty it is and you get closer to the water. Do you take a drink? of[course] or [no].";
							document.getElementById("imageSpot").src="../images/lake.jpg";
							document.getElementById("sound").src = "../audio/waterfall.mp3";//http://www.freesfx.co.uk/ accessed on 9-20-14
						}
						break;
							
					case 7: //start.forward.around.going
						if(str == "speak") {
							stage = 10;
							document.getElementById("textSpot").innerHTML = "The man tells you his name is Noah and that he can't find his arc.  He tells you that he went to get wood and lost his way and asks if you will help hin find his arc. You choose to help him find his arc.  [continue], or [veer] left";
							document.getElementById("imageSpot").src="../images/noahTalk.jpg";//http://www.coloring.ws/christian.htm accessed on 9-14-14
							document.getElementById("sound").src = audio.l45;									
						}
						else if(str == "ignore") {
							document.getElementById("textSpot").innerHTML = "GAME OVER!! You have to talk to Noah to complete game. [Restart]?";
							document.getElementById("imageSpot").src="../images/noahLost.jpg";//http://www.coloring.ws/christian.htm accessed on 9-14-14
							document.getElementById("sound").src = "../audio/peace.mp3";	//http://mp3skull.com/mp3/chopin.html accessed on 9-14-14								
						}
						break;
					
					case 8: //start.forward.around.talkDM.seek 
						if(str == "chat") { 
							stage = 13;
							document.getElementById("textSpot").innerHTML = "She tells you that her name is Eve and that she is hungry and looking for an apple.  She asks you to help her find them in the Garden of Eden.  Will you [help]?";
							document.getElementById("imageSpot").src="../images/eve.jpg";//http://www.coloring.ws/christian.htm accessed on 9-14-14
							document.getElementById("sound").src = "../audio/howling.mp3";//http://www.freesfx.co.uk/ accessed on 9-20-14
						}
						else if(str == "leave") { 
							document.getElementById("textSpot").innerHTML = "GAME OVER!! You have to talk to Eve to complete game. [Restart]?";
							document.getElementById("imageSpot").src="../images/eve.jpg";//http://www.coloring.ws/christian.htm accessed on 9-14-14
							document.getElementById("sound").src = "../audio/howling.mp3";//http://www.freesfx.co.uk/ accessed on 9-20-14
						}
						break;
							
					case 9: //start.forward.around.talkDM.turn
						if(str == "course") { 
							document.getElementById("textSpot").innerHTML = "You fall into a lake and drown.  GAME OVER!! Would you like to [restart]?";
							document.getElementById("imageSpot").src="../images/death.jpg";//http://dzinekart.com/vector-leading-road-to-heaven.html accessed 9-30-14
							document.getElementById("sound").src = "../audio/death.mp3";//http://www.downloads.nl/music/Free+Download+Our+God+Is+An+Awesome+God accessed on 10-01-14
						}
						else if(str == "no") {
							stage = 11;
							document.getElementById("textSpot").innerHTML = "You come upon a beach and see a large pile of wood and the beginning of a [boat] to the right";
							document.getElementById("imageSpot").src="../images/arc.jpg";//http://sekolah-mingguku.blogspot.com/2012/07/noah.html accessed on 10-4-14
							document.getElementById("sound").src = "../audio/ocean.mp3"; //http://www.mp3olimp.net/ocean-sounds/ accessed on 10-4-14
						}
						break;
							
					case 10: //start.forward.around.going.speak 
						if(str == "continue") {
							stage = 12;
							document.getElementById("textSpot").innerHTML = "You continue with your new friends in search of the missing pieces.  You remember seeing a large tree standing up higher than the rest near the forest so you lead the way there passing the beach. [boat]";
							document.getElementById("imageSpot").src="../images/tree.jpg";//http://www.coloring.ws/christian.htm accessed on 9-14-14
							document.getElementById("sound").src = "../audio/ocean.mp3"; //http://www.mp3olimp.net/ocean-sounds/ accessed on 10-4-14
						}
						else if(str == "veer") {
							stage = 12;
							document.getElementById("textSpot").innerHTML = "You come across the missing arc and Noah thanks you with excitement. Listening to Eve mention hunger you [run].";
							document.getElementById("imageSpot").src="../images/arc.jpg";//http://sekolah-mingguku.blogspot.com/2012/07/noah.html accessed on 10-4-14
							document.getElementById("sound").src="../audio/animals.mp3";//http://www.freesfx.co.uk/ accessed on 9-20-14
						}
						break;
							
					case 11: //start.forward.around.going.continue.
							 //start.forward.around.talkDM.seek.help
							 //start.forward.around.talkDM.turn.no
						if(str == "boat") {
							stage = 12;
							document.getElementById("textSpot").innerHTML = "You come across the missing arc and Noah thanks you with excitement. Listening to Eve mention hunger you [run].";
							document.getElementById("imageSpot").src="../images/arc.jpg";//http://sekolah-mingguku.blogspot.com/2012/07/noah.html accessed on 10-4-14
							document.getElementById("sound").src="../audio/animals.mp3";//http://www.freesfx.co.uk/ accessed on 9-20-14
						}
						break;
							
					case 12: //start.forward.around.going.continue.boat
							//start.forward.around.talkDM.seek.help.boat
							//start.forward.around.talkDM.turn.no.boat
						if(str == "run") {
							stage = 14;
							document.getElementById("textSpot").innerHTML = "You continue on to search for Eden. Eve feels so hungry for an apple. You remember seeing that tall tree and head that [way].";
							document.getElementById("imageSpot").src="../images/tree.jpg";//http://www.coloring.ws/christian.htm accessed on 9-14-14
							document.getElementById("sound").src="../audio/crickets.mp3"; //http://soundbible.com/295-Summer-Crickets-Chirping.html accessed on 10-1-14
						}
						break;
							
					case 13: //start.forward.around.talkDM.seek
						if(str == "help") {
							stage = 11;
							document.getElementById("textSpot").innerHTML = "Eve thanks you for helping and follows you to search for Eden. You run along the forest and end up back at the beach where you see a [boat]."
							document.getElementById("imageSpot").src="../images/eve.jpg";//http://www.coloring.ws/christian.htm accessed on 9-14-14
							document.getElementById("sound").src="../audio/crickets.mp3"; //http://soundbible.com/295-Summer-Crickets-Chirping.html accessed on 10-1-14
						}
						break;
					case 14: //start.forward.around.going.continue.boat.run
							 //start.forward.around.talkDM.seek.help.boat.run
							 //start.forward.around.talkDM.turn.no.boat.run
						if(str == "way") {
							stage = 15;
							document.getElementById("textSpot").innerHTML = "You have found eden and Eve runs off to get the apple.  You see a light appear off in the distance.  You know your journey is ending so you go toward the shining [light].";
							document.getElementById("imageSpot").src = "../images/light.jpg"; //http://www.wallcoo.net/cartoon/abstract_blue_backgrounds_1920x1200/wallpapers/1600x1200/abstract%20blue%20backgrounds%2038.html accessed on 10-02-12
							document.getElementById("sound").src = "../audio/animals.mp3";//http://www.freesfx.co.uk/ accessed on 9-20-14
						}
						break;
					
					case 15: //(start.forward.around.going.continue.boat.run.way)   (start.forward.around.talkDM.seek.help.boat.run.way)  (start.forward.around.talkDM.turn.no.boat.run.way)
						if(str == "light") {
							document.getElementById("textSpot").innerHTML = "You have done it " + playerName + "! You have matched my stories with their missing parts. Thank you my child.";
							document.getElementById("imageSpot").src="../images/god.gif";
							document.getElementById("sound").src = "../audio/death.mp3";//http://www.downloads.nl/music/Free+Download+Our+God+Is+An+Awesome+God accessed on 10-01-14
						}
						break;
				}
		}