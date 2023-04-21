const CompareHands = require('../CompareHands');
const Hand = require('../Hand');

// test so it returns truthfully, the hand comes back
test('Check that a straight flush returns thruthy if is correct', () => {
   const straightF = new Hand('♠A', '♠K', '♠Q', '♠J', '♠T');
    expect(CompareHands.isStraightFlush(straightF)).toBeTruthy();
});

test('check that no full house  return falsy ', () => {
    const straightF = new Hand('♠A', '♠K', '♠Q', '♠J', '♠5');
    expect(CompareHands.isStraightFlush(straightF)).toBeFalsy();
})

test('Check if a falsy straight flush returns 0 ', () => {
    const straightF = new Hand('♠A', '♠K', '♠Q', '♠J', '♠5');
    expect(CompareHands.isStraightFlush(straightF)).toBe(0);
})