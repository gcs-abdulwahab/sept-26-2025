interface NComponentProps {
	x: number;
	y: number;
	z: number;
}

function halfCheck(a: number, b: number, c: number): string {
	const num = a + b;

	if (num === c / 2) {
		return `its half`;
	} else {
		return `not half`;
	}
}

const NComponent = ({ x, y, z }: NComponentProps) => {
	return (
		<>
			<div>{halfCheck(0.1, 0.2, 0.6)}</div>
		</>
	);
};

export default NComponent;
