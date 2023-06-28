import { Sequence } from '.'
import { BACKPAR_LR_A, BACKPAR_W } from '../presets/backpar'
import { BEAMS_BLINK, BEAMS_ON } from '../presets/beams'
import {
  COLOR_BLUE,
  COLOR_CYAN,
  COLOR_ORANGE,
  COLOR_RAINBOW,
  COLOR_WHITE,
  COLOR_WHITE_MH,
  COLOR_YELLOW,
} from '../presets/colors'
import { FLOORPAR, FLOORPAR_RANDOM_BLINK } from '../presets/floorpar'
import { FS } from '../presets/fs'
import { GROUND_B } from '../presets/ground'
import { LED_ON } from '../presets/led'
import { MH_ON, MH_POS_ROUND, MH_TILT_MID } from '../presets/mh'
import { NAGARE_BLUE, NAGARE_PINK, NAGARE_W } from '../presets/nagare'
import { SS } from '../presets/ss'

export const brightest: Sequence[] = [
  {
    note: '待機',
    steps: [
      {
        id: '待機',
        position: 0,
        extends: [GROUND_B],
      },
    ],
  },
  {
    note: 'Brightest Melody',
    steps: [
      {
        id: '初め',
        position: 9.3,
        fade: 1,
        extends: [FS, NAGARE_BLUE, COLOR_CYAN, LED_ON, BACKPAR_W],
      },
      {
        id: '前奏',
        position: 0,
        extends: [
          FS,
          NAGARE_BLUE,
          COLOR_RAINBOW,
          LED_ON,
          MH_POS_ROUND,
          MH_ON,
          BACKPAR_W,
        ],
      },
      {
        id: '1A',
        position: 19.3,
        fade: 2,
        extends: [FS, NAGARE_BLUE, COLOR_BLUE, LED_ON, BACKPAR_W],
      },
      {
        id: '1B',
        position: 39.8,
        fade: 2,
        extends: [FS, NAGARE_PINK, COLOR_YELLOW, LED_ON, BACKPAR_LR_A],
      },
      {
        id: 'サビ',
        position: 1 * 60 + 1.5,
        fade: 2,
        extends: [
          FS,
          SS,
          NAGARE_W,
          COLOR_YELLOW,
          LED_ON,
          BEAMS_BLINK,
          MH_POS_ROUND,
          MH_ON,
          BACKPAR_LR_A,
          FLOORPAR_RANDOM_BLINK,
        ],
      },
      {
        id: '2A',
        position: 1 * 60 + 36.5,
        fade: 2,
        extends: [FS, NAGARE_BLUE, COLOR_BLUE, LED_ON],
      },
      {
        id: '2B',
        position: 1 * 60 + 56.5,
        fade: 2,
        extends: [
          FS,
          NAGARE_PINK,
          COLOR_ORANGE,
          LED_ON,
          MH_POS_ROUND,
          BACKPAR_LR_A,
          FLOORPAR,
        ],
      },
      {
        id: '2サビ',
        position: 2 * 60 + 14.5,
        fade: 2,
        extends: [
          FS,
          NAGARE_W,
          COLOR_YELLOW,
          LED_ON,
          BEAMS_BLINK,
          MH_POS_ROUND,
          MH_ON,
          BACKPAR_LR_A,
          FLOORPAR_RANDOM_BLINK,
        ],
      },
      {
        id: '間奏',
        position: 2 * 60 + 37,
        fade: 2,
        extends: [
          FS,
          NAGARE_W,
          COLOR_RAINBOW,
          LED_ON,
          BEAMS_BLINK,
          MH_POS_ROUND,
          MH_ON,
          FLOORPAR_RANDOM_BLINK,
        ],
      },
      {
        id: '間奏後 輝いていたい',
        position: 2 * 60 + 58,
        fade: 2,
        extends: [FS, NAGARE_W, COLOR_WHITE, LED_ON, BEAMS_ON],
      },
      {
        id: '間奏後 このまま進もう',
        position: 3 * 60 + 1,
        fade: 3,
        extends: [
          FS,
          NAGARE_W,
          COLOR_WHITE,
          LED_ON,
          BACKPAR_W,
          BEAMS_ON,
          FLOORPAR,
        ],
      },
      {
        id: 'ああどこへいっても',
        position: 3 * 60 + 6,
        fade: 0,
        extends: [FS, NAGARE_W, COLOR_CYAN, LED_ON],
      },
      {
        id: 'サビ',
        position: 3 * 60 + 16.5,
        fade: 1,
        extends: [FS, NAGARE_W, COLOR_ORANGE, LED_ON, MH_POS_ROUND, MH_ON],
      },
      {
        id: 'きっと',
        position: 3 * 60 + 24,
        fade: 0,
        extends: [FS, NAGARE_W, COLOR_WHITE, MH_TILT_MID, MH_ON, LED_ON],
      },
      {
        id: 'サビ',
        position: 3 * 60 + 26,
        fade: 1,
        extends: [
          FS,
          NAGARE_W,
          COLOR_RAINBOW,
          LED_ON,
          BEAMS_BLINK,
          MH_POS_ROUND,
          MH_ON,
          FLOORPAR_RANDOM_BLINK,
        ],
      },
      {
        id: '新しい夢',
        position: 3 * 60 + 50,
        fade: 1,
        extends: [
          FS,
          NAGARE_W,
          COLOR_WHITE,
          LED_ON,
          BEAMS_ON,
          MH_TILT_MID,
          MH_ON,
          FLOORPAR,
        ],
      },
      {
        id: '後奏',
        position: 3 * 60 + 56.5,
        fade: 1,
        extends: [
          FS,
          NAGARE_W,
          COLOR_RAINBOW,
          LED_ON,
          BEAMS_BLINK,
          MH_POS_ROUND,
          MH_ON,
          FLOORPAR_RANDOM_BLINK,
        ],
      },
      {
        id: 'アウトロ',
        position: 4 * 60 + 7,
        fade: 3,
        extends: [
          FS,
          NAGARE_W,
          COLOR_YELLOW,
          COLOR_WHITE_MH,
          LED_ON,
          BEAMS_BLINK,
          MH_TILT_MID,
          MH_ON,
          FLOORPAR,
          BACKPAR_W,
          BACKPAR_LR_A,
        ],
      },
      {
        id: 'アウトロ',
        position: 4 * 60 + 13,
        fade: 0,
        extends: [GROUND_B],
      },
    ],
  },
]
