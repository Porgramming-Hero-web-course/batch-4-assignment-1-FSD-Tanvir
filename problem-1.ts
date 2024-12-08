const sumArray = (array: number[]): number => {
	return array.reduce((a, b) => a + b, 0);
};

console.log(sumArray([1, 2, 3, 4, 5]));
