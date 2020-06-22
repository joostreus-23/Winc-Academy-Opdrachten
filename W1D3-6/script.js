// Vraag de naam van de speler

let name = prompt('Welkom! Wat is je naam?', '');


// Speler begroeten

alert('Hey ' + name);


// Vraag nummer range

let numRange = parseInt(prompt('Tot welke nummer wil je raden'));

// // let numRange = 3

// Vraag om een cijfer te kiezen

let pickNum = parseInt(prompt('Tijd om een nummer te kiezen'));


// Willekeurige nummer creeeren

let randomNum = Math.floor(Math.random() * Math.floor(numRange));

// console.log(randomNum)

// Aantal pogingen + 1 

let i = 4;


// Loop voor het controleren van de antwoord

while (pickNum !== randomNum && i > 0) {

    alert('Helaas verkeerde nummer gekozen, je hebt nog ' + i + ' pogingen over');
    let pickNum = parseInt(prompt('Tijd om een nieuwe nummer te kiezen'));
    i--;
    if (i == 0) {
        alert('Helaas ' + name + ' je aantal pogingen zijn verstreken')
    }
}

if (pickNum == randomNum) {
    alert('Gefeliciteerd ' + name + ' je hebt gewonnen, als je je ogen dicht doet zie je wat je gewonnen hebt');
    let i = -1;
}
