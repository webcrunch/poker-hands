const suits = '♠♥♦♣';
const Hand = require('../Hand');
const CompareHands = require('../CompareHands');


test('check if the hand includes three pairs', () => {
    const hand = new Hand('♠A', '♠A', '♠A', '♠2', '♠3');
    expect(CompareHands.isThreeOfAKind(hand)).toBeTruthy();
})


test('check if the hand not includes three pairs', () => {
    let hand = new Hand('♠2', '♦2', '♠7', '♠5', '♠A');
    expect(CompareHands.isThreeOfAKind(hand)).toBeFalsy();
})
    

test('Check if a falsy flush returns 0 ', () => {
        let hand = new Hand('♠2', '♦2', '♠7', '♠5', '♠A');
    expect(CompareHands.isThreeOfAKind(hand)).toBe(0)
});
