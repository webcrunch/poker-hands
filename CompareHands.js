module.exports = class CompareHands{
    static suits = '♠♥♦♣';
    static ranks = '23456789TJQKA';

    static comparer(hand1, hand2) {    
        let checkduplicatesOnhands = this.checkForduplicateHands(hand1, hand2);
        if (checkduplicatesOnhands < 1) return checkduplicatesOnhands === -1 ? hand1 : checkduplicatesOnhands === -2 ? hand2 : [];
        let comparers = [
            'isStraightFlush', // done
            'isFourOfAKind', //  done
            'isFullHouse', // done
            'isFlush', // done
            'isStraight', // done
            'isThreeOfAKind', //done
            'isTwoPair', // done
            'isOnePair', // done
            'isHighestCard'  // done
        ];
        
        for (let comparer of comparers) {
            let hand1Score = this[comparer](hand1);
            let hand2Score = this[comparer](hand2);
            if (hand1Score === 0 && hand2Score === 0) continue;
            if (hand1Score === hand2Score) return [hand1, hand2];
            else if (hand1Score > hand2Score) return hand1;
            else return hand2;
       }
    }

    static isStraightFlush(hand) {
        return this.isStraight(hand) && this.isFlush(hand);
    }

    static isFourOfAKind(hand) {
        let ranks = this.numberOfCurrences(hand.cards);
        let ov = Object.values(ranks);
        if (ov.includes(4) && ov.indexOf(4) === ov.lastIndexOf(4)) {
            return this.rankToPoint(Object.keys(ranks)[ov.indexOf(4)]);
        }
        return 0; 
    }


    static isFullHouse(hand) {
        let three = this.isThreeOfAKind(hand);
        let two = this.isTwoPair((hand))[0];
        if (three > 0 && two > 0) {
            return three + two;
        }
        return 0;
    }

    static isFlush(hand) {
        // hand.cards
        let suits = [];
        for (let card of hand.cards) {
            suits.push(card.suit);
        }
        if ([...new Set(suits)].length !== 1) return 0;
        this.sortByRank(hand);
        let score = 0, counter = 0;
        for (let card of hand.cards) {
            score += this.rankToPoint(card.rank) * 10 ** counter;
            counter += 2;
        }
        return score;
    }

     static isStraight(hand) {
    // sort from low to high
         this.sortByRank(hand);
    // get the ranks of the cards
    let ranks = '';
    for (let card of hand.cards) {
      ranks += card.rank;
    }
    // if both 2 and A then place A first
    if (ranks.includes('2') && ranks.includes('A')) {
      ranks = 'A' + ranks.slice(0, 4);
         }
    // not a straight -> 0
    if (!('A' + this.ranks).includes(ranks)) { return 0; };
    // return points depending on strength of straight
    return this.rankToPoint(ranks[4]);
  }

    static isThreeOfAKind(hand) {
        this.sortByRank(hand);
        let ranks = this.numberOfCurrences(hand.cards);
        let ov = Object.values(ranks);
        if (ov.includes(3) && ov.indexOf(3) === ov.lastIndexOf(3)) {
            return this.rankToPoint(Object.keys(ranks)[ov.indexOf(3)]);
        }
        return 0;
    }

    static isTwoPair(hand) {
        this.sortByRank(hand);
        let ranks = this.numberOfCurrences(hand.cards);
        
        // let ov = Object.values(ranks);
        // let keys = Object.keys(ranks);
        // let score = 0;
        let pairs = [];
        for (const [key, value] of Object.entries(ranks)) {            
            if (value === 2) {
                pairs.push(Number(key));
                // score =+ value; 
            }
        }
        if (pairs.length > 0) {
            
            return pairs.reduce((partialSum, a) => partialSum + a, 0);
        }
        return 0;
        // console.log(score);
        // for (let o in ov) {
        //     console.log(o);
        // }

        // if (ov.includes(2) && ov.indexOf(2) === ov.lastIndexOf(2)) {
        //     return this.rankToPoint(Object.keys(ranks)[ov.indexOf(2)]);
        // }
        
    }
    // need to check this function add kicker handling

    static isOnePair(hand) { // if there is two or more pairs then it returns 0;
        this.sortByRank(hand);
        let ranks = this.numberOfCurrences(hand.cards);
        let ov = Object.values(ranks);
        if (ov.includes(2) && ov.indexOf(2) === ov.lastIndexOf(2)) {
            return this.rankToPoint(Object.keys(ranks)[ov.indexOf(2)]);
        }
        return 0;
    }

    static isHighestCard(hand) {
       let score = 0, counter = 0;
        for (let card of hand.cards) {
            score += this.rankToPoint(card.rank) * 10 ** counter;
            counter += 2;
        }
        return score;
    }


    static numberOfCurrences(hand) {
        let ranks = {};
        for (let card of hand) {
            ranks[card.rank] = ranks[card.rank] || 0;
            ranks[card.rank]++;
        }

        return ranks;
    }

    static checkForduplicateHands(hand1,hand2) {
        let checkhand1 = this.checkFormultipleCards(this.convertToArray(hand1.cards));
        let checkhand2 = this.checkFormultipleCards(this.convertToArray(hand2.cards));
        if (checkhand1 > -1 && checkhand2 > -1) {
        let checkBoth = this.convertToArrayDouble(hand1.cards, hand2.cards)
            if (Array.from(new Set(checkBoth)).length > 9) 
                return 1;
            return -3;
            // if both hands return 1 then both hands are ok. 
            
        }
        else {
            return checkhand1 < 0 ? -1 : -2;
        }
        

        // if first hands is multiple 


    }

    static convertToArrayDouble(hand1,hand2) {
        let handArray = [];
        
        for (let i = 0; i < hand1.length; i++){
            handArray.push(hand1[i].suit + hand1[i].rank)
        }

        for (let i = 0; i < hand2.length; i++){
            handArray.push(hand2[i].suit + hand2[i].rank)
        }
        return handArray;
    }

    static convertToArray(hand) {
        let handArray = [];
        
        for (let i = 0; i < hand.length; i++){
            handArray.push(hand[i].suit + hand[i].rank)
        }
        return handArray;
    }

    static checkFormultipleCards(hand) {
        if (Array.from(new Set(hand)).length < 5) return -1;
        return 1;
    }

    static rankToPoint(rank) {
        return this.ranks.indexOf(rank) + 2;
    }

    static sortByRank(hand) {
        hand.cards = hand.cards.sort((a, b) => {
            return this.rankToPoint(a.rank) < this.rankToPoint(b.rank) ? -1 : 1;
        })
    }
}