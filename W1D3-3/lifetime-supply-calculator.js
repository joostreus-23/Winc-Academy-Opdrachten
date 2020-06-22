function calculateSupply(age, amountDay) {

    let days = age * 365;
    let amountTotal = days * amountDay;
    let result = 'You will need ' + amountTotal + ' to last you until the ripe old age of ' + age;

    console.log(result)

}

calculateSupply(50, 3)
calculateSupply(30, 2)
calculateSupply(20, 1)