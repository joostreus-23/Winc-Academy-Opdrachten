// makeSandwichCheese
// Get one slice of bread;
// cover it with butter;
// add 2 slice's of cheese
// add on top 1 slice of sla;


// function makeSandwichCheese() {
//     console.log('Get one slice of bread');
//     console.log('cover it with butter');
//     console.log('add 2 slices of cheese');
//     console.log('add on top 1 slice of sla');
// }

// makeSandwichCheese();


function makeSandwich(topping) // hier declareert  
{

    console.log('There you go, a sandwich with ' + topping);
} // hier is de call

makeSandwich('cheese');

function calculateDiscountedPrice(totalAmount, discount) {
    return totalAmount - discount;
}

console.log(Math.round(calculateDiscountedPrice(10.5, 5)));




function calculateDiscountedPrice25(totalAmount, discount) {

    if (calculateDiscountedPrice25(totalAmount > 25)) {

        return totalAmount - discount;
    } else {
        return totalAmount
    }

}

console.log(Math.round(calculateDiscountedPrice25(30, 5)));

