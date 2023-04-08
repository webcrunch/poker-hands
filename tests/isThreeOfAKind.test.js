const suits = '♠♥♦♣';
const Hand = require('../Hand');
const CompareHands = require('../CompareHands');


test('check if the hand includes a pair', () => {
    const hand = new Hand('♠A', '♠A', '♠A', '♠2', '♠3');
    expect(CompareHands.isThreeOfAKind(hand)).toBeTruthy();
})


test('check if the hand not includes  a pair', () => {
    let hand = new Hand('♠2', '♦2', '♠7', '♠5', '♠A');
    expect(CompareHands.isThreeOfAKind(hand)).toBeFalsy();
    })