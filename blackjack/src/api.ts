import { CardRank, CardSuit, getRandomCard } from "./model/Card";

const apiUrl = import.meta.env["VITE_API_URL"] as string;
const isProd = import.meta.env.PROD;

interface ErrorResponse {
	statusCode: number;
	error: string;
	message: string;
}

const request = <Req, Res>(body: Req, path: string) => fetch(`${apiUrl}/${path}`, { method: "POST", body: JSON.stringify(body) })
	.then(res => {
		if(!res.ok) throw new Error("Network response was not ok.");
		return res.json() as Promise<Res | ErrorResponse>;
	})
	.then(res => {
		if(typeof res === "object" && res && "statusCode" in res) throw new Error(res.message);
		return res;
	});

//////////////////////////

export interface SitRequest {
	balance: number;
}
export interface SitResponse {
	availableBetOptions: number[];
	sessionId: string;
}
export const sit = (body: SitRequest) => request<SitRequest, SitResponse>(body, "sit")
	.catch(error => {
		if(isProd) throw error;

		// mocking API response
		return {
			sessionId: "offline",
			availableBetOptions: [5, 10, 20, 50],
		};
	});

//////////////////////////

export interface DealRequest {
	bet: number;
	sessionId: string;
}
export interface DealResponse {
	dealerCards: CardResponse[];
	playerCards: CardResponse[];
	roundEnded: boolean;
	winAmount: number; // this round? total?
	currentBalance: number;
}
export const deal = (body: DealRequest) => request<DealRequest, DealResponse>(body, "deal")
	.catch(error => {
		if(isProd) throw error;

		// mocking API response
		return {
			dealerCards: [getRandomCard(), getRandomCard()],
			playerCards: [getRandomCard(), getRandomCard()],
			roundEnded: Math.random() > 0.9,
			winAmount: 0,
			currentBalance: 0,
		};
	});

//////////////////////////

export interface TurnRequest {
	sessionId: string;
}
export interface TurnResponse {
	dealerCards: CardResponse[]; // dealt this turn? total this round?
	roundEnded: boolean;
	winAmount: number; // this round? total?
	currentBalance: number;
}

//////////////////////////

export interface TurnHitRequest extends TurnRequest {
	action: "hit";
}
export interface TurnHitResponse extends TurnResponse {
	playerCard: CardResponse;
}
export const turnHit = (body: TurnHitRequest) => request<TurnHitRequest, TurnHitResponse>(body, "turn")
	.catch(error => {
		if(isProd) throw error;

		// mocking API response
		return {
			dealerCards: [getRandomCard(), getRandomCard(), getRandomCard()],
			playerCard: getRandomCard(),
			roundEnded: Math.random() > 0.4,
			winAmount: 0,
			currentBalance: 0,
		};
	});

//////////////////////////

export interface TurnStayRequest extends TurnRequest {
	action: "stay";
}
export interface TurnStayResponse extends TurnResponse {
	playerCard: null;
}
export const turnStay = (body: TurnStayRequest) => request<TurnStayRequest, TurnStayResponse>(body, "turn")
	.catch(error => {
		if(isProd) throw error;

		// mocking API response
		return {
			dealerCards: [getRandomCard(), getRandomCard()],
			playerCard: null,
			roundEnded: true,
			winAmount: 0,
			currentBalance: 0,
		};
	});

//////////////////////////

export interface StandRequest {
	sessionId: string;
}
export interface StandResponse {
	roundsPlayed: number;
	winAmount: number;
}
export const stand = (body: StandRequest) => request<StandRequest, StandResponse>(body, "stand")
	.catch(error => {
		if(isProd) throw error;

		// mocking API response
		return {
			roundsPlayed: 4,
			winAmount: 50,
		};
	});

//////////////////////////

export interface CardResponse {
	rank: CardRank;
	suit: CardSuit;
}
