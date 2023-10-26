import { useState } from 'react';
import { Page } from "../../components/App/App";
import PlayerNameModal from '../../components/ModalPlayerName/PlayerNameModal';
import Title from "../../components/Title/Title";
import style from './style.module.scss'

export default function MainMenu({ setPage, startGame }: MainMenuProps) {
	const [playMenuClicked, setPlayMenuClicked] = useState(false); //state variable that toggles between the main menu options and the play menu options
	const [nameModalOpen, setNameModalOpen] = useState(false); //state variable that controls the visibility of the PlayerManeModal

	return (
		//rendering the buttons 
		<div className={style.container}>
			<Title />

			<br />

			<div className={style.buttonContainer}>
				{/* this modal is conditionally rendered based on the state of nameModalOpen */}
				{playMenuClicked ?
					<>
						<button onClick={() => setNameModalOpen(true)}>Single Player</button>
						<button onClick={() => { }} className={style.withTooltip}>
							Multiplayer
							<span className={style.tooltip}>Feature coming soon!</span>
						</button>
						<button onClick={() => setPlayMenuClicked(false)}>Back</button>
					</>
					:
					<>
						<button onClick={() => setPlayMenuClicked(true)}>Play</button>
						<button onClick={() => setPage(Page.RULES)}>Rules</button>
						<button onClick={() => setPage(Page.ABOUT)}>About Game</button>
					</>
				}
			</div>

			{nameModalOpen && <PlayerNameModal onClose={() => setNameModalOpen(false)} onStartGame={startGame} />}
		</div>
	);
};

//the component retreives 2 props
interface MainMenuProps {
	setPage(state: Page): void;
	startGame(name: string): void;
};
