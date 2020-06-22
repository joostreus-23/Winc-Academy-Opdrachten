const functions = require('./script');

// Test nr. 1 willekeurige woord uit lijst 
// describe("Wordpicker test, checkt if the outcome of the function is in the array list", () => {

//     test("The word in the output most be a string than's (or not) equal as a string in the wordlist", () => {
//         const wordList = [
//             "vis",
//             "toeter",
//             "developer",
//             "telefoon",
//             "moeder",
//             "snoer",
//             "geeuw"
//         ];
//         const bad = "vader";
//         const good = wordList[3];
//         expect(wordList).not.toContain(bad);
//         expect(wordList).toContain(good);
//     });
//     test("The word in the output of the function most be a string than's (or not) equal as a string in the wordlist", () => {
//         const wordList = [
//             "vis",
//             "toeter",
//             "developer",
//             "telefoon",
//             "moeder",
//             "snoer",
//             "geeuw"
//         ];
//         const bad = "vader";
//         const good = functions.randomWordPicker(wordList);
//         expect(wordList).not.toContain(bad);
//         expect(wordList).toContain(good);
//     });
// });


// Test nr. 2 checken of de gekozen letter in willekeurige woord zit
// describe("Check if there is the same letter in the input as in the word", () => {

//     test("checkt if the choosen letter from the input is in the word", () => {
//         const word = "moeder";
//         const input1 = "e";
//         const input2 = "z";


//         expect(word).toContain(input1);
//         expect(word).not.toContain(input2);
//     });

//     test("checkt if the choosen letter from the input is in the word", () => {
//         const word = "moeder";
//         const input1 = "e";
//         const input2 = "z";

//         expect(functions.lettersCheck(word, input1)).toBe(true);
//         expect(functions.lettersCheck(word, input2)).toBe(false);
//     });

// });

// // Test nr. 3 updaten van de aantal pogingen van de player 
// describe("Update player attempts test, checkt if the amount of attempts be updated", () => {

//     test("The amounts should be countin down", () => {
//         const tries = 1;
//         const lives = 5;
//         const livesAfterOneTry = 4;
//         expect(livesAfterOneTry).toBe(lives - tries);
//         expect(lives).toBe(tries + livesAfterOneTry);
//     });
//     test("The amounts should be countin down in the function", () => {
//         const tries = 1;
//         const lives = 5;
//         const livesAfterOneTry = 4;
//         expect(functions.amountOfLivesUpdate(lives, tries)).toBe(livesAfterOneTry);
//         expect(functions.amountOfLivesUpdate(lives, tries)).not.toBe(lives);


//     });
// });

// // Test nr. 4 Updaten van de lijst met letters die al geraden zijn 
// describe("Test if the right choosen letters add te good list", () => {

//     test("Test whitout the function", () => {
//         const input1 = "e";
//         const guestedLettersList = ["a", "b", "c"];
//         const updatedGuestedLetterList = ["a", "b", "c", "e"]
//         expect(guestedLettersList).not.toContain(input1);
//         expect(updatedGuestedLetterList).toContain(input1);
//     });

//     test("Test whit the function", () => {
//         let inputs = ["e"];
//         const input1 = "e";
//         const input2 = "z";
//         const word = "moeder"

//         // expect(functions.wrongLetters(word, inputs)).not.toContain(inputs);
//         expect(functions.wrongLetters(word, inputs)).not.toContain(inputs);
//     });

// });

// // Test nr. 5 verliezen van de game als de levens op zijn 
// describe("If the lives are set to 0 the lose function starts", () => {

//     test("If the lives are set to 0 the lose function starts", () => {
//         const lives = 5;
//         const lose = (lives) => {
//             if (lives == 0) {
//                 return true
//             } else { return false }
//         }
//         expect(lose(lives)).toBe(false);
//         expect(lose(0)).toBe(true);
//     });
//     test("If the lives are set to 0 the lose function starts", () => {
//         const tries = 5;
//         const lose4 = function () {
//             gameOver = true;
//         };
//         expect(functions.loser(tries)).toBe(true);
//         expect(functions.loser(0)).toBe();
//     });

// });

// // Test nr. 6 winnaar van de game als het hele woord geraden is 
// describe("If the word is compleet starts the winning gif", () => {

//     test("If the lives are set to 0 the lose function starts", () => {
//         let remaining = 0 

//         expect(lose()).toBe(false);
//         expect(lose(0)).toBe(true);
//     });
//     test("If the lives are set to 0 the lose function starts", () => {
//         const lives = 5;
//         const lose4 = function () {
//             gameOver = true;
//         };
//         expect(functions.winner(lives)).toBe(lose4());
//         expect(functions.winner(0)).toBe();
//     });

// });