
const wait = time => new Promise((resolve) => setTimeout(resolve, time));

wait(3000).then(() => console.log('Hello!'));

const sinterklaasIsGul = true;

// Promise maken (dit hoeven jullie dus niet te leren, dit is aan de API (back-end) kant)
const krijgIkEenNieuweiPhone = new Promise(
    (resolve, reject) => {
        if (sinterklaasIsGul) {
            const smartphone = {
                merk: 'Apple',
                type: 'iPhone 11'
            };
            resolve(smartphone);
        } else {
            const metWelkeReden = new Error('Je bent stout geweest, geen cadeaus voor jou');
            reject(metWelkeReden);
        }

    }
);


// Promise aanroepen, of "consumeren" (dit zullen je dus wel doen en moeten leren)
const vraagAanSinterklaas = () => {
    krijgIkEenNieuweiPhone
        .then(function (resolved) {
            // yay, je hebt een nieuwe smartphone
            console.log(resolved);
        })
        .catch(function (error) {
            // oeps, geen Sinterklaas cadeau dit jaar
            console.log(error.message);
        });
}

vraagAanSinterklaas();

const testNum = num => new Promise((resolve, reject) => {
    if (num >= 10) {
        const groterDanTien = "Getal is groter dan 10"
        resolve(groterDanTien);
    } else {
        const nietGroterDanTien = new Error("Getal is GVD niet groter dan 10")
        reject(nietGroterDanTien)
    }
})


const isDitNumGroterDanTien = (getal) => {
    testNum(getal)
        .then(resolved => {
            console.log(resolved);
        })
        .catch(error => {
            console.log(error.message);

        })
}

isDitNumGroterDanTien(15)


