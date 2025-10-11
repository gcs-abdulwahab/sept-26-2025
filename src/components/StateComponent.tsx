import { useState } from "react";
import type { ContactType } from "../types/ContactType";
interface StateComponentProps {
	color: string;
	count: number;
	contact: ContactType;
}
// make the count prop read only
const StateComponent = ({
	color = "bg-green-500",
	count,
	contact,
}: StateComponentProps) => {
	const [Count, setCount] = useState<number>(count);
	const [Contact, setContact] = useState<ContactType>(contact);

	const incrementSalary = () => {
		setContact({ ...Contact, salary: Contact.salary + 1000 });
	};
	const decrementSalary = () => {
		setContact({ ...Contact, salary: Contact.salary - 1000 });
	};

	const changeContact = () => {
		console.log("changeContact clicked");
		// random name
		const randomName = Math.random().toString(36).substring(7);
		Contact.isActive = !Contact.isActive;
		Contact.salary += Contact.isActive ? 500 : -500;
		setContact({ ...Contact, name: randomName });
	};

	const incrementCount = () => {
		setCount(Count + 1);
		setCount(Count + 1);
	};
	const decrementCount = () => {
		setCount((prevCount) => prevCount - 1);
		setCount((prevCount) => prevCount - 1);
	};

	const isPrime = (n: number): boolean => {
		if (n <= 1) return false;
		for (let i = 2; i <= Math.sqrt(n); i++) {
			if (n % i === 0) return false;
		}
		return true;
	};

	return (
		<div className={color} style={{ backgroundColor: "pink", color: "white" }}>
			<h1>Count: {Count}</h1>
			<h2>{isPrime(Count) ? "Prime Number" : "Not a Prime Number"}</h2>
			{/* <button>Increment</button> */}
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
				onClick={incrementCount}
			>
				Increment
			</button>
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
				onClick={decrementCount}
			>
				Decrement
			</button>
			<hr />
			<h1>Contact Details:</h1>
			<p>ID: {Contact.id}</p>
			<p>Name: {Contact.name}</p>
			<p>Email: {Contact.email}</p>
			<p>Phone: {Contact.phone}</p>
			<p>Salary: {Contact.salary}</p>
			<p>Status: {Contact.isActive ? "Active" : "Inactive"}</p>
			{/* Two Buttons to increment and decrement salary by 1000 */}
			<button
				className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2"
				onClick={incrementSalary}
			>
				Increment Salary
			</button>
			<button
				className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2"
				onClick={decrementSalary}
			>
				Decrement Salary
			</button>
			<hr />
			<button
				className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mx-2"
				onClick={changeContact}
			>
				Change Contact
			</button>
		</div>
	);
};

export default StateComponent;
