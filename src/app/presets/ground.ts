// import { DmxFrame } from '@nandenjin/alien-core'
// import { Preset } from '.'
// import { UNIVERSE as U, addrs } from '../consts'
// import { renderPreset } from '..'
// import { sin } from '../lib'

// export const renderGround = (d: DmxFrame, w: number, a: number, b: number) => {
//   d.set(U, addrs.SUS1_1, w)
//   d.set(U, addrs.SUS1_2, w)
//   d.set(U, addrs.SUS1_3, w)
//   d.set(U, addrs.SUS1_4, w)
//   d.set(U, addrs.SUS1_5, w)
//   d.set(U, addrs.SUS2_1, a)
//   d.set(U, addrs.SUS2_2, a)
//   d.set(U, addrs.SUS2_3, a)
//   d.set(U, addrs.SUS3_1, b)
//   d.set(U, addrs.SUS3_2, b)
// }

// export const GROUND_BASE = 'ground.base',
//   GROUND_KOBITO = 'ground.kobito',
//   GROUND_ANOMITI = 'ground.anomiti',
//   GROUND_KENBAN = 'ground.kenban',
//   GROUND_KENBAN2 = 'ground.kenban2',
//   GROUND_OFF = 'ground.off',
//   GROUND_KAKASHI = 'ground.kakashi',
//   GROUND_LIONMAE = 'ground.lionmae',
//   GROUND_LION = 'ground.lion',
//   GROUND_L = 'ground.l',
//   GROUND_R = 'ground.r',
//   GROUND_SUS2 = 'ground.sus2',
//   GROUND_SUS3 = 'ground.sus3',
//   GROUND_KATEKO = 'ground.kateko',
//   GROUND_TASUMAKI_CHASE1 = 'ground.tatsumaki.chase1',
//   GROUND_TASUMAKI_CHASE2 = 'ground.tatsumaki.chase2',
//   GROUND_TASUMAKI_CHASE3 = 'ground.tatsumaki.chase3'

// // GROUND_W = 'ground.w',
// //   GROUND_A = 'ground.a',
// //   GROUND_B = 'ground.b',
// //   GROUND_LA = 'ground.la',
// //   GROUND_LB = 'ground.lb',
// //   GROUND_WARM = 'ground.warm',
// //   GROUND_COOL = 'ground.col'

