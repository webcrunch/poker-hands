const suits = '♠♥♦♣';
const Hand = require('../Hand');
const CompareHands = require('../CompareHands');


test('check if the hand includes a pair', () => {
    let hand = new Hand('♠2', '♦2', '♠4', '♠5', '♠A');
    expect(CompareHands.isOnePair(hand)).toBeTruthy();
})


test('check if the hand not includes a pair', () => {
    let hand = new Hand('♠2', '♦2', '♠2', '♠5', '♠A');
    expect(CompareHands.isOnePair(hand)).toBeFalsy();
})

test('check if return is a 0 if there is no hand in pair', () => {
    let hand = new Hand('♠2', '♦2', '♠2', '♠5', '♠A');
    expect(CompareHands.isOnePair(hand)).toBe(0);
})

test('check that a pair returns a higher score for a stronger hand( if two hands with pairs)', () => {
    let hand1 = new Hand('♠2', '♦2', '♠4', '♠5', '♠A');
    let hand2 = new Hand('♣T', '♠T', '♣5', '♣Q', '♣A');
    let hand1Score = CompareHands.isOnePair(hand1);
    let hand2Score = CompareHands.isOnePair(hand2);
    expect(hand2Score).toBeGreaterThan(hand1Score);
});
