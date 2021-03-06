const CsvDb = require('csv-db')
const path = require('path')

var accounts = (dataPath) => {
  console.debug(`Path to account file: ${path.resolve(dataPath, 'account.csv')}`)
  const csvDb = new CsvDb(path.resolve(dataPath, 'account.csv')) //, ['id', 'accountId', 'channelId', 'activated', 'activationCode']);

  return {
    add: function (user) {
      return new Promise((resolve, reject) => {
        csvDb.insert(user).then((data) => {
          resolve(data)
        }, (err) => {
          reject(err)
        })
      })
    },
    activate: function (activationCode) {
      return new Promise((resolve, reject) => {
        // https://github.com/sspringer82/nodeCsvDb
        throw new Error('Not implemented')
        // Need to search
        resolve(null)
      })
    },
    getAll: function () {
      return new Promise((resolve, reject) => {
        // https://github.com/sspringer82/nodeCsvDb
        csvDb.get().then(
          (data) => { resolve(data) },
          (err) => { reject(err) })
      })
    },
    get: function (id) {
      return new Promise((resolve, reject) => {
        // https://github.com/sspringer82/nodeCsvDb
        csvDb.get(id).then(
          (data) => { resolve(data) },
          (err) => { reject(err) })
      })
    }
  }
}

module.exports = accounts
