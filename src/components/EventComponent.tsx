interface EventComponentProps {
	name: string;
	onPress: () => void;
	onSpecialPress?: () => void;
}

const EventComponent = ({
	name,
	onPress,
	onSpecialPress,
}: EventComponentProps) => {
	return (
		<div>
			EventComponent
			<h1>{name}</h1>
			<div className="flex flex-col gap-2">
				<button onClick={onPress}>Trigger Event</button>

				<button onClick={onSpecialPress}>Trigger Special Event</button>
			</div>
		</div>
	);
};

export default EventComponent;
