import HL from "../Highlight/Highlight";
import style from './style.module.scss'


export default function Title({ }: TitleProps) {
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
}

interface TitleProps {

}
