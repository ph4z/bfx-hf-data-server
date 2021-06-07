'use strict'

module.exports = async (client, msg) => {

  const { ds } = client
  const { db } = ds
  const { ChartAlerts } = db
binance-BTCUSDT-1m-1622756760000

  const mts = Date.now()
  const data  = msg[3]

  console.log(data)

  const key = [ data.exchange, data.symbol, data.tf, mts ].join('-')

  const bt = await ChartAlerts.insert({
    exchange: data.exchange, 
    symbol: data.symbol, 
    tf: data.tf, 
    key: key,
    mts: mts,
    exchangeData: data.exchangedata
  })

}
