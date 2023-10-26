//this function is responssible to handle the input from the player and make some validation for the balance and bet options in game
export function getInt(text: string, defaultValue?: string, min?: number, max?: number, options?: number[]): number | null {
	while(true) {
		const result = prompt(text, defaultValue);
		if(result === null) return null;
		if(result === "") continue;
		const parsed = parseInt(result);
		if(isNaN(parsed)) {
			alert("Please enter a valid integer number.");
			continue;
		}
		if(min !== undefined && parsed < min) {
			alert(`Please enter a number greater than ${min}.`);
			continue;
		}
		if(max !== undefined && parsed > max) {
			alert(`Please enter a number less than ${max}.`);
			continue;
		}
		if(options !== undefined && !options.includes(parsed)) {
			alert(`Please enter one of the following numbers: ${options.join(", ")}.`);
			continue;
		}
		return parsed;
	};
};
