const suits = '♠♥♦♣';
const Hand = require('../Hand');
const CompareHands = require('../CompareHands');


test('check that isStraight return thrutfully', () => {
    let hand = new Hand('♠2', '♠3', '♠4', '♠5', '♠A');
    expect(CompareHands.isStraight(hand)).toBeTruthy();
})


test('check that isStraight return falsy if no Straight', () => {
    let hand = new Hand('♠2', '♠3', '♠8', '♠6', '♠A');
    expect(CompareHands.isStraight(hand)).toBeFalsy();
})

test('Check if a falsy straight returns a 0 ', () => {
    let hand = new Hand('♠2', '♠3', '♠8', '♠6', '♠A');
    expect(CompareHands.isStraight(hand)).toBe(0)
});


test('check that isStraight returns a higher score for a stronger hand( if two hands with straight)', () => {
     let hand1 = new Hand('♠2', '♠3', '♠4', '♠5', '♠A');
    let hand2 = new Hand('♠3', '♠4', '♠5', '♠6', '♠7');
    let hand1Score = CompareHands.isStraight(hand1);
    let hand2Score = CompareHands.isStraight(hand2);
    expect(hand2Score).toBeGreaterThan(hand1Score);
});