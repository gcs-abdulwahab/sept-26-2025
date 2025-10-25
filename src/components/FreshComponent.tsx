interface FreshComponentProps {
	luckynumber: string | number;
}
const FreshComponent = ({ luckynumber }: FreshComponentProps) => {
	let n = luckynumber;
	type TypeA = {
		username: string;
	};
	type TypeB = {
		salary: number;
	};

	type TypeC = TypeA & TypeB;

	const obj1: TypeC = {
		salary: 33,
		username: "abc",
	};

	const obj2: TypeA & TypeB = {
		username: "dummy",
		salary: 0,
	};

	interface IA {
		username: string;
	}

	interface IB {
		salary: number;
	}

	interface IC extends IA, IB {
		isMale: boolean;
	}
	interface IC {
		isAlive: boolean;
	}

	const object1: IC = {
		username: "abc",
		salary: 23,
		isMale: true,
		isAlive: false,
	};

	// keep example objects available during development (prevents unused-vars lint errors)
	console.debug("examples:", obj1, obj2, object1);

	function fx(num: number): void {
		console.log(num);
	}

	function printList(list: number[], func: (num: number) => void) {
		for (let i = 0; i < list.length; i++) func(list[i]);
	}

	const list = [1, 2, 3, 5, 6, 7];
	printList(list, fx);


    list.forEach(num=>console.log(num))




	if (typeof luckynumber === "string") {
		n = parseInt(luckynumber);
	}

	return <div>FreshComponent: {n}</div>;
};

export default FreshComponent;
