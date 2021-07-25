const cards = document.querySelectorAll(".card");
window.addEventListener("resize", () => {
    console.log(window.innerHeight);
});

document.addEventListener("scroll", displayCards);

let a = cards[0].getClientRects()[0].top;
let b = cards[0].getBoundingClientRect().top;
console.log(a, b);

function displayCards() {
    const height = (window.innerHeight * 4) / 5;

    cards.forEach((card) => {
        if (card.getBoundingClientRect().top < height) {
            card.classList.add("card-display");
        } else {
            card.classList.remove("card-display");
        }
    });
}

displayCards();
