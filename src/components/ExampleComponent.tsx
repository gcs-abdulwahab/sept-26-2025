interface ExampleComponentProps {
	distance: number;
}

const ExampleComponent = ({ distance }: ExampleComponentProps) => {
	// function distanceToText(dis:string) {

	//     return dis + " units"

	// }
	function getSquare(no: number): number {
		return no * no;
	}
    
    
	return <div>result : {getSquare(distance)}</div>;
};

export default ExampleComponent;
