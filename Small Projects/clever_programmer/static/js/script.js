// Challenge 1: Your Age in Days
function ageInDays() {
    let birthYear = prompt("Your Birth Year");
    let days = (2020 - birthYear) * 365;
    let h1 = document.createElement("h1")
    let text = document.createTextNode("You are " + days + " days old.")
    h1.setAttribute("id", "ageInDays"); // Used for further removal of text
    h1.appendChild(text);
    document.getElementById("flex-box-result").appendChild(h1)
};


function reset() {
    document.getElementById("ageInDays").remove();
}

// Challenge 2: Cat Generator
function generateCat() {
    var image = document.createElement("img")
    var div = document.getElementById("flex-cat-gen");
    image.src = "https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image)
}

// Challenge 3: Stone Paper Scissor
function rpsGame(yourChoice) {
    let humanChoice = yourChoice.id;
    let botChoice = numberToChoice(randToRpsInt());
    result = decideWinner(humanChoice, botChoice);
    message = finalMessage(result);
    rpsFrontEnd(humanChoice, botChoice, message)
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ["rock", "paper", "scissor"][number];
}

function decideWinner(yourChoice, computerChoice) {
    let rpsDatabase = {
        'rock': { 'scissor': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissor': 0 },
        'scissor': { 'paper': 1, 'scissor': 0.5, 'rock': 0 },
    };
    let yourScore = rpsDatabase[yourChoice][computerChoice];
    let computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore]
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return { 'message': 'You lost', 'color': 'red' }
    } else if (yourScore == 0.5) {
        return { 'message': 'You tied', 'color': 'yellow' }
    } else {
        return { 'message': 'You won', 'color': 'green' }
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    let imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }

    // let's remove all the images
    document.getElementById('rock').remove()
    document.getElementById('paper').remove()
    document.getElementById('scissor').remove()

    // creating div to store message and images
    let humanDiv = document.createElement("div")
    let botDiv = document.createElement("div")
    let messageDiv = document.createElement("div")

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgb(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style= 'color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgb(243, 38, 24, 1);'>"
    // appending to appear on frontend
    document.getElementById("flex-box-rps-div").appendChild(humanDiv)
    document.getElementById("flex-box-rps-div").appendChild(messageDiv)
    document.getElementById("flex-box-rps-div").appendChild(botDiv)
}

// Challenge 4: Change the Color of all buttons
let all_buttons = document.getElementsByTagName("button");

let copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === "red") {
        buttonRed();
    } else if (buttonThingy.value === "green") {
        buttonGreen();
    } else if (buttonThingy.value === "reset") {
        buttonReset();
    } else if (buttonThingy.value === "random") {
        buttonRandom();
    }
}

function buttonRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add("btn-danger");
    }
}

function buttonGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add("btn-success");
    }
}

function buttonReset() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function buttonRandom() {
    let choices = ["btn-primary", "btn-danger", "btn-success", "btn-warning"]

    for (let i = 0; i < all_buttons.length; i++) {
        let randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}

// Challenge 5: Blackjack
let blackjackGame = {
    'you': { 'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0 },
    'dealer': { 'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0 },
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'Q', 'J', 'A'],
    'cardsMap': { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'Q': 10, 'J': 10, 'A': [1, 11] },
}

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

// initialising sound
const hitSound = new Audio('static/sounds/swish.m4a')
const winSound = new Audio('static/sounds/cash.mp3')
const lostSound = new Audio('static/sounds/aww.mp3')

// Event Listner
document.querySelector("#blackjack-hit-button").addEventListener("click", blackJackHit);
document.querySelector("#blackjack-stand-button").addEventListener("click", dealerLogic);
document.querySelector("#blackjack-deal-button").addEventListener("click", blackJackDeal);

function blackJackHit() {
    let card = cardIndex();
    showCard(YOU, card);
    updateScore(YOU, card);
    showScore(YOU);
}

function cardIndex() {
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndex]
}

function showCard(activePlayer, card) {
    if (activePlayer['score'] <= 21) {
        // creating "img" Element
        let cardImage = document.createElement('img');
        // Giving path
        cardImage.src = `static/images/${card}.png`;
        // appending it to respective div
        document.querySelector(activePlayer['div']).appendChild(cardImage)
        // play hit music
        hitSound.play()
    }
}

function blackJackDeal() {
    // Compute winner and show result
    let winner = computeWinner();
    showResult(winner);

    let yourImages = document.querySelector('#your-box').querySelectorAll('img')
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img')

    for (let i = 0; i < yourImages.length; i++) {
        yourImages[i].remove()
    }

    for (let i = 0; i < dealerImages.length; i++) {
        dealerImages[i].remove()
    }

    YOU['score'] = 0;
    DEALER['score'] = 0;

    document.querySelector('#your-blackjack-result').textContent = 0;
    document.querySelector('#your-blackjack-result').style.color = 'black';
    document.querySelector('#dealer-blackjack-result').textContent = 0;
    document.querySelector('#dealer-blackjack-result').style.color = 'black';
}

function updateScore(activePlayer, card) {
    if (card == 'A') {
        if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21) {
            activePlayer['score'] += blackjackGame['cardsMap'][card][1]
        } else {
            activePlayer['score'] += blackjackGame['cardsMap'][card][0]
        }
    } else {
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }

}

function dealerLogic() {
    let card = cardIndex();
    showCard(DEALER, card);
    updateScore(DEALER, card);
    showScore(DEALER);
}

function computeWinner() {
    let winner;

    if (YOU['score'] <= 21) {
        // condition: higher score than dealer or when dealer busts! but your score is below 21
        if (YOU['score'] > DEALER['score'] || DEALER['score'] > 21) {
            console.log('You Won!')
            winner = YOU;

        } else if (YOU['score'] < DEALER['score']) {
            console.log('You Lost!')
            winner = DEALER;

        } else if (YOU['score'] === DEALER['score']) {
            console.log('You drew!')

        }
        // If you busts and dealer's score is less than 21
    } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        console.log('You lost');
        winner = DEALER;

        // You and dealer busts
    } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        console.log('You Drew!')
    }

    console.log('Winner is', winner)
    return winner;
}

function showResult(winner){
    let message, messageColor;
    
    if (winner === YOU){
        message = 'You Won!';
        messageColor = 'green';
        winSound.play();

    } else if (winner === DEALER) {
        message = 'You Lost!';
        messageColor = 'red';
        lostSound.play();

    } else {
        message = 'You Drew!';
        messageColor = 'black'

    }

    document.querySelector('#blackjack-result').textContent = message;
    document.querySelector('#blackjack-result').style.color = messageColor;
}