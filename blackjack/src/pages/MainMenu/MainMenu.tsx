import { useState } from 'react';
import { Page } from "../../components/App/App";
import PlayerNameModal from '../../components/ModalPlayerName/PlayerNameModal';
import Title from "../../components/Title/Title";

import style from "./style.module.scss";

export default function MainMenu({ setPage, startGame }: MainMenuProps) {
	const [playMenuClicked, setPlayMenuClicked] = useState(false);
	const [nameModalOpen, setNameModalOpen] = useState(false);

	return (
		<div className={style.container}>
			<Title />

			<br />

			<div className={style.buttonContainer}>
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
}

interface MainMenuProps {
	setPage(state: Page): void;
	startGame(name: string): void;
}
