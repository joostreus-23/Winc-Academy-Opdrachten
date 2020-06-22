// de id's als variabele maken
const myBody = document.getElementById('mybody');
const myHeader = document.getElementById('myheader')
const menuBtn = document.getElementById('menubtn');
const sideNav = document.getElementById('mysidenav');
const btnGreen = document.getElementById('btngreen');
const btnBlue = document.getElementById('btnblue');
const btnRed = document.getElementById('btnred');
const btnYellow = document.getElementById('btnyellow');
let colorButtons = document.getElementsByClassName('button');



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

// // Function voor achtergrond veranderen
// btnGreen.addEventListener('click', function greenColor() {
//     myBody.style.background = "green";
//     myHeader.style.background = "green";
//     document.body.querySelector('h1').innerHTML = 'Je hebt groen gekozen'
// })

// // Function voor achtergrond veranderen
// btnBlue.addEventListener('click', function blueColor() {
//     myBody.style.background = "blue";
//     myHeader.style.background = "blue";
//     document.body.querySelector('h1').innerHTML = 'Je hebt blauw gekozen'
// })

// // Function voor achtergrond veranderen
// btnRed.addEventListener('click', function redColor() {
//     myBody.style.background = "red";
//     myHeader.style.background = "red";
//     document.body.querySelector('h1').innerHTML = 'Je hebt rood gekozen'
// })

// // Function voor achtergrond veranderen
// btnYellow.addEventListener('click', function yellowColor() {
//     myBody.style.background = "yellow";
//     myHeader.style.background = "yellow";
//     document.body.querySelector('h1').innerHTML = 'Je hebt geel gekozen'
// })


// let colors = ['Groen', 'blue', 'red', 'yellow']
// let btnColors = [btnGreen, btnBlue, btnRed, btnYellow]

let sideNavColors = document.querySelectorAll('.sidenav li');
let arrayLenght = sideNavColors.length;



// sideNavColors.forEach(function (e) {
//     e.addEventListener('click', function changeColor() {
//         // for (let i = 0; i < colorButtons.length; i++) {
//         if (btnColors[0]) {
//             myBody.style.background = "green";
//             myHeader.style.background = "green";
//             document.body.querySelector('h1').innerHTML = 'Je hebt groen gekozen'

//         } else if (btnColors[1]) {
//             myBody.style.background = "blue";
//             myHeader.style.background = "blue";
//             document.body.querySelector('h1').innerHTML = 'Je hebt blauw gekozen'
//         }

//         // }
//     })
// })




// btnColors.forEach(Element => addEventListener('click', function changeColor(b) {
//     for (let i = 0; i < btnColors.length; i++) {
//         if (btnColors[0] == color[0] {
//             myBody.style.background = "green";
//             myHeader.style.background = "green";
//             document.body.querySelector('h1').innerHTML = 'Je hebt groen gekozen'
//         })
//     }
// }))

// }


console.log(btnColors[0])