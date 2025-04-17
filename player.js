class Player {
    constructor() {
        this.hand = [];
    }

    takeCard(card) {
        this.hand.push(card);
    }

    getHandValue() {
        let value = 0;
        let aces = 0;

        for (let card of this.hand) {
            value += card.value;
            if (card.rank === "A") {
                aces++;
            }
        }

        while (value > 21 && aces > 0) {
            value-=10;
            aces--;
        }

        return value;
    }

    isBusted() {
        return this.getHandValue() > 21;
    }

    hasBlackjack() {
        return this.getHandValue() === 21 && this.hand.length === 2;
    }
}