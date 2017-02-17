//Author: Nicole Francisco
//Email: franciscon@knights.ucf.edu


//Global Variables	
	var guessInt = 6;
	var guessStr = "You have " + guessInt + " tries left.";
	
	//Functions for Hangman Game
//--------------------------------------------------------------------------------------
	function getWord() {
		var words = new Array("BUGS", "TWEETY", "TAZ", "SYLVESTER", "PORKY", "ELMER", "FOGHORN", "YOSEMITE", "WILE", "DAFFY", "SPEEDYGONZALES", "GRANNY", "PETUNIA", "MELISSA", "PENELOPE", "HENERY", "HUBIE", "WITCHHAZEL", "MARVIN", "MISSPRISSY", "BARNYARDDAWG", "CLAUDECAT", "PEPELEPEW");
		var index;
		
		index = Math.floor(Math.random() * words.length);
		document.getElementById("theWord").style.visibility = "hidden";
		return words[index];
	}
//--------------------------------------------------------------------------------------
	function getDisplay(word) {
		var display = "";
		
		for (var i = 0; i < word.length; i++) {
			display += "-";
		}
		
		return display;
	}
//--------------------------------------------------------------------------------------	
	function isLetterInWord(word, letter) {
		if (word == null || guessInt == 0) {
			return;
		}
		else {
			if (word.search(letter) != -1) {
				setLetter(word, letter, document.getElementById("theDashes").innerHTML);
				
//Change the color of the button background for the letter clicked on to allow player to tell what was already selected.

				if (letter == 'A') {
						document.getElementById("A").style.backgroundColor = "red";
					}
					else if (letter == 'B') {
						document.getElementById("B").style.backgroundColor = "red";
					}
					else if (letter == 'C') {
						document.getElementById("C").style.backgroundColor = "red";
					}
					else if (letter == 'D') {
						document.getElementById("D").style.backgroundColor = "red";
					}
					else if (letter == 'E') {
						document.getElementById("E").style.backgroundColor = "red";
					}
					else if (letter == 'F') {
						document.getElementById("F").style.backgroundColor = "red";
					}
					else if (letter == 'G') {
						document.getElementById("G").style.backgroundColor = "red";
					}
					else if (letter == 'H') {
						document.getElementById("H").style.backgroundColor = "red";
					}
					else if (letter == 'I') {
						document.getElementById("I").style.backgroundColor = "red";
					}
					else if (letter == 'J') {
						document.getElementById("J").style.backgroundColor = "red";
					}
					else if (letter == 'K') {
						document.getElementById("K").style.backgroundColor = "red";
					}
					else if (letter == 'L') {
						document.getElementById("L").style.backgroundColor = "red";
					}
					else if (letter == 'M') {
						document.getElementById("M").style.backgroundColor = "red";
					}
					else if (letter == 'N') {
						document.getElementById("N").style.backgroundColor = "red";
					}
					else if (letter == 'O') {
						document.getElementById("O").style.backgroundColor = "red";
					}
					else if (letter == 'P') {
						document.getElementById("P").style.backgroundColor = "red";
					}
					else if (letter == 'Q') {
						document.getElementById("Q").style.backgroundColor = "red";
					}
					else if (letter == 'R') {
						document.getElementById("R").style.backgroundColor = "red";
					}
					else if (letter == 'S') {
						document.getElementById("S").style.backgroundColor = "red";
					}
					else if (letter == 'T') {
						document.getElementById("T").style.backgroundColor = "red";
					}
					else if (letter == 'U') {
						document.getElementById("U").style.backgroundColor = "red";
					}
					else if (letter == 'V') {
						document.getElementById("V").style.backgroundColor = "red";
					}
					else if (letter == 'W') {
						document.getElementById("W").style.backgroundColor = "red";
					}
					else if (letter == 'X') {
						document.getElementById("X").style.backgroundColor = "red";
					}
					else if (letter == 'Y') {
						document.getElementById("Y").style.backgroundColor = "red";
					}
					else if (letter == 'Z') {
						document.getElementById("Z").style.backgroundColor = "red";
					}
					document.getElementById("sound").src = "../audio/bugs.wav";
			}
			else {
				guessInt-=1;
				guessStr = "You have" + guessInt + " tries left";
				document.getElementById("guesses").innerHTML = guessStr;
				
//Change the color of the button background for the letter clicked on to allow player to tell what was already selected.
					if (letter == 'A') {
						document.getElementById("A").style.backgroundColor = "red";
					}
					else if (letter == 'B') {
						document.getElementById("B").style.backgroundColor = "red";
					}
					else if (letter == 'C') {
						document.getElementById("C").style.backgroundColor = "red";
					}
					else if (letter == 'D') {
						document.getElementById("D").style.backgroundColor = "red";
					}
					else if (letter == 'E') {
						document.getElementById("E").style.backgroundColor = "red";
					}
					else if (letter == 'F') {
						document.getElementById("F").style.backgroundColor = "red";
					}
					else if (letter == 'G') {
						document.getElementById("G").style.backgroundColor = "red";
					}
					else if (letter == 'H') {
						document.getElementById("H").style.backgroundColor = "red";
					}
					else if (letter == 'I') {
						document.getElementById("I").style.backgroundColor = "red";
					}
					else if (letter == 'J') {
						document.getElementById("J").style.backgroundColor = "red";
					}
					else if (letter == 'K') {
						document.getElementById("K").style.backgroundColor = "red";
					}
					else if (letter == 'L') {
						document.getElementById("L").style.backgroundColor = "red";
					}
					else if (letter == 'M') {
						document.getElementById("M").style.backgroundColor = "red";
					}
					else if (letter == 'N') {
						document.getElementById("N").style.backgroundColor = "red";
					}
					else if (letter == 'O') {
						document.getElementById("O").style.backgroundColor = "red";
					}
					else if (letter == 'P') {
						document.getElementById("P").style.backgroundColor = "red";
					}
					else if (letter == 'Q') {
						document.getElementById("Q").style.backgroundColor = "red";
					}
					else if (letter == 'R') {
						document.getElementById("R").style.backgroundColor = "red";
					}
					else if (letter == 'S') {
						document.getElementById("S").style.backgroundColor = "red";
					}
					else if (letter == 'T') {
						document.getElementById("T").style.backgroundColor = "red";
					}
					else if (letter == 'U') {
						document.getElementById("U").style.backgroundColor = "red";
					}
					else if (letter == 'V') {
						document.getElementById("V").style.backgroundColor = "red";
					}
					else if (letter == 'W') {
						document.getElementById("W").style.backgroundColor = "red";
					}
					else if (letter == 'X') {
						document.getElementById("X").style.backgroundColor = "red";
					}
					else if (letter == 'Y') {
						document.getElementById("Y").style.backgroundColor = "red";
					}
					else if (letter == 'Z') {
						document.getElementById("Z").style.backgroundColor = "red";
					}
					
				//change the audio file for when the letter is not in the word
					document.getElementById("sound").src = "../audio/sufferin.wav";
			}
			isFinished( word, document.getElementById("theDashes").innerHTML, guessInt );
		}
	}
