const { Router } = require('express')
const uuidv4 = require('uuid/v4');
var router = Router()

var controller = (app) => {
  // create/update (Should not exists in our case, but.. whatever)
  router.post('/', (req, res, next) => {

    var account = {
      'id': 1, // not really used. It's returned when inserting
      'accountId': req.body.userName, 
      'channelId': req.body.channel, 
      'active': false, // Activated using the chatbot
      'activationCode': uuidv4()
    }
    app.dbContext.register.add(account).then(data => {
      console.debug(`Post Complete, new Id: ${data}`)
      account.id = data
      res.json(account)
      next()
    }).catch(err => {
      console.error(`Error while inserting: ${err}`)
      res.error(err)
      next()
    })
  })

  router.post('/activate', (req, res, next) => {
    if (!req.query.id) {
      res.error("Missing the id (I know, shouldn't be there, but usefull for now)")
    } else if (!req.query.code) {
      res.error("Missing the code")
    }

    // Todo Do some validation and activate
    // Should normally be done through the socket and not via the API
    res.json({ ok:true })
    next()
  })
  
  return router
}

module.exports.controller = controller
