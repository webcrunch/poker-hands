const CompareHands = require('../CompareHands');
const suits = '♠♥♦♣';
const Hand = require('../Hand');

test('checks if hand2 is winning of the two hands', () => {
    let hand1 = new Hand('♣2', '♣6', '♣4', '♣8', '♣7');
    let hand2 = new Hand('♣T', '♣9', '♣5', '♣Q', '♣A');
    expect(CompareHands.comparer(hand1, hand2)).toEqual(hand2);
})


test('checks if hand1 has double cards so hand2 is winning of the two hands', () => {
    let hand1 = new Hand('♣T', '♣T', '♣4', '♣8', '♣7');
    let hand2 = new Hand('♦T', '♠9', '♣5', '♦Q', '♣A');
    expect(CompareHands.comparer(hand1, hand2)).toEqual(hand2);
})

test('Expect a empty hand winning', () => {
   let hand1 = new Hand('♣T', '♦T', '♣4', '♣8', '♣7');
    let hand2 = new Hand('♣T', '♠9', '♣5', '♦Q', '♣A');
    expect(CompareHands.comparer(hand1, hand2)).toEqual([]);
})

