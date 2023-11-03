import { Preset } from '.'
import { UNIVERSE as U, addrs, } from '../consts'

export const   
COLOR_RED_D = 'color.red',
COLOR_ORANGE_D = 'color.orange',
COLOR_REDYELLOW_D = 'color.red_yellow',
COLOR_GREENYELLOW_D = 'color.green_yellow',
COLOR_YELLOWGREEN_D = 'color.yellowgreen',
COLOR_GREEN_D = 'color.green',
COLOR_LIGHTBLUE_D = 'color.light_blue',
COLOR_BLUE_D = 'color.blue',
COLOR_BLUEPURPLE_D = 'color.blue_purple',
COLOR_REDPURPLE_D = 'color.red_purple',
COLOR_PINK_D = 'color.pink',
COLOR_WHITE_D = 'color.white',
COLOR_RED_O = 'color.redo',
COLOR_ORANGE_O = 'color.orangeo',
COLOR_REDYELLOW_O = 'color.red_yellowo',
COLOR_GREENYELLOW_O = 'color.green_yellowo',
COLOR_YELLOWGREEN_O = 'color.yellowgreeno',
COLOR_GREEN_O = 'color.greeno',
COLOR_LIGHTBLUE_O = 'color.light_blueo',
COLOR_BLUE_O = 'color.blueo',
COLOR_BLUEPURPLE_O = 'color.blue_purpleo',
COLOR_REDPURPLE_O = 'color.red_purpleo',
COLOR_PINK_O = 'color.pinko',
COLOR_WHITE_O = 'color.whiteo'



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
    id: COLOR_RED_D,
    render(d) {
      d.set(U, addrs.LED_D_R, 255)
      d.set(U, addrs.LED_D_G, 0)
      d.set(U, addrs.LED_D_B, 0)
    },
  },
  {
    id: COLOR_RED_O,
    render(d) {
      d.set(U, addrs.LED_O_R, 255)
      d.set(U, addrs.LED_O_G, 0)
      d.set(U, addrs.LED_O_B, 0)
    },
  },
  {
    id: COLOR_ORANGE_D,
    render(d) {
      d.set(U, addrs.LED_D_R, 255)
      d.set(U, addrs.LED_D_G, 62.5)
      d.set(U, addrs.LED_D_B, 0)
    },
  },
  {
    id: COLOR_ORANGE_O,
    render(d) {
      d.set(U, addrs.LED_O_R, 255)
      d.set(U, addrs.LED_O_G, 25.5)
      d.set(U, addrs.LED_O_B, 0)
    },
  },
  {
    id: COLOR_REDYELLOW_D,
    render(d) {
      d.set(U, addrs.LED_D_R, 255)
      d.set(U, addrs.LED_D_G, 204)
      d.set(U, addrs.LED_D_B, 0)
    },
  },
  {
    id: COLOR_REDYELLOW_O,
    render(d) {
      d.set(U, addrs.LED_O_R, 255)
      d.set(U, addrs.LED_O_G, 127.5)
      d.set(U, addrs.LED_O_B, 0)
    },
  },
  {
    id: COLOR_GREENYELLOW_D,
    render(d) {
      d.set(U, addrs.LED_D_R, 229.5)
      d.set(U, addrs.LED_D_G, 255)
      d.set(U, addrs.LED_D_B, 0)
    },
  },
  {
    id: COLOR_GREENYELLOW_O,
    render(d) {
      d.set(U, addrs.LED_O_R, 255)
      d.set(U, addrs.LED_O_G, 255)
      d.set(U, addrs.LED_O_B, 0)
    },
  },
  {
    id: COLOR_YELLOWGREEN_D,
    render(d) {
      d.set(U, addrs.LED_D_R, 127.5)
      d.set(U, addrs.LED_D_G, 255)
      d.set(U, addrs.LED_D_B, 0)
    },
  },
  {
    id: COLOR_YELLOWGREEN_O,
    render(d) {
      d.set(U, addrs.LED_O_R, 127.5)
      d.set(U, addrs.LED_O_G, 255)
      d.set(U, addrs.LED_O_B, 0)
    },
  },
  {
    id: COLOR_GREEN_D,
    render(d) {
      d.set(U, addrs.LED_D_R, 0)
      d.set(U, addrs.LED_D_G, 255)
      d.set(U, addrs.LED_D_B, 0)
    },
  },
  {
    id: COLOR_GREEN_O,
    render(d) {
      d.set(U, addrs.LED_O_R, 0)
      d.set(U, addrs.LED_O_G, 255)
      d.set(U, addrs.LED_O_B, 0)
    },
  },
  {
    id: COLOR_LIGHTBLUE_D,
    render(d) {
      d.set(U, addrs.LED_D_R, 0)
      d.set(U, addrs.LED_D_G, 153)
      d.set(U, addrs.LED_D_B, 204)
    },
  },
  {
    id: COLOR_LIGHTBLUE_O,
    render(d) {
      d.set(U, addrs.LED_O_R, 0)
      d.set(U, addrs.LED_O_G, 255)
      d.set(U, addrs.LED_O_B, 255)
    },
  },
  {
    id: COLOR_BLUE_D,
    render(d) {
      d.set(U, addrs.LED_D_R, 0)
      d.set(U, addrs.LED_D_G, 0)
      d.set(U, addrs.LED_D_B, 255)
    },
  },
  {
    id: COLOR_BLUE_O,
    render(d) {
      d.set(U, addrs.LED_O_R, 0)
      d.set(U, addrs.LED_O_G, 25.5)
      d.set(U, addrs.LED_O_B, 255)
    },
  },
  {
    id: COLOR_BLUEPURPLE_D,
    render(d) {
      d.set(U, addrs.LED_D_R, 105)
      d.set(U, addrs.LED_D_G, 0)
      d.set(U, addrs.LED_D_B, 255)
    },
  },{
    id: COLOR_BLUEPURPLE_O,
    render(d) {
      d.set(U, addrs.LED_O_R, 38.25)
      d.set(U, addrs.LED_O_G, 0)
      d.set(U, addrs.LED_O_B, 255)
    },
  },
  {
    id: COLOR_REDPURPLE_D,
    render(d) {
      d.set(U, addrs.LED_D_R, 165.75)
      d.set(U, addrs.LED_D_G, 0)
      d.set(U, addrs.LED_D_B, 255)
    },
  },
  {
    id: COLOR_REDPURPLE_O,
    render(d) {
      d.set(U, addrs.LED_O_R, 153)
      d.set(U, addrs.LED_O_G, 0)
      d.set(U, addrs.LED_O_B, 255)
    },
  },
  {
    id: COLOR_PINK_D,
    render(d) {
      d.set(U, addrs.LED_D_R, 255)
      d.set(U, addrs.LED_D_G, 0)
      d.set(U, addrs.LED_D_B, 127.5)
    },
  },
  {
    id: COLOR_PINK_O,
    render(d) {
      d.set(U, addrs.LED_O_R, 255)
      d.set(U, addrs.LED_O_G, 0)
      d.set(U, addrs.LED_O_B, 102)
    },
  },
  {
    id: COLOR_WHITE_D,
    render(d) {
      d.set(U, addrs.LED_D_R, 255)
      d.set(U, addrs.LED_D_G, 255)
      d.set(U, addrs.LED_D_B, 255)
    },
  },
  {
    id: COLOR_WHITE_O,
    render(d) {
      d.set(U, addrs.LED_O_R, 255)
      d.set(U, addrs.LED_O_G, 178.5)
      d.set(U, addrs.LED_O_B, 255)
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
