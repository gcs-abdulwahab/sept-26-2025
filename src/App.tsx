import { useState } from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import type { ClientType } from "./types/ClientType";
const clientsArray: ClientType[] = [
	{
		id: 1,
		name: "Aiza",
		description:
			"Software Engineer specializing in AI development and cloud architecture.",
		imgSrc: "https://placehold.co/600x400",
		role: "Developer",
		views: 10000,
		comments: 9,
	},
	{
		id: 2,
		name: "Liam",
		description:
			"Full-stack developer with a passion for building scalable web applications.",
		imgSrc: "https://placehold.co/600x400",
		role: "Full-Stack Developer",
		views: 23000,
		comments: 15,
	},
	{
		id: 3,
		name: "Sophia",
		description:
			"UI/UX designer focused on creating intuitive user experiences.",
		imgSrc: "https://placehold.co/600x400",
		role: "Designer",
		views: 9800,
		comments: 7600,
	},{
		id: 4,
		name: "Sophia",
		description:
			"UI/UX designer focused on creating intuitive user experiences.",
		imgSrc: "https://placehold.co/600x400",
		role: "Designer",
		views: 9800,
		comments: 7600,
	},
];

function App() {
	const [clients, setClients] = useState<ClientType[]>(clientsArray);

	const removeClient = (id: number) => {
		setClients((prev) => prev.filter((c) => c.id !== id));	
	}


	return (
		<div className=" flex justify-around gap-4 flex-wrap">
			{clients.map((c) => (
				<div>
					<ProfileCard key={c.id} client={c} />
					<button
						className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600"
						onClick={() => removeClient(c.id)}
					>		Remove Client
						Remove Client
					</button>
				</div>
			))}

			
		</div>
	);
}

export default App;
