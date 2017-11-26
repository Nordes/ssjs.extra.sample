require('./lib/logger')()
var express = require('express')
var config = require('../config')
var routeBuilder = require('./routes')
var dbContext = require('./database')
var bodyParser = require('body-parser')

const app = express();
const PORT = process.env.PORT || config.env.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.dbContext = dbContext(app)
routeBuilder(app)

app.listen(PORT, () => {
  console.log(`🚀===>Express running on port ${PORT}`);
});
