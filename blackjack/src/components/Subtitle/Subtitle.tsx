import HL from "../Highlight/Highlight";
import style from './style.module.scss'

//defines a functional component as the default export of the file the component does not destructure any props from SubtitleProps
export default function Subtitle({ }: SubtitleProps) {
	return (
		<div>
			<h1 className={style.title}>
				<HL>B</HL>lack<HL>j</HL>ack
			</h1>
			<h2 className={style.subtitle}>
				<HL>-</HL> <em>Play it wise!</em> <HL>-</HL>
			</h2>
		</div>
	);
};

interface SubtitleProps {

};
