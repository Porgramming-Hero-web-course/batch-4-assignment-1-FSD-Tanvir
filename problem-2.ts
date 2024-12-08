const removeDuplicates = (array: number[]): number[] => {
	return array.filter((item, index) => array.indexOf(item) === index);
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
