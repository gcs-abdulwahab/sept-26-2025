const items = [
	{ id: 1, name: "Item 1" },
	{ id: 2, name: "Item 2" },
	{ id: 3, name: "Item 3" },
	{ id: 4, name: "Item 4" },
	{ id: 5, name: "Item 5" },
	{ id: 6, name: "Item 6" },
	{ id: 7, name: "Item 7" },
	{ id: 8, name: "Item 8" },
	{ id: 9, name: "Item 9" },
	{ id: 10, name: "Item 10" },
];

const ItemComponent = () => {
	const deleteItem = (id: number) => () => {
		console.log("Deleting item:", id);
	};

	const withoutArrow = (event: React.MouseEvent<HTMLButtonElement>) => {
		console.log("Deleting item without arrow function:", event.type);
	};

	return (
		<div>
			{items.map((item) => (
				<div className="m-1 p-1" key={item.id}>
					{item.name}
					<button onClick={deleteItem(item.id)}>Delete</button>
					<button onClick={withoutArrow}>Delete 2</button>
				</div>
			))}
		</div>
	);
};

export default ItemComponent;
