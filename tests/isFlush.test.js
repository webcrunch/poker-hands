const CompareHands = require('../CompareHands');
const Hand = require('../Hand');

test('Check that isFlash returns thruthy if flush', () => {
    let hand = new Hand('♣2', '♣7', '♣3', '♣8', '♣5');
    expect(CompareHands.isFlush(hand)).toBeTruthy();
});

test('Check that isFlush returns thruthy if flush', () => {
    let hand = new Hand('♣2', '♣7', '♣3', '♠8', '♣5');
    expect(CompareHands.isFlush(hand)).toBeFalsy();
});

test('check that isFlush returns a higher score for a stringer hand( if two hands with flush)', () => {
    let hand1 = new Hand('♣2', '♣6', '♣4', '♣8', '♣7');
    let hand2 = new Hand('♣T', '♣9', '♣5', '♣Q', '♣A');
    let hand1Score = CompareHands.isFlush(hand1);
    let hand2Score = CompareHands.isFlush(hand2);
    expect(hand2Score).toBeGreaterThan(hand1Score);
});