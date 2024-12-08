class Car {
	make: string;
	model: string;
	year: number;

	constructor(make: string, model: string, year: number) {
		this.make = make;
		this.model = model;
		this.year = year;
	}

	// Method to get the car's age
	getCarAge(currentYear: number): number {
		return currentYear - this.year;
	}
}

// Example usage
const myCar = new Car("Toyota", "Corolla", 2015);
console.log(`My car's age is: ${myCar.getCarAge(2024)} years`); // Output: My car's age is: 9 years
