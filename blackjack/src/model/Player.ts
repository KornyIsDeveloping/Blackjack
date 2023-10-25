import { Card } from "./Card";

export interface Player {
	name: string;
	balance: number;
	bet: number;
	hand: Card[];
	isDealer?: boolean;
	roundsPlayed: number;
	winAmount: number;
}

export function createPlayer(player: Pick<Player, "name" | "balance" | "isDealer"> & Partial<Player>) {
	return {
		bet: 0,
		hand: [],
		roundsPlayed: 0,
		winAmount: 0,
		...player,
	};
}
