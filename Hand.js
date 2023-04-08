const Card = require('./Card');
module.exports = class Hand{
    constructor(...cards) {
        if (cards.length !== 5) {
            throw (new Error("A hand must be five cards "));
        }
        // convert from strings to card if needed
        // (allow strings on the form  ♥3)
        for (let i = 0; i < 5; i++) {
            if (typeof cards[i] === 'string') {
                cards[i] = new Card(cards[i][0], cards[i][1]);
            }
        }
        // if not all cards are not instantaces of Card thow error
        for (let card of cards) {
            if (!(card instanceof Card)) {
                throw (new Error("A non card found in your hand"));
            }
        }
        // set the hands 
        this.cards = cards;
    }
}