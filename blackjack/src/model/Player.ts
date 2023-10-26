import { Card } from "./Card";

//defines an interface called Player which represent the player in the game
export interface Player {
	name: string;
	balance: number;
	bet: number;
	hand: Card[];
	isDealer?: boolean;
	roundsPlayed: number;
	winAmount: number;
};

//creates a new player object, it take an argument which is of a specific type
//this type is a combination of selected properties from the Player interface
export function createPlayer(player: Pick<Player, "name" | "balance" | "isDealer"> & Partial<Player>) {
	return {
		bet: 0,
		hand: [],
		roundsPlayed: 0,
		winAmount: 0,
		...player,
	};
};
