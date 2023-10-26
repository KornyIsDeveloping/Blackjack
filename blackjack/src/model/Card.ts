//describes a single playing card with its suit
export interface Card {
	suit: CardSuit;
	rank: CardRank;
	flipped?: boolean;
	value?: number;
}

//exporting an enumeration with the 4 standard card suits
export enum CardSuit {
	CLUBS = "Clubs",
	DIAMONDS = "Diamonds",
	HEARTS = "Hearts",
	SPADES = "Spades",
}

//exporting the colors for the card suits (red and black)
export enum CardSuitColor {
	BLACK = "Black",
	RED = "Red",
}

//providing a mapping from each card suit to its corresponding color
export const cardSuitColor: Record<CardSuit, CardSuitColor> = {
	[CardSuit.CLUBS]: CardSuitColor.BLACK,
	[CardSuit.DIAMONDS]: CardSuitColor.RED,
	[CardSuit.HEARTS]: CardSuitColor.RED,
	[CardSuit.SPADES]: CardSuitColor.BLACK,
};

//providing a mapping from each card suit to its corresponding symbol
export const cardSuitSymbol: Record<CardSuit, string> = {
	[CardSuit.CLUBS]: "♣",
	[CardSuit.DIAMONDS]: "♦",
	[CardSuit.HEARTS]: "♥",
	[CardSuit.SPADES]: "♠",
};

//enumeration of card ranks which includes values from ACE to KING
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
};

//providing a mapping from each card rank to its numeric value
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

//returns a randomly choosen card, picks a random suit and rank and return a card object
export const getRandomCard = (): Card => {
	const randomSuit = Object.values(CardSuit)[Math.floor(Math.random() * Object.values(CardSuit).length)];
	const randomRank = Object.values(CardRank)[Math.floor(Math.random() * Object.values(CardRank).length)];
	return {
		suit: randomSuit,
		rank: randomRank,
	};
};

export const getCardName = (card: Card): string => `${card.rank}${cardSuitSymbol[card.suit]}`;
