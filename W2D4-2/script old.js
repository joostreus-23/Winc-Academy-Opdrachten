// const listBigFive = document.getElementsByClassName("big-five-list");
let listBigFiveItems = document.querySelectorAll('.big-five-list-item li');
// const listSpotted = document.getElementsByClassName("spotted-animals-list");
// const listSpottedItems = document.querySelectorAll(".spotted-animals-list-item li");

// const newListItem = document.createElement("li");
// newListItem.classList.add("spotted-animals-list-item")
// listSpotted.appendChild(newListItem)

// listBigFive
// listBigFiveItems
// listSpotted
// listSpottedItems

let bigFiveListItemsLenght = listBigFiveItems.length;


for (let i = 0; i < bigFiveListItemsLenght; i++) {
    listBigFiveItems[i].addEventListener('click', function () {
        console.log(listBigFiveItems[i])
    })
}
