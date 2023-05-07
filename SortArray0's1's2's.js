const sortColors = (nums) => {
	let countZero = 0;
	let countOne = 0;
	let countTwo = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 0) {
			countZero++;
		} else if (nums[i] === 1) {
			countOne++;
		} else {
			countTwo++;
		}
	}
	for (i = 0; i < nums.length; i++) {
		if (i < countZero) {
			nums[i] = 0;
		} else if (i < countZero + countOne) {
			nums[i] = 1;
		} else nums[i] = 2;
	}
	return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
