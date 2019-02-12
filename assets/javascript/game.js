{/* <script language="javascript" type="text/javascript"> */}

//   function getWord(){
//       var position = Math.floor(Math.random()*(trekWords.length-1)); //should return value between 0 and 4
 
//       var wordChoice = gameObject.trekWords[position];
//       //return wordChoice;

//       return position;
      
//   }
    
  function hangmanStart(){


    document.querySelector(".userGuess").innerHTML = "Begin typing letters for your guesses.";
    document.querySelector(".guessesRemaining").innerHTML = "Guesses Ramaining: 8";
    

    var gameObject = {
        trekWords: ["picard", "enterprise", "laforge", "worf", "starfleet"],
        image_src: ["./assets/images/picard.jpg", "./assets/images/enterprise.jpg", "./assets/images/laforge.jpg", "./assets/images/worf.jpg", "./assets/images/starfleet.jpg"],
        currentHangmanWord: [],
        userGuess: [],
        winCounter: 0,
        lossCounter: 0,
        guessesLeft: 8,
      };

    

        var position = Math.floor(Math.random()*gameObject.trekWords.length); //should return value between 0 and 4
 
        var wordChoice = gameObject.trekWords[position];

        for(var x = 0; x < wordChoice.length; x++){
        gameObject.currentHangmanWord[x] = "__ ";
    
        }

        
        //Cheating
        document.querySelector(".wordChoiceDisplay").innerHTML = gameObject.currentHangmanWord;
        //document.querySelector(".wordChoiceDisplay").innerHTML = wordChoice;
        
        document.onkeyup=function(event){
    
            let currentGuess = event.key.toLowerCase();

        if(gameObject.guessesLeft>0){

            document.querySelector(".notFound").innerHTML = "";
    
            gameObject.userGuess.push(currentGuess);
    
            starPush(); //displays all historical guesses on screen - nothing else
 
            let letterIndex = wordChoice.search(currentGuess);

            if(letterIndex>=0){
            //document.write("FOUND!!");
            for(let i = 0; i < wordChoice.length; i++){
             if(wordChoice[i] === currentGuess){
                    gameObject.currentHangmanWord[i] = currentGuess;
               
                }

            var checkWin = 0;
            for(let s = 0; s< wordChoice.length; s++){
                if(wordChoice[s] !== gameObject.currentHangmanWord[s]){
                    checkWin++;
                }  
            }
            if(checkWin===0){
                //Display Winning Message
                document.querySelector(".userGuess").innerHTML = "Congratulations!! You are a winner!";
                gameObject.guessesLeft=-1;
                document.querySelector(".guessesRemaining").innerHTML = "";

                //IMAGE TESTING
                let imagePath = gameObject.image_src[position]
                document.querySelector(".showImage").innerHTML = "<img src='"+imagePath+"' width='100%' alt='my image'>";

            }
        
                }

                
            }   
            else{
            //document.write("NOT FOUND!");

            document.querySelector(".notFound").innerHTML = "Letter Not Found!";
    
            //reduce guess count
            gameObject.guessesLeft--;

            } 

            //once compared, we refresh the hangman game display
            document.querySelector(".wordChoiceDisplay").innerHTML = gameObject.currentHangmanWord;

            if(gameObject.guessesLeft === 0){
                //YOU LOSE
                //document.write("You Lose!");
                document.querySelector(".userGuess").innerHTML = "You Lose!! Try Again - If you Dare.";
            }

             //Display guess count
             if(gameObject.guessesLeft>-1){
             document.querySelector(".guessesRemaining").innerHTML = "Guesses Ramaining: " + gameObject.guessesLeft;
             }

   
            //indexOf use this to note if someone has already guessed a letter
            }
           
        }

            //indexOf to figure out if letter selected is inside of word for Hangman


        function starPush(){
    
            var allGuesses = gameObject.userGuess.join(" ")
    
            document.querySelector(".userGuess").innerHTML = allGuesses;
        }

            

    }



    // </script>