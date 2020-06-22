// const huisWerkMaken = (vak, callback) => {

//     console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
//     setTimeout(() => {
//         callback();
//     }, 5000)
// }

// const klaarMetHuiswerk = () => {
//     console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk");

// }

// huisWerkMaken("wiskunde", klaarMetHuiswerk);

const naam = async () => {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });

    let result = await promise; // wait until the promise resolves (*)
    console.log(result)
}

naam();