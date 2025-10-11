const MasterComponent = () => {
	const isVowel = (ch: string): boolean => {
		const vowel_list = ["a", "e", "i", "o", "u"];
		return vowel_list.includes(ch.toLowerCase());
	};

	// Single Responsibility Principle
	// A function should do one thing and do it well.
	// If a function is trying to do too many things, it becomes harder to understand, maintain, and test.
	const countVowel = (name: string): void => {
		let count = 0;
		for (let i = 0; i < name.length; i++)
			if (isVowel(name[i]))    //  Single Responsibility Principle
				count++;

		console.log(count);
	};

	// Single Responsibility Principle
	// A function should do one thing and do it well.
	// If a function is trying to do too many things, it becomes harder to understand, maintain, and test.
	const printTriangle1 = (ch: string, n: number): void => {
		for (let i = 1; i <= n; i++) {
			printChar(ch, i);
		}
	};
	const printChar = (ch: string, n: number): void => {
		console.log(`${ch} `.repeat(n));
	};

	const printTriangle2 = (ch: string, n: number): void => {
		for (let i = n; i > 0; i--) {
			printChar("*", i);
		}
	};

	const printTriangle3 = (ch: string, n: number): void => {
		for (let i = n; i > 0; i--) {
				// repeat string (n) times
			console.log("  ".repeat(i - 1), "* ".repeat(n - i + 1));
		}
	};

	const findAverage = (...arr: number[]): number => {
		let sum = 0;
		for (let i = 0; i < arr.length; i++) {
			sum += arr[i];
		}
		return sum / arr.length;
	};

	const findMax = (...arr: number[]): number => {
		let max = arr[0];
		for (let i = 1; i < arr.length; i++) {
			if (arr[i] > max) {
				max = arr[i];
			}
		}
		return max;
	};
	// does Exist
	const doesExist = (arr: number[], x: number): boolean => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === x) {
				console.log("true")
				return true;
			}
		}
		return false;
	};

	// Rest Parameters
	// A rest parameter allows a function to accept an indefinite number of arguments as an array.
	// This is useful when you don't know beforehand how many arguments will be passed to the function.
	const countNumber = (x: number, y:number, ...n: number[]): void => {
		let count = 0;
		for (let i = 0; i < n.length; i++)
			if (n[i] === x || n[i] === y)
				count++;

		console.log(count);
	};

	return (
		<div>
			<>
				<button
					className="bg-green-500 p-2"
				// it was in Math.max(1,2,3,4,5)
					onClick={() => findAverage(1, 2, 13, 4, 5)}
				>
					Click Me
				</button>
			</>
		</div>
	);
};

export default MasterComponent;
