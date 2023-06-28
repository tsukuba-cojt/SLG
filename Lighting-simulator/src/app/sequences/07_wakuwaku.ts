import { Sequence } from '.'
import { BACKPAR_W } from '../presets/backpar'
import { BEAMS_BLINK } from '../presets/beams'
import {
  COLOR_PINK,
  COLOR_WHITE,
  COLOR_WHITE_MH,
  COLOR_YELLOW,
} from '../presets/colors'
import { FLOORPAR, FLOORPAR_RANDOM_BLINK } from '../presets/floorpar'
import { FS } from '../presets/fs'
import { GROUND_A, GROUND_B } from '../presets/ground'
import { LED_BLINK, LED_ON } from '../presets/led'
import { MH_ON, MH_PAN_FOCUS, MH_TILT_MID, MH_TILT_WAVE } from '../presets/mh'
import { NAGARE_PINK } from '../presets/nagare'
import { PAR_WAVE } from '../presets/par'
import { SPOT, SPOT_C } from '../presets/spot'
import { SS } from '../presets/ss'

export const wakuwaku: Sequence[] = [
  {
    note: 'WakuWaku初期状態',
    steps: [
      {
        id: '初期状態',
        position: 0,
        extends: [GROUND_B],
      },
    ],
  },
  {
    note: 'WakuWakuWeek',
    steps: [
      {
        id: '音なり始め',
        position: 1,
        fade: 2,
        extends: [SPOT, FLOORPAR_RANDOM_BLINK],
      },
      {
        id: '前奏',
        position: 12.5,
        fade: 1,
        extends: [FS, FLOORPAR],
      },
      {
        id: '1A',
        position: 22.8,
        fade: 1,
        extends: [FS, COLOR_WHITE, LED_ON],
      },
      {
        id: '1B 元気印の',
        position: 42.6,
        fade: 1,
        extends: [FS, COLOR_PINK, LED_ON],
      },
      {
        id: '1サビ',
        position: 1 * 60 + 9.3,
        fade: 1,
        extends: [FS, COLOR_PINK, LED_BLINK, BEAMS_BLINK, PAR_WAVE],
      },
      {
        id: '2A 妄想が',
        position: 1 * 60 + 37.3,
        fade: 1,
        extends: [FS, COLOR_WHITE, LED_ON],
      },
      {
        id: '2B 陽気自慢の',
        position: 1 * 60 + 57.3,
        fade: 1,
        extends: [FS, COLOR_YELLOW, LED_ON],
      },
      {
        id: '2サビ',
        position: 2 * 60 + 14,
        fade: 1,
        extends: [FS, COLOR_PINK, LED_BLINK, BEAMS_BLINK, PAR_WAVE],
      },
      {
        id: '間奏',
        position: 2 * 60 + 35,
        fade: 1,
        extends: [
          GROUND_A,
          NAGARE_PINK,
          COLOR_PINK,
          LED_BLINK,
          BEAMS_BLINK,
          PAR_WAVE,
          COLOR_WHITE_MH,
          MH_ON,
          MH_TILT_WAVE,
        ],
      },
      {
        id: '3B 元気印の',
        position: 2 * 60 + 54.5,
        fade: 1,
        extends: [SS, SPOT_C, COLOR_WHITE, LED_ON],
      },
      {
        id: 'ああみんな楽しそうだよ',
        position: 3 * 60 + 4.6,
        fade: 1,
        extends: [FS, COLOR_WHITE, LED_BLINK, BEAMS_BLINK],
      },
      {
        id: '3サビ',
        position: 3 * 60 + 12.5,
        fade: 1,
        extends: [FS, COLOR_WHITE, LED_BLINK, BEAMS_BLINK, PAR_WAVE],
      },
      {
        id: '3サビ',
        position: 3 * 60 + 22.4,
        fade: 1,
        extends: [FS, COLOR_YELLOW, LED_BLINK, BEAMS_BLINK, PAR_WAVE],
      },
      {
        id: '3サビ',
        position: 3 * 60 + 32.7,
        fade: 1,
        extends: [FS, COLOR_PINK, LED_BLINK, BEAMS_BLINK, PAR_WAVE],
      },
      {
        id: 'くらい〜後奏',
        position: 3 * 60 + 54.8,
        fade: 1,
        extends: [FS, COLOR_WHITE, LED_ON, MH_TILT_MID, MH_PAN_FOCUS],
      },
      {
        id: 'アウトロ',
        position: 4 * 60 + 5.6,
        fade: 1,
        extends: [
          FS,
          COLOR_WHITE,
          LED_ON,
          MH_TILT_MID,
          MH_PAN_FOCUS,
          BACKPAR_W,
        ],
      },
      // {
      //   id: '消す',
      //   position: 4 * 60 + 10,
      //   fade: 0,
      //   extends: [GROUND_B],
      // },
    ],
  },
]
