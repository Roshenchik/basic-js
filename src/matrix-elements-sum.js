const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
	const aboveZero = []
	const skipTable = []
  matrix.forEach(line => {
		line.forEach((cell, table) => {
			if (skipTable.includes(table)){
				return
			}
			if (cell === 0) {
				skipTable.push(table)
			} else {
				aboveZero.push(cell)
			}
		})
	});

	const sum = aboveZero.reduce((acc, cur) => acc + cur, 0)
  
	return sum
}

module.exports = {
  getMatrixElementsSum
};
