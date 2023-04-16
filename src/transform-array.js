const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(array) {
  if (!Array.isArray(array)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  let arr = array.slice()
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i]
    if (el === '--discard-next') {
      if (!(arr[i+1] === '--discard-prev' || arr[i+1] === '--double-next' || arr[i+1] === '--double-prev' || arr[i+1] === undefined)){
        arr.splice(i + 1, 1)
      }
    }
    else if (el === '--discard-prev') {
      if (!(arr[i-1] === '--discard-next' || arr[i-1] === '--double-next' || arr[i-1] === '--double-prev' || arr[i-1] === undefined)){
        arr.splice(i - 1, 1)
      }
    }
    else if (el === '--double-next') {
      if (!(arr[i+1] === '--discard-next' || arr[i+1] === '--discard-prev' || arr[i+1] === '--double-prev' || arr[i+1] === undefined)){
        arr.splice(i + 1, 0, arr[i + 1])
      }
    }
    else if (el === '--double-prev') {
      if(!(arr[i-1] === '--discard-next' || arr[i-1] === '--discard-prev' || arr[i-1] === '--double-next' || arr[i-1] === undefined)){
        arr.splice(i - 1, 0, arr[i - 1])
        i += 1
      }
    }
  }
  let filt = arr.filter((el) => el !== '--discard-next' && el !== '--discard-prev' && el !== '--double-next' && el !== '--double-prev')
  return filt
}

module.exports = {
  transform
};
