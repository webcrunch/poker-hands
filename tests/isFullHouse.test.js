const CompareHands = require('../CompareHands');
const Hand = require('../Hand');

// test so it returns truthfully, the hand comes back
test('Check that a full house returns thruthy if is cor', () => {
   const full2 = new Hand('♠K', '♠K', '♦K', '♠4', '♦4');
    expect(CompareHands.isFullHouse(full2)).toBeTruthy();
});


// test so it returns truthfully, the hand comes back
test('Check that not a  full house returns falsy', () => {
   const full2 = new Hand('♠K', '♠K', '♦K', '♠4', '♦3');
    expect(CompareHands.isFullHouse(full2)).toBeFalsy();
});



test('Check if a falsy full house  returns 0 ', () => {
    const full2 = new Hand('♠K', '♠K', '♦K', '♠4', '♦3');
    expect(CompareHands.isFullHouse(full2)).toBe(0)
});