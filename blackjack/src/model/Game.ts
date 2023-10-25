import { Player, createPlayer } from "./Player";

export interface Game {
	sessionId: string;
	bettingOptions: number[];
	started: boolean;
	player: Player;
	dealer: Player;
	messages: string[];
}

export function createGame(game: Pick<Game, "sessionId" | "bettingOptions" | "player"> & Partial<Game>) {
	return {
		dealer: createPlayer({ name: "Dealer", balance: Infinity, isDealer: true }),
		messages: [],
		started: false,
		...game,
	};
}
