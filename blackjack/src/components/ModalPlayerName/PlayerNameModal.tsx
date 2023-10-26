import { useRef } from "react";
import HL from "../Highlight/Highlight";
import style from './style.module.scss'


//defines and exports a functional component 
export default function PlayerNameModal({ onClose, onStartGame }: PlayerNameModalProps) {
	//this ref is created using useRef hook with initial value of null
	//this will be attached to an HTML input element to access its value
	const inputRef = useRef<HTMLInputElement>(null); 

	//this function will be called when the start button is clicked
	const clickStartGame = () => {
		const element = inputRef.current; //gets current DOM element that inputRef is attached to
		if(!element?.value.trim()) return; //checks if the input element's value is empty after triming 

		onStartGame(element.value);
	};

	return (
		//creating the dialog which is always open, 
		//the onClick and onClose events are both set to trigger the onClose function passed as a prop
		<dialog
			className={style.dialog}
			open={true}
			onClick={onClose}
			onClose={onClose}>
				{/* this div is the main content container of the dialog, also has a stopPropagation for avoiding
				closing the modal if the player clicks inside of it instead of clicking on the start button */}
			<div className={style.box} onClick={e => e.stopPropagation()}>
				<h3>Are you <HL>ready</HL>? Enter your name!</h3>
				<h4><em>If you don't feel lucky, just click outside this pop-up to exist.</em></h4>
				<input type="text" placeholder="Gambler's name" ref={inputRef} />
				<button onClick={clickStartGame}>Start</button>
			</div>
		</dialog>
	);
};

//as the other interfaces this defines the shape of the props that this interface accepts
interface PlayerNameModalProps {
	onClose: () => void;
	onStartGame: (playerName: string) => void;
};
