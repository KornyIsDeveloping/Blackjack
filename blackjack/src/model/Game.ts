import { Player, createPlayer } from "./Player";

//defines an interface called Game, the structure of a game session
export interface Game {
	sessionId: string;
	bettingOptions: number[];
	started: boolean;
	player: Player;
	dealer: Player;
	messages: string[];
};

//creates a new game object, takes an argument which is of a specific type 
//this type is a combination of selected properties from the Game interface
export function createGame(game: Pick<Game, "sessionId" | "bettingOptions" | "player"> & Partial<Game>) {
	return {
		dealer: createPlayer({ name: "Dealer", balance: Infinity, isDealer: true }),
		messages: [],
		started: false,
		...game,
	};
};
