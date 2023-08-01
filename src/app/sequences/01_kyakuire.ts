import { Sequence } from '.'
import { renderPreset } from '..'
import { UNIVERSE, addrs } from '../consts'
// import { BACKPAR_C_W, BACKPAR_W } from '../presets/backpar'
// import { BEAMS_ON } from '../presets/beams'
// import { CL } from '../presets/cl'
// import {
//   COLOR_BLUE,
//   // COLOR_GREEN,
//   // COLOR_ORANGE,
//   // COLOR_PINK,
//   // COLOR_PURPLE,
//   // COLOR_RAINBOW,
//   // COLOR_RED,
//   // COLOR_WHITE,
//   // COLOR_YELLOW,
// } from '../presets/colors'
// import { FLOORPAR, FLOORPAR_RANDOM_BLINK } from '../presets/floorpar'
// import { FS } from '../presets/fs'
import { GROUND_BASE } from '../presets/ground'
// import { LED_BLINK, LED_ON } from '../presets/led'
// import { MH_BLINK, MH_ON, MH_POS_ROUND, MH_TILT_MID } from '../presets/mh'
// import { NAGARE_BLUE, NAGARE_PINK, NAGARE_W } from '../presets/nagare'
// import { PAR_GREEN, PAR_WAVE } from '../presets/par'
// import { SPOT_C } from '../presets/spot'

// const BASE_PRESETS = [GROUND_WARM, CL, FS]

export const kyakuire: Sequence[] = [
  {
    note: '客入れ',
    steps: [
      {
        id: '客入れ',
        position: 0,
        render(d, _, a = 157.5) {
          d.set(UNIVERSE, addrs.SUS3_1, a)
          d.set(UNIVERSE, addrs.SUS3_2, a)
        },
      }
    ],
  },
  {
    note: 'BLACKOUT',
    steps: [
      {
        id: '暗転',
        position: 0,

      }
    ],
  }
]
