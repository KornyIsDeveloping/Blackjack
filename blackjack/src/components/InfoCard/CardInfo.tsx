import { Card, CardRank, cardSuitSymbol } from "../../model/Card";
import style from './style.module.scss'


export default function CardInfo({ card }: CardInfoProps) {
	const symbol = cardSuitSymbol[card.suit];
	return (
		<table className={style.container}>
			{!card.flipped && <>
				<tr>
					<td>{card.rank}</td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td>{symbol}</td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td>{card.rank === CardRank.ACE ? symbol : card.rank}</td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td>{symbol}</td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td>{card.rank}</td>
				</tr>
			</>}
		</table>
	);
}

interface CardInfoProps {
	card: Card;
}
