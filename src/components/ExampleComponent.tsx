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
	function getCube(no: number):number {
		return no*no*no
    }
    function farenheitToCentigrade(f: number): number{
        return Number(((f-32)*(5/9)).toFixed(2))
    }
    
	return <div>result : {farenheitToCentigrade(98.7)}</div>;
	return <div>result : {getCube(5)}</div>;
};

export default ExampleComponent;
