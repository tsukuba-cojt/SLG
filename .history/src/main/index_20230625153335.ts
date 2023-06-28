'use strict'

import { createServer } from 'http'
import { resolve } from 'path'
import express from 'express'
import { presets, renderPreset } from '../app/index'
import sequences, { render as renderSequences } from '../app/sequences'
import { DmxFrame } from '@nandenjin/alien-core'
import { Server, Socket } from 'socket.io'
import consola from 'consola'

import store from '../store'
import { MutationPayload } from 'vuex'

// Port for WebUI
const PORT = 8080

const app = express()
app.use(express.static(resolve(__dirname, '../../dist/renderer/')))

const server = createServer(app)
const io = new Server(server)

const sortedPresets = presets.sort((a, b) => a.id.localeCompare(b.id))

store.commit('setPresets', sortedPresets)
store.commit('setSequences', sequences)

const connections: Socket[] = []

// 新規クライアントの接続時処理
io.on('connection', socket => {
  connections.push(socket)
  consola.log(`Client connected: ${socket.id}`)

  // ステートの同期
  socket.emit('commit', { type: 'setPresets', payload: sortedPresets })
  socket.emit('commit', { type: 'setSequences', payload: sequences })
  socket.emit('commit', {
    type: 'setStartTimes',
    payload: store.state.sequences.startTimes,
  })

  // コミットが送信されたら同期する
  // To be implemented: 複数クライアントの操作時にも相互に同期する
  socket.on('commit', ({ type, payload }: MutationPayload) => {
    store.commit(type, payload)
  })

  // 接続解除時の処理
  socket.on('disconnect', () => {
    connections.splice(connections.indexOf(socket), 1)
    consola.log(`Client has gone: ${socket.id}`)
  })
})

const artnet = require('artnet')({
  host: '133.51.115.185',
  sendAll: true,
})
setInterval(() => {
  const base = renderPreset('base')

  const renderedSequences = new DmxFrame()
  renderSequences(store.state.sequences, renderedSequences, base)
  const sequencesFrame = renderedSequences.data[0] || []

  const overrideFrame = store.state.dmx.overrideFrame.data[0] || []

  const renderedPreset = renderPreset(
    store.state.presets.overridePresets || [],
    Date.now() / store.state.sequences.cycle
  )
  const presetsFrame = renderedPreset.data[0] || []

  const dist = new Array(512).fill(0)
  for (let i = 0; i < 512; i++) {
    dist[i] = sequencesFrame[i] !== undefined ? sequencesFrame[i] : dist[i]
    dist[i] = presetsFrame[i] !== undefined ? presetsFrame[i] : dist[i]
    dist[i] = overrideFrame[i] !== undefined ? overrideFrame[i] : dist[i]
  }

  io.emit('commit', { type: 'setFrame', payload: { data: [dist] } })
  store.commit('setFrame', [dist])
  artnet.set(dist)
  // for(let i = 0; i < store.state.dmx.currentFrame.data[0].length; i++) {
  //   dmx.set(i, store.state.dmx.currentFrame.data[0][i])
  // }
}, 50)

server.listen(PORT, () =>
  consola.info('Server ready at http://localhost:' + PORT)
)

export default null
