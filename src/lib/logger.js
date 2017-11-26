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
console.log = (...args) => { return args[0] !== undefined ? logger.info.call(logger, ...args) : logger.info.call(logger, ['undefined']) }
console.info = (...args) => { return args[0] !== undefined ? logger.info.call(logger, ...args) : logger.info.call(logger, ['undefined']) }
console.warn = (...args) => { return args[0] !== undefined ? logger.warn.call(logger, ...args) : logger.info.warn(logger, ['undefined']) }
console.error = (...args) => { return args[0] !== undefined ? logger.error.call(logger, ...args) : logger.info.error(logger, ['undefined']) }
console.debug = (...args) => { return args[0] !== undefined ? logger.debug.call(logger, ...args) : logger.debug.error(logger, ['undefined']) }

module.exports = function () {
}
