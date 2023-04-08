const suits = '♠♥♦♣';
const Hand = require('../Hand');
const CompareHands = require('../CompareHands');


test('check that isStraight return thrutfully', () => {
    let hand = new Hand('♠2', '♠3', '♠4', '♠5', '♠A');
    expect(CompareHands.isStraight(hand)).toBeTruthy();
})