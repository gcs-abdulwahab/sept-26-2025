import type {Employee} from "./types/EmployeeType";
interface SampleProps {
	n: number;
	emp: Employee;
}



const Sample = ({ n, emp }: SampleProps) => {
	function fibonacci(num: number): number {
		if (num <= 1) return num;
		return fibonacci(num - 1) + fibonacci(num - 2);
	}

    function greet(name: string): string {
        return `Hello, ${name}. Welcome to the company!` + "asd".concat("xyz");
    }


	return (
		<div>
			Sample Component {fibonacci(n)}
            <h1>{greet(emp.name)}</h1>

            <h2>Employee Details:</h2>
            <ul>
                <li>Age: {emp.age}</li>
                <li>Position: {emp.position}</li>
                <li>Salary: {emp.salary}</li>
            </ul>
		</div>
	);
};

export default Sample;
