import React, { useState } from "react";

const MyBindComponent = () => {
	const [inputValue, setInputValue] = useState<string>("empty");
	const [names, setNames] = useState<string[]>([]);
	return (
		<div>
			<h1>{inputValue}</h1>
			<input
				type="text"
				className="border"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<h1>{inputValue}</h1>
			<input
				type="text"
				className="border"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<hr />
            Name:{names.join(", ") || "Name List is empty"}
            <br />
			<button className="border" onClick={() => setNames([...names, inputValue])}>
				Add Name
            </button>
            <button className="border" onClick={() => setNames([])}>
				Clear Names
            </button>
            <hr />
            {/* pop name */}
            <button className="border" onClick={() => setNames(names.slice(0, -1))}>
                Remove Last Name
            </button>
            {/* remove first name */}
            <button className="border" onClick={() => setNames(names.slice(1))}>
                Remove First Name
            </button>
            {/* add at the first */}
            <button className="border" onClick={() => setNames([inputValue, ...names])}>
                Add Name at First
            </button>
        {/* add at the last */}
            <button className="border" onClick={() => setNames([...names, inputValue])}>
                Add Name at Last
            </button>
            {/* reverse names */}
            <button className="border" onClick={() => setNames([...names].reverse())}>
                Reverse Names
            </button>
            {/* sort names */}
            <button className="border" onClick={() => setNames([...names].sort())}>
                Sort Names
            </button>
            {/* clear input */}
            <button className="border" onClick={() => setInputValue("")}>
                Clear Input
            </button>

		</div>
	);
};

export default MyBindComponent;
