const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // return (members)
  if (!Array.isArray(members)) {
    return false
  }
  letterArr = []
  for (memb of members) {
    if (typeof memb !== 'string') {
      continue;
    } else {
      letterArr.push(memb.trim()[0].toUpperCase())
    }
  }
  if (letterArr.length == 0) {
    return false
  } else {
    const teamName = letterArr.sort().join('')
    return teamName
  }
}

module.exports = {
  createDreamTeam
};
