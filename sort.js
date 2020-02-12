var cars = [
	{ type: 'Volvo', year: 2016 },
	{ type: 'Saab', year: 2001 },
	{ type: 'BMW', year: 2010 }
];

function display(arr) {
	arr.forEach(element => {
		console.log(element.type);
	});
}

function sortCars() {
	let sortedCars = cars.slice();
	sortedCars.sort(function(a, b) {
		var x = a.type.toLowerCase();
		var y = b.type.toLowerCase();
		if (x < y) {
			return -1;
		}
		if (x > y) {
			return 1;
		}
		return 0;
	});
	display(sortedCars);
}

display(cars);
sortCars();
display(cars);
