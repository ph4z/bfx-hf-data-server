'use strict'

const debug = require('debug')('bfx:hf:data-server:cmds:get-datas')
const send = require('../wss/send')

module.exports = async (ds, ws, msg) => {
  const [, exchange, symbol, tf, type, start, end, meta] = msg
  const { db } = ds
  const { ChartAlerts } = db

  const candles = await ChartAlerts.getInRange([
    ['exchange', '=', exchange],
    ['symbol', '=', symbol],
    ['tf', '=', tf]
  ], {
    key: 'mts',
    start,
    end
  }, {
    orderBy: 'mts',
    orderDirection: 'asc'
  })

  debug(
    'responding with %d data for range %d - %d [%s %s]',
    candles.length, start, end, symbol, tf
  )

  send(ws, ['data.data', exchange, symbol, tf, type, start, end, meta, candles])

  return candles
}
