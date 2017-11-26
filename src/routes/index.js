var path = require('path')
var express = require('express')
var fs = require('fs')

// load all routes except index (of course)
module.exports = function (app) {

  fs.readdirSync(__dirname + '/').forEach(function (file) {
    if(path.extname(file) === '.js' && file !== 'index.js') {
        var route = require('./' + file);
        console.debug(`Adding route /api/${file.slice(0, -3)}`)
        app.use("/api/" + file.slice(0, -3), route.controller(app)) // Should generate /api/myRoute 
    }
  });

  // add the public route
  app.use(express.static(path.join(__dirname, '../../public')));
}
