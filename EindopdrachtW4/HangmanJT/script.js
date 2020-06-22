// amount of tries
let tries = 0;
// amount if lives
let lives = 5;
// the random word from the list
let word;
// the letters put in by the player
let inputs;

//Start Setting
const startSetting = () => {
  gameOver = false;
  document.querySelector(".win").className = "win";
  document.querySelector(".lose").className = "lose";
  document.querySelector("input").value = "";
  word = randomWordPicker(wordList).split("");
  document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`;
  word;
  tries = 0;
  document.querySelector(".lives span").innerHTML = lives;
  inputs = [];
};

// List of words from which to choose
const wordList = [
  "vis",
  "toeter",
  "developer",
  "telefoon",
  "moeder",
  "snoer",
  "geeuw",
];

// This code here selects a random word from a array list
const randomWordPicker = function (list) {
  let index = Math.floor(Math.random() * list.length);
  console.log("wat ben ik?", list[index]);
  return list[index];
};

// displaying the right guessed letters
const lettersCheck = (word, inputs) => {
  if (word.includes(inputs)) {
    tries++;
    // amountOfLivesUpdate(lives, tries);
    return true;
  } else {
    return false;
  }
};

// displaying the right guessed letters
const rightLetters = (word, inputs) => {
  let display = word.map(letter => {
    if (inputs.includes(letter)) {
      return letter;
    } else {
      return "_";
    }
  });
  document.querySelector(".the_word").innerHTML = display.join(" ");
};

// displaying the wrong guessed numbers
const wrongLetters = (word, inputs) => {
  let wrongLetters = inputs.filter(letter => {
    return !word.includes(letter);
  });
  document.querySelector(".guessed_letters").innerHTML = wrongLetters.join(" ");
};

// functie die de aantal levens bijhoud en laat zien in de DOM
const amountOfLivesUpdate = (lives, tries) => {
  newLives = lives - tries;
  document.querySelector(".lives span").innerHTML = newLives;
  return newLives;
};

// Functie die de levens checkt en als die op 0 staat de lose4 functie callt
const loser = tries => {
  if (tries == 5) {
    document.querySelector(".lose").classList.toggle("lose2");
    gameOver = true;
    return true;
  }
};

// De funtie die checkt of de speler gewonnen heeft
const winner = (word, inputs) => {
  // We can do this with a for loop to.
  let remaining = word.filter(function (letter) {
    // If we have letters left, right?
    return !inputs.includes(letter);
  });
  // If the letter is guessed return true (we want to remove that right away)
  remaining.length === 0;
  // if the remaining is 0 the player has won
  if (remaining.length == 0) {
    // shows the winner gif
    document.querySelector(".win").classList.toggle("win2");
    gameOver = true;
  }
};

// Deze functie word gecallt door de guess knop en zet alle funties in gang om te checken en verdere stappen
const guessLetter = function () {
  if (gameOver) {
    return;
  }

  // De input1 is de opgegeven letter door player
  const input1 = document.querySelector("input").value;
  // Opschonen inputveld
  document.querySelector("input").value = "";
  // Als de opgeven letter als opgegeven is of niks in het inputfield staat gebeurd er niks
  if (inputs.includes(input1) || input1 === "") {
    return;
  }
  // Als de opgeven letter niet in het woord staat
  if (!word.includes(input1)) {
    tries++;
    amountOfLivesUpdate(lives, tries);
  }

  //De ingevulde letter wordt in de array inputs gepushed
  inputs.push(input1);
  // Hier word de input in de juiste lijsten gezet
  rightLetters(word, inputs);
  wrongLetters(word, inputs);
  //als alle letters zijn geraden dan wordt de winner gif getoond
  winner(word, inputs);
  //als de levens op zijn dan wordt de loser gif getoond
  loser(tries);
};

// deze functie wordt gestart bij het beginnen van het spel
function beginTheGame() {
  startSetting();
  rightLetters(word, inputs);
  wrongLetters(word, inputs);
}
// de eventlistners die de funties starten als ze geclickt zijn
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".guess").addEventListener("click", guessLetter);
  document.querySelector(".restart").addEventListener("click", beginTheGame);
  beginTheGame();
});

module.exports = {
  amountOfLivesUpdate,
  randomWordPicker,
  loser,
  lettersCheck,
  wrongLetters,
  winner,
};

// //to show winning gif
// const winTheGame = function () {
//   document.querySelector(".win").style.display = "block";
//   gameOver = true;
// };

// //to show losing gif, wordt gecallt door loser functie
// const lose4 = function () {
//   document.querySelector(".lose").style.display = "block";
//   gameOver = true;
// };

// // remove all letters from word that are already guessed
// const wordGuessed = function (word, inputs) {
//   // We can do this with a for loop to.
//   let remaining = word.filter(function (letter) {
//     // If we have letters left, right?
//     return !inputs.includes(letter);
//   });
//   // If the letter is guessed return true (we want to remove that right away)
//   return remaining.length === 0;
// };
