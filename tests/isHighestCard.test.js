const CompareHands = require('../CompareHands');
const Hand = require('../Hand');

test('check that isHighest returns a higher score for a stronger hand (if two hands both with nothing but highest card)', () => {
  expect(CompareHands.isHighestCard(new Hand('♦T', '♦3', '♦7', '♠5', '♦K'))).toBeGreaterThan(CompareHands.isHighestCard(new Hand('♣2', '♣4', '♣5', '♣8', '♦9')));
});



test('check that isHighest returns a higher score for a stronger hand and give less score to the inferier one (if two hands both with nothing but highest card)', () => {
  expect(CompareHands.isHighestCard(new Hand('♣2', '♣4', '♣5', '♣8', '♦9'))).toBeLessThan(CompareHands.isHighestCard(new Hand('♦T', '♦3', '♦7', '♠5', '♦K'))); 
});