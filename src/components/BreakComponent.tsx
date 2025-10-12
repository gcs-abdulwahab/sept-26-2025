import { useState } from "react";

const BreakComponent = () => {
	const [nums, setNums] = useState<number[]>([3, 4, 5, 6, 8]);
	const addRandomNumber = () => {
		setNums((prev) => {
			const random = Math.floor(Math.random() * 100);
			return [...prev, random];
		});
	};
	return (
		<div>
			<h1>nums : {nums.join(",")}</h1>
			<h2> length : {nums.length}</h2>
			<button onClick={addRandomNumber}>
				Remove the Middle Element
			</button>
			<br />
		</div>
	);
};

export default BreakComponent;
