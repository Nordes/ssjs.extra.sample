const { Router } = require('express')
var router = Router()

var controller = (app) => {
  router.get('/', (req, res, next) => {
    // todo Return the list of all the accounts
    app.dbContext.accounts.getAll().then(data => {
      var accounts = cloneArray(data, ['activationCode'])
      res.json(accounts)
      next()
    }).catch(err => {
      console.error(`Error while inserting: ${err}`)
      res.error(err)
      next()
    })
  })
  
  router.get('/:userId', (req, res, next) => {
    // Todo Returns the details of the account
    res.json({ userId: req.params.userId })

    next()
  })

  return router
}

function cloneArray(data, keysToSkip) {
  var result = []
  data.forEach(function(elt) {
    var eltKeys = Object.keys(elt)
    var tmp = {}

    for (var i=0; i<eltKeys.length; i++) {
      if (keysToSkip.findIndex(f=> { return f === eltKeys[i] }) >= 0) {
        continue
      }

      tmp[eltKeys[i]] = elt[eltKeys[i]]
    }
    result.push(tmp)
  }, this)

  return result
}

module.exports.controller = controller
