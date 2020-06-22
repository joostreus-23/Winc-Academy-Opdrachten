
let colors = ['yellow', 'blue', 'red', 'orange'];

// let aantalcolors = (colors.length);

// console.log(aantalcolors);

// let i = 0;

// while (i < aantalcolors) {


//     console.log(colors[i]);
//     i++;

// }

for (i = 0; i < colors.length; i++) {

    console.log(colors[i])
}

colors.forEach(element => console.log(element));

// 1: 2 regels
// 2: 1 regel
// 3: Minder variable, regels en kans op fouten maken
// 4:   

const person = [

    { name: "Henk" },
    { age: 23 },
    { sex: 'male' },
    { length: 175 },
    { city: 'Amsterdam' }
];

person.forEach(element => console.log(element));

const object1 = {
    name: "Henk",
    age: 23,
    sex: 'male',
    length: 175,
    city: 'Amsterdam'
};

console.log(object1);
console.log(object1.name, object1.age, object1.sex, object1.length, object1.city)