import EventComponent from "./EventComponent";

const ParentEventComponent = () => {

const handleClick = (id) => () => {
  console.log("Deleting item:", id);
};
	return (
        <div>
            <button onClick={handleClick(7)}>Delete</button>

			ParentEventComponent
			<EventComponent
				name="Child Event"
				onPress={() => alert("Child event triggered!")}
				onSpecialPress={() => alert("Child special event triggered!")}
			/>
		</div>
	);
};

export default ParentEventComponent;
