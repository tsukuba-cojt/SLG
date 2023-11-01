import { Preset } from '.'
import { UNIVERSE as U, addrs } from '../consts'
import { sin } from '../lib'
export const 
LED_ON_D = 'led.ond',
LED_90_D = 'led.90d',
LED_80_D = 'led.80d',
LED_75_D = 'led.75d',
LED_70_D = 'led.70d',
LED_60_D = 'led.60d',
LED_50_D = 'led.50d',
LED_30_D = 'led.30d',
LED_20_D = 'led.20d',
LED_ON_O = 'led.on',
LED_90_O = 'led.90',
LED_80_O = 'led.80',
LED_75_O = 'led.75',
LED_70_O = 'led.70',
LED_60_O = 'led.60',
LED_50_O = 'led.50',
LED_30_O = 'led.30',
LED_20_O = 'led.20'





export const led: Preset[] = [
  {
    id: LED_ON_D,
    render(d, _, s = 255) {
      d.set(U, addrs.LED_D_DIM, s)
    },
  },
  {
    id: LED_ON_O,
    render(d, _, s = 255) {
      d.set(U, addrs.LED_O_DIM, s)
    },
  },
  {
    id: LED_90_D,
    render(d, _, s = 202.5) {
      d.set(U, addrs.LED_D_DIM, s)
    },
  },
  {
    id: LED_90_O,
    render(d, _, s = 202.5) {
      d.set(U, addrs.LED_O_DIM, s)
    },
  },
  {
    id: LED_80_D,
    render(d, _, s = 180) {
      d.set(U, addrs.LED_D_DIM, s)
    },
  },
  {
    id: LED_80_O,
    render(d, _, s = 180) {
      d.set(U, addrs.LED_O_DIM, s)
    },
  },
  {
    id: LED_75_D,
    render(d, _, s = 168.75) {
      d.set(U, addrs.LED_D_DIM, s)
    },
  },
  {
    id: LED_75_O,
    render(d, _, s = 168.75) {
      d.set(U, addrs.LED_O_DIM, s)
    },
  },
  {
    id: LED_70_D,
    render(d, _, s = 157.5) {
      d.set(U, addrs.LED_D_DIM, s)
    },
  },
  {
    id: LED_70_O,
    render(d, _, s = 157.5) {
      d.set(U, addrs.LED_O_DIM, s)
    },
  },
  {
    id: LED_60_D,
    render(d, _, s = 135) {
      d.set(U, addrs.LED_D_DIM, s)
    },
  },
  {
    id: LED_60_O,
    render(d, _, s = 135) {
      d.set(U, addrs.LED_O_DIM, s)
    },
  },
  {
    id: LED_50_D,
    render(d, _, s = 127.5) {
      d.set(U, addrs.LED_O_DIM, s)
    },
  },
  {
    id: LED_50_O,
    render(d, _, s = 127.5) {
      d.set(U, addrs.LED_O_DIM, s)
    },
  },
  {
    id: LED_30_D,
    render(d, _, s = 67.5) {
      d.set(U, addrs.LED_D_DIM, s)
    },
  },
  {
    id: LED_30_O,
    render(d, _, s = 67.5) {
      d.set(U, addrs.LED_O_DIM, s)
    },
  },
  {
    id: LED_20_D,
    render(d, _, s = 45) {
      d.set(U, addrs.LED_D_DIM, s)
    },
  },
  {
    id: LED_20_O,
    render(d, _, s = 45) {
      d.set(U, addrs.LED_O_DIM, s)
    },
  },
  // {
  //   id: LED_CHASE_ROBOT,
  //   render(d, t, n = 1) {
  //     const nt = (o: number) => (((t * 2 * n) / 2 + o) % 4 < 1 ? 255 : 0)
  //     d.set(U, addrs.LED_LF_DIM, nt(3))
  //     d.set(U, addrs.LED_RF_DIM, nt(1))
  //     d.set(U, addrs.LED_LR_DIM, nt(1))
  //     d.set(U, addrs.LED_RR_DIM, nt(3))
  //   },
  // },
  // {
  //   id: LED_SINWAVE,
  //   render(d, t, n = 1, min = 0, max = 255) {
  //     const nt = (o: number) => ((t + o) * n) / 2
  //     d.set(U, addrs.LED_LF_DIM, sin(nt(0 / 4), min, max))
  //     d.set(U, addrs.LED_LR_DIM, sin(nt(0 / 4), min, max))
  //     d.set(U, addrs.LED_RF_DIM, sin(nt(0 / 4), min, max))
  //     d.set(U, addrs.LED_RR_DIM, sin(nt(0 / 4), min, max))
  //   },
  // },
]
