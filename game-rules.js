check = function (mat) {
	let toCheck = [xo.x, xo.o];
	for (const element of toCheck) {
		for (let i = 0; i < 3; i++) {
			if (allAreEqual(mat[i][0], mat[i][1], mat[i][2], element)) {
				result.innerHTML = element + " won";
				return true;
			}
			if (allAreEqual(mat[0][i], mat[1][i], mat[2][i], element)) {
				result.innerHTML = element + " won";
				return true;
			}
		}
		if (allAreEqual(mat[0][0], mat[1][1], mat[2][2], element)) {
			result.innerHTML = element + " won";
			return true;
		}
		if (allAreEqual(mat[2][0], mat[1][1], mat[0][2], element)) {
			result.innerHTML = element + " won";
			return true;
		}
	}
	if (mat.flat().every((e) => e != "")) {
		result.innerHTML = "draw";
	}
};