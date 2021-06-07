'use strict'

const Promise = require('bluebird')
const WSClient = require('./ws_client')
const onMessage = require('./handlers/on_message')

const RECONNECT_INTERVAL_MS = 5 * 1000

module.exports = class APIServerClient extends WSClient {
  constructor ({ url }) {
    super({
      url,
      debugName: 'api',
      reconnectIntervalMS: RECONNECT_INTERVAL_MS,
      msgHandlers: {
        message: onMessage
      }
    })

    this.isOpenCallbacks = {} // see isHostOpen()
  }

  reconnect () {
    this.send(['reconnect'])
  }

}
