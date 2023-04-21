const CompareHands = require('../CompareHands');
const Hand = require('../Hand');

// test so it returns truthfully, the hand comes back
test('Check that a full house returns thruthy if is correct', () => {
    const fullH = new Hand('♠A', '♠A', '♦3', '♠A', '♦3');
    expect(CompareHands.isFullHouse(fullH)).toBeTruthy();
});


// test so it returns truthfully, the hand comes back
test('Check that no  full house returns falsy if is falty', () => {
    const fullH = new Hand('♠A', '♠A', '♦3', '♠A', '♦6');
    expect(CompareHands.isFullHouse(fullH)).toBeFalsy();
});
