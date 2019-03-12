var wins = 0;
var losses = 0;
var arr = [];
var numberRemain = 15;

// assign the ids to the variables 
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var currentWordText = document.getElementById("currentWord");
var remainGuessText = document.getElementById("remainGuess");
var alreadyGuessedText = document.getElementById("alreadyGuessed");

// set up an array of words and choose a word randomly from the array
var Words = ["wolverine", "spiderman", "thor", "ironman", "hulk", "daredevil", "punisher", "deadpool"];
var word = Words[Math.floor(Math.random() * Words.length)];

//set up the answer array with "_"
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_" + " ";
}
currentWordText.textContent = answerArray;

//event: when users hit the keyboard 
document.onkeyup = function () {
    var userGuess = event.key;
    arr.push(" " + userGuess);
    alreadyGuessedText.textContent = arr;
    remainGuessText.textContent = numberRemain;

    //if the character of user's guess is NOT in the random word string ... 
    if (word.indexOf(userGuess) === -1) {
        numberRemain--;
        // when numberRemain equals 0, reset numberRemain and losses increments by 1.
        if (numberRemain === 0) {
            numberRemain = 15;
            arr = [];
            losses++;
            //when losses increment by 1, reset the game. 
            arr = [];
            numberRemain = 15;
            word = Words[Math.floor(Math.random() * Words.length)];
            answerArray = [];
            for (var i = 0; i < word.length; i++) {
                answerArray[i] = "_" + " ";
            }
            currentWordText.textContent = answerArray;
        }
        lossesText.textContent = losses;
    }
    // if the character is in the word string ...
    else {
        for (var i = 0; i < word.length; i++) {
            //if the 'i'th character of the word is user's guess character... 
            if (word.charAt(i) === userGuess) {
                answerArray[i] = userGuess;
            }
        }
        currentWordText.textContent = answerArray;
    }
    // the condition of wins: numberRemain >= 0 and there is no "_ "in answerArray 
    if (numberRemain >= 0 && answerArray.indexOf("_" + " ") === -1) {
        wins++;
        //When wins increment by 1, reset the game.
        arr = [];
        numberRemain = 15;
        word = Words[Math.floor(Math.random() * Words.length)];
        answerArray = [];
        for (var i = 0; i < word.length; i++) {
            answerArray[i] = "_" + " ";
        }
        currentWordText.textContent = answerArray;
    }
    winsText.textContent = wins;
}


    // Gets Link for Theme Song
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/music/The Avengers Theme Song.mp3");

    // Theme Button
    $(".theme-button").on("click", function () {
        audioElement.play();
    });
    $(".pause-button").on("click", function () {
        audioElement.pause();
    });

