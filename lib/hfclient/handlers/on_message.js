'use strict'

const debug = require('debug')('bfx:hf:data-server:wsclient')

module.exports = async (client, msg) => {

  const { ds } = client
  const { db } = ds
  const { ChartAlerts } = db

  const mts = Date.now()
  const data  = msg[3]


  if (msg[2] == 'chartalerts') {
    debug('recv alert: %s', msg)
    await ChartAlerts.insert({
      exchange: data.exchange, 
      symbol: data.symbol, 
      tf: data.tf, 
      key: `${data.exchange}-${data.symbol}-${data.tf}-${mts}`,
      mts: mts,
      exchangeData: data.exchangedata
    })
  }

}
