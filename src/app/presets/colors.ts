import { Preset } from '.'
import { UNIVERSE as U, addrs, } from '../consts'

export const COLOR_BLUE = 'color.blue',
  COLOR_ORANGE_YELLOW = 'color.orange.yerrow',
  COLOR_YELLOW_ORANGE = 'color.yerrow.orange',
  COLOR_PINKRED = 'color.pinkred',
  COLOR_YELLOW = 'color.yellow',
  COLOR_EMERALD = 'color.emerald',
  COLOR_RED_PURPLE = 'color.red.purple',
  COLOR_WHITE = 'color.white',
  COLOR_RED_WHITE = 'color.red.white',
  COLOR_ORANGE = 'color.orange',
  COLOR_DARK_BLUE = 'color.dark.blue',
  COLOR_PINK = 'color.pink',
  COLOR_RED = 'color.red'
// COLOR_WHITE = 'color.white',
// COLOR_RED = 'color.red',
// COLOR_BLUE = 'color.blue',
// COLOR_GREEN = 'color.green',
// COLOR_PURPLE = 'color.purple',
// COLOR_PINK = 'color.pink',
// COLOR_YELLOW = 'color.yellow',
// COLOR_ORANGE = 'color.orange',
// COLOR_CYAN = 'color.cyan',
// COLOR_CHASE_ROBOT = 'color.chase.robot'
// COLOR_WHITE_MH = 'color.white.mh'


