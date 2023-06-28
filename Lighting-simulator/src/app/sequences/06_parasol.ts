import { Sequence } from '.'
import { BACKPAR_LR_W } from '../presets/backpar'
import {
  COLOR_BLUE,
  COLOR_CYAN,
  COLOR_ORANGE,
  COLOR_PINK,
  COLOR_WHITE,
  COLOR_WHITE_MH,
} from '../presets/colors'
import { FLOORPAR_SINWAVE } from '../presets/floorpar'
import { GROUND_B } from '../presets/ground'
import { LED_ON, LED_SINWAVE } from '../presets/led'
import { MH_ON, MH_POS_ROUND, MH_TILT_MID } from '../presets/mh'
import { NAGARE_BLUE, NAGARE_PINK } from '../presets/nagare'
import { PAR_GREEN } from '../presets/par'
import { SPOT } from '../presets/spot'

export const parasol: Sequence[] = [
  {
    note: 'パラソル初期状態',
    steps: [
      {
        id: '初期状態',
        position: 0,
        extends: [GROUND_B],
      },
    ],
  },
  {
    note: 'パラソル',
    steps: [
      {
        id: '音なり始め',
        position: 0,
        fade: 3,
        extends: [SPOT, BACKPAR_LR_W],
      },
      {
        id: '前奏',
        fade: 1,
        position: 7,
        extends: [
          SPOT,
          BACKPAR_LR_W,
          NAGARE_BLUE,
          NAGARE_PINK,
          COLOR_WHITE,
          LED_ON,
          MH_POS_ROUND,
          MH_ON,
        ],
      },
      {
        id: '1A 悩みなき',
        fade: 1,
        position: 22,
        extends: [
          SPOT,
          BACKPAR_LR_W,
          NAGARE_BLUE,
          NAGARE_PINK,
          COLOR_PINK,
          LED_ON,
        ],
      },
      {
        id: '1A 捕まえた',
        fade: 1,
        position: 30,
        extends: [
          SPOT,
          BACKPAR_LR_W,
          NAGARE_BLUE,
          NAGARE_PINK,
          COLOR_ORANGE,
          LED_ON,
        ],
      },
      {
        id: '1B 岬へ飛んでく',
        fade: 1,
        position: 37.3,
        extends: [
          SPOT,
          BACKPAR_LR_W,
          NAGARE_BLUE,
          NAGARE_PINK,
          COLOR_CYAN,
          LED_ON,
        ],
      },
      {
        id: '1サビ パラソル',
        fade: 0,
        position: 54.5,
        extends: [
          SPOT,
          BACKPAR_LR_W,
          NAGARE_BLUE,
          NAGARE_PINK,
          COLOR_BLUE,
          LED_SINWAVE,
          FLOORPAR_SINWAVE,
        ],
      },
      {
        id: '2A サンダル',
        fade: 1,
        position: 1 * 60 + 38.8,
        extends: [
          SPOT,
          BACKPAR_LR_W,
          NAGARE_BLUE,
          NAGARE_PINK,
          COLOR_CYAN,
          LED_ON,
        ],
      },
      {
        id: '2A 灼けそうな',
        fade: 1,
        position: 1 * 60 + 47,
        extends: [
          SPOT,
          BACKPAR_LR_W,
          NAGARE_BLUE,
          NAGARE_PINK,
          COLOR_ORANGE,
          LED_ON,
        ],
      },
      {
        id: '2B',
        fade: 1,
        position: 1 * 60 + 54,
        extends: [
          SPOT,
          BACKPAR_LR_W,
          NAGARE_BLUE,
          NAGARE_PINK,
          COLOR_PINK,
          LED_ON,
        ],
      },
      {
        id: '2サビ',
        fade: 0,
        position: 2 * 60 + 11,
        extends: [
          SPOT,
          BACKPAR_LR_W,
          NAGARE_BLUE,
          NAGARE_PINK,
          COLOR_BLUE,
          LED_SINWAVE,
          FLOORPAR_SINWAVE,
        ],
      },
      {
        id: 'C あの水平線を',
        fade: 1,
        position: 2 * 60 + 41,
        extends: [SPOT, BACKPAR_LR_W, NAGARE_BLUE, NAGARE_PINK],
      },
      {
        id: '間奏',
        fade: 1,
        position: 2 * 60 + 57.5,
        extends: [
          SPOT,
          BACKPAR_LR_W,
          NAGARE_BLUE,
          NAGARE_PINK,
          PAR_GREEN,
          COLOR_BLUE,
          LED_ON,
          MH_ON,
          MH_POS_ROUND,
        ],
      },
      {
        id: '3B それでもみんな',
        fade: 1,
        position: 3 * 60 + 15,
        extends: [
          SPOT,
          BACKPAR_LR_W,
          NAGARE_BLUE,
          NAGARE_PINK,
          COLOR_CYAN,
          LED_ON,
        ],
      },
      {
        id: 'ラスサビ',
        fade: 0,
        position: 3 * 60 + 35.5,
        extends: [
          SPOT,
          BACKPAR_LR_W,
          NAGARE_BLUE,
          NAGARE_PINK,
          COLOR_BLUE,
          LED_SINWAVE,
          FLOORPAR_SINWAVE,
        ],
      },

      {
        id: 'ラスサビ2',
        fade: 0,
        position: 4 * 60 + 7.5,
        extends: [
          SPOT,
          BACKPAR_LR_W,
          NAGARE_BLUE,
          NAGARE_PINK,
          COLOR_BLUE,
          COLOR_WHITE_MH,
          MH_ON,
          MH_POS_ROUND,
          LED_SINWAVE,
          FLOORPAR_SINWAVE,
        ],
      },
      {
        id: '最後',
        fade: 1,
        position: 4 * 60 + 37,
        extends: [
          SPOT,
          BACKPAR_LR_W,
          NAGARE_BLUE,
          NAGARE_PINK,
          COLOR_CYAN,
          COLOR_WHITE_MH,
          MH_ON,
          MH_TILT_MID,
          LED_SINWAVE,
          FLOORPAR_SINWAVE,
        ],
      },
      {
        id: '消す',
        fade: 3,
        position: 4 * 60 + 43,
        extends: [GROUND_B],
      },
    ],
  },
]
