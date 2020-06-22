const listBigFive = document.querySelectorAll(".big-five-list");
const listBigFiveButtons = document.querySelectorAll('.big-five-button');
const listSpotted = document.querySelector("#spotted-animals-list");
const listSpottedItems = document.querySelectorAll("#spotted-animals-list li");
let bigFiveDieren = ["Lion", "Leopard", "Elephant", "Rhino", "Buffalo"]
// const newSpottedItem = document.createElement("li");
// newSpottedItem.classList.add("spotted-animals-list-item")
// listSpotted.appendChild(newSpottedItem)

listBigFive
listBigFiveButtons
listSpotted
listSpottedItems

// const newSpottedItem = document.createElement("li");
// newSpottedItem.classList.add("spotted-animals-list-item");
// listSpotted[0].appendChild(newSpottedItem);

let bigFiveButtonsLenght = listBigFiveButtons.length;

for (let i = 0; i < bigFiveButtonsLenght; i++) {
    listBigFiveButtons[i].addEventListener('click', function () {
        console.log(listBigFiveButtons[i]);
        const newSpottedItem = document.createElement("li");
        newSpottedItem.classList.add("spotted-animals-list-item");
        listSpotted.appendChild(newSpottedItem);
        newSpottedItem.innerHTML = bigFiveDieren[i]
    })
}

const remove1Btn = document.getElementById("remove-first-item-button");

remove1Btn.addEventListener('click', function () {
    const parentSpottedList = document.getElementById("spotted-animals-list");
    const cildSpottedList = document.querySelectorAll(".spotted-animals-list-item")
    firstSpotted = cildSpottedList[0];
    parentSpottedList.removeChild(firstSpotted)
})

const removeAllBtn = document.getElementById("remove-all-button")

removeAllBtn.addEventListener('click', function () {
    const parentSpottedList = document.getElementById("spotted-animals-list");
    while (parentSpottedList.hasChildNodes()) {
        parentSpottedList.removeChild(parentSpottedList.firstChild);
    }
})


