// A

// const superheroes = [
//     { name: "Batman", alter_ego: "Bruce Wayne" },
//     { name: "Superman", alter_ego: "Clark Kent" },
//     { name: "Spiderman", alter_ego: "Peter Parker" }]

// let foundSpiderman = superheroes.find((element) => element.name === 'Spiderman');


// console.log(foundSpiderman)

// // B

// // let doubleArrayValues = [1, 2, 3];

// const doubleArrayValues = function (array) {
//     let newArray = [];
//     array.forEach(number => {
//         newArray.push(number * 2)
//     })
// }



// // console.log(dubble);
// console.log(doubleArrayValues([1, 2, 3]));

// console.log(doubleArrayValuesArrow([4, 1, 1, 1, 4]));

// // C

// containsNumberBiggerThan10

// containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11])

// A 

const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]

let findSpiderMan = function (superheroes) {
    return superheroes.find(zoekSpiderman => zoekSpiderman.name === "Spiderman");
}

console.log(findSpiderMan(superheroes));

// B

let doubleArrayValues = getallen => getallen.map(getal => getal = getal * 2)


console.log(doubleArrayValues([1, 2, 3]))

// C

const containsNumberBiggerThan10 = numbersToCheck => numbersToCheck.some(numbers => numbers > 10);

console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));

// D

const isItalyInTheGreat7 = landenDieWeChecken => landenDieWeChecken.includes('Italy')

console.log(isItalyInTheGreat7(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States']))

// E

const tenfold = watWeVertienvoudige => watWeVertienvoudige.map(deGetallen => deGetallen * 10);

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))

// F

const isBelow100 = getallenDieWeChecken => getallenDieWeChecken.every(getallen => getallen < 100);

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 99, 11, 77, 84, 98]))

// G



console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))