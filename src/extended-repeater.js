const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, opt) {
  if (typeof str !== 'string') {
    str = String(str)
  }

  let add = opt.addition
  if (typeof add !== 'string' && add !== undefined) {
    add = String(add)
  }
  let repeatAdd = opt.additionRepeatTimes
  let separAdd = opt.additionSeparator
  if (separAdd == undefined) {
    separAdd = '|'
  }
  let addPart = new Array(repeatAdd).fill(add).join(separAdd)

  let rep = opt.repeatTimes
  let separ = opt.separator
  if (separ == undefined) {
    separ = '+'
  }
  let mainPart = str + addPart
  let fullStr = new Array(rep).fill(mainPart).join(separ)

  return fullStr
}

module.exports = {
  repeater
};
