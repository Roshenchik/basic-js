const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  const digits = String(num).split('')

  const numbers = []
	for (let i = 0; i < digits.length; i++) {
		const tempArr = digits.slice()
		tempArr.splice(i, 1)
		numbers.push(tempArr.join(''))
	}
	console.log(numbers)

	const maxNum = Math.max(...numbers)
	console.log(maxNum)

  return maxNum
}

module.exports = {
  deleteDigit
};
