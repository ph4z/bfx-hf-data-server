'use strict'

const debug = require('debug')('bfx:hf:data-server:wsclient')

module.exports = async (client, msg) => {

  const { ds } = client
  const { db } = ds
  const { ChartAlerts } = db

  const mts = Date.now()
  const data  = msg[3]


  switch (msg[2]) {
    case 'chartalerts': {
      debug('recv alert: %s', msg)
      await ChartAlerts.insert({
        exchange: data.exchange, 
        symbol: data.symbol, 
        tf: data.tf, 
        key: `${data.exchange}-${data.symbol}-${data.tf}-${mts}`,
        mts: mts,
        exchangeData: data.exchangedata
      })
      break
    }
    case 'news': {
      debug('recv news: %s', msg)
      break
    }

  }

}
