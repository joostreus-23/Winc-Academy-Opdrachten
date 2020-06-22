// // Variabele
randomPersonData

const Btns = document.querySelectorAll("#buttons button");
const lijstUL = document.getElementById("dom-lijst")

// // Filter Landen


const landen = randomPersonData.map(data => data = data.region);

// Functie landenlijst naar de DOM

const landenLijstToDom = filter => filter.forEach(item => {
    const newLi = document.createElement("li");
    const newA = document.createElement("a")
    newA.innerHTML = item;
    lijstUL.appendChild(newLi);
    newLi.appendChild(newA);
    return filter.sort();
})

// landenlijst naar de DOM
// landenLijstToDom(landen)

// filter steenbok vrouwen boven de 30

const filterSteenbokVrouwen30Plus = (database => database.filter(data => {
    let geboortedatum = new Date(data.birthday.mdy);
    let steenbok = (geboortedatum.getMonth() === 0 && geboortedatum.getDate() <= 19) || (geboortedatum.getMonth() === 11 && geboortedatum.getDate() >= 22);
    return data.gender === "female" && data.age >= 30 && steenbok;
}));

// Functie steenbok vrouwen boven de 30 naar de DOM

const SteenbokVrouwen30PlusLijstToDom = filter => filter.forEach(item => {
    const newLi = document.createElement("li");
    const newA = document.createElement("a")
    newA.innerHTML = item.name + " " + item.surname;
    lijstUL.appendChild(newLi);
    newLi.appendChild(newA);
    return filter.sort()
})

// steenbok vrouwen boven de 30 naar de DOM
// SteenbokVrouwen30PlusLijstToDom(filterSteenbokVrouwen30Plus(randomPersonData))

// filter verlopen creditcard dit jaar

const filterCreditcardVerloop = database => database.filter(data => {
    let verloopDatumRuw = data.credit_card.expiration.split("/");
    let verloopJaar = parseInt("20" + verloopDatumRuw[1]);
    let verloopMaand = verloopDatumRuw[0];
    let huidigeDAtum = new Date();
    let huidigeJaar = huidigeDAtum.getFullYear();
    let huidigeMaand = huidigeDAtum.getMonth() - 1;
    let jaarverschil = verloopJaar - huidigeJaar;
    let maandverschil = verloopMaand - huidigeMaand;
    let maandTotaalverschil = jaarverschil * 12 + maandverschil;
    return data.age > 18 && maandTotaalverschil < 12;
});

CreditcardVerloopToDom = filter => filter
    .forEach(item => {
        const newLi = document.createElement("li");
        const newA = document.createElement("a");
        const newA2 = document.createElement("a");
        const newA3 = document.createElement("a");
        const newA4 = document.createElement("a");
        const newA5 = document.createElement("a");
        newA.innerHTML = `Name: ${item.name} ${item.surname}<br>`;
        newA2.innerHTML = ` Phone: ${item.phone}<br>`;
        newA3.innerHTML = ` Creditcardnr: ${item.credit_card.number}<br>`;
        newA4.innerHTML = ` Expiration: ${item.credit_card.expiration}<br>`;
        lijstUL.appendChild(newLi);
        newLi.appendChild(newA);
        newLi.appendChild(newA2);
        newLi.appendChild(newA3);
        newLi.appendChild(newA4);
        return filter.sort((a, b) => {
            const valueA = a.expiration;
            const valueB = b.expiration;
            (valueA > valueB) ? 1 : 1

        })
    });

CreditcardVerloopToDom(filterCreditcardVerloop(randomPersonData));
console.log(filterCreditcardVerloop(randomPersonData));

// 



const landenOptellen = randomPersonData.map((person, index) => person.region);

const groupBy = (objectArray, property) => {
    return objectArray.reduce((acc, obj) => {
        const key = obj[property];
        if (!acc[key]) {
            acc[key] = []
        }
        acc[key].push(obj)
        return acc;
    }, {});

}



const groupByRegion = groupBy(randomPersonData, "region");

console.log(groupByRegion);



// const people = [
//     { name: 'Lee', age: 21 },
//     { name: 'Ajay', age: 20 },
//     { name: 'Jane', age: 20 }
// ];


// function groupBy(objectArray, property) {
//     return objectArray.reduce((acc, obj) => {
//         const key = obj[property];
//         if (!acc[key]) {
//             acc[key] = [];
//         }
//         // Add object to list for given key's value
//         acc[key].push(obj);
//         return acc;
//     }, {});
// }
// const groupedPeople = groupBy(people, 'age');
// console.log(groupedPeople);