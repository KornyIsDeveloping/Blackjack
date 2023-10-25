import style from "./style.module.scss";

export default function Highlight({ children }: HighlightProps) {
	return (
		<span className={style.highlight}>
			{children}
		</span>
	);
}

interface HighlightProps {
	children: React.ReactNode;
}
