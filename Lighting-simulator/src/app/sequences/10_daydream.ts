import { Sequence } from '.'
import { BACKPAR_C_W } from '../presets/backpar'
import { BEAMS_ON } from '../presets/beams'
import {
  COLOR_BLUE,
  COLOR_CYAN,
  COLOR_ORANGE,
  COLOR_PURPLE,
  COLOR_RED,
  COLOR_WHITE,
  COLOR_WHITE_MH,
  COLOR_YELLOW,
} from '../presets/colors'
import { FLOORPAR, FLOORPAR_RANDOM_BLINK } from '../presets/floorpar'
import { FS } from '../presets/fs'
import { GROUND_B } from '../presets/ground'
import { LED_BLINK, LED_ON } from '../presets/led'
import {
  MH_BLINK,
  MH_ON,
  MH_PAN_FOCUS,
  MH_POS_BACK,
  MH_POS_ROUND,
  MH_TILT_MID,
} from '../presets/mh'
import { SPOT } from '../presets/spot'

export const daydream: Sequence[] = [
  {
    note: 'Daydream待機',
    steps: [
      {
        id: '待機',
        position: 0,
        extends: [GROUND_B],
      },
    ],
  },
  {
    note: 'DayDream',
    steps: [
      {
        id: '前奏',
        position: 0,
        extends: [SPOT, FS, BEAMS_ON],
      },
      {
        id: '前奏',
        position: 13.7,
        extends: [SPOT, FS, BEAMS_ON, COLOR_RED, LED_BLINK],
      },
      {
        id: '1A',
        position: 27,
        extends: [SPOT, FS, BEAMS_ON, COLOR_BLUE, LED_ON],
      },
      {
        id: 'サビ',
        position: 59.2,
        extends: [
          SPOT,
          FS,
          BEAMS_ON,
          COLOR_ORANGE,
          LED_BLINK,
          MH_POS_ROUND,
          MH_ON,
          FLOORPAR_RANDOM_BLINK,
        ],
      },
      {
        id: '2A',
        position: 1 * 60 + 43,
        extends: [SPOT, FS, BEAMS_ON, COLOR_CYAN, LED_ON],
      },
      {
        id: 'サビ',
        position: 2 * 60 + 18,
        extends: [
          SPOT,
          FS,
          BEAMS_ON,
          COLOR_YELLOW,
          LED_BLINK,
          MH_POS_ROUND,
          MH_ON,
          FLOORPAR_RANDOM_BLINK,
        ],
      },
      {
        id: '間奏',
        position: 2 * 60 + 47,
        extends: [
          SPOT,
          FS,
          BEAMS_ON,
          COLOR_PURPLE,
          COLOR_WHITE_MH,
          LED_ON,
          MH_POS_BACK,
          MH_BLINK,
          FLOORPAR,
        ],
      },
      {
        id: '間奏',
        position: 3 * 60 + 1,
        extends: [
          SPOT,
          FS,
          BEAMS_ON,
          COLOR_CYAN,
          COLOR_WHITE_MH,
          LED_ON,
          MH_POS_BACK,
          MH_BLINK,
          FLOORPAR_RANDOM_BLINK,
        ],
      },
      {
        id: 'C',
        position: 3 * 60 + 16,
        extends: [
          SPOT,
          FS,
          BEAMS_ON,
          COLOR_CYAN,
          COLOR_WHITE_MH,
          LED_ON,
          MH_POS_BACK,
          MH_BLINK,
          BACKPAR_C_W,
          FLOORPAR,
        ],
      },
      {
        id: 'サビ',
        position: 3 * 60 + 45,
        extends: [
          SPOT,
          FS,
          BEAMS_ON,
          COLOR_WHITE,
          LED_BLINK,
          MH_POS_ROUND,
          FLOORPAR_RANDOM_BLINK,
        ],
      },
      {
        id: '後奏',
        position: 4 * 60 + 13,
        extends: [
          SPOT,
          FS,
          BEAMS_ON,
          COLOR_RED,
          LED_BLINK,
          MH_TILT_MID,
          FLOORPAR_RANDOM_BLINK,
        ],
      },
      {
        id: '最後',
        position: 4 * 60 + 26,
        extends: [
          SPOT,
          FS,
          BEAMS_ON,
          COLOR_RED,
          LED_ON,
          MH_PAN_FOCUS,
          MH_TILT_MID,
          FLOORPAR,
        ],
      },
      {
        id: '消す',
        position: 4 * 60 + 29,
        extends: [GROUND_B],
      },
    ],
  },
]
