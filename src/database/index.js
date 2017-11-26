var path = require('path')

var dbContext = (app) => {
  // https://github.com/sspringer82/nodeCsvDb
  return {
    register: require('./register')(path.resolve(__dirname, '../../data'))
  }
}

module.exports = dbContext
