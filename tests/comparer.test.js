const CompareHands = require('../CompareHands');
const suits = '♠♥♦♣';
const Hand = require('../Hand');
test('checks if hand2 is winning of the two hands', () => {
    let hand1 = new Hand('♣2', '♣6', '♣4', '♣8', '♣7');
    let hand2 = new Hand('♣T', '♣9', '♣5', '♣Q', '♣A');
    expect(CompareHands.comparer(hand1, hand2)).toEqual(hand2);
})

// test('checks if hand1 is winning of the two hands', () => {
//     let hand1 = new Hand('♣T', '♦T', '♣4', '♣8', '♣7');
//     let hand2 = new Hand('♣T', '♠9', '♣5', '♦Q', '♣A');
//     // console.log(CompareHands.comparer(hand1, hand2));
//     expect(CompareHands.comparer(hand1, hand2)).toEqual(hand2);
// })


test('checks if hand1 has double cards so hand2 is winning of the two hands', () => {
    let hand1 = new Hand('♣T', '♣T', '♣4', '♣8', '♣7');
    let hand2 = new Hand('♦T', '♠9', '♣5', '♦Q', '♣A');
    expect(CompareHands.comparer(hand1, hand2)).toEqual(hand2);
})

test('Expect a empty hand winning', () => {
   let hand1 = new Hand('♣T', '♦T', '♣4', '♣8', '♣7');
    let hand2 = new Hand('♣T', '♠9', '♣5', '♦Q', '♣A');
    console.log(CompareHands.comparer(hand1, hand2));
    expect(CompareHands.comparer(hand1, hand2)).toEqual([]);
})


// test('check that isFlush returns a higher score for a stringer hand( if two hands with flush)', () => {
//     let hand1 = new Hand('♣2', '♣6', '♣4', '♣8', '♣7');
//     let hand2 = new Hand('♣T', '♣9', '♣5', '♣Q', '♣A');
//     let hand1Score = CompareHands.isFlush(hand1);
//     let hand2Score = CompareHands.isFlush(hand2);
//     expect(hand2Score).toBeGreaterThan(hand1Score);
// });


// test('check that  returns a higher score for a stringer hand( if two hands with flush)', () => {
//     let hand1 = new Hand('♣2', '♣6', '♣4', '♣8', '♣7');
//     let hand2 = new Hand('♣T', '♣9', '♣5', '♣Q', '♣A');
//     let hand1Score = CompareHands.isFlush(hand1);
//     let hand2Score = CompareHands.isFlush(hand2);
//     expect().toBeGreaterThan(hand1Score);
// });