'use strict'

const debug = require('debug')('bfx:hf:data-server:cmds:submit-alert')
// const _isFinite = require('lodash/isFinite')

// const ERRORS = require('../errors')
// const send = require('../wss/send')
// const sendError = require('../wss/send_error')

module.exports = async (ds, ws, msg) => {
  const [
    exchange, symbol, tf, key, exchangeData
  ] = msg[1]

  const { db } = ds
  const { ChartAlerts } = db

  debug('writing alert %s', msg)

  const bt = await ChartAlerts.insert({
    exchange, symbol, tf, key, mts, exchangeData
  })

  // send(ws, ['data.bt', bt])
}
