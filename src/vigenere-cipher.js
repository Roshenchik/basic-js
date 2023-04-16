const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor (direct = true) {
    this.direct = direct;
  }

  encrypt(str, key) {

    if (arguments.length < 2 || arguments[0] == undefined || arguments[1] == undefined) {
      throw new Error ('Incorrect arguments!')
    }

    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
	
    const strSymbols = str.toUpperCase().split('')
    const strLetters = strSymbols.filter(e => alphabet.includes(e))
    console.log(strLetters)
  
    const keyLetters = ''.padStart(strLetters.length, key).toUpperCase().split('')
    console.log(keyLetters)
  
    const strNum = strLetters.map(letter => {
      let number
      for (let l of alphabet) {
        if (letter == l) {
          number = alphabet.indexOf(l)
          break
        }
      }
      return number
    })
    console.log(strNum)
  
    const keyNum = keyLetters.map(letter => {
      let number
      for (let l of alphabet) {
        if (letter == l) {
          number = alphabet.indexOf(l)
          break
        }
      }
      return number
    })
    console.log(keyNum)
  
    const newCode = []
    for (let i = 0; i < strLetters.length; i++) {
      let num = keyNum[i] + strNum[i];
      if (num > 25) {
        num -= 26
      }
      newCode.push(num)
    }
    console.log(newCode)
  
    const newWordLetters = newCode.map(number => {
      let letter
      for (let n in alphabet) {
        if (number == n) {
          letter = alphabet[n]
          break
        }
      }
      return letter
    })
    console.log(newWordLetters)
  
    let newSymbols = newWordLetters.slice()
    strSymbols.forEach((e, i) => {
      if (!alphabet.includes(e)) {
        newSymbols.splice(i, 0, e)
      }
    });
    console.log(newSymbols)
    
    if (this.direct === false) {
      newSymbols = newSymbols.reverse()
    }

    const newWord = newSymbols.join('')
    console.log(newWord)
    return newWord
  }

  decrypt(str, key) {

    if (arguments.length < 2 || arguments[0] == undefined || arguments[1] == undefined) {
      throw new Error ('Incorrect arguments!')
    }

    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
	
    const strSymbols = str.toUpperCase().split('')
    const strLetters = strSymbols.filter(e => alphabet.includes(e))
    console.log(strLetters)
  
    const keyLetters = ''.padStart(strLetters.length, key).toUpperCase().split('')
    console.log(keyLetters)
  
    const strNum = strLetters.map(letter => {
      let number
      for (let l of alphabet) {
        if (letter == l) {
          number = alphabet.indexOf(l)
          break
        }
      }
      return number
    })
    console.log(strNum)
  
    const keyNum = keyLetters.map(letter => {
      let number
      for (let l of alphabet) {
        if (letter == l) {
          number = alphabet.indexOf(l)
          break
        }
      }
      return number
    })
    console.log(keyNum)
  
    const newCode = []
    for (let i = 0; i < strLetters.length; i++) {
      let num = strNum[i] - keyNum[i];
      if (num < 0) {
        num += 26
      }
      newCode.push(num)
    }
    console.log(newCode)
  
    const newWordLetters = newCode.map(number => {
      let letter
      for (let n in alphabet) {
        if (number == n) {
          letter = alphabet[n]
          break
        }
      }
      return letter
    })
    console.log(newWordLetters)
  
    let newSymbols = newWordLetters.slice()
    strSymbols.forEach((e, i) => {
      if (!alphabet.includes(e)) {
        newSymbols.splice(i, 0, e)
      }
    });
    console.log(newSymbols)

    if (this.direct === false) {
      newSymbols = newSymbols.reverse()
    }
  
    const newWord = newSymbols.join('')
    console.log(newWord)
    return newWord
  }
}

module.exports = {
  VigenereCipheringMachine
};
