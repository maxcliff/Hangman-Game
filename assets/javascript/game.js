//Globals
//=========================================================================================
    
    //Array of words
    const word = ["luigi", "pizza", "bowser", "toad", "mariokart", "waluigi", "mushroomkingdom"];
        
    //choose word randomly
    var randomWord = Math.floor(Math.random() * word.length);
    var rightWord = [];
    var wrongWord = [];
    var chosenWord = word[randomWord];
    var underScore = [];
    console.log(chosenWord);

//Doms
//================================================================================

var docUnderScore = document.getElementsByClassName('underscore');
var docRightGuess = document.getElementByClassName('rightguess');


//Main
//============================================================================

    //create underscores based off word length
    var generateUnderscore = () => {
        for(var i = 0; i < chosenWord.length; i++){
        underScore.push("_");

    }
    return underScore;

}
        
   

console.log(generateUnderscore());

//Get the user guess
document.addEventListener('keypress',(event) => {
    let keycode = event.keyCode;
    let keyword= String.fromCharCode(keycode);

//if User Guess is right
    console.log(keyword);
    if(chosenWord.indexOf(keyword) > -1) {
     //add to right word array
        rightWord.push(keyword);
        
        underScore[chosenWord.indexOf(keyword)] = keyword;

        if(underScore.join('') == chosenWord) {
            alert('You Win')
        }

     } 
     else {
        wrongWord.push(keyword);

     }
     
     
        
    }

);
//Get the underscores to line up with the guesses

      


        // var randomString;
        // var count= 0;

        //empty array to store the user guesses
        // var answerArray = [];

        //used for the underscores for the guesses
        //number of spaces for underscores matches the amount of letters in the word//
         //function startUp()
        
            // console.log("function started")
            // console.log(randomWord)
            // console.log(randomWord.length)
            
            //console.log(answerArray)


            //put into a string
            // randomString = answerArray.join(" ");
            // document.getElementById("answer").innerHTML = randomString;
        // }
        //startUp();
