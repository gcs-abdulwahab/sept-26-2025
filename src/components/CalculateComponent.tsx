import { useState } from "react";
interface CalculateComponentProps {
	length?: number;
	width?: number;
}

const CalculateComponent = ({
	length = 1,
	width = 1,
}: CalculateComponentProps) => {

	function testing(length: number = 8) {
		length = 7
		console.log(length)
	}

	const [Length, setLength] = useState(length);
	const [Width, setWidth] = useState(width);
	const [result, setResult] = useState(1);
	const getArea = (length: number, width: number) => {
		setResult(length * width);
		testing(66)
		testing(88)
    	// console.debug(length ,"  ",width)
        
    }
    const getPerimeter = (length: number, width: number) => {
             setResult(2 * length + 2 * width)
	};
	return (
		<>
			<h1>{result}</h1>
			<div className="mb-4">
				<p>
					length:
					<input
						onChange={(e) => setLength(Number(e.target.value))}
						type="text"
						value={Length}
						placeholder="enter the length m-3"
						className="border px-2 mx-2"
					></input>
				</p>
			</div>
			<div>
				<p>
					width:
					<input
						onChange={(e) => setWidth(Number(e.target.value))}
						type="text"
						value={Width}
						placeholder="enter the width m-3"
						className="border px-2 mx-2"
					></input>
				</p>
			</div>
			<div>
				<button onClick={() => getArea(Length, Width)}>get area</button>
			</div>
			<div>
                <button onClick={() => getPerimeter (Length, Width)}>get perimeter</button>
			</div>
		</>
	);
};

export default CalculateComponent;
