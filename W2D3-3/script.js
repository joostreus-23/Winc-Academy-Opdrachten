
// A

const addTheWordCool = function (array) {
    array.push('Cool')
    console.log(array);
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));

// B

let amountOfElementsInArray = (element) => element.length;

console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));

// C

let selectBelgiumFromBenelux = (element) => element[0];

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));
// resultaat: "Belgie"

// D

// let lastElementInArray = () => {
//     lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])
//     let laaste = lastElementInArray.length - 1;
//     console.log(laaste)
// }

let lastElementInArray = element => element[element.length - 1];

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));

// E

const presidents = ["Trump", "Obama", "Bush", "Clinton"]

const impeachTrumpSlice = function (presidents) {
    return presidents.slice(1, [presidents.length])
}

const impeachTrumpSplice = function (presidents) {
    return presidents.splice(1, [presidents.length], "Obama", "Bush", "Clinton");
}

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

// F

// stringsTogether = ['Winc', 'Academy', 'is', 'leuk', ';-}'];

// let winc = stringsTogether.join(' ')
// console.log(winc)

let stringsTogether = element => element.join(' ');

console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))

// D




let combineArrays = (arrays1, arrays2) => {
    return arrays1.concat(arrays2);
}

console.log(combineArrays([1, 2, 3], [4, 5, 6]));