const BaseApi = require("./BaseApi");

class CardGameApi extends BaseApi {
  constructor() {
    super("https://deckofcardsapi.com/api/");
  }

  // checks status of API
  async checkStatus() {
    await this.getRequest("deck/new");
  }

  // creates a new shuffled deck
  async createDeck(deckCount = 1) {
    const data = await this.getRequest(
      `deck/new/shuffle/?deck_count=${deckCount}`
    );
    return data.deck_id;
  }

  async drawCard(deckId, count) {
    return await this.getRequest(`deck/${deckId}/draw/?count=${count}`);
  }

  // if shuffle === false, a new deck will shuffle\
  // true === shuffle existing deck
  async shuffleDeck(deckId, shuffle = false) {
    let endpoint;
    if (shuffle) {
      endpoint = `deck/${deckId}/shuffle/?remaining=true`;
    } else {
      endpoint = `deck/${deckId}/shuffle/`;
    }
    await this.getRequest(endpoint);
  }

  // not an API so doesn't belong in this class, 
  // but for simplicity, I added a validation function for the API here
  checkBlackjack(cards) {
    function hasAce(card) {
      return card.value === "ACE";
    }

    function hasTen(card) {
      const faceCards = ['10', 'JACK', 'QUEEN', 'KING'];
      return faceCards.includes(card.value);
    }

    const playerHasAce = cards.some(hasAce);
    const playerHasTen = cards.some(hasTen);

    return playerHasAce && playerHasTen;
  }
}

module.exports = CardGameApi;
