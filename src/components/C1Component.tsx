import { useState } from "react";

const C1Component = () => {
	const [username, setUsername] = useState<string>("ABC");
	const changeUser = () => {
		setUsername(() => {
			const randomStr = Math.random().toString(36).substring(2, 8);
			console.log(randomStr);
			return randomStr;
		});
		console.log("button clicked");
	};
	return (
		<>
			<h1>{username}</h1>
			<input
				className="border p-2 m-2"
				type="text"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<h2>{username}</h2>
			
			<button className="border p-2 m-2 bg-red-300" onClick={changeUser}>
				changeName
			</button>
		</>
	);
};

export default C1Component;
