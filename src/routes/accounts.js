const { Router } = require('express')
var router = Router()

var controller = (app) => {
  router.get('/', (req, res, next) => {
    // todo Return the list of all the accounts
    res.json({ok:'sometimes'})
    next()
  })
  
  router.get('/:userId', (req, res, next) => {
    // Todo Returns the details of the account
    res.json({ userId: req.params.userId })

    next()
  })

  return router
}

module.exports.controller = controller
