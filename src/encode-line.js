const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('')
  let encodeLine = ''
  for (let i = 0; i < arr.length; i++) {
    let rep = 1
    while (arr[i] === arr[i + 1]) {
      rep++
      i++
    }
    rep > 1 ? encodeLine += `${rep}${arr[i]}` : encodeLine += `${arr[i]}`
  }
  return encodeLine
}

module.exports = {
  encodeLine
};
