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
        'rock': {'scissor': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissor': 0},
        'scissor': {'paper': 1, 'scissor': 0.5, 'rock': 0},
    };
    let yourScore = rpsDatabase[yourChoice][computerChoice];
    let computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore]
}

function finalMessage([yourScore, computerScore]){
    if (yourScore === 0){
        return {'message': 'You lost', 'color': 'red'}
    } else if (yourScore == 0.5){
        return {'message': 'You tied', 'color': 'yellow'}
    } else {
        return {'message': 'You won', 'color': 'green'}
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
    console.log(finalMessage['color'])
    // appending to appear on frontend
    document.getElementById("flex-box-rps-div").appendChild(humanDiv)
    document.getElementById("flex-box-rps-div").appendChild(messageDiv)
    document.getElementById("flex-box-rps-div").appendChild(botDiv)
}