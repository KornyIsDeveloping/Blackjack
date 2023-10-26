
import { useState } from 'react';
import About from "../../pages/About/About";
import GameBoard from "../../pages/GameBoard/GameBoard";
import MainMenu from '../../pages/MainMenu/MainMenu';
import Rules from "../../pages/Rules/Rules";

//this enumeration is declared and exported, defines a set of named constants (different states/pages of the application)
export enum Page {
	HOME = "home",
	RULES = "rules",
	ABOUT = "about",
	IN_GAME = "in_game",
}

export const App = () => {
	//use state hook to create a state variable and a function to update it called setState
	//the initial value is set to HOME
	const [state, setState] = useState(Page.HOME); 
	const [playerName, setPlayerName] = useState<string | null>(null); //initial value is null, the type of playerName is set to string or null

	//this function takes playerName and sets its state with the provided value and change the state to IN GAME
	const startGame = (playerName: string) => {
		setPlayerName(playerName);
		setState(Page.IN_GAME);
	};

	//checking the state value using a switch case
	switch(state) {
		//if state is HOME the main menu component is rendered  passing setState and startGame as props
		case Page.HOME: return <MainMenu setPage={setState} startGame={startGame} />;
		case Page.RULES: return <Rules back={() => setState(Page.HOME)} />;
		case Page.ABOUT: return <About back={() => setState(Page.HOME)} />;
		case Page.IN_GAME: return <GameBoard back={() => setState(Page.HOME)} playerName={playerName!} />; //playerName is not null in this context
	}
};

export default App;