// export const ground: Preset[] = [
//   {
//     id: GROUND_BASE,
//     render(d, _, s = 255) {
//       renderGround(d, s * 0.0, s, s)
//     },
//   },
//   {
//     id: GROUND_KOBITO,
//     render(d, _, s = 22) {
//       d.set(U, addrs.SUS2_1, s)
//     },
//   },
//   {
//     id: GROUND_ANOMITI,
//     render(d, _, s = 255) {
//       d.set(U, addrs.anomiti, s)
//     },
//   },
//   {
//     id: GROUND_KENBAN,
//     render(d, _, s = 135, n = 25.5, a = 255) {
//       d.set(U, addrs.SUS1_1, s)
//       d.set(U, addrs.SUS1_2, s)
//       d.set(U, addrs.SUS1_3, s)
//       d.set(U, addrs.SUS1_4, s)
//       d.set(U, addrs.SUS1_5, s)
//       d.set(U, addrs.SUS2_1, n)
//       d.set(U, addrs.SUS2_2, n)
//       d.set(U, addrs.SUS2_3, n)
//       d.set(U, addrs.SUS3_1, n)
//       d.set(U, addrs.SUS3_2, n)
//       d.set(U, addrs.LED_KENBAN_G, a)
//       d.set(U, addrs.LED_KENBAN_DIM, a)
//     },
//   },
//   {
//     id: GROUND_KENBAN2,
//     render(d, _, s = 135, n = 180, a = 255) {
//       d.set(U, addrs.SUS1_1, s)
//       d.set(U, addrs.SUS1_2, s)
//       d.set(U, addrs.SUS1_3, s)
//       d.set(U, addrs.SUS1_4, s)
//       d.set(U, addrs.SUS1_5, s)
//       d.set(U, addrs.SUS2_1, n)
//       d.set(U, addrs.SUS2_2, n)
//       d.set(U, addrs.SUS2_3, n)
//       d.set(U, addrs.SUS3_1, n)
//       d.set(U, addrs.SUS3_2, n)
//     },
//   },
//   {
//     id: GROUND_KAKASHI,
//     render(d, _, s = 255) {
//       d.set(U, addrs.SUS2_1, s)
//       d.set(U, addrs.SUS2_2, s)
//       d.set(U, addrs.SUS2_3, s)
//     },
//   },
//   {
//     id: GROUND_LIONMAE,
//     render(d, _, s = 255) {
//       d.set(U, addrs.SUS2_1, s)
//       d.set(U, addrs.SUS3_2, s)
//       d.set(U, addrs.SUS2_3, s)
//     },
//   },
//   {
//     id: GROUND_LION,
//     render(d, _, s = 255) {
//       d.set(U, addrs.SUS2_2, s)
//       d.set(U, addrs.SUS3_2, s)
//     },
//   },
//   {
//     id: GROUND_R,
//     render(d, _, s = 157.5) {
//       d.set(U, addrs.SUS2_2, s)
//       d.set(U, addrs.SUS2_3, s)
//       d.set(U, addrs.SUS3_2, s)
//     },
//   },
//   {
//     id: GROUND_L,
//     render(d, _, s = 157.5) {
//       d.set(U, addrs.SUS2_2, s)
//       d.set(U, addrs.SUS2_1, s)
//       d.set(U, addrs.SUS3_1, s)
//     },
//   },
//   {
//     id: GROUND_SUS2,
//     render(d, _, s = 135) {
//       d.set(U, addrs.SUS2_1, s)
//       d.set(U, addrs.SUS2_2, s)
//       d.set(U, addrs.SUS2_3, s)
//     },
//   },
//   {
//     id: GROUND_SUS3,
//     render(d, _, s = 255) {
//       d.set(U, addrs.SUS3_1, s)
//       d.set(U, addrs.SUS3_2, s)
//     },
//   },
//   {
//     id: GROUND_KATEKO,
//     render(d, _, s = 180) {
//       d.set(U, addrs.SUS2_2, s)
//       d.set(U, addrs.SUS2_1, s)
//       d.set(U, addrs.SUS3_1, s)
//       d.set(U, addrs.FR, s)
//     },
//   },
//   {
//     id: GROUND_TASUMAKI_CHASE1,
//     render(d, t, n = 10, s = 135) {
//       const nt = (o: number) => (((t * n) / 2 + o) % 4 < 1 ? 135 : 0)
//       d.set(U, addrs.SUS2_1, s)
//       d.set(U, addrs.SUS2_2, s)
//       d.set(U, addrs.SUS2_3, nt(0))
//       d.set(U, addrs.SUS3_1, s)
//       d.set(U, addrs.SUS3_2, s)
//     },
//   },
//   {
//     id: GROUND_TASUMAKI_CHASE2,
//     render(d, t, n = 10, s = 135) {
//       const nt = (o: number) => (((t * n) / 2 + o) % 4 < 1 ? 135 : 0)
//       d.set(U, addrs.SUS2_1, nt(0))
//       d.set(U, addrs.SUS2_2, s)
//       d.set(U, addrs.SUS2_3, nt(0))
//       d.set(U, addrs.SUS3_1, nt(0))
//       d.set(U, addrs.SUS3_2, s)
//     },
//   },
//   {
//     id: GROUND_TASUMAKI_CHASE3,
//     render(d, t, n = 10) {
//       const nt = (o: number) => (((t * n) / 2 + o) % 2 < 1 ? 135 : 0)
//       d.merge(renderPreset(GROUND_BASE, t, nt(0)))
//     },
//   },
//   //   id: GROUND_W,
//   //   render(d, _, s = 255) {
//   //     renderGround(d, s, s * 0.0, s)
//   //   },
//   // },
//   // {
//   //   id: GROUND_A,
//   //   render(d, _, s = 255) {
//   //     renderGround(d, 0, s, 0)
//   //   },
//   // },
//   // {
//   //   id: GROUND_B,
//   //   render(d, _, s = 255) {
//   //     renderGround(d, 0, 0, s)
//   //   },
//   // },
//   // {
//   //   id: GROUND_LA,
//   //   render(d, _, s = 255) {
//   //     renderGround(d, s, s / 2, 0)
//   //   },
//   // },
//   // {
//   //   id: GROUND_LB,
//   //   render(d, _, s = 255) {
//   //     renderGround(d, s / 2, 0, s)
//   //   },
//   // },
//   // {
//   //   id: GROUND_WARM,
//   //   render(d, _, s = 255) {
//   //     renderGround(d, s, s, 200)
//   //   },
//   // },
//   // {
//   //   id: GROUND_COOL,
//   //   render(d, _, s = 255) {
//   //     renderGround(d, s, 200, s)
//   //   },
//   // },
// ]
