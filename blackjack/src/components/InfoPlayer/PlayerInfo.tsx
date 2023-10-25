import { Player } from "../../model/Player";

export default function PlayerInfo({ player }: PlayerInfoProps) {
	return (
		<div>
			<p>Name: {player.name}</p>
			<p>Balance: ${player.balance}</p>
			<p>Bet: ${player.bet}</p>
			<p>Rounds Played: ${player.roundsPlayed}</p>
			<p>Win Amount: ${player.winAmount}</p>
		</div>
	);
}

interface PlayerInfoProps {
	player: Player;
}
