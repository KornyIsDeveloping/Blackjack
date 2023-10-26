import { Player } from "../../model/Player";

//defines a functional component named PlayerInfo and exports it as default
export default function PlayerInfo({ player }: PlayerInfoProps) {
	return (
		//displaying different informations about the player
		<div>
			<p>Name: {player.name}</p>
			<p>Balance: ${player.balance}</p>
			<p>Bet: ${player.bet}</p>
			<p>Rounds Played: ${player.roundsPlayed}</p>
			<p>Win Amount: ${player.winAmount}</p>
		</div>
	);
};

//defines the shape of the props that the PlayerInfoProps component accepts
interface PlayerInfoProps {
	player: Player;
};
