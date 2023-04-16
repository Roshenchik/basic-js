const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
	arr1 = str1.split('').sort()
	arr2 = str2.split('').sort()
	console.log(arr1)
	console.log(arr2)

	const list1 = {}
	const list2 = {}
	for (let i = 0; i < arr1.length; i++) {
		let count = 1
		while (arr1[i] === arr1[i + 1]) {
			count++
			i++
		}
		list1[arr1[i]] = count
	}
	for (let i = 0; i < arr2.length; i++) {
		let count = 1
		while (arr2[i] === arr2[i + 1]) {
			count++
			i++
		}
		list2[arr2[i]] = count
	}

	console.log(list1)
	console.log(list2)

	let largeList = list1
	let smallList = list2
	if (list2.length > list1.length) {
		largeList = list2
		smallList = list1
	}

	let commonCount = 0
	for (symb in smallList) {
		if (largeList.hasOwnProperty(symb)) {
			let common = Math.min(largeList[symb], smallList[symb])
			console.log(`Common ${symb}, ${common} repeat(s)`)
			commonCount += common
		}
	}
	return commonCount
}

module.exports = {
  getCommonCharacterCount
};
