const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  if (!date) {
    return 'Unable to determine the time of year!';
  }
  const d = new Date(date)
  if (Object.getOwnPropertyNames(date).length !== 0 || !(d instanceof Date && !isNaN(d)) || Number.isInteger(date)) {
    throw new Error('Invalid date!');
  }
  const monthNum = d.getMonth()

  let season
  if (monthNum < 2 || monthNum === 11) {
    season = 'winter'
  } else if (monthNum < 5) {
    season = 'spring'
  } else if (monthNum < 8) {
    season = 'summer'
  } else {
    season = 'fall'
  }

  return season
}

module.exports = {
  getSeason
};
