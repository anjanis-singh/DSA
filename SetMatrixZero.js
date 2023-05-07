const setZero = (matrix) => {
	const columnCount = matrix[0].length;
	const rowCount = matrix.length;
	let firstRow = false;
	let firstCol = false;
	for (let i = 0; i < columnCount; i++) {
		if (matrix[0][i] === 0) {
			firstRow = true;
		}
	}
	for (let i = 0; i < rowCount; i++) {
		if (matrix[i][0] === 0) {
			firstCol = true;
		}
	}
	for (let i = 1; i < rowCount; i++) {
		for (let j = 1; j < columnCount; j++) {
			if (matrix[i][j] === 0) {
				matrix[0][j] = 0;
				matrix[i][0] = 0;
			}
		}
	}

	for (let i = 1; i < columnCount; i++) {
		if (matrix[0][i] === 0) {
			for (let j = 1; j < rowCount; j++) {
				matrix[j][i] = 0;
			}
		}
	}
	for (let i = 1; i < rowCount; i++) {
		if (matrix[i][0] === 0) {
			for (let j = 1; j < columnCount; j++) {
				matrix[i][j] = 0;
			}
		}
	}
	if (firstRow) {
		for (let i = 0; i < columnCount; i++) matrix[0][i] = 0;
	}
	if (firstCol) {
		for (let i = 0; i < rowCount; i++) matrix[i][0] = 0;
	}
	return matrix;
};


console.log(setZero([[1, 1, 1], [1, 0, 1], [1, 1, 1]]));
