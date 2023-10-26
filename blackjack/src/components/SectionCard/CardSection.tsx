//defines a functional component, it is also the default export of the file the component is currently not using any props from CardSectionProps.
export default function CardSection({ }: CardSectionProps) {
	return (
		<div>
			<div>Mr. Blacky's cards:</div>
			<div>Your Cards:</div>
		</div>
	);
}

interface CardSectionProps {

}
