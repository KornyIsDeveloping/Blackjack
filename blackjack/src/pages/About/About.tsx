import HL from "../../components/Highlight/Highlight";
import Subtitle from "../../components/Subtitle/Subtitle";

import style from "./style.module.scss";

export default function About({ back }: AboutProps) {
	return (
		<div className={style.container}>
			<Subtitle />

			<p>
				Hello there <HL>gambler</HL>, I'm Mr. Blacky, make yourself confortable and let me introduce you to this card game named <HL>Blackjack</HL>, as known as <HL>21'</HL>.
				<br />
				<br />
				<em>
					It said that this card game originated in <HL>France</HL> during the 1700', the cards initially were called "Vingt-et-Un".
					<br />
					The main goal of this game is to have a hand that totals higher than the <HL>dealer's</HL> one, but doesn't totals greater than <HL>21</HL>.
				</em>
				<br />
				<br />
				<span>
					<HL>♣ ♣ ♣ ♣</HL>
					&nbsp;
					These are the cards!
					&nbsp;
					<HL>♣ ♣ ♣ ♣</HL>
				</span>
				<br />
				<br />
				<em>
					Cards from <HL>2</HL> to <HL>10</HL> are scored using the face values.
					<br />
					<HL>Jacks</HL>, <HL>Queens</HL> and <HL>Kings</HL> are equal to <HL>10</HL>.
					<br />
					<HL>Aces</HL> can be either <HL>1</HL> or <HL>10</HL>.
					You can choose their value throughout the round if you have one of this card.
					<br />
					An <HL>Ace</HL> and one from the cards that scores <HL>10</HL> are equal to <HL>21</HL> and is known as <HL>Blackjack</HL>.
					<br />
					<br />
					That's all, good luck!
				</em>
			</p>

			<button onClick={back}>Back</button>
		</div>
	);
}

interface AboutProps {
	back(): void;
}
