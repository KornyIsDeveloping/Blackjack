//esporting the functional component and exports it as the default export of the file, this one does not destructure any props from BrtSectionProps
export default function BetSection({ }: BetSectionProps) {
	return (
		<div>
			<label>
				Bet Amount:
				<select>
					<option></option>
				</select>
			</label>
			<button>Deal</button>
		</div>
	);
}

interface BetSectionProps {

}
