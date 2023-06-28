import { Preset } from '.'
import {
  UNIVERSE as U, addrs,
  //  vals 
} from '../consts'

export const COLOR_WHITE = 'color.white',
  COLOR_RED = 'color.red',
  COLOR_BLUE = 'color.blue',
  COLOR_GREEN = 'color.green',
  COLOR_PURPLE = 'color.purple',
  COLOR_PINK = 'color.pink',
  COLOR_YELLOW = 'color.yellow',
  COLOR_ORANGE = 'color.orange',
  COLOR_CYAN = 'color.cyan',
  COLOR_RAINBOW = 'color.rainbow',
  COLOR_WHITE_MH = 'color.white.mh'

export const colors: Preset[] = [
  // {
  //   id: COLOR_WHITE_MH,
  //   render(d) {
  //     d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_W)
  //     d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_W)
  //     d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_W)
  //     d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_W)
  //   },
  // },
  {
    id: COLOR_WHITE,
    extends: [COLOR_WHITE_MH],
    render(d) {
      d.set(U, addrs.LED_R, 255)
      // d.set(U, addrs.LED_2_R, 255)
      // d.set(U, addrs.LED_3_R, 255)
      // d.set(U, addrs.LED_4_R, 255)
      d.set(U, addrs.LED_G, 255)
      // d.set(U, addrs.LED_2_G, 255)
      // d.set(U, addrs.LED_3_G, 255)
      // d.set(U, addrs.LED_4_G, 255)
      d.set(U, addrs.LED_B, 255)
      // d.set(U, addrs.LED_2_B, 255)
      // d.set(U, addrs.LED_3_B, 255)
      // d.set(U, addrs.LED_4_B, 255)
    },
  },
  {
    id: COLOR_RED,
    render(d) {
      // d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_R)
      // d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_R)
      // d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_R)
      // d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_R)
      d.set(U, addrs.LED_R, 255)
      // d.set(U, addrs.LED_2_R, 255)
      // d.set(U, addrs.LED_3_R, 255)
      // d.set(U, addrs.LED_4_R, 255)
    },
  },
  {
    id: COLOR_BLUE,
    render(d) {
      // d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_B)
      // d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_B)
      // d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_B)
      // d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_B)
      d.set(U, addrs.LED_B, 255)
      // d.set(U, addrs.LED_2_B, 255)
      // d.set(U, addrs.LED_3_B, 255)
      // d.set(U, addrs.LED_4_B, 255)
    },
  },
  {
    id: COLOR_GREEN,
    render(d) {
      // d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_G)
      // d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_G)
      // d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_G)
      // d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_G)
      d.set(U, addrs.LED_G, 255)
      // d.set(U, addrs.LED_2_G, 255)
      // d.set(U, addrs.LED_3_G, 255)
      // d.set(U, addrs.LED_4_G, 255)
    },
  },
  {
    id: COLOR_PURPLE,
    render(d) {
      // d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_PURPLE)
      // d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_PURPLE)
      // d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_PURPLE)
      // d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_PURPLE)
      d.set(U, addrs.LED_R, 200)
      // d.set(U, addrs.LED_2_R, 200)
      // d.set(U, addrs.LED_3_R, 200)
      // d.set(U, addrs.LED_4_R, 200)
      d.set(U, addrs.LED_B, 255)
      // d.set(U, addrs.LED_2_B, 255)
      // d.set(U, addrs.LED_3_B, 255)
      // d.set(U, addrs.LED_4_B, 255)
    },
  },
  {
    id: COLOR_PINK,
    render(d) {
      // d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_PINK)
      // d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_PINK)
      // d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_PINK)
      // d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_PINK)
      d.set(U, addrs.LED_R, 255)
      // d.set(U, addrs.LED_2_R, 255)
      // d.set(U, addrs.LED_3_R, 255)
      // d.set(U, addrs.LED_4_R, 255)
      // d.set(U, addrs.LED_G, 127)
      // d.set(U, addrs.LED_2_G, 127)
      // d.set(U, addrs.LED_3_G, 127)
      // d.set(U, addrs.LED_4_G, 127)
      d.set(U, addrs.LED_B, 255)
      // d.set(U, addrs.LED_2_B, 255)
      // d.set(U, addrs.LED_3_B, 255)
      // d.set(U, addrs.LED_4_B, 255)
    },
  },
  {
    id: COLOR_YELLOW,
    render(d) {
      // d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_Y)
      // d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_Y)
      // d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_Y)
      // d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_Y)
      d.set(U, addrs.LED_R, 255)
      // d.set(U, addrs.LED_2_R, 255)
      // d.set(U, addrs.LED_3_R, 255)
      // d.set(U, addrs.LED_4_R, 255)
      d.set(U, addrs.LED_G, 255)
      // d.set(U, addrs.LED_2_G, 255)
      // d.set(U, addrs.LED_3_G, 255)
      // d.set(U, addrs.LED_4_G, 255)
    },
  },
  {
    id: COLOR_ORANGE,
    render(d) {
      // d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_R)
      // d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_R)
      // d.set(U, addrs.MARTIN_L_COLOR_2, vals.MARTIN_COLOR2_Y)
      // d.set(U, addrs.MARTIN_R_COLOR_2, vals.MARTIN_COLOR2_Y)
      // d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_A)
      // d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_A)
      d.set(U, addrs.LED_R, 255)
      // d.set(U, addrs.LED_2_R, 255)
      // d.set(U, addrs.LED_3_R, 255)
      // d.set(U, addrs.LED_4_R, 255)
      d.set(U, addrs.LED_G, 127)
      // d.set(U, addrs.LED_2_G, 127)
      // d.set(U, addrs.LED_3_G, 127)
      // d.set(U, addrs.LED_4_G, 127)
    },
  },
  {
    id: COLOR_CYAN,
    render(d) {
      // d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_B)
      // d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_B)
      // d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_B)
      // d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_B)
      d.set(U, addrs.LED_B, 255)
      // d.set(U, addrs.LED_2_B, 255)
      // d.set(U, addrs.LED_3_B, 255)
      // d.set(U, addrs.LED_4_B, 255)
      d.set(U, addrs.LED_G, 255)
      // d.set(U, addrs.LED_2_G, 255)
      // d.set(U, addrs.LED_3_G, 255)
      // d.set(U, addrs.LED_4_G, 255)
    },
  },
  {
    id: COLOR_RAINBOW,
    render(d) {
      d.set(U, addrs.LED_G, 255)
      //     d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_STEPPED)
      //     d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_STEPPED)
      //     d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_SCROLL)
      //     d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_SCROLL)

      //     const nt = (o: number) => (((t * n) / 2 + o) % 2 > 1 ? 255 : 0)
      //     d.set(U, addrs.LED_1_R, nt(0 / 4))
      //     d.set(U, addrs.LED_2_R, nt(1 / 4))
      //     d.set(U, addrs.LED_3_R, nt(6 / 4))
      //     d.set(U, addrs.LED_4_R, nt(3 / 4))
      //     d.set(U, addrs.LED_1_G, nt(3 / 4))
      //     d.set(U, addrs.LED_2_G, nt(5 / 4))
      //     d.set(U, addrs.LED_3_G, nt(1 / 4))
      //     d.set(U, addrs.LED_4_G, nt(0 / 4))
      //     d.set(U, addrs.LED_1_B, nt(1 / 4))
      //     d.set(U, addrs.LED_2_B, nt(7 / 4))
      //     d.set(U, addrs.LED_3_B, nt(3 / 4))
      //     d.set(U, addrs.LED_4_B, nt(4 / 4))
    },
  }
  ,
]
