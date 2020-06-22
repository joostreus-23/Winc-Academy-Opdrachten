// de id's als variabele maken
const myBody = document.getElementById('mybody');
const myHeader = document.getElementById('myheader')
const menuBtn = document.getElementById('menubtn');
const sideNav = document.getElementById('mysidenav');
// const btnGreen = document.getElementById('btngreen');
// const btnBlue = document.getElementById('btnblue');
// const btnRed = document.getElementById('btnred');
// const btnYellow = document.getElementById('btnyellow');
let colorButtons = document.getElementsByClassName('button');

// let colors = ['green', 'blue', 'red', 'yellow']

let sideNavColors = document.querySelectorAll('.sidenav li');
let arrayLenght = sideNavColors.length;

// let changeToI = function () {
//     let colors = ['green', 'blue', 'red', 'yellow']
//     myBody.style.background = colors[i];
//     myHeader.style.background = colors[i];
// }

for (let i = 0; i < arrayLenght; i++) {
    sideNavColors[i].addEventListener('click', function () {
        let colors = ['green', 'blue', 'red', 'yellow']
        myBody.style.background = colors[i];
        myHeader.style.background = colors[i];
    })
}


// for (let i = 0; i < arrayLenght; i++) {
//     sideNavColors[i].addEventListener('click', function () {
//         if (i == 1) {
//             myBody.style.background = "blue";
//             myHeader.style.background = "blue";
//             document.body.querySelector('h1').innerHTML = 'Je hebt blauw gekozen'
//         } else if (i == 0) {
//             myBody.style.background = "green";
//             myHeader.style.background = "green";
//             document.body.querySelector('h1').innerHTML = 'Je hebt groen gekozen'
//         } else if (i == 2) {
//             myBody.style.background = "red";
//             myHeader.style.background = "red";
//             document.body.querySelector('h1').innerHTML = 'Je hebt rood gekozen'
//         } else if (i == 3) {
//             myBody.style.background = "yellow";
//             myHeader.style.background = "yellow";
//             document.body.querySelector('h1').innerHTML = 'Je hebt geel gekozen'
//         }
//     })
// }


// functions voor alle buttons om sidenav te sluiten na drukken
Array.from(colorButtons).forEach(function (e) {
    e.addEventListener('click', function () {
        sideNav.classList.toggle('sidenavOpen')
    })
})

// functions voor openen en sluiten sideNav
menuBtn.addEventListener('click', function toggleNav() {
    sideNav.classList.toggle('sidenavOpen')
})

sideNavColors