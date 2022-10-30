// 使用虛擬碼來設計遊戲
// Pick a random word
// While the the word had not been guessed{
//         Show the player their current progress
//         Get a guess from the player

//       if the player wants to quit the game{
//         Quit the game
//       }else if {
//         Tell the player to pick a single letter
//       }else{
//         if the guess is in the word{
//             update the player's progress with th e guess
//         }
//       }
// }
// Congratulate the olayer on guessing the right word

const words= [
    "lemon",
    "money",
    "brown",
    "white",
    "watch"
];

const secretWord= words[Math.floor(Math.random()*words.length)];

let answerArray = [];
for(let i = 0; i < secretWord.length; i++){
    answerArray[i] = "_";
}

let remainingLetters = secretWord.length;

while(remainingLetters>0){
alert (answerArray.join(" "));


let guessedLetter = prompt("Guess a letter or click cancel to leave the game.");

if(guessedLetter === null){
    
    break;
}else if( guessedLetter.length !==1){
    alert("Please enter a single letter.")
}else{
    for( let j = 0; j < secretWord.length; j++){
        if(secretWord[j] === guessedLetter){
            answerArray[j] = guessedLetter;
            remainingLetters--;
        }
    }
}
}

alert (answerArray.join(" "))
alert("Good job! The secret word was "+ secretWord)