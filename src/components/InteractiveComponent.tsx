const InteractiveComponent = () => {
	const my_avg = (x: number, y: number) => {
		const avg = (x + y) / 2;
		console.log(" Average ", avg);
		return avg;
	};

	const cube = (x: number) => x ** 3;

	const is_vowel = (chr: string) => {
		const vowel_list = ["a", "e", "i", "o", "u"];
		const ch = chr.toLowerCase();
		return vowel_list.includes(ch);
	};
	const is_consonant = (ch: string): boolean => {
		return !is_vowel(ch);
	};

	const isUpper = (ch: string): boolean => {
		return ch === ch.toUpperCase();
	};

	const function1 = () => {
		console.log(" Function 1 called ");
	};

	const function2 = (x: number) => {
		console.log(x * x);
		return x * x;
	};

	const function3 = () => {
		return (
			<>
				<h1> THis is from function 3</h1>
			</>
		);
	};

	// reference functions during development to avoid unused-vars lint errors
	console.debug({ my_avg, cube, is_vowel, is_consonant, isUpper, function1, function2, function3 });

	return (
		<div>
			InteractiveComponent Table of 5 upto 10 Console.log on Button Click
			{function3()}
			<button className="bg-red-400" onClick={function1}>
				
				Function 1
			</button>
			<button className="bg-green-400" onClick={() => function2(5)}>
				
				Function 2{" "}
			</button>
		</div>
	);
};

export default InteractiveComponent;
