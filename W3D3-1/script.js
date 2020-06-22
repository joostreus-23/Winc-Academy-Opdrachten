
const restOptellen = (...getallen) => {
    return getallen.reduce((prev, current, ) => {
        return prev + current
    })
}

const spreadOptellen = (a, b, c) => {
    return a + b + c;
}

const getallen = [5, 6, 2];

console.log(spreadOptellen(...getallen));
console.log(restOptellen(5, 6, 2));


// const restOptellen = (...getallen) => {
//     return getallen.reduce((prev, current, ) => {
//         return prev + current
//     })
// }

// const getallen = [5, 6, 2, 5, 8, 9];

// console.log(spreadOptellen(...getallen));