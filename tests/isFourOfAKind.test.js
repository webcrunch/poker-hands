const CompareHands = require('../CompareHands');
const Hand = require('../Hand');

test('Check that isFourOfAKind returns thruthy if FourOfAKind', () => {
    let hand = new Hand('♣2', '♣2', '♣2', '♣2', '♣5');
    expect(CompareHands.isFlush(hand)).toBeTruthy();
});

test('Check that isFourOfAKind returns falsy if no FourOfAKind', () => {
    let hand = new Hand('♣2', '♣7', '♣3', '♠8', '♣5');
    expect(CompareHands.isFlush(hand)).toBeFalsy();
});

// test('check that isFourOfAKind returns a higher score for a stringer hand( if two hands with flush)', () => {
//     let hand1 = new Hand('♣2', '♣6', '♣4', '♣8', '♣7');
//     let hand2 = new Hand('♣T', '♣9', '♣5', '♣Q', '♣A');
//     let hand1Score = CompareHands.isFlush(hand1);
//     let hand2Score = CompareHands.isFlush(hand2);
//     expect(hand2Score).toBeGreaterThan(hand1Score);
// });