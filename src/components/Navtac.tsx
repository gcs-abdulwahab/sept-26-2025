

const Navtac = () => {
	function add(a: number, b: number): number {
		const x1 = a.toString();
		const x2 = b.toString();
		const merged = x1 + x2;
		return parseInt(merged) + 1;
	}

	function centigradeToFahrenheit(centigrade: number) {
		return (centigrade * 9) / 5 + 32;
	}

	return <div>Navtac :: {add(1,2)} / {centigradeToFahrenheit(25)}</div>;
};

export default Navtac;
