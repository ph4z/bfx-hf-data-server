'use strict'

module.exports = async (client, msg) => {

  const { ds } = client
  const { db } = ds
  const { ChartAlerts } = db

  const key = '12345'
  const mts = 123456
  const data  = msg[3]
  console.log(data)

  const bt = await ChartAlerts.insert({
    exchange: data.exchange, 
    symbol: data.symbol, 
    tf: data.tf, 
    key: key,
    mts: mts,
    exchangeData: data.exchangedata
  })

}
