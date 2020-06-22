const age = 66

const isFemale = true

const driverStatus = "bob"

const name = "Bram"

const totalAmount = 100

// Leeftijd 

if (age < 18) {

    console.log("Ga je moeder vervelen")

} else if (age == 18) {

    console.log("Welkom maar gedraag je wel")

} else {

    console.log("Welkom")
}

// Vrouwenavond

if (age < 18) {

    console.log("Ga je moeder vervelen")

} else if (isFemale) {

    console.log("welkom");

} else {

    console.log("sorry meneer het is vrouwen avond")
}

// Korting

if (age >= 18 && age <= 25) {

    console.log("Je krijgt 50% korting!")
}

// Bram en Sarah

if (name == "Bram" || name == "Sarah") {

    console.log("gefeliciteerd je krijgt een gratis biertje")
}

// Gratis dingen

if (totalAmount > 25 && totalAmount <= 50) {

    console.log("Je krijgt gratis een portie (vegan) bitterballen")

} else if (totalAmount > 50 && totalAmount < 100) {

    console.log("Je krijgt gratis een portie nacho's")

} else if (totalAmount >= 100) {

    console.log("Je krijgt gratis een les champagne")

} else {

    console.log("Schrale je moet meer uitgeven voor gratis dingen")
}

// bob

if (driverStatus == "bob") {

    console.log("Oke wel thuis en rij voorzichtig")
}
else {

    console.log("Pak een taxi")
}
