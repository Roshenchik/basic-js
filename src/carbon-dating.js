const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(activ) {
  // return activ
  const activNum = Number(activ)
  if (typeof activ !== 'string' || !isFinite(activ) || isNaN(activNum) || activNum < 0) {
    return false
  } else {
    let date = Math.ceil((Math.log(15 / activNum)) / (0.693 / 5730))
    if (!isFinite(date) || isNaN(date) || date < 0){
      return false
    } else {
      return date
    }
  }
}

module.exports = {
  dateSample
};
