import { Sequence } from '.'
import { BACKPAR_C_W, BACKPAR_LR_A, BACKPAR_W } from '../presets/backpar'
import { BEAMS_BLINK, BEAMS_ON, BEAMS_WAVE } from '../presets/beams'
import { COLOR_WHITE } from '../presets/colors'
import {
  FLOORPAR,
  FLOORPAR_RANDOM_BLINK,
  FLOORPAR_SINWAVE,
} from '../presets/floorpar'
import { GROUND_B } from '../presets/ground'
import { LED_BLINK, LED_ON, LED_SINWAVE } from '../presets/led'
import {
  MH_BLINK,
  MH_ON,
  MH_PAN_FOCUS,
  MH_POS_ROUND,
  MH_TILT_FL,
  MH_TILT_MID,
} from '../presets/mh'
import { SPOT, SPOT_C } from '../presets/spot'
import { SS } from '../presets/ss'

export const hitomi: Sequence[] = [
  {
    note: '君の瞳をめぐる冒険',
    steps: [
      {
        id: 'きっかけ音',
        position: 0,
        extends: [SPOT_C],
      },
      {
        id: 'サビ',
        position: 8.2,
        extends: [
          SPOT,
          SS,
          BEAMS_WAVE,
          LED_BLINK,
          COLOR_WHITE,
          MH_TILT_MID,
          MH_BLINK,
          FLOORPAR_RANDOM_BLINK,
        ],
      },
      {
        id: '一瞬止まる',
        position: 39.4,
        extends: [SPOT, SS, FLOORPAR],
      },
      {
        id: '1A',
        position: 40.3,
        fade: 1,
        extends: [SPOT, SS, COLOR_WHITE, LED_ON],
      },
      {
        id: '1B',
        position: 1 * 60 + 14.7,
        fade: 1,
        extends: [SPOT, SS, COLOR_WHITE, LED_ON, FLOORPAR_SINWAVE],
      },
      {
        id: 'サビ',
        position: 1 * 60 + 24.5,
        fade: 1,
        extends: [
          SPOT,
          SS,
          COLOR_WHITE,
          LED_BLINK,
          MH_TILT_MID,
          MH_BLINK,
          FLOORPAR_RANDOM_BLINK,
          BEAMS_WAVE,
        ],
      },
      {
        id: 'サビ後奏',
        position: 1 * 60 + 48.3,
        fade: 1,
        extends: [
          SPOT,
          SS,
          COLOR_WHITE,
          LED_BLINK,
          MH_POS_ROUND,
          MH_ON,
          FLOORPAR_RANDOM_BLINK,
          BEAMS_WAVE,
        ],
      },
      {
        id: '2A直前',
        position: 2 * 60 + 3.5,
        extends: [SS],
      },
      {
        id: '2A',
        position: 2 * 60 + 5,
        fade: 0,
        extends: [
          SPOT,
          SS,
          COLOR_WHITE,
          LED_ON,
          MH_PAN_FOCUS,
          MH_TILT_MID,
          MH_ON,
          FLOORPAR,
          BEAMS_ON,
        ],
      },
      {
        id: '2A途中',
        position: 2 * 60 + 13.7,
        fade: 0,
        extends: [
          SPOT,
          SS,
          COLOR_WHITE,
          LED_SINWAVE,
          FLOORPAR_SINWAVE,
          BEAMS_ON,
        ],
      },
      {
        id: '2B',
        position: 2 * 60 + 39.2,
        fade: 0,
        extends: [SPOT, SS, COLOR_WHITE, LED_ON, FLOORPAR, BEAMS_ON],
      },
      {
        id: 'サビ',
        position: 2 * 60 + 58.4,
        fade: 0,
        extends: [
          SPOT,
          SS,
          COLOR_WHITE,
          LED_BLINK,
          MH_TILT_MID,
          MH_BLINK,
          FLOORPAR_RANDOM_BLINK,
          BEAMS_WAVE,
        ],
      },
      {
        id: '間奏',
        position: 3 * 60 + 23.8,
        fade: 0,
        extends: [
          SS,
          COLOR_WHITE,
          MH_TILT_FL,
          MH_BLINK,
          FLOORPAR_RANDOM_BLINK,
          BEAMS_WAVE,
        ],
      },
      {
        id: '間奏おわり前',
        position: 3 * 60 + 40.8,
        fade: 2,
        extends: [
          SPOT,
          SS,
          BACKPAR_LR_A,
          COLOR_WHITE,
          MH_TILT_FL,
          MH_ON,
          FLOORPAR,
          BEAMS_ON,
        ],
      },
      {
        id: 'C',
        position: 3 * 60 + 43,
        fade: 0,
        extends: [
          SPOT,
          SS,
          BACKPAR_LR_A,
          COLOR_WHITE,
          MH_POS_ROUND,
          MH_ON,
          FLOORPAR,
          BEAMS_BLINK,
        ],
      },
      {
        id: 'C最後 謎を謎を解けば...',
        position: 4 * 60 + 5.8,
        fade: 0,
        extends: [SPOT_C],
      },
      {
        id: 'C最後 バックパーをつける',
        position: 4 * 60 + 10,
        fade: 3,
        extends: [SPOT, BACKPAR_C_W],
      },
      {
        id: 'サビ',
        position: 4 * 60 + 16.4,
        fade: 1,
        extends: [
          SPOT,
          SS,
          COLOR_WHITE,
          BACKPAR_W,
          LED_BLINK,
          MH_POS_ROUND,
          MH_BLINK,
          FLOORPAR_SINWAVE,
          BEAMS_WAVE,
        ],
      },
      {
        id: '後奏',
        position: 5 * 60 + 2,
        fade: 0,
        extends: [
          SS,
          COLOR_WHITE,
          LED_BLINK,
          FLOORPAR_SINWAVE,
          BEAMS_WAVE,
          //prepare
          MH_PAN_FOCUS,
          MH_TILT_MID,
        ],
      },
      {
        id: '最後',
        position: 5 * 60 + 9.5,
        fade: 0,
        extends: [
          SS,
          COLOR_WHITE,
          LED_BLINK,
          FLOORPAR_SINWAVE,
          BEAMS_WAVE,
          MH_PAN_FOCUS,
          MH_TILT_MID,
          MH_ON,
          BACKPAR_C_W,
        ],
      },
      {
        id: '消す',
        position: 5 * 60 + 12.5,
        fade: 0,
        extends: [GROUND_B],
      },
    ],
  },
]
