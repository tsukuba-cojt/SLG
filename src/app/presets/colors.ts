import { Preset } from '.'
import { UNIVERSE as U, addrs, } from '../consts'

export const
COLOR_PINK_SUS_L = "pinkl",
COLOR_PINK_SUS_R = 'pinkr',
COLOR_RED_SUS_L = 'redl',
COLOR_RED_SUS_R = 'redr',
COLOR_YELLOW_SUS_L = 'yellowl',
COLOR_YELLOW_SUS_R = 'yellowr',
COLOR_WHITE_SUS_L = 'whitel',
COLOR_WHITE_SUS_R = 'whiter',
COLOR_WHITE_F = 'whitef',
COLOR_WHITE_S = 'whites',
COLOR_NGR_1 = 'ngr1',
COLOR_NGR_2 = 'ngr2',
COLOR_NGR_3 = 'ngr3',
COLOR_NGR_4 = 'ngr4',
COLOR_PINK_CENTER = 'pinkc',
COLOR_BLUE_OUT = 'blueo',
COLOR_BLUE_U = 'blueU',
COLOR_BLUE_CENTER = 'blueC',
COLOR_PINK_UL = "5",
COLOR_BLUE_UR = "789"



// // COLOR_WHITE = 'color.white',
// // COLOR_RED = 'color.red',
// // COLOR_BLUE = 'color.blue',
// // COLOR_GREEN = 'color.green',
// // COLOR_PURPLE = 'color.purple',
// // COLOR_PINK = 'color.pink',
// // COLOR_YELLOW = 'color.yellow',
// // COLOR_ORANGE = 'color.orange',
// // COLOR_CYAN = 'color.cyan',
// // COLOR_CHASE_ROBOT = 'color.chase.robot'
// // COLOR_WHITE_MH = 'color.white.mh'


