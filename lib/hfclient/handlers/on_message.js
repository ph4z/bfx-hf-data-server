'use strict'

module.exports = async (client, msg) => {

  debug('writing alert %s', msg)
  const { ds } = client
  const { db } = ds
  const { ChartAlerts } = db

  const key = '12345'
  const mts = 123456

  const bt = await ChartAlerts.insert({
    msg.exchange, msg.symbol, msg.tf, key, mts, msg.exchangeData
  })

}
