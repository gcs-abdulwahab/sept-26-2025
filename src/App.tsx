import "./App.css";
import MyContactComponent from "./components/MyContactComponent";
import StateComponent from "./components/StateComponent";
import type { ContactType } from "./types/ContactType";

const contact1: ContactType = {
	id: 1,
	name: "Hamza",
	email: "abc@gmail.com",
	phone: "1234567890",
	salary: 50000,
	isActive: true,
};

function App() {
	return (
		<>
			{/* <MyContactComponent contact={contact1} /> */}

			<StateComponent color="bg-red-800" count={5} contact={contact1} />
		</>
	);
}

export default App;
