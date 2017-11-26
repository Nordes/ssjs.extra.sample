var path = require('path')

var dbContext = (app) => {
  // https://github.com/sspringer82/nodeCsvDb
  return {
    accounts: require('./accounts')(path.resolve(__dirname, '../../data'))
  }
}

module.exports = dbContext
