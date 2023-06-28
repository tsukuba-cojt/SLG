import { DmxFrame } from '@nandenjin/alien-core'
import { Preset } from '.'
import { UNIVERSE as U, addrs } from '../consts'

export const renderGround = (d: DmxFrame, w: number
  // , a: number, b: number
) => {
  d.set(U, addrs.SUS_1_L, w)
  d.set(U, addrs.SUS_1_R, w)
  d.set(U, addrs.SUS_1_S, w)
  d.set(U, addrs.SUS_2, w)
  d.set(U, addrs.SUS_3, w)
  d.set(U, addrs.SUS_4_L, w)
  d.set(U, addrs.SUS_4_R, w)
  d.set(U, addrs.SUS_4_S, w)
  // d.set(U, addrs.SUS_A_1L, a)
  // d.set(U, addrs.SUS_A_1R, a)
  // d.set(U, addrs.SUS_A_2L, a)
  // d.set(U, addrs.SUS_A_2R, a)
  // d.set(U, addrs.SUS_B_1L, b)
  // d.set(U, addrs.SUS_B_1R, b)
  // d.set(U, addrs.SUS_B_2L, b)
  // d.set(U, addrs.SUS_B_2R, b)
}

export const GROUND_W = 'ground.w',
  GROUND_A = 'ground.a',
  GROUND_B = 'ground.b',
  GROUND_LA = 'ground.la',
  GROUND_LB = 'ground.lb',
  GROUND_WARM = 'ground.warm',
  GROUND_COOL = 'ground.col'

export const ground: Preset[] = [
  {
    id: GROUND_W,
    render(d, _, s = 255) {
      renderGround(d, s
        // , s * 0.0, s
      )
    },
  },
  {
    id: GROUND_A,
    render(d, _, s = 255) {
      renderGround(d, s)
    },
  },
  {
    id: GROUND_B,
    render(d, _, s = 120) {
      renderGround(d, s)
    },
  },
  {
    id: GROUND_LA,
    render(d, _, s = 255) {
      renderGround(d, s)
    },
  },
  {
    id: GROUND_LB,
    render(d, _, s = 255) {
      renderGround(d, s)
    },
  },
  {
    id: GROUND_WARM,
    render(d, _, s = 255) {
      renderGround(d, s)
    },
  },
  {
    id: GROUND_COOL,
    render(d, _, s = 255) {
      renderGround(d, s)
    },
  },
]
