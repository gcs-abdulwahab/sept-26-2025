import { useState } from "react";

const FriendsComponent = () => {
    const [friends, setFriends] = useState<string[]>([]);
    const [input, setInput] = useState<string>("");
    const [removeInput, setRemoveInput] = useState<string>("");
    const [searchInput, setSearchInput] = useState<string>("");
    const [searchResult, setSearchResult] = useState<string>("");
    const [sortedAsc, setSortedAsc] = useState<boolean | null>(null);

    const display = friends.length ? friends.join(", ") : "No Friends I am so Lonely";

    const addAtEnd = (name: string) => setFriends((prev) => [...prev, name]);
    const addAtBeginning = (name: string) => setFriends((prev) => [name, ...prev]);
    const addInMiddle = (name: string) =>
        setFriends((prev) => {
            const mid = Math.floor(prev.length / 2);
            return [...prev.slice(0, mid), name, ...prev.slice(mid)];
        });

    const removeAtBeginning = () => setFriends((prev) => prev.slice(1));
    const removeAtEnd = () => setFriends((prev) => prev.slice(0, -1));

    const removeFriend = (name: string) => setFriends((prev) => prev.filter((f) => f !== name));

    const searchFriend = (name: string) => {
        const found = friends.includes(name);
        setSearchResult(found ? `${name} is in the list` : `${name} is NOT in the list`);
    };

    const toggleSort = () => {
        setFriends((prev) => {
            const copy = [...prev].sort((a, b) => a.localeCompare(b));
            if (sortedAsc === true) {
                copy.reverse();
                setSortedAsc(false);
                return copy;
            }
            setSortedAsc(true);
            return copy;
        });
    };

    const tryAddFromInput = (where: "start" | "middle" | "end") => {
        const name = input.trim();
        if (!name) return;
        if (where === "start") addAtBeginning(name);
        else if (where === "middle") addInMiddle(name);
        else addAtEnd(name);
        setInput("");
    };

    return (
        <div className="p-4 bg-white rounded shadow space-y-4">
            <h2 className="text-lg font-semibold">Friends</h2>
            <p className="text-gray-700">{display}</p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Friend name"
                    className="border rounded px-2 py-1 w-full sm:w-64"
                />
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => tryAddFromInput("start")}
                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
                    >
                        Add at Beginning
                    </button>
                    <button
                        onClick={() => tryAddFromInput("middle")}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                    >
                        Add in Middle
                    </button>
                    <button
                        onClick={() => tryAddFromInput("end")}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                    >
                        Add at End
                    </button>
                </div>
            </div>

            <div className="flex gap-2">
                <button
                    onClick={removeAtBeginning}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                    Remove from Beginning
                </button>
                <button
                    onClick={removeAtEnd}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                    Remove from End
                </button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <input
                    placeholder="Friend to remove"
                    value={removeInput}
                    onChange={(e) => setRemoveInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            removeFriend(removeInput.trim());
                            setRemoveInput("");
                        }
                    }}
                    className="border rounded px-2 py-1 w-full sm:w-64"
                />
                <button
                    onClick={() => {
                        removeFriend(removeInput.trim());
                        setRemoveInput("");
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                >
                    Remove Friend
                </button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <input
                    placeholder="Search friend"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") searchFriend(searchInput.trim());
                    }}
                    className="border rounded px-2 py-1 w-full sm:w-64"
                />
                <button
                    onClick={() => searchFriend(searchInput.trim())}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded"
                >
                    Search
                </button>
                <div className="text-sm text-gray-700">{searchResult}</div>
            </div>

            <div>
                <button onClick={toggleSort} className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded">
                    Sort / Reverse Sort
                </button>
            </div>
        </div>
    );
};

export default FriendsComponent;
