'use strict'

module.exports = async (client, msg) => {

  const { ds } = client
  const { db } = ds
  const { ChartAlerts } = db

  const mts = Date.now()
  const data  = msg[3]

  console.log(data)

  const key = [ data.exchange, data.symbol, data.tf, mts ].join('-')

  if (msg[2] == 'chartalerts') {
    await ChartAlerts.insert({
      exchange: data.exchange, 
      symbol: data.symbol, 
      tf: data.tf, 
      key: key,
      mts: mts,
      exchangeData: data.exchangedata
    })
  }

}