export const colors: Preset[] = [
  {
    id: COLOR_BLUE,
    render(d) {
      d.set(U, addrs.LED_LF_R, 0)
      d.set(U, addrs.LED_RF_R, 0)
      d.set(U, addrs.LED_LR_R, 0)
      d.set(U, addrs.LED_RR_R, 0)
      d.set(U, addrs.LED_LF_G, 0)
      d.set(U, addrs.LED_RF_G, 0)
      d.set(U, addrs.LED_LR_G, 0)
      d.set(U, addrs.LED_RR_G, 0)
      d.set(U, addrs.LED_LF_B, 255)
      d.set(U, addrs.LED_RF_B, 255)
      d.set(U, addrs.LED_LR_B, 255)
      d.set(U, addrs.LED_RR_B, 255)
    },
  },
  {
    id: COLOR_YELLOW_ORANGE,
    render(d) {
      d.set(U, addrs.LED_LF_R, 255)
      d.set(U, addrs.LED_RF_R, 255)
      d.set(U, addrs.LED_LR_R, 255)
      d.set(U, addrs.LED_RR_R, 255)
      d.set(U, addrs.LED_LF_G, 255)
      d.set(U, addrs.LED_RF_G, 165)
      d.set(U, addrs.LED_LR_G, 165)
      d.set(U, addrs.LED_RR_G, 255)
      d.set(U, addrs.LED_LF_B, 0)
      d.set(U, addrs.LED_RF_B, 0)
      d.set(U, addrs.LED_LR_B, 0)
      d.set(U, addrs.LED_RR_B, 0)
    },
  },
  {
    id: COLOR_ORANGE_YELLOW,
    render(d) {
      d.set(U, addrs.LED_LF_R, 255)
      d.set(U, addrs.LED_RF_R, 255)
      d.set(U, addrs.LED_LR_R, 255)
      d.set(U, addrs.LED_RR_R, 255)
      d.set(U, addrs.LED_LF_G, 194)
      d.set(U, addrs.LED_RF_G, 194)
      d.set(U, addrs.LED_LR_G, 194)
      d.set(U, addrs.LED_RR_G, 194)
      d.set(U, addrs.LED_LF_B, 0)
      d.set(U, addrs.LED_RF_B, 0)
      d.set(U, addrs.LED_LR_B, 0)
      d.set(U, addrs.LED_RR_B, 0)
    },
  },
  {
    id: COLOR_PINKRED,
    render(d) {
      d.set(U, addrs.LED_LF_R, 199)
      d.set(U, addrs.LED_RF_R, 199)
      d.set(U, addrs.LED_LR_R, 199)
      d.set(U, addrs.LED_RR_R, 199)
      d.set(U, addrs.LED_LF_G, 21)
      d.set(U, addrs.LED_RF_G, 21)
      d.set(U, addrs.LED_LR_G, 12)
      d.set(U, addrs.LED_RR_G, 12)
      d.set(U, addrs.LED_LF_B, 113)
      d.set(U, addrs.LED_RF_B, 113)
      d.set(U, addrs.LED_LR_B, 113)
      d.set(U, addrs.LED_RR_B, 113)
    },
  },
  {
    id: COLOR_YELLOW,
    render(d) {
      d.set(U, addrs.LED_LF_R, 255)
      d.set(U, addrs.LED_RF_R, 255)
      d.set(U, addrs.LED_LR_R, 255)
      d.set(U, addrs.LED_RR_R, 255)
      d.set(U, addrs.LED_LF_G, 255)
      d.set(U, addrs.LED_RF_G, 255)
      d.set(U, addrs.LED_LR_G, 255)
      d.set(U, addrs.LED_RR_G, 255)
      d.set(U, addrs.LED_LF_B, 0)
      d.set(U, addrs.LED_RF_B, 0)
      d.set(U, addrs.LED_LR_B, 0)
      d.set(U, addrs.LED_RR_B, 0)
    },
  },
  {
    id: COLOR_EMERALD,
    render(d) {
      d.set(U, addrs.LED_LF_R, 0)
      d.set(U, addrs.LED_RF_R, 0)
      d.set(U, addrs.LED_LR_R, 0)
      d.set(U, addrs.LED_RR_R, 0)
      d.set(U, addrs.LED_LF_G, 255)
      d.set(U, addrs.LED_RF_G, 255)
      d.set(U, addrs.LED_LR_G, 255)
      d.set(U, addrs.LED_RR_G, 255)
      d.set(U, addrs.LED_LF_B, 50)
      d.set(U, addrs.LED_RF_B, 50)
      d.set(U, addrs.LED_LR_B, 50)
      d.set(U, addrs.LED_RR_B, 50)
    },
  },
  {
    id: COLOR_RED_PURPLE,
    render(d) {
      d.set(U, addrs.LED_LF_R, 255)
      d.set(U, addrs.LED_RF_R, 255)
      d.set(U, addrs.LED_LR_R, 135)
      d.set(U, addrs.LED_RR_R, 135)
      d.set(U, addrs.LED_LF_G, 0)
      d.set(U, addrs.LED_RF_G, 0)
      d.set(U, addrs.LED_LR_G, 0)
      d.set(U, addrs.LED_RR_G, 0)
      d.set(U, addrs.LED_LF_B, 0)
      d.set(U, addrs.LED_RF_B, 0)
      d.set(U, addrs.LED_LR_B, 255)
      d.set(U, addrs.LED_RR_B, 255)
    },
  },
  {
    id: COLOR_WHITE,
    render(d) {
      d.set(U, addrs.LED_LF_R, 255)
      d.set(U, addrs.LED_RF_R, 255)
      d.set(U, addrs.LED_LR_R, 255)
      d.set(U, addrs.LED_RR_R, 255)
      d.set(U, addrs.LED_LF_G, 255)
      d.set(U, addrs.LED_RF_G, 255)
      d.set(U, addrs.LED_LR_G, 255)
      d.set(U, addrs.LED_RR_G, 255)
      d.set(U, addrs.LED_LF_B, 255)
      d.set(U, addrs.LED_RF_B, 255)
      d.set(U, addrs.LED_LR_B, 255)
      d.set(U, addrs.LED_RR_B, 255)
    },
  },
  {
    id: COLOR_RED_WHITE,
    render(d) {
      d.set(U, addrs.LED_LF_R, 255)
      d.set(U, addrs.LED_RF_R, 255)
      d.set(U, addrs.LED_LR_R, 255)
      d.set(U, addrs.LED_RR_R, 255)
      d.set(U, addrs.LED_LF_G, 0)
      d.set(U, addrs.LED_RF_G, 0)
      d.set(U, addrs.LED_LR_G, 255)
      d.set(U, addrs.LED_RR_G, 255)
      d.set(U, addrs.LED_LF_B, 0)
      d.set(U, addrs.LED_RF_B, 0)
      d.set(U, addrs.LED_LR_B, 255)
      d.set(U, addrs.LED_RR_B, 255)
    },
  },
  {
    id: COLOR_ORANGE,
    render(d) {
      d.set(U, addrs.LED_LF_R, 255)
      d.set(U, addrs.LED_RF_R, 255)
      d.set(U, addrs.LED_LR_R, 255)
      d.set(U, addrs.LED_RR_R, 255)
      d.set(U, addrs.LED_LF_G, 69)
      d.set(U, addrs.LED_RF_G, 69)
      d.set(U, addrs.LED_LR_G, 69)
      d.set(U, addrs.LED_RR_G, 69)
      d.set(U, addrs.LED_LF_B, 0)
      d.set(U, addrs.LED_RF_B, 0)
      d.set(U, addrs.LED_LR_B, 0)
      d.set(U, addrs.LED_RR_B, 0)
    },
  },
  {
    id: COLOR_DARK_BLUE,
    render(d) {
      d.set(U, addrs.LED_LF_R, 75)
      d.set(U, addrs.LED_RF_R, 75)
      d.set(U, addrs.LED_LR_R, 75)
      d.set(U, addrs.LED_RR_R, 75)
      d.set(U, addrs.LED_LF_G, 0)
      d.set(U, addrs.LED_RF_G, 0)
      d.set(U, addrs.LED_LR_G, 0)
      d.set(U, addrs.LED_RR_G, 0)
      d.set(U, addrs.LED_LF_B, 130)
      d.set(U, addrs.LED_RF_B, 130)
      d.set(U, addrs.LED_LR_B, 130)
      d.set(U, addrs.LED_RR_B, 130)
    },
  },
  {
    id: COLOR_PINK,
    render(d) {
      d.set(U, addrs.LED_LF_R, 255)
      d.set(U, addrs.LED_RF_R, 255)
      d.set(U, addrs.LED_LR_R, 255)
      d.set(U, addrs.LED_RR_R, 255)
      d.set(U, addrs.LED_LF_G, 0)
      d.set(U, addrs.LED_RF_G, 0)
      d.set(U, addrs.LED_LR_G, 0)
      d.set(U, addrs.LED_RR_G, 0)
      d.set(U, addrs.LED_LF_B, 255)
      d.set(U, addrs.LED_RF_B, 255)
      d.set(U, addrs.LED_LR_B, 255)
      d.set(U, addrs.LED_RR_B, 255)
    },
  },
  {
    id: COLOR_RED,
    render(d) {
      d.set(U, addrs.LED_LF_R, 255)
      d.set(U, addrs.LED_RF_R, 255)
      d.set(U, addrs.LED_LR_R, 255)
      d.set(U, addrs.LED_RR_R, 255)
      d.set(U, addrs.LED_LF_G, 0)
      d.set(U, addrs.LED_RF_G, 0)
      d.set(U, addrs.LED_LR_G, 0)
      d.set(U, addrs.LED_RR_G, 0)
      d.set(U, addrs.LED_LF_B, 0)
      d.set(U, addrs.LED_RF_B, 0)
      d.set(U, addrs.LED_LR_B, 0)
      d.set(U, addrs.LED_RR_B, 0)
    },
  },
  // {
  //   id: COLOR_WHITE_MH,
  //   render(d) {
  //     d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_W)
  //     d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_W)
  //     d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_W)
  //     d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_W)
  //   },
  // },
  // {
  //   id: COLOR_WHITE,
  //   extends: [COLOR_WHITE_MH],
  //   render(d) {
  //     d.set(U, addrs.LED_1_R, 255)
  //     d.set(U, addrs.LED_2_R, 255)
  //     d.set(U, addrs.LED_3_R, 255)
  //     d.set(U, addrs.LED_4_R, 255)
  //     d.set(U, addrs.LED_1_G, 255)
  //     d.set(U, addrs.LED_2_G, 255)
  //     d.set(U, addrs.LED_3_G, 255)
  //     d.set(U, addrs.LED_4_G, 255)
  //     d.set(U, addrs.LED_1_B, 255)
  //     d.set(U, addrs.LED_2_B, 255)
  //     d.set(U, addrs.LED_3_B, 255)
  //     d.set(U, addrs.LED_4_B, 255)
  //   },
  // },
  // {
  //   id: COLOR_RED,
  //   render(d) {
  //     d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_R)
  //     d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_R)
  //     d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_R)
  //     d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_R)
  //     d.set(U, addrs.LED_1_R, 255)
  //     d.set(U, addrs.LED_2_R, 255)
  //     d.set(U, addrs.LED_3_R, 255)
  //     d.set(U, addrs.LED_4_R, 255)
  //   },
  // },
  // {
  //   id: COLOR_BLUE,
  //   render(d) {
  //     d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_B)
  //     d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_B)
  //     d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_B)
  //     d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_B)
  //     d.set(U, addrs.LED_1_B, 255)
  //     d.set(U, addrs.LED_2_B, 255)
  //     d.set(U, addrs.LED_3_B, 255)
  //     d.set(U, addrs.LED_4_B, 255)
  //   },
  // },
  // {
  //   id: COLOR_GREEN,
  //   render(d) {
  //     d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_G)
  //     d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_G)
  //     d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_G)
  //     d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_G)
  //     d.set(U, addrs.LED_1_G, 255)
  //     d.set(U, addrs.LED_2_G, 255)
  //     d.set(U, addrs.LED_3_G, 255)
  //     d.set(U, addrs.LED_4_G, 255)
  //   },
  // },
  // {
  //   id: COLOR_PURPLE,
  //   render(d) {
  //     d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_PURPLE)
  //     d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_PURPLE)
  //     d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_PURPLE)
  //     d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_PURPLE)
  //     d.set(U, addrs.LED_1_R, 200)
  //     d.set(U, addrs.LED_2_R, 200)
  //     d.set(U, addrs.LED_3_R, 200)
  //     d.set(U, addrs.LED_4_R, 200)
  //     d.set(U, addrs.LED_1_B, 255)
  //     d.set(U, addrs.LED_2_B, 255)
  //     d.set(U, addrs.LED_3_B, 255)
  //     d.set(U, addrs.LED_4_B, 255)
  //   },
  // },
  // {
  //   id: COLOR_PINK,
  //   render(d) {
  //     d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_PINK)
  //     d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_PINK)
  //     d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_PINK)
  //     d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_PINK)
  //     d.set(U, addrs.LED_1_R, 255)
  //     d.set(U, addrs.LED_2_R, 255)
  //     d.set(U, addrs.LED_3_R, 255)
  //     d.set(U, addrs.LED_4_R, 255)
  //     d.set(U, addrs.LED_1_G, 127)
  //     d.set(U, addrs.LED_2_G, 127)
  //     d.set(U, addrs.LED_3_G, 127)
  //     d.set(U, addrs.LED_4_G, 127)
  //     d.set(U, addrs.LED_1_B, 255)
  //     d.set(U, addrs.LED_2_B, 255)
  //     d.set(U, addrs.LED_3_B, 255)
  //     d.set(U, addrs.LED_4_B, 255)
  //   },
  // },
  // {
  //   id: COLOR_YELLOW,
  //   render(d) {
  //     d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_Y)
  //     d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_Y)
  //     d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_Y)
  //     d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_Y)
  //     d.set(U, addrs.LED_1_R, 255)
  //     d.set(U, addrs.LED_2_R, 255)
  //     d.set(U, addrs.LED_3_R, 255)
  //     d.set(U, addrs.LED_4_R, 255)
  //     d.set(U, addrs.LED_1_G, 255)
  //     d.set(U, addrs.LED_2_G, 255)
  //     d.set(U, addrs.LED_3_G, 255)
  //     d.set(U, addrs.LED_4_G, 255)
  //   },
  // },
  // {
  //   id: COLOR_ORANGE,
  //   render(d) {
  //     d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_R)
  //     d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_R)
  //     d.set(U, addrs.MARTIN_L_COLOR_2, vals.MARTIN_COLOR2_Y)
  //     d.set(U, addrs.MARTIN_R_COLOR_2, vals.MARTIN_COLOR2_Y)
  //     d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_A)
  //     d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_A)
  //     d.set(U, addrs.LED_1_R, 255)
  //     d.set(U, addrs.LED_2_R, 255)
  //     d.set(U, addrs.LED_3_R, 255)
  //     d.set(U, addrs.LED_4_R, 255)
  //     d.set(U, addrs.LED_1_G, 127)
  //     d.set(U, addrs.LED_2_G, 127)
  //     d.set(U, addrs.LED_3_G, 127)
  //     d.set(U, addrs.LED_4_G, 127)
  //   },
  // },
  // {
  //   id: COLOR_CYAN,
  //   render(d) {
  //     d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_B)
  //     d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_B)
  //     d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_B)
  //     d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_B)
  //     d.set(U, addrs.LED_1_B, 255)
  //     d.set(U, addrs.LED_2_B, 255)
  //     d.set(U, addrs.LED_3_B, 255)
  //     d.set(U, addrs.LED_4_B, 255)
  //     d.set(U, addrs.LED_1_G, 255)
  //     d.set(U, addrs.LED_2_G, 255)
  //     d.set(U, addrs.LED_3_G, 255)
  //     d.set(U, addrs.LED_4_G, 255)
  //   },
  // },
  //   {
  //     id: COLOR_CHASE_ROBOT,
  // render(d, t, n = 1) {

  //   const nt = (o: number) => (((t * n) / 2 + o) % 4 < 1 ? 255 : 0)
  //       d.set(U, addrs.LED_LF_R, nt(0 / 4))
  //       d.set(U, addrs.LED_RF_R, 0)
  //       d.set(U, addrs.LED_LR_R, 0)
  //       d.set(U, addrs.LED_RR_R, 0)
  //       d.set(U, addrs.LED_LF_G, 0)
  //       d.set(U, addrs.LED_RF_G, 0)
  //       d.set(U, addrs.LED_LR_G, 0)
  //       d.set(U, addrs.LED_RR_G, 0)
  //       d.set(U, addrs.LED_LF_B, 0)
  //       d.set(U, addrs.LED_RF_B, 0)
  //       d.set(U, addrs.LED_LR_B, 0)
  //       d.set(U, addrs.LED_RR_B, 0)
  //     },
  // },
]
