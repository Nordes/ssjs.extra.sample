var socketIO = require('socket.io')

var serveIO = (http) => {
  var io = socketIO(http)

  // import the other stuff.
}

module.exports = serveIO
