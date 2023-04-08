// const Card = require('./Card');
// const DeckOfCards = require('./DeckOfCards');
const Hand = require('./Hand');
const CompareHands = require('./CompareHands');

//♠♥♦♣
const aHand = new Hand('♣2', '♣7', '♣4', '♣5', '♣A');
const pair = new Hand('♣2', '♣3', '♣4', '♣5', '♣5');
const aHand2 = new Hand('♦3', '♣7', '♣7', '♦3', '♦Q');
const aHand3 = new Hand('♠2', '♠3', '♠4', '♠5', '♠A');
const three = new Hand('♠2', '♠2', '♠2', '♠5', '♠A');
let handaa = new Hand('♠2', '♦2', '♠4', '♠5', '♠A');
// console.log(aHand3);
// console.log(CompareHands.isFlush(aHand));
// console.log(CompareHands.comparer(aHand2, aHand));
// console.log(CompareHands.isStraight(aHand2));
// let a = CompareHands.isHighestCard(aHand);
// let b = CompareHands.isHighestCard(aHand3);
console.log(CompareHands.isThreeOfAKind(three));
// let deck = 
// // let randomHand = Hand.
// console.log("Random hand", new DeckOfCards().dealHand())
// console.log("A hand with a flush", new Hand('♦T', '♦J', '♦Q', '♦K', '♦A'))
// // let flushHand = 
// // console.log(deck.dealHand());