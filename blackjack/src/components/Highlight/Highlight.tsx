import style from './style.module.scss'

//taking a single pop called children, this prop is destructured directly in the function's parameters
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
