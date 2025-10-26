import { useState } from "react";
import "./App.css";
import PlayListComponent from "./components/PlayListComponent";
import type { ClientType } from "./types/ClientType";
import type { VideoLectureType } from "./types/VideoLectureType";
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

	const handleIncreaseViews = (id: number) => {
		setClients((prev) =>
			prev.map((client) =>
				client.id === id ? { ...client, views: client.views + 10000 } : client
			)
		);
	}

	const handleParent = (name) => {
		console.log('handle print',name)
		
	}

	const list1: VideoLectureType[] = [
		{
			id: 1,
			title: "Introduction to TypeScript",
			duration: 45,
			videoUrl: "https://example.com/videos/typescript-intro",
		},
		{
			id: 2,
			title: "Advanced React Patterns",
			duration: 60,
			videoUrl: "https://example.com/videos/react-advanced",
		},
		{
			id: 3,
			title: "State Management with Redux",
			duration: 50,
			videoUrl: "https://example.com/videos/redux-state-management",
		},
	];
const list2: VideoLectureType[] = [
		{
			id: 11,
			title: "ChangedIntroduction to TypeScript",
			duration: 45,
			videoUrl: "https://example.com/videos/typescript-intro",
		},
		{
			id: 12,
			title: "Changed Advanced React Patterns",
			duration: 60,
			videoUrl: "https://example.com/videos/react-advanced",
		},
		{
			id: 13,
			title: " CHanged State Management with Redux",
			duration: 50,
			videoUrl: "https://example.com/videos/redux-state-management",
		},
	];



	return (
		<div className=" flex justify-around gap-4 flex-wrap">
			
			<PlayListComponent data={ list1} currentlyPlayed = {list1[2].id}  name="my worst list  1"/>
			<hr />
			<PlayListComponent data={ list2} currentlyPlayed = {list2[1].id}   name="my fav list" />

			
			
			{/* {clients.map((c) => (
				<div key={c.id}>
					
					<ProfileCard
						onNameClick={handleParent}
						client={c}
						increaseViews={handleIncreaseViews}
					/>
					<button
						className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600"
						onClick={() => removeClient(c.id)}
					>		Remove Client
						Remove Client
					</button>
				</div>
			))} */}
		</div>
	);
}

export default App;
