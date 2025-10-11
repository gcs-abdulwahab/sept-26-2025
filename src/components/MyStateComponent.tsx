import { useState } from "react";

interface MyStateComponentProps {
	num: number;
	color: string;
}

const MyStateComponent = ({ num, color }: MyStateComponentProps) => {
	const [count, setCount] = useState<number>(num);

	const incrementNumber = () => {
		setCount( count + 1 );

		console.log("incrementNumber ");
	};
	const decrementNumber = () => {
		setCount((prevCount) => prevCount - 1);
		console.log("decrementNumber");
	};

	return (
		<div className={` ${color}`}>
			<h1>{count}</h1>
			<br />
		<div>
            	<button onClick={incrementNumber} className="bg-green-400">
				 increment counter
			</button>

			<button onClick={decrementNumber} className="bg-red-400">
				decrement counter
			</button>

            </div>
		</div>
	);
};

export default MyStateComponent;
