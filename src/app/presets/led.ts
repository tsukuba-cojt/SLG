import { Preset } from '.'
import { UNIVERSE as U, addrs } from '../consts'
import { sin } from '../lib'
export const 
LED_ON = 'led.on',
LED_90 = 'led.90',
LED_80 = 'led.80',
LED_75 = 'led.75',
LED_70 = 'led.70',
LED_60 = 'led.60',
LED_30 = 'led.30',
LED_20 = 'led.20'




export const led: Preset[] = [
  {
    id: LED_ON,
    render(d, _, s = 255) {
      d.set(U, addrs.LED_D_DIM, s)
      d.set(U, addrs.LED_O_DIM, s)
    },
  },
  {
    id: LED_90,
    render(d, _, s = 202.5) {
      d.set(U, addrs.LED_D_DIM, s)
      d.set(U, addrs.LED_O_DIM, s)
    },
  },
  {
    id: LED_80,
    render(d, _, s = 180) {
      d.set(U, addrs.LED_D_DIM, s)
      d.set(U, addrs.LED_O_DIM, s)
    },
  },
  {
    id: LED_75,
    render(d, _, s = 168.75) {
      d.set(U, addrs.LED_D_DIM, s)
      d.set(U, addrs.LED_O_DIM, s)
    },
  },
  {
    id: LED_70,
    render(d, _, s = 157.5) {
      d.set(U, addrs.LED_D_DIM, s)
      d.set(U, addrs.LED_O_DIM, s)
    },
  },
  {
    id: LED_60,
    render(d, _, s = 135) {
      d.set(U, addrs.LED_D_DIM, s)
      d.set(U, addrs.LED_O_DIM, s)
    },
  },
  {
    id: LED_30,
    render(d, _, s = 67.5) {
      d.set(U, addrs.LED_D_DIM, s)
      d.set(U, addrs.LED_O_DIM, s)
    },
  },
  {
    id: LED_20,
    render(d, _, s = 45) {
      d.set(U, addrs.LED_D_DIM, s)
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
