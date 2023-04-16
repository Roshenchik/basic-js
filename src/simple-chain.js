const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  values: [],

  getLength() {
    return this.values.length
  },
  addLink(value) {
    this.chainLength ++
    // console.dir('array: '+ this.values)
    // console.dir('add: '+ value)
    if (arguments.length === 0) {
      value = ' '
    } else {
      this.values.push(value)
      return this
    }
  },
  removeLink(position) {
    // console.dir('array: '+ this.values)
    // console.dir('pos: ' + position)
    if (!Number.isInteger(position) || position < 1 || position > this.values.length) {
      // console.dir('Error')
      this.values = []
      throw new Error('You can\'t remove incorrect link!')
    } else {
      this.values.splice(position - 1, 1)
      return this
    }
  },
  reverseChain() {
    // console.dir('Reverse')
    this.values.reverse()
    return this
  },
  finishChain() {
    // console.dir('finish: '+ this.values)
    const chain = this.values.map((el, i) => `( ${el} )`).join(`~~`)
    this.values = []
    return chain
  }
};

module.exports = {
  chainMaker
};
