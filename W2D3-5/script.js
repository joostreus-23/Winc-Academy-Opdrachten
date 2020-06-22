
const superheroes = [
    {
        "name": "Batman",
        "publisher": "DC Comics",
        "alter_ego": "Bruce Wayne",
        "first_appearance": "Detective Comics #27",
        "weight": "210"
    },
    {
        "name": "Superman",
        "publisher": "DC Comics",
        "alter_ego": "Kal-El",
        "first_appearance": "Action Comics #1",
        "weight": "220"
    },
    {
        "name": "Flash",
        "publisher": "DC Comics",
        "alter_ego": "Jay Garrick",
        "first_appearance": "Flash Comics #1",
        "weight": "195"
    },
    {
        "name": "Green Lantern",
        "publisher": "DC Comics",
        "alter_ego": "Alan Scott",
        "first_appearance": "All-American Comics #16",
        "weight": "186"
    },
    {
        "name": "Green Arrow",
        "publisher": "DC Comics",
        "alter_ego": "Oliver Queen",
        "first_appearance": "All-American Comics #16",
        "weight": "195"
    },
    {
        "name": "Wonder Woman",
        "publisher": "DC Comics",
        "alter_ego": "Princess Diana",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "165"
    },
    {
        "name": "Blue Beetle",
        "publisher": "DC Comics",
        "alter_ego": "Dan Garret",
        "first_appearance": "Mystery Men Comics #1",
        "weight": "145"
    },
    {
        "name": "Spider Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Peter Parker",
        "first_appearance": "Amazing Fantasy #15",
        "weight": "167"
    },
    {
        "name": "Captain America",
        "publisher": "Marvel Comics",
        "alter_ego": "Steve Rogers",
        "first_appearance": "Captain America Comics #1",
        "weight": "220"
    },
    {
        "name": "Iron Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Tony Stark",
        "first_appearance": "Tales of Suspense #39",
        "weight": "250"
    },
    {
        "name": "Thor",
        "publisher": "Marvel Comics",
        "alter_ego": "Thor Odinson",
        "first_appearance": "Journey into Myster #83",
        "weight": "200"
    },
    {
        "name": "Hulk",
        "publisher": "Marvel Comics",
        "alter_ego": "Bruce Banner",
        "first_appearance": "The Incredible Hulk #1",
        "weight": "1400"
    },
    {
        "name": "Wolverine",
        "publisher": "Marvel Comics",
        "alter_ego": "James Howlett",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "200"
    },
    {
        "name": "Daredevil",
        "publisher": "Marvel Comics",
        "alter_ego": "Matthew Michael Murdock",
        "first_appearance": "Daredevil #1",
        "weight": "200"
    },
    {
        "name": "Silver Surfer",
        "publisher": "Marvel Comics",
        "alter_ego": "Norrin Radd",
        "first_appearance": "The Fantastic Four #48",
        "weight": "unknown"
    }
]

//  1 Superhelden namen
const heldenNamen = superheroes.map(perHeld => perHeld.name);

console.log(heldenNamen);

// // 2 superhelden onder de 190 pounds
// const lichtenHelden = superheroes.filter(perHeld => perHeld.weight < '190');

// console.log(lichtenHelden);

// // 3 helden die 200 pounds wegen
// const lichtenHeldenNamen = superheroes.filter(perheld => {
//     return perheld.weight == '200'
// }).map(perheld => {
//     return perheld.name
// })
// console.log(lichtenHeldenNamen);

// //4 namen + first apperearens
// const firstAppearances = superheroes.map(perheld => perheld.name + " in " + perheld.first_appearance);
// console.log(firstAppearances);

// // 5 helden van DC Comics
// const DCcomics = superheroes.filter(perheld => perheld.publisher == "DC Comics");
// console.log(DCcomics);

// // 5B helden van Marvel Comics
// const MarvelComics = superheroes.filter(perheld => perheld.publisher == "Marvel Comics");
// console.log(MarvelComics);

// 6 Totaal gewicht van de helden van DC Comics
const DCcomicsWeightSelection = superheroes.filter(perheld => {
    return perheld.publisher == "DC Comics"
})
    .filter(perheld => {
        return perheld.weight >= "0" && perheld.weight < "99999"
    })
    .map(perheld => parseInt(perheld.weight))

console.log(DCcomicsWeightSelection);

// const DCcomicsWeightTogether = DCcomicsWeightSelection.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);

// console.log(DCcomicsWeightTogether);

// // 7 Totaal gewicht van de helden van Marvel Comics
// const MarvelComicsWeightSelection = superheroes.filter(perheld => {
//     return perheld.publisher == "Marvel Comics"
// })
//     .filter(perheld => {
//         return perheld.weight > "0" && perheld.weight < "99999"
//     })
//     .map(perheld => parseInt(perheld.weight))

// console.log(MarvelComicsWeightSelection);

// const MarvelComicsWeightTogether = MarvelComicsWeightSelection.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);

// console.log(MarvelComicsWeightTogether);

