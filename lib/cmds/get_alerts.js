'use strict'

const send = require('../wss/send')

module.exports = async (ds, ws, msg) => {
  // NOTE: 'type' is currently unused, but will be used to differentiate between
  //        funding & normal trades
  const [, symbol,, from, to] = msg
  const { db } = ds
  const { Alert } = db

  const alerts = await Alert.getInRange([['symbol', '=', symbol]], {
    key: 'mts',
    start: from,
    end: to
  })

  send(ws, ['data.alerts', symbol, from, to, alerts])

  return trades
}
