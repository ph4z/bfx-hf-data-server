'use strict'

module.exports = async (client, msg) => {

  const { ds } = client
  const { db } = ds
  const { ChartAlerts } = db

  console.log(msg)
  const key = '12345'
  const mts = 123456
  const { data } = msg[3]
  	
  const bt = await ChartAlerts.insert({
    exchange: data.exchange, 
    symbol: data.symbol, 
    tf: data.tf, 
    key: key,
    mts: mts,
    exchangeData: data.exchangeData
  })

}
