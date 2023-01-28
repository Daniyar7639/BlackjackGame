
let cards = []
let sum = 0
let isAlive = false;
let hasBlackjack = false
let message = ""

let btn_el = document.getElementById('btn')
let messageEl = document.getElementById('message_el')
//let sumEl = document.getElementById('sum_el');
let sumEl = document.querySelector('#sum_el');
let cardsEl = document.getElementById('cards_el')

let playerEl = document.getElementById('player_el')
let player = {
    name: "Daniyar",
    chip: 175
}

playerEl.textContent = player.name + ": $" + player.chip

function getRandomCard() {
    let res = Math.floor(Math.random()*13 + 1) ;
    if(res===1){
        return 11
    }
    else if(res > 10 ) {
        return 10
    }
    else {
        return res
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "cards: " 
    for(let i=0; i<cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
    let card = getRandomCard();
    sum +=card
    cards.push(card)
    console.log(cards)
    renderGame()
    }
}


