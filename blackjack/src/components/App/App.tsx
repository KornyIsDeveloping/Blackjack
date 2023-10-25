
import { useState } from 'react';
import About from "../../pages/About/About";
import GameBoard from "../../pages/GameBoard/GameBoard";
import MainMenu from '../../pages/MainMenu/MainMenu';
import Rules from "../../pages/Rules/Rules";

export enum Page {
	HOME = "home",
	RULES = "rules",
	ABOUT = "about",
	IN_GAME = "in_game",
}

export const App = () => {
	const [state, setState] = useState(Page.HOME);
	const [playerName, setPlayerName] = useState<string | null>(null);

	const startGame = (playerName: string) => {
		setPlayerName(playerName);
		setState(Page.IN_GAME);
	};

	switch(state) {
		case Page.HOME: return <MainMenu setPage={setState} startGame={startGame} />;
		case Page.RULES: return <Rules back={() => setState(Page.HOME)} />;
		case Page.ABOUT: return <About back={() => setState(Page.HOME)} />;
		case Page.IN_GAME: return <GameBoard back={() => setState(Page.HOME)} playerName={playerName!} />;
	}
};

export default App;
