import { useRef } from "react";
import HL from "../Highlight/Highlight";
import style from './style.module.scss'



export default function PlayerNameModal({ onClose, onStartGame }: PlayerNameModalProps) {
	const inputRef = useRef<HTMLInputElement>(null);

	const clickStartGame = () => {
		const element = inputRef.current;
		if(!element?.value.trim()) return;

		onStartGame(element.value);
	};

	return (
		<dialog
			className={style.dialog}
			open={true}
			onClick={onClose}
			onClose={onClose}>
			<div className={style.box} onClick={e => e.stopPropagation()}>
				<h3>Are you <HL>ready</HL>? Enter your name!</h3>
				<h4><em>If you don't feel lucky, just click outside this pop-up to exist.</em></h4>
				<input type="text" placeholder="Gambler's name" ref={inputRef} />
				<button onClick={clickStartGame}>Start</button>
			</div>
		</dialog>
	);
}

interface PlayerNameModalProps {
	onClose: () => void;
	onStartGame: (playerName: string) => void;
}
