const { Given, When, Then } = require('@cucumber/cucumber');
const CardGameApi = require('../../api/cardGameApi');

const api = new CardGameApi();
let deckId;
let playerOneCards = [];
let playerTwoCards = [];

Given('the Deck of Cards API is up', async function () {
    await api.checkStatus();
});

Given('a new shuffled deck is created', async function () {
    deckId = await api.createDeck(1);
});

When('three cards are dealt to player one', async function () {
    const data = await api.drawCard(deckId, 3);
    playerOneCards = data.cards;
});

When('three cards are dealt to player two', async function () {
    const data = await api.drawCard(deckId, 3);
    playerTwoCards = data.cards;
});

Then('check if any player has Blackjack', function () {

    const playerOneBlackjack = api.checkBlackjack(playerOneCards);
    const playerTwoBlackjack = api.checkBlackjack(playerTwoCards);

    if (playerOneBlackjack && playerTwoBlackjack) {
        console.log("Both players have Blackjack!");
    } else if (playerOneBlackjack) {
        console.log("Player One has Blackjack!");
    } else if (playerTwoBlackjack) {
        console.log("Player Two has Blackjack!");
    } else {
        console.log("No player has Blackjack.");
    }
});
