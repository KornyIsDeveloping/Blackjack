import HL from "../../components/Highlight/Highlight";
import Subtitle from "../../components/Subtitle/Subtitle";
import style from './style.module.scss'


export default function Rules({ back }: RulesProps) {
	return (
		<div className={style.container}>
			{/* this renders the rules of the game */}
			<Subtitle />

			<p>
				Here are the <HL>rules</HL> for newbies... but even for experimented players can be helpful too!
				<br />
				<br />
				<em>
					The <HL>Blackjack</HL> game is played with a deck of <HL>52</HL> cards.
					When the game starts everyone place a bet.
					The <HL>dealer</HL> deals <HL>1</HL> card faced up to each player, and <HL>1</HL> card faced up to themselves.
					One more card faced up for the players, besides the <HL>dealer's</HL> one, his second card is faced down.
					Once the <HL>dealer</HL> has gone around the table, they will flip their faced down card.
				</em>
				<br />
				<br />
				<span>
					<HL>♣ ♣ ♣ ♣</HL>
					&nbsp;
					How to keep track of the score?
					&nbsp;
					<HL>♣ ♣ ♣ ♣</HL>
				</span>
				<br />
				<br />
				<em>
					If your hand sums more than <HL>21</HL> is called <HL>BUST</HL>, and you are out of the game this round.
					<br />
					If your <HL>2</HL> faced up cards total <HL>21</HL> you automatically win <HL>ONE AND A HALF TIMES YOUR BET FROM THE DEALER</HL> and you are done for that round.
					Otherwise the <HL>dealer</HL> asks whether you want another card from the top of the deck.
					If you want one say <HL>HIT</HL>, if you don't want any more cards say <HL>STAY</HL>.
					<br />
					If the <HL>dealer's</HL> hand sums <HL>16</HL> or less, he must draw another card.
					Otherwise if his hand sums <HL>17</HL> or higher, he must stay with his hand.
					<br />
					If the <HL>dealer BUSTS</HL> every player that's still in that round <HL>WINS TWICE HIS BET</HL>.
					However if the <HL>dealer</HL> doesn't <HL>BUSTS</HL> only the players whose hands sums more that the <HL>dealer's</HL> WIN TWICE THEIR BET everyone else loses their initial bet.
					There is no limit on how many cards can you ask for, but once your hand totals more than <HL>21</HL> you <HL>BUST</HL> and the <HL>dealer</HL> gets your bet.
					<br />
					<br />
					Once the round is over all of the players place a new bet and another round begins.
				</em>
				&nbsp;
				<HL>ENJOY!</HL>
			</p>

			<button onClick={back}>Back</button>
		</div>
	);
}

//the component receives 1 prop 
interface RulesProps {
	back(): void; //navigation purpose 
}
