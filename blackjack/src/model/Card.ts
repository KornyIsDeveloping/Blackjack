export interface Card {
	suit: CardSuit;
	rank: CardRank;
	flipped?: boolean;
	value?: number;
}

export enum CardSuit {
	CLUBS = "Clubs",
	DIAMONDS = "Diamonds",
	HEARTS = "Hearts",
	SPADES = "Spades",
}

export enum CardSuitColor {
	BLACK = "Black",
	RED = "Red",
}

export const cardSuitColor: Record<CardSuit, CardSuitColor> = {
	[CardSuit.CLUBS]: CardSuitColor.BLACK,
	[CardSuit.DIAMONDS]: CardSuitColor.RED,
	[CardSuit.HEARTS]: CardSuitColor.RED,
	[CardSuit.SPADES]: CardSuitColor.BLACK,
};

export const cardSuitSymbol: Record<CardSuit, string> = {
	[CardSuit.CLUBS]: "♣",
	[CardSuit.DIAMONDS]: "♦",
	[CardSuit.HEARTS]: "♥",
	[CardSuit.SPADES]: "♠",
};

export enum CardRank {
	ACE = "A",
	TWO = "2",
	THREE = "3",
	FOUR = "4",
	FIVE = "5",
	SIX = "6",
	SEVEN = "7",
	EIGHT = "8",
	NINE = "9",
	TEN = "10",
	JACK = "J",
	QUEEN = "Q",
	KING = "K",
}

export const cardRankValue: Record<CardRank, number> = {
	[CardRank.ACE]: 11,
	[CardRank.TWO]: 2,
	[CardRank.THREE]: 3,
	[CardRank.FOUR]: 4,
	[CardRank.FIVE]: 5,
	[CardRank.SIX]: 6,
	[CardRank.SEVEN]: 7,
	[CardRank.EIGHT]: 8,
	[CardRank.NINE]: 9,
	[CardRank.TEN]: 10,
	[CardRank.JACK]: 10,
	[CardRank.QUEEN]: 10,
	[CardRank.KING]: 10,
};

export const getRandomCard = (): Card => {
	const randomSuit = Object.values(CardSuit)[Math.floor(Math.random() * Object.values(CardSuit).length)];
	const randomRank = Object.values(CardRank)[Math.floor(Math.random() * Object.values(CardRank).length)];
	return {
		suit: randomSuit,
		rank: randomRank,
	};
};

export const getCardName = (card: Card): string => `${card.rank}${cardSuitSymbol[card.suit]}`;
