'use strict'

module.exports = async (client, msg) => {

  const { ds } = client
  const { db } = ds
  const { ChartAlerts } = db

  const key = '12345'
  const mts = 123456
  console.log(msg)
  const bt = await ChartAlerts.insert({
    exchange: msg.exchange, 
    symbol: msg.symbol, 
    tf: msg.tf, 
    key: key,
    mts: mts,
    exchangeData: msg.exchangeData
  })

}