export const colors: Preset[] = [
  {
    id: COLOR_PINK_SUS_L,
    render(d,a=255,b=147) {
      d.set(U, addrs.wash_SUS_1_R, a)
      d.set(U, addrs.wash_SUS_2_R, a)
      d.set(U, addrs.wash_SUS_3_R, a)
      d.set(U, addrs.wash_SUS_1_B, b)
      d.set(U, addrs.wash_SUS_2_B, b)
      d.set(U, addrs.wash_SUS_3_B, b)
    },
  },
  {
    id: COLOR_PINK_UL,
    render(d,a=255,b=147) {
      d.set(U, addrs.wash_U_L_R, a)
      d.set(U, addrs.wash_U_L_B, b)
    },
  },
  {
    id: COLOR_BLUE_UR,
    render(d,a=255) {
      d.set(U, addrs.wash_U_R_B, a)
    },
  },
  {
    id: COLOR_PINK_SUS_R,
    render(d,a=255,b=147) {
      d.set(U, addrs.wash_SUS_4_R, a)
      d.set(U, addrs.wash_SUS_5_R, a)
      d.set(U, addrs.wash_SUS_6_R, a)
      d.set(U, addrs.wash_SUS_4_B, b)
      d.set(U, addrs.wash_SUS_5_B, b)
      d.set(U, addrs.wash_SUS_6_B, b)
    },
  },
  {
    id: COLOR_RED_SUS_L,
    render(d,a=255) {
      d.set(U, addrs.wash_SUS_1_R, a)
      d.set(U, addrs.wash_SUS_2_R, a)
      d.set(U, addrs.wash_SUS_3_R, a)
    },
  },
  {
    id: COLOR_RED_SUS_R,
    render(d,a=255) {
      d.set(U, addrs.wash_SUS_4_R, a)
      d.set(U, addrs.wash_SUS_5_R, a)
      d.set(U, addrs.wash_SUS_6_R, a)
    },
  },
  {
    id: COLOR_YELLOW_SUS_L,
    render(d,a=255,b=241) {
      d.set(U, addrs.wash_SUS_1_R, a)
      d.set(U, addrs.wash_SUS_2_R, a)
      d.set(U, addrs.wash_SUS_3_R, a)
      d.set(U, addrs.wash_SUS_1_G, b)
      d.set(U, addrs.wash_SUS_2_G, b)
      d.set(U, addrs.wash_SUS_3_G, b)
    },
  },
  {
    id: COLOR_YELLOW_SUS_R,
    render(d,a=255,b=241) {
      d.set(U, addrs.wash_SUS_4_R, a)
      d.set(U, addrs.wash_SUS_5_R, a)
      d.set(U, addrs.wash_SUS_6_R, a)
      d.set(U, addrs.wash_SUS_4_G, b)
      d.set(U, addrs.wash_SUS_5_G, b)
      d.set(U, addrs.wash_SUS_6_G, b)
    },
  },
  {
    id: COLOR_WHITE_SUS_L,
    render(d,a=255) {
      d.set(U, addrs.wash_SUS_1_R, a)
      d.set(U, addrs.wash_SUS_2_R, a)
      d.set(U, addrs.wash_SUS_3_R, a)
      d.set(U, addrs.wash_SUS_1_G, a)
      d.set(U, addrs.wash_SUS_2_G, a)
      d.set(U, addrs.wash_SUS_3_G, a)
      d.set(U, addrs.wash_SUS_1_B, a)
      d.set(U, addrs.wash_SUS_2_B, a)
      d.set(U, addrs.wash_SUS_3_B, a)
    },
  },
  {
    id: COLOR_WHITE_SUS_R,
    render(d,a=255) {
      d.set(U, addrs.wash_SUS_4_R, a)
      d.set(U, addrs.wash_SUS_5_R, a)
      d.set(U, addrs.wash_SUS_6_R, a)
      d.set(U, addrs.wash_SUS_4_G, a)
      d.set(U, addrs.wash_SUS_5_G, a)
      d.set(U, addrs.wash_SUS_6_G, a)
      d.set(U, addrs.wash_SUS_4_B, a)
      d.set(U, addrs.wash_SUS_5_B, a)
      d.set(U, addrs.wash_SUS_6_B, a)
    },
  },
  {
    id: COLOR_WHITE_F,
    render(d,a=255) {
      d.set(U, addrs.wash_U_L_R, a)
      d.set(U, addrs.wash_U_R_R, a)
      d.set(U, addrs.wash_U_R_G, a)
      d.set(U, addrs.wash_U_L_G, a)
      d.set(U, addrs.wash_U_R_B, a)
      d.set(U, addrs.wash_U_L_B, a)
    },
  },
  {
    id: COLOR_WHITE_S,
    render(d,a=255) {
      d.set(U, addrs.wash_S_L_R, a)
      d.set(U, addrs.wash_S_R_R, a)
      d.set(U, addrs.wash_S_L_B, a)
      d.set(U, addrs.wash_S_R_B, a)
      d.set(U, addrs.wash_S_L_G, a)
      d.set(U, addrs.wash_S_R_G, a)

    },
  },
  {
    id: COLOR_NGR_1,
    render(d, t, n = 1) {
      const r = (o: number) => {
        const result = ((t * 2 * n) / 2 + o) % 3;
        if (result < 1) {
          return 255;
        } else if (result < 2) {
          return 0;
        } else {
          return 255;
        }
      };
      const  g= (o: number) => {
        const result = ((t * 2 * n) / 2 + o) % 3;
        if (result < 1) {
          return 0;
        } else if (result < 2) {
          return 0;
        } else {
          return 255;
        }
      };  
      const b = (o: number) => {
        const result = ((t * 2 * n) / 2 + o) % 3;
        if (result < 1) {
          return 255;
        } else if (result < 2) {
          return 241;
        } else {
          return 0;
        }
      };        
      d.set(U, addrs.wash_SUS_1_R, r(0))
      d.set(U, addrs.wash_SUS_1_G, g(0))
      d.set(U, addrs.wash_SUS_1_B, b(0))
      d.set(U, addrs.wash_SUS_4_R, r(0))
      d.set(U, addrs.wash_SUS_4_G, g(0))
      d.set(U, addrs.wash_SUS_4_B, b(0))
    },
  },
  {
    id: COLOR_NGR_2,
    render(d, t, n = 1) {
      const r = (o: number) => {
        const result = ((t * 2 * n) / 2 + o) % 3;
        if (result < 1) {
          return 255;
        } else if (result < 2) {
          return 0;
        } else {
          return 255;
        }
      };
      const  g= (o: number) => {
        const result = ((t * 2 * n) / 2 + o) % 3;
        if (result < 1) {
          return 0;
        } else if (result < 2) {
          return 0;
        } else {
          return 255;
        }
      };  
      const b = (o: number) => {
        const result = ((t * 2 * n) / 2 + o) % 3;
        if (result < 1) {
          return 255;
        } else if (result < 2) {
          return 241;
        } else {
          return 0;
        }
      };        
      d.set(U, addrs.wash_SUS_2_R, r(2))
      d.set(U, addrs.wash_SUS_2_G, g(2))
      d.set(U, addrs.wash_SUS_2_B, b(2))
      d.set(U, addrs.wash_SUS_5_R, r(2))
      d.set(U, addrs.wash_SUS_5_G, g(2))
      d.set(U, addrs.wash_SUS_5_B, b(2))
    },
  },
  {
    id: COLOR_NGR_3,
    render(d, t, n = 1) {
      const r = (o: number) => {
        const result = ((t * 2 * n) / 2 + o) % 3;
        if (result < 1) {
          return 255;
        } else if (result < 2) {
          return 0;
        } else {
          return 255;
        }
      };
      const  g= (o: number) => {
        const result = ((t * 2 * n) / 2 + o) % 3;
        if (result < 1) {
          return 0;
        } else if (result < 2) {
          return 0;
        } else {
          return 255;
        }
      };  
      const b = (o: number) => {
        const result = ((t * 2 * n) / 2 + o) % 3;
        if (result < 1) {
          return 255;
        } else if (result < 2) {
          return 241;
        } else {
          return 0;
        }
      };        
      d.set(U, addrs.wash_SUS_3_R, r(1))
      d.set(U, addrs.wash_SUS_3_G, g(1))
      d.set(U, addrs.wash_SUS_3_B, b(1))
      d.set(U, addrs.wash_SUS_6_R, r(1))
      d.set(U, addrs.wash_SUS_6_G, g(1))
      d.set(U, addrs.wash_SUS_6_B, b(1))
    },
  },
  {
    id: COLOR_PINK_CENTER,
    render(d,a=255,b=147) {
      d.set(U, addrs.wash_SUS_2_R, a)
      d.set(U, addrs.wash_SUS_3_R, a)
      d.set(U, addrs.wash_SUS_4_R, a)
      d.set(U, addrs.wash_SUS_5_R, a)
      d.set(U, addrs.wash_SUS_2_B, b)
      d.set(U, addrs.wash_SUS_3_B, b)
      d.set(U, addrs.wash_SUS_4_B, b)
      d.set(U, addrs.wash_SUS_5_B, b)
    },
  },
  {
    id: COLOR_BLUE_OUT,
    render(d,a=255) {
      d.set(U, addrs.wash_SUS_1_B, a)
      d.set(U, addrs.wash_SUS_6_B, a)
    },
  },
  {
    id: COLOR_BLUE_U,
    render(d,a=255) {
      d.set(U, addrs.wash_U_L_B, a)
      d.set(U, addrs.wash_U_R_B, a)
    },
  },
  {
    id: COLOR_NGR_4,
    render(d, t, n = 1) {
      const r = (o: number) => {
        const result = ((t * 2 * n) / 2 + o) % 3;
        if (result < 1) {
          return 255;
        } else if (result < 2) {
          return 0;
        } else {
          return 255;
        }
      };
      const  g= (o: number) => {
        const result = ((t * 2 * n) / 2 + o) % 3;
        if (result < 1) {
          return 0;
        } else if (result < 2) {
          return 0;
        } else {
          return 255;
        }
      };  
      const b = (o: number) => {
        const result = ((t * 2 * n) / 2 + o) % 3;
        if (result < 1) {
          return 255;
        } else if (result < 2) {
          return 241;
        } else {
          return 0;
        }
      };        
      d.set(U, addrs.wash_SUS_1_R, r(0))
      d.set(U, addrs.wash_SUS_1_G, g(0))
      d.set(U, addrs.wash_SUS_1_B, b(0))
      d.set(U, addrs.wash_SUS_2_R, r(0))
      d.set(U, addrs.wash_SUS_2_G, g(0))
      d.set(U, addrs.wash_SUS_2_B, b(0))
      d.set(U, addrs.wash_SUS_3_R, r(0))
      d.set(U, addrs.wash_SUS_3_G, g(0))
      d.set(U, addrs.wash_SUS_3_B, b(0))
      d.set(U, addrs.wash_SUS_5_R, r(0))
      d.set(U, addrs.wash_SUS_5_G, g(0))
      d.set(U, addrs.wash_SUS_5_B, b(0))
      d.set(U, addrs.wash_SUS_6_R, r(0))
      d.set(U, addrs.wash_SUS_6_G, g(0))
      d.set(U, addrs.wash_SUS_6_B, b(0))
      d.set(U, addrs.wash_SUS_4_R, r(0))
      d.set(U, addrs.wash_SUS_4_G, g(0))
      d.set(U, addrs.wash_SUS_4_B, b(0))
    },
  },
  {
    id: COLOR_BLUE_CENTER,
    render(d,a=255) {
      d.set(U, addrs.wash_SUS_3_B, a)
      d.set(U, addrs.wash_SUS_4_B, a)
    },
  },
]
//   },
//   {
//     id: COLOR_RED_O,
//     render(d) {
//       d.set(U, addrs.LED_O_R, 255)
//       d.set(U, addrs.LED_O_G, 0)
//       d.set(U, addrs.LED_O_B, 0)
//     },
//   },
//   {
//     id: COLOR_ORANGE_D,
//     render(d) {
//       d.set(U, addrs.LED_D_R, 255)
//       d.set(U, addrs.LED_D_G, 62.5)
//       d.set(U, addrs.LED_D_B, 0)
//     },
//   },
//   {
//     id: COLOR_ORANGE_O,
//     render(d) {
//       d.set(U, addrs.LED_O_R, 255)
//       d.set(U, addrs.LED_O_G, 25.5)
//       d.set(U, addrs.LED_O_B, 0)
//     },
//   },
//   {
//     id: COLOR_REDYELLOW_D,
//     render(d) {
//       d.set(U, addrs.LED_D_R, 255)
//       d.set(U, addrs.LED_D_G, 204)
//       d.set(U, addrs.LED_D_B, 0)
//     },
//   },
//   {
//     id: COLOR_REDYELLOW_O,
//     render(d) {
//       d.set(U, addrs.LED_O_R, 255)
//       d.set(U, addrs.LED_O_G, 127.5)
//       d.set(U, addrs.LED_O_B, 0)
//     },
//   },
//   {
//     id: COLOR_GREENYELLOW_D,
//     render(d) {
//       d.set(U, addrs.LED_D_R, 229.5)
//       d.set(U, addrs.LED_D_G, 255)
//       d.set(U, addrs.LED_D_B, 0)
//     },
//   },
//   {
//     id: COLOR_GREENYELLOW_O,
//     render(d) {
//       d.set(U, addrs.LED_O_R, 255)
//       d.set(U, addrs.LED_O_G, 255)
//       d.set(U, addrs.LED_O_B, 0)
//     },
//   },
//   {
//     id: COLOR_YELLOWGREEN_D,
//     render(d) {
//       d.set(U, addrs.LED_D_R, 127.5)
//       d.set(U, addrs.LED_D_G, 255)
//       d.set(U, addrs.LED_D_B, 0)
//     },
//   },
//   {
//     id: COLOR_YELLOWGREEN_O,
//     render(d) {
//       d.set(U, addrs.LED_O_R, 127.5)
//       d.set(U, addrs.LED_O_G, 255)
//       d.set(U, addrs.LED_O_B, 0)
//     },
//   },
//   {
//     id: COLOR_GREEN_D,
//     render(d) {
//       d.set(U, addrs.LED_D_R, 0)
//       d.set(U, addrs.LED_D_G, 255)
//       d.set(U, addrs.LED_D_B, 0)
//     },
//   },
//   {
//     id: COLOR_GREEN_O,
//     render(d) {
//       d.set(U, addrs.LED_O_R, 0)
//       d.set(U, addrs.LED_O_G, 255)
//       d.set(U, addrs.LED_O_B, 0)
//     },
//   },
//   {
//     id: COLOR_LIGHTBLUE_D,
//     render(d) {
//       d.set(U, addrs.LED_D_R, 0)
//       d.set(U, addrs.LED_D_G, 153)
//       d.set(U, addrs.LED_D_B, 204)
//     },
//   },
//   {
//     id: COLOR_LIGHTBLUE_O,
//     render(d) {
//       d.set(U, addrs.LED_O_R, 0)
//       d.set(U, addrs.LED_O_G, 255)
//       d.set(U, addrs.LED_O_B, 255)
//     },
//   },
//   {
//     id: COLOR_BLUE_D,
//     render(d) {
//       d.set(U, addrs.LED_D_R, 0)
//       d.set(U, addrs.LED_D_G, 0)
//       d.set(U, addrs.LED_D_B, 255)
//     },
//   },
//   {
//     id: COLOR_BLUE_O,
//     render(d) {
//       d.set(U, addrs.LED_O_R, 0)
//       d.set(U, addrs.LED_O_G, 25.5)
//       d.set(U, addrs.LED_O_B, 255)
//     },
//   },
//   {
//     id: COLOR_BLUEPURPLE_D,
//     render(d) {
//       d.set(U, addrs.LED_D_R, 105)
//       d.set(U, addrs.LED_D_G, 0)
//       d.set(U, addrs.LED_D_B, 255)
//     },
//   },{
//     id: COLOR_BLUEPURPLE_O,
//     render(d) {
//       d.set(U, addrs.LED_O_R, 38.25)
//       d.set(U, addrs.LED_O_G, 0)
//       d.set(U, addrs.LED_O_B, 255)
//     },
//   },
//   {
//     id: COLOR_REDPURPLE_D,
//     render(d) {
//       d.set(U, addrs.LED_D_R, 165.75)
//       d.set(U, addrs.LED_D_G, 0)
//       d.set(U, addrs.LED_D_B, 255)
//     },
//   },
//   {
//     id: COLOR_REDPURPLE_O,
//     render(d) {
//       d.set(U, addrs.LED_O_R, 153)
//       d.set(U, addrs.LED_O_G, 0)
//       d.set(U, addrs.LED_O_B, 255)
//     },
//   },
//   {
//     id: COLOR_PINK_D,
//     render(d) {
//       d.set(U, addrs.LED_D_R, 255)
//       d.set(U, addrs.LED_D_G, 0)
//       d.set(U, addrs.LED_D_B, 127.5)
//     },
//   },
//   {
//     id: COLOR_PINK_O,
//     render(d) {
//       d.set(U, addrs.LED_O_R, 255)
//       d.set(U, addrs.LED_O_G, 0)
//       d.set(U, addrs.LED_O_B, 102)
//     },
//   },
//   {
//     id: COLOR_WHITE_D,
//     render(d) {
//       d.set(U, addrs.LED_D_R, 255)
//       d.set(U, addrs.LED_D_G, 255)
//       d.set(U, addrs.LED_D_B, 255)
//     },
//   },
//   {
//     id: COLOR_WHITE_O,
//     render(d) {
//       d.set(U, addrs.LED_O_R, 165)
//       d.set(U, addrs.LED_O_G, 255)
//       d.set(U, addrs.LED_O_B, 255)
//     },
//   },
//   // {
//   //   id: COLOR_WHITE_MH,
//   //   render(d) {
//   //     d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_W)
//   //     d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_W)
//   //     d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_W)
//   //     d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_W)
//   //   },
//   // },
//   // {
//   //   id: COLOR_WHITE,
//   //   extends: [COLOR_WHITE_MH],
//   //   render(d) {
//   //     d.set(U, addrs.LED_1_R, 255)
//   //     d.set(U, addrs.LED_2_R, 255)
//   //     d.set(U, addrs.LED_3_R, 255)
//   //     d.set(U, addrs.LED_4_R, 255)
//   //     d.set(U, addrs.LED_1_G, 255)
//   //     d.set(U, addrs.LED_2_G, 255)
//   //     d.set(U, addrs.LED_3_G, 255)
//   //     d.set(U, addrs.LED_4_G, 255)
//   //     d.set(U, addrs.LED_1_B, 255)
//   //     d.set(U, addrs.LED_2_B, 255)
//   //     d.set(U, addrs.LED_3_B, 255)
//   //     d.set(U, addrs.LED_4_B, 255)
//   //   },
//   // },
//   // {
//   //   id: COLOR_RED,
//   //   render(d) {
//   //     d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_R)
//   //     d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_R)
//   //     d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_R)
//   //     d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_R)
//   //     d.set(U, addrs.LED_1_R, 255)
//   //     d.set(U, addrs.LED_2_R, 255)
//   //     d.set(U, addrs.LED_3_R, 255)
//   //     d.set(U, addrs.LED_4_R, 255)
//   //   },
//   // },
//   // {
//   //   id: COLOR_BLUE,
//   //   render(d) {
//   //     d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_B)
//   //     d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_B)
//   //     d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_B)
//   //     d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_B)
//   //     d.set(U, addrs.LED_1_B, 255)
//   //     d.set(U, addrs.LED_2_B, 255)
//   //     d.set(U, addrs.LED_3_B, 255)
//   //     d.set(U, addrs.LED_4_B, 255)
//   //   },
//   // },
//   // {
//   //   id: COLOR_GREEN,
//   //   render(d) {
//   //     d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_G)
//   //     d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_G)
//   //     d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_G)
//   //     d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_G)
//   //     d.set(U, addrs.LED_1_G, 255)
//   //     d.set(U, addrs.LED_2_G, 255)
//   //     d.set(U, addrs.LED_3_G, 255)
//   //     d.set(U, addrs.LED_4_G, 255)
//   //   },
//   // },
//   // {
//   //   id: COLOR_PURPLE,
//   //   render(d) {
//   //     d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_PURPLE)
//   //     d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_PURPLE)
//   //     d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_PURPLE)
//   //     d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_PURPLE)
//   //     d.set(U, addrs.LED_1_R, 200)
//   //     d.set(U, addrs.LED_2_R, 200)
//   //     d.set(U, addrs.LED_3_R, 200)
//   //     d.set(U, addrs.LED_4_R, 200)
//   //     d.set(U, addrs.LED_1_B, 255)
//   //     d.set(U, addrs.LED_2_B, 255)
//   //     d.set(U, addrs.LED_3_B, 255)
//   //     d.set(U, addrs.LED_4_B, 255)
//   //   },
//   // },
//   // {
//   //   id: COLOR_PINK,
//   //   render(d) {
//   //     d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_PINK)
//   //     d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_PINK)
//   //     d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_PINK)
//   //     d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_PINK)
//   //     d.set(U, addrs.LED_1_R, 255)
//   //     d.set(U, addrs.LED_2_R, 255)
//   //     d.set(U, addrs.LED_3_R, 255)
//   //     d.set(U, addrs.LED_4_R, 255)
//   //     d.set(U, addrs.LED_1_G, 127)
//   //     d.set(U, addrs.LED_2_G, 127)
//   //     d.set(U, addrs.LED_3_G, 127)
//   //     d.set(U, addrs.LED_4_G, 127)
//   //     d.set(U, addrs.LED_1_B, 255)
//   //     d.set(U, addrs.LED_2_B, 255)
//   //     d.set(U, addrs.LED_3_B, 255)
//   //     d.set(U, addrs.LED_4_B, 255)
//   //   },
//   // },
//   // {
//   //   id: COLOR_YELLOW,
//   //   render(d) {
//   //     d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_Y)
//   //     d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_Y)
//   //     d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_Y)
//   //     d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_Y)
//   //     d.set(U, addrs.LED_1_R, 255)
//   //     d.set(U, addrs.LED_2_R, 255)
//   //     d.set(U, addrs.LED_3_R, 255)
//   //     d.set(U, addrs.LED_4_R, 255)
//   //     d.set(U, addrs.LED_1_G, 255)
//   //     d.set(U, addrs.LED_2_G, 255)
//   //     d.set(U, addrs.LED_3_G, 255)
//   //     d.set(U, addrs.LED_4_G, 255)
//   //   },
//   // },
//   // {
//   //   id: COLOR_ORANGE,
//   //   render(d) {
//   //     d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_R)
//   //     d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_R)
//   //     d.set(U, addrs.MARTIN_L_COLOR_2, vals.MARTIN_COLOR2_Y)
//   //     d.set(U, addrs.MARTIN_R_COLOR_2, vals.MARTIN_COLOR2_Y)
//   //     d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_A)
//   //     d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_A)
//   //     d.set(U, addrs.LED_1_R, 255)
//   //     d.set(U, addrs.LED_2_R, 255)
//   //     d.set(U, addrs.LED_3_R, 255)
//   //     d.set(U, addrs.LED_4_R, 255)
//   //     d.set(U, addrs.LED_1_G, 127)
//   //     d.set(U, addrs.LED_2_G, 127)
//   //     d.set(U, addrs.LED_3_G, 127)
//   //     d.set(U, addrs.LED_4_G, 127)
//   //   },
//   // },
//   // {
//   //   id: COLOR_CYAN,
//   //   render(d) {
//   //     d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_B)
//   //     d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_B)
//   //     d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_B)
//   //     d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_B)
//   //     d.set(U, addrs.LED_1_B, 255)
//   //     d.set(U, addrs.LED_2_B, 255)
//   //     d.set(U, addrs.LED_3_B, 255)
//   //     d.set(U, addrs.LED_4_B, 255)
//   //     d.set(U, addrs.LED_1_G, 255)
//   //     d.set(U, addrs.LED_2_G, 255)
//   //     d.set(U, addrs.LED_3_G, 255)
//   //     d.set(U, addrs.LED_4_G, 255)
//   //   },
//   // },
//   //   {
//   //     id: COLOR_CHASE_ROBOT,
//   // render(d, t, n = 1) {

//   //   const nt = (o: number) => (((t * n) / 2 + o) % 4 < 1 ? 255 : 0)
//   //       d.set(U, addrs.LED_LF_R, nt(0 / 4))
//   //       d.set(U, addrs.LED_RF_R, 0)
//   //       d.set(U, addrs.LED_LR_R, 0)
//   //       d.set(U, addrs.LED_RR_R, 0)
//   //       d.set(U, addrs.LED_LF_G, 0)
//   //       d.set(U, addrs.LED_RF_G, 0)
//   //       d.set(U, addrs.LED_LR_G, 0)
//   //       d.set(U, addrs.LED_RR_G, 0)
//   //       d.set(U, addrs.LED_LF_B, 0)
//   //       d.set(U, addrs.LED_RF_B, 0)
//   //       d.set(U, addrs.LED_LR_B, 0)
//   //       d.set(U, addrs.LED_RR_B, 0)
//   //     },
//   // },
// ]
