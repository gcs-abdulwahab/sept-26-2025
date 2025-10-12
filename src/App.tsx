import "./App.css";
import BreakComponent from "./components/BreakComponent";
import C1Component from "./components/C1Component";
import C2Component from "./components/C2Component";
import MyBindComponent from "./components/MyBindComponent";
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
		<BreakComponent />
		</>
	);
}

export default App;
