const CompareHands = require('../CompareHands');
const Hand = require('../Hand');

// test so it returns truthfully, the hand comes back
test('Check that isFlash returns thruthy if flush', () => {
    let hand = new Hand('♣2', '♣7', '♣3', '♣8', '♣5');
    expect(CompareHands.isFlush(hand)).toBeTruthy();
});

// test so it return falsy, because it is not a flush should it be a 0 back
test('Check that isFlush returns falsy if no flush ', () => {
    let hand = new Hand('♣2', '♣7', '♣3', '♠8', '♣5');
    expect(CompareHands.isFlush(hand)).toBeFalsy();
});

test('Check if a falsy flush returns a 0 ', () => {
    let hand = new Hand('♣2', '♣7', '♣3', '♠8', '♣5');
    expect(CompareHands.isFlush(hand)).toBe(0)
});

test('check that isFlush returns a higher score for a stronger hand( if two hands with flush)', () => {
    let hand1 = new Hand('♣2', '♣6', '♣4', '♣8', '♣7');
    let hand2 = new Hand('♣T', '♣9', '♣5', '♣Q', '♣A');
    let hand1Score = CompareHands.isFlush(hand1);
    let hand2Score = CompareHands.isFlush(hand2);
    expect(hand2Score).toBeGreaterThan(hand1Score);
});