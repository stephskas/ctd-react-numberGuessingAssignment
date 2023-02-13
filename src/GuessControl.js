import React, { useEffect, useState } from "react";
import Button from "./Button";

function GuessControl({ onGuess }) {
	const [currentGuess, setCurrentGuess] = useState("");

	const handleInputChange = (event) => {
		setCurrentGuess(event.target.value);
	};

	const onSubmitGuess = () => {
		onGuess(Number(currentGuess));
		setCurrentGuess("");
	};
	// Allow user to use 'Enter' key to submit guess
	useEffect(() => {
		const listener = (event) => {
			if (event.code === "Enter" || event.code === "NumpadEnter") {
				onGuess(Number(currentGuess));
				setCurrentGuess("");
			}
		};
		document.addEventListener("keydown", listener);
		return () => {
			document.removeEventListener("keydown", listener);
		};
	}, [onGuess, currentGuess]);

	return (
		<div>
			<input
				type="number"
				value={currentGuess}
				onChange={(e) => handleInputChange(e)}
			/>
			<Button onClick={() => onSubmitGuess()}>Submit Guess</Button>
		</div>
	);
}

export default GuessControl;
