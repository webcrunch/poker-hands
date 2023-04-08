const suits = '♠♥♦♣';
const Hand = require('../Hand');
const CompareHands = require('../CompareHands');


test('check if the hand includes a pair', () => {
    let hand = new Hand('♠2', '♦2', '♠4', '♦4', '♠A');
    expect(CompareHands.isTwoPair(hand)).toBeTruthy();
})


test('check if the hand not includes  a pair', () => {
    let hand = new Hand('♠2', '♦2', '♠2', '♠5', '♠A');
    expect(CompareHands.isTwoPair(hand)).toBeFalsy();
})