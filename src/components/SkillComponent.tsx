interface SkillComponentProps {
	n: number;
}
const SkillComponent = ({ n }: SkillComponentProps) => {
	// function isEven(n: number): boolean {
	// 	return !(n % 2);
	// }

	function printNumbers(n: number): void {
        for (let i = 0; i < n; i++)
        {
            console.log(i+1);
        }
    }

	printNumbers(n);

	return (
        <>
            
          
			{/* <h1>{52}</h1>
			<div>SkillComponent {isEven(52) ? "Even" : "Not Even"}</div>
			<div>SkillComponent {!isEven(52) ? "Odd" : "Not ODD"}</div>
			<div>SkillComponent {!isEven(52) ? "Red" : "green"}</div> */}
		</>
	);
};

export default SkillComponent;