//--------------------------------------------------------------------------------------	
	function setLetter (word, letter, display) {
		if( word == null || guessInt == 0) {
			return;
		}
		else {
			while (word.search(letter) != -1) {
				var index = word.search(letter);
				display = display.substr( 0, index ) + letter + display.substr( index + 1 );
				word = word.substr( 0, index ) + '-' + word.substr( index + 1 );
			}
			document.getElementById("theDashes").innerHTML = display;
		}
	}

//--------------------------------------------------------------------------------------	
	function isFinished(word, display, left) {
		if(left > 0) {
			if(word == display){
				document.getElementById("theStatus").innerHTML = "Congratulations! You won!";
				document.getElementById("sound").src = "../audio/porky.wav";
			}
		}
		else {
			document.getElementById("theStatus").innerHTML = "HANGMAN! Your man has been hanged!";
			document.getElementById("stat").innerHTML = "The word was " + word;
		}
	}
//--------------------------------------------------------------------------------------
//function to restart the game	
	function start() {
		guessInt = 6;
		guessStr = "You have " + guessInt + " tries left.";
		var word = getWord();
		var display = getDisplay(word);
		document.getElementById("guesses").innerHTML = guessStr;
		document.getElementById("theWord").innerHTML = word;
		document.getElementById("theDashes").innerHTML = display;
		document.getElementById("theStatus").innerHTML = "";
		document.getElementById("stat").innerHTML = "";
		
//change color back to original background color
		document.getElementById("A").style.backgroundColor = "#f8804b";
		document.getElementById("B").style.backgroundColor = "#f8804b";
		document.getElementById("C").style.backgroundColor = "#f8804b";
		document.getElementById("D").style.backgroundColor = "#f8804b";
		document.getElementById("E").style.backgroundColor = "#f8804b";
		document.getElementById("F").style.backgroundColor = "#f8804b";
		document.getElementById("G").style.backgroundColor = "#f8804b";
		document.getElementById("H").style.backgroundColor = "#f8804b";
		document.getElementById("I").style.backgroundColor = "#f8804b";
		document.getElementById("J").style.backgroundColor = "#f8804b";
		document.getElementById("K").style.backgroundColor = "#f8804b";
		document.getElementById("L").style.backgroundColor = "#f8804b";
		document.getElementById("M").style.backgroundColor = "#f8804b";
		document.getElementById("N").style.backgroundColor = "#f8804b";
		document.getElementById("O").style.backgroundColor = "#f8804b";
		document.getElementById("P").style.backgroundColor = "#f8804b";
		document.getElementById("Q").style.backgroundColor = "#f8804b";
		document.getElementById("R").style.backgroundColor = "#f8804b";
		document.getElementById("S").style.backgroundColor = "#f8804b";
		document.getElementById("T").style.backgroundColor = "#f8804b";
		document.getElementById("U").style.backgroundColor = "#f8804b";
		document.getElementById("V").style.backgroundColor = "#f8804b";
		document.getElementById("W").style.backgroundColor = "#f8804b";
		document.getElementById("X").style.backgroundColor = "#f8804b";
		document.getElementById("Y").style.backgroundColor = "#f8804b";
		document.getElementById("Z").style.backgroundColor = "#f8804b";
		
//change the audio that is played when you hit play		
		document.getElementById("sound").src = "../audio/restart.wav";
	}
//--------------------------------------------------------------------------------------	
	
