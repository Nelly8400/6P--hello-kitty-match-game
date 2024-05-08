// Game container
let game = document.querySelector(".game");
// 4 buttons
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
// Array containing image URLs
let cards = [
    "https://cdn.glitch.global/5e9a81d2-2fed-4043-82b5-d6ef96afe4f9/1.png?v=1713200628704",
    "https://cdn.glitch.global/5e9a81d2-2fed-4043-82b5-d6ef96afe4f9/2.png?v=1713200629105",
    "https://cdn.glitch.global/5e9a81d2-2fed-4043-82b5-d6ef96afe4f9/3.png?v=1713200629512",
    "https://cdn.glitch.global/5e9a81d2-2fed-4043-82b5-d6ef96afe4f9/4.png?v=1713200629965",
    "https://cdn.glitch.global/5e9a81d2-2fed-4043-82b5-d6ef96afe4f9/5.png?v=1713200934431",
    "https://cdn.glitch.global/5e9a81d2-2fed-4043-82b5-d6ef96afe4f9/6.png?v=1713200932241",
    "https://cdn.glitch.global/5e9a81d2-2fed-4043-82b5-d6ef96afe4f9/7.png?v=1713200930621",
    "https://cdn.glitch.global/5e9a81d2-2fed-4043-82b5-d6ef96afe4f9/8.png?v=1713200927754",


];

// Button to Show Deck
buttonShow.onclick = function() {
    // Log message
    console.log("Showing the deck...");
    // For of loop
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" +
            card +
            ")' class='card'>");
    }
};

// Button to Double Deck

    buttonDouble.onclick = function() {
console.log("Now the deck has(" + cards.length + "cards.");
for (let card of cards) {
    if (cards.length !== 16) {
        cards.push(card);
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image:url(" +
            card + ")'class='card'>");
    }
       
}
    };



// Button to Shuffle Cards

buttonShuffle.onclick = function() {
shuffle(cards);
    game.innerHTML ="";
    console.log("I'm shuflling the cards! ");
    for (let card of card) {
    game.insertAdjacentHTML();
              game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" +
            card +
            ")' class='card'>");
    
    }
}; 









function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    // While there are elements to shuffle...
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        // Swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}

// Button to Flip All Cards


// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.)
$(document).click(function(event) {
    // Get the id property of the clicked thing.
    let clickedId = event.target.id;
});