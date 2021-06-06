'use strict'

const debug = require('debug')('bfx:hf:data-server:cmds:submit-alert')
// const _isFinite = require('lodash/isFinite')

// const ERRORS = require('../errors')
// const send = require('../wss/send')
// const sendError = require('../wss/send_error')

module.exports = async (ds, ws, msg) => {
  const [
    btID, strategyID, indicators, trades, symbol, tf, from, to
  ] = msg[1]

  const { db } = ds
  const { chartalerts } = db

  if (!_isFinite(btID)) {
    return sendError(ws, ERRORS.BACKTEST.BT_ID_REQUIRED)
  } else if (!_isFinite(strategyID)) {
    return sendError(ws, ERRORS.BACKTEST.ST_ID_REQUIRED)
  }

  debug('writing alert %s', btID)

  const bt = await chartalert.create({
    exchange, symbol, tf, key, mts, exchangeData
  })

  // send(ws, ['data.bt', bt])
}
