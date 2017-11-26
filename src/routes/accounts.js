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
  
  router.get('/:id', (req, res, next) => {
    // Todo Returns the details of the account
    app.dbContext.accounts.get(req.params.id).then(data => {
      var account = filterElt(data, ['activationCode'])
      res.json(account)
      next()
    }).catch(err => {
      console.error(`Error while inserting: ${err}`)
      res.error(err)
      next()
    })
  })

  return router
}

function cloneArray(data, keysToSkip) {
  var result = []
  data.forEach(function(elt) {
    var tmp = filterElt(elt, keysToSkip)
    result.push(tmp)
  }, this)

  return result
}

function filterElt(elt, keysToSkip) {
  var eltKeys = Object.keys(elt)
  tmp = {}
  
  for (var i=0; i<eltKeys.length; i++) {
    if (keysToSkip.findIndex(f=> { return f === eltKeys[i] }) >= 0) {
      continue
    }

    tmp[eltKeys[i]] = elt[eltKeys[i]]
  }

  return tmp
}

module.exports.controller = controller
