// variabele voor button 1 
let button1 = document.getElementById('button1');

// Variabelen voor alle alert buttons
let alertButtons = document.getElementsByClassName('button-alert');
// let alertButtons = document.querySelectorAll('button-alert');

// Variabelen Background button
let backGroundBtn = document.getElementById('button4');

let myBody = document.getElementById('mybody');




/* -Alle elementen van de variabelen alertbuttons worden hiermee lossen elementen
    - voor al die elementen wordt een functie aan gekoppelt
    -in die functie zit een nieuwe functie voor elk lossen knop met de eventlistner */
Array.from(alertButtons).forEach(function (aBut) {

    aBut.addEventListener('click', function () {
        alert('Je hebt op een knop gedrukt')
    })

});

/* - code class toevoegen aan id mybody */

// backGroundBtn.addEventListener('click', function changeColor() {
//     var element = document.getElementById("mybody");
//     element.classList.add("red-background");
// })



backGroundBtn.addEventListener('click', function toggleColor() {
    // var element = document.getElementById("mybody");
    myBody.classList.toggle("red-background");
})

backGroundBtn.addEventListener('click', function toggleColor() {
    // var elementbtn = document.getElementById("button4");
    backGroundBtn.classList.toggle("button-color-blue");
})
