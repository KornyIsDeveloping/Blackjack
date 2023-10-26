import { Card, CardRank, cardSuitSymbol } from "../../model/Card";
import style from './style.module.scss'

//exporting a functional component named CardInfo, it take a prop called card of type CardInfoProps
export default function CardInfo({ card }: CardInfoProps) {
	const symbol = cardSuitSymbol[card.suit]; //retrieves the symbol for the cards
	return (
		<table className={style.container}>
			{/* checks if flipped property of the card object is false */}
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
					{/* this displays the card's suit symbol if the rank is ACE otherwise it displays the card's rank */}
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
};

//defines the shape of the props that the CardInfo component accepts
interface CardInfoProps {
	card: Card;
};
