import { Preset } from '.'
import { UNIVERSE as U, addrs } from '../consts'
import { sin } from '../lib'

export const LED_ON = 'led.on',
  LED_BLINK = 'led.blink',
  LED_SINWAVE = 'led.sinwave'

export const led: Preset[] = [
  {
    id: LED_ON,
    render(d, _, s = 255) {
      d.set(U, addrs.LED_DIM, s)
      // d.set(U, addrs.LED_2_DIM, s)
      // d.set(U, addrs.LED_3_DIM, s)
      // d.set(U, addrs.LED_4_DIM, s)
    },
  },
  {
    id: LED_BLINK,
    render(d, t, n = 1, s = 255) {
      const nt = (o: number) => (((t * n + o) / 2) % 2 > 1 ? s : 0)
      d.set(U, addrs.LED_DIM, nt(0 / 4))
      // d.set(U, addrs.LED_2_DIM, nt(1 / 4))
      // d.set(U, addrs.LED_3_DIM, nt(2 / 4))
      // d.set(U, addrs.LED_4_DIM, nt(3 / 4))
    },
  },
  {
    id: LED_SINWAVE,
    render(d, t, n = 1, min = 0, max = 255) {
      const nt = (o: number) => ((t + o) * n) / 2
      d.set(U, addrs.LED_DIM, sin(nt(0 / 4), min, max))
      // d.set(U, addrs.LED_2_DIM, sin(nt(1 / 4), min, max))
      // d.set(U, addrs.LED_3_DIM, sin(nt(2 / 4), min, max))
      // d.set(U, addrs.LED_4_DIM, sin(nt(3 / 4), min, max))
    },
  },
]
