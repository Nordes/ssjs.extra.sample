const { createLogger, format, transports } = require('winston')
const { combine, timestamp, printf } = format

const myFormat = printf(info => {
  return `${info.timestamp} [${info.level}]: ${info.message}`
})

const logger = createLogger({
  format: combine(
    format.colorize({ label: true }),
    timestamp(),
    myFormat
  ),
  transports: [new transports.Console({
    level: 'debug', // app.settings.logLevel, // TODO should use the config
    colorize: true
  })]
})

/* eslint no-useless-call: 0 */
console.log = (...args) => logger.info.call(logger, ...args)
console.info = (...args) => logger.info.call(logger, ...args)
console.warn = (...args) => logger.warn.call(logger, ...args)
console.error = (...args) => logger.error.call(logger, ...args)
console.debug = (...args) => logger.debug.call(logger, ...args)

module.exports = function () {
}
