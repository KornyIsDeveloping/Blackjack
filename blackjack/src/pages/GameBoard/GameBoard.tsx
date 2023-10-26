import { useState } from "react";
import * as api from "../../api";
import CardInfo from "../../components/InfoCard/CardInfo";
import PlayerInfo from "../../components/InfoPlayer/PlayerInfo";
import { getCardName } from "../../model/Card";
import { Game, createGame } from "../../model/Game";
import { createPlayer } from "../../model/Player";
import { getInt } from "../../utils/input";
import style from './style.module.scss'

//exporting a functional component that takes in back and playerName as props defined in GameBoardProps 
export default function GameBoard({ back, playerName }: GameBoardProps) {
	const [gameState, setGameState] = useState<Game | null>(null); //holds the state of the current game session, initially set to null

	//game state checks
	const canSit = !gameState?.player;
	const canDeal = gameState && !gameState.started;
	const canHit = gameState && gameState.started;
	const canStay = gameState && gameState.started;
	const canStand = gameState && !gameState.started;

	const separator = "=".repeat(20);

	//initializes a new game, player has money
	const sit = (balance: number) => {
		api
			.sit({ balance })
			.then(({ availableBetOptions, sessionId }) => createGame({
				sessionId,
				bettingOptions: availableBetOptions,
				player: createPlayer({ name: playerName, balance }),
				messages: [
					`Player "${playerName}" sat at the table with $${balance}.`,
					separator,
				],
			}))
			.then(game => setGameState(game));
	};

//I used the ... (the spread syntax) because they're allowing me to add or overwrite properties
	//deal initial cards to people, maybe someone got a blackjack and won already
	const deal = (bet: number) => {
		if(!gameState) return;
		api
			.deal({ sessionId: gameState.sessionId, bet })
			.then(({ currentBalance, dealerCards, playerCards, roundEnded, winAmount }) => setGameState({
				...gameState,
				player: {
					...gameState.player,
					balance: currentBalance,
					hand: playerCards,
					winAmount,
				},
				dealer: {
					...gameState.dealer,
					hand: dealerCards,
				},
				started: !roundEnded,
				messages: [
					...gameState.messages,
					`Player "${playerName}" bet $${bet} and was dealt ${playerCards.map(getCardName).join(", ")}.`,
					`Dealer was dealt ${dealerCards.map(getCardName).join(", ")}.`,
					...(roundEnded ? [`Round ended.`] : []),
					...(winAmount > 0 ? [`Player won $${winAmount}. New balance: $${currentBalance}`] : []),
					...(winAmount < 0 ? [`Player lost $${Math.abs(winAmount)}. New balance: $${currentBalance}`] : []),
					separator,
				],
			}));
	};

	//player wants another card, gets is, and maybe busts or wins or neither
	const hit = () => {
		if(!gameState) return;
		api
			.turnHit({ sessionId: gameState.sessionId, action: "hit" })
			.then(({ currentBalance, playerCard, dealerCards, roundEnded, winAmount }) => setGameState({
				...gameState,
				player: {
					...gameState.player,
					balance: currentBalance,
					hand: [...gameState.player.hand, playerCard],
					winAmount,
				},
				dealer: {
					...gameState.dealer,
					hand: dealerCards,
				},
				started: !roundEnded,
				messages: [
					...gameState.messages,
					`Player "${playerName}" hit and was dealt ${getCardName(playerCard)}.`,
					`Dealer was dealt ${dealerCards.map(getCardName).join(", ")}.`,
					...(roundEnded ? [`Round ended.`] : []),
					...(winAmount > 0 ? [`Player won $${winAmount}. New balance: $${currentBalance}`] : []),
					...(winAmount < 0 ? [`Player lost $${Math.abs(winAmount)}. New balance: $${currentBalance}`] : []),
					separator,
				],
			}));
	};

	//player stays, dealer plays and maybe someone wins or not
	const stay = () => {
		if(!gameState) return;
		api
			.turnStay({ sessionId: gameState.sessionId, action: "stay" })
			.then(({ currentBalance, dealerCards, playerCard, roundEnded, winAmount }) => setGameState({
				...gameState,
				player: {
					...gameState.player,
					balance: currentBalance,
					winAmount,
				},
				dealer: {
					...gameState.dealer,
					hand: dealerCards,
				},
				started: !roundEnded,
				messages: [
					...gameState.messages,
					`Player "${playerName}" stayed.`,
					`Dealer was dealt ${dealerCards.map(getCardName).join(", ")}.`,
					...(roundEnded ? [`Round ended.`] : []),
					...(winAmount > 0 ? [`Player won $${winAmount}. New balance: $${currentBalance}`] : []),
					...(winAmount < 0 ? [`Player lost $${Math.abs(winAmount)}. New balance: $${currentBalance}`] : []),
					separator,
				],
			}));
	};

	//Player leaves. Getting their stats
	const stand = () => {
		if(!gameState) return;
		api
			.stand({ sessionId: gameState.sessionId })
			// .then(({ roundsPlayed, winAmount }) => {
			// 	setGameState(null);
			// });
	};

	const sitClicked = () => {
		if(gameState) return;

		const minBalanceAuthorized = 0;
		const maxBalanceAuthorized = 1000;
		const result = getInt("Enter your starting balance (0 - 1000):", "100", minBalanceAuthorized, maxBalanceAuthorized);
		if(result === null) return;

		sit(result);
	};

	const dealClicked = () => {
		if(!gameState || gameState.started) return;
		if(gameState.player.balance <= 0) return;

		const bettingOptions = gameState.bettingOptions;
		//cannot bet more than balance
		const result = getInt(`Enter your bet [${bettingOptions.join(", ")}]:`, "10", undefined, gameState.player.balance, bettingOptions);
		if(result === null) return;

		deal(result);
	};


	return (
		<div className={style.container}>
			<h1>Welcome, {playerName}</h1>

			<div data-area="dealer_cards">
				<h2>Dealer Hand:</h2>
				<ul>
					{gameState?.dealer.hand.map((card, index) => <li key={index}><CardInfo card={card} /></li>)}
				</ul>
			</div>

			<div data-area="player_cards">
				<h2>Player Hand:</h2>
				<ul>
					{gameState?.player?.hand.map((card, index) => <li key={index}><CardInfo card={card} /></li>)}
				</ul>
			</div>

			<div data-area="logs">
				<h2>Game Logs:</h2>
				<ul>
					{gameState?.messages.map((message, index) => <li key={index}>{message}</li>)}
				</ul>
			</div>

			<button className="danger" data-area="exit" onClick={back}>Exit</button>
			{/* setting up the different actions that the player can make during the game session */}
			<div data-area="actions">
				<button disabled={!canSit} onClick={sitClicked}>Sit</button>
				<button disabled={!canDeal} onClick={dealClicked}>Deal</button>
				<button disabled={!canHit} onClick={hit}>Hit</button>
				<button disabled={!canStay} onClick={stay}>Stay</button>
				<button disabled={!canStand} onClick={stand}>Stand</button>
			</div>

			<div data-area="player-info">
				<h2>Player Info:</h2>
				{gameState?.player && <PlayerInfo player={gameState.player} />}
			</div>

		</div>
	);
};

//defines the props accepted by the GameBoard
interface GameBoardProps {
	back(): void;
	playerName: string;
};
