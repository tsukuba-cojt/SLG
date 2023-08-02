import { Preset } from '.'
import { UNIVERSE as U, addrs } from '../consts'
import { sin } from '../lib'
export const LED_ON = 'led.on',
  LED_LOW = 'led.low',
  LED_HALF_M5 = 'led.half.m5',
  LED_LF = 'led.lf',
  LED_RF = 'led.rf',
  LED_LR = 'led.lr',
  LED_RR = 'led.rr',
  LED_CHASE_ROBOT = 'led.chase.robot',
  LED_CHASE_DOROTHY = 'led.chase.dorothy',
  LED_ZNEGO_M8 = 'led.zengo.m8',
  LED_ZNEGO2_M8 = 'led.zengo2.m8',
  LED_SINWAVE = 'led.simwave',
  LED_SINWAVE2 = 'led.simwave2',
  LED_SINWAVE3 = 'led.simwave3'

export const led: Preset[] = [
  {
    id: LED_ON,
    render(d, _, s = 255) {
      d.set(U, addrs.LED_LF_DIM, s)
      d.set(U, addrs.LED_RF_DIM, s)
      d.set(U, addrs.LED_LR_DIM, s)
      d.set(U, addrs.LED_RR_DIM, s)
      d.set(U, addrs.LED_LF_DIMA, s)
    },
  },
  {
    id: LED_LOW,
    render(d, _, s = 77) {
      d.set(U, addrs.LED_LF_DIM, s)
      d.set(U, addrs.LED_RF_DIM, s)
      d.set(U, addrs.LED_LR_DIM, s)
      d.set(U, addrs.LED_RR_DIM, s)
    },
  },
  {
    id: LED_HALF_M5,
    render(d, _, s = 127.5, n = 255) {
      d.set(U, addrs.LED_LF_DIM, s)
      d.set(U, addrs.LED_RF_DIM, s)
      d.set(U, addrs.LED_LR_DIM, n)
      d.set(U, addrs.LED_RR_DIM, n)
    },
  },
  {
    id: LED_LF,
    render(d, _, s = 255) {
      d.set(U, addrs.LED_LF_DIM, s)
    },
  },
  {
    id: LED_RF,
    render(d, _, s = 255) {
      d.set(U, addrs.LED_RF_DIM, s)
    },
  },
  {
    id: LED_LR,
    render(d, _, s = 255) {
      d.set(U, addrs.LED_LR_DIM, s)
    },
  },
  {
    id: LED_RR,
    render(d, _, s = 255) {
      d.set(U, addrs.LED_RR_DIM, s)
    },
  },
  {
    id: LED_CHASE_ROBOT,
    render(d, t, n = 1) {
      const nt = (o: number) => (((t * 2 * n) / 2 + o) % 4 < 1 ? 255 : 0)
      d.set(U, addrs.LED_LF_DIM, nt(3))
      d.set(U, addrs.LED_RF_DIM, nt(1))
      d.set(U, addrs.LED_LR_DIM, nt(1))
      d.set(U, addrs.LED_RR_DIM, nt(3))
    },
  },
  {
    id: LED_CHASE_DOROTHY,
    render(d, t, n = 1) {

      const nt = (o: number) => (((t * n) / 2 + o) % 4 < 1 ? 255 : 0)
      d.set(U, addrs.LED_LF_DIM, nt(3))
      d.set(U, addrs.LED_RF_DIM, nt(1))
      d.set(U, addrs.LED_LR_DIM, nt(1))
      d.set(U, addrs.LED_RR_DIM, nt(3))
    },
  },
  {
    id: LED_ZNEGO_M8,
    render(d, _, s = 90, n = 22.5) {
      d.set(U, addrs.LED_LF_DIM, s)
      d.set(U, addrs.LED_RF_DIM, s)
      d.set(U, addrs.LED_LR_DIM, n)
      d.set(U, addrs.LED_RR_DIM, n)
    },
  },
  {
    id: LED_ZNEGO2_M8,
    render(d, _, s = 255, n = 22.5) {
      d.set(U, addrs.LED_LF_DIM, s)
      d.set(U, addrs.LED_RF_DIM, s)
      d.set(U, addrs.LED_LR_DIM, n)
      d.set(U, addrs.LED_RR_DIM, n)
    },
  },
  {
    id: LED_SINWAVE,
    render(d, t, n = 1, min = 0, max = 255) {
      const nt = (o: number) => ((t + o) * n) / 2
      d.set(U, addrs.LED_LF_DIM, sin(nt(0 / 4), min, max))
      d.set(U, addrs.LED_LF_DIMA, sin(nt(0 / 4), min, max))
      d.set(U, addrs.LED_LR_DIM, sin(nt(0 / 4), min, max))
      d.set(U, addrs.LED_RF_DIM, sin(nt(0 / 4), min, max))
      d.set(U, addrs.LED_RR_DIM, sin(nt(0 / 4), min, max))
    },
  },
  {
    id: LED_SINWAVE2,
    render(d, t, n = 1, min = 0, max = 255) {
      const nt = (o: number) => ((t + o) * n * 2) / 2
      d.set(U, addrs.LED_LF_DIM, sin(nt(3 / 4), min, max))
      d.set(U, addrs.LED_LR_DIM, sin(nt(3 / 4), min, max))
      d.set(U, addrs.LED_RF_DIM, sin(nt(3 / 4), min, max))
      d.set(U, addrs.LED_RR_DIM, sin(nt(3 / 4), min, max))
    },
  },
  {
    id: LED_SINWAVE3,
    render(d, t, n = 1, min = 0, max = 255) {
      const nt = (o: number) => ((t + o) * n * 2) / 2
      d.set(U, addrs.LED_LF_DIM, sin(nt(3 / 4), min, max))
      d.set(U, addrs.LED_LR_DIM, sin(nt(7 / 4), min, max))
      d.set(U, addrs.LED_RF_DIM, sin(nt(3 / 4), min, max))
      d.set(U, addrs.LED_RR_DIM, sin(nt(7 / 4), min, max))
    },
  }
]
