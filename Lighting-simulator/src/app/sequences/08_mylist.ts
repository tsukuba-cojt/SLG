import { Sequence } from '.'
import {
  COLOR_CYAN,
  COLOR_GREEN,
  COLOR_ORANGE,
  COLOR_PINK,
  COLOR_WHITE,
} from '../presets/colors'
import { GROUND_B } from '../presets/ground'
import { LED_BLINK, LED_ON } from '../presets/led'
import { NAGARE_BLUE, NAGARE_PINK } from '../presets/nagare'
import { SPOT } from '../presets/spot'
import { PAR_WAVE } from '../presets/par'
import { FS } from '../presets/fs'
import {
  FLOORPAR,
  FLOORPAR_SINWAVE,
  FLOORPAR_SINWAVE_REVERSE,
} from '../presets/floorpar'

const MYLIST_LAST_EXTENDS = [
  SPOT,
  FS,
  NAGARE_PINK,
  NAGARE_BLUE,
  COLOR_WHITE,
  LED_ON,
  FLOORPAR,
]

export const mylist: Sequence[] = [
  {
    note: 'MyList待機',
    steps: [
      {
        id: 'ブルー',
        position: 0,
        extends: [GROUND_B],
      },
    ],
  },
  {
    note: 'MyListToYou',
    steps: [
      {
        id: '曲初め',
        position: 0,
        fade: 2,
        extends: [SPOT, NAGARE_PINK, NAGARE_BLUE, COLOR_WHITE, LED_BLINK],
      },
      {
        id: '1A',
        position: 15,
        fade: 2,
        extends: [SPOT, FS, NAGARE_PINK, NAGARE_BLUE, COLOR_ORANGE, LED_ON],
      },
      {
        id: '1B',
        position: 40.7,
        fade: 1,
        extends: [SPOT, FS, NAGARE_PINK, NAGARE_BLUE, COLOR_CYAN, LED_ON],
      },
      {
        id: '1サビ',
        position: 55.7,
        fade: 1,
        extends: [
          SPOT,
          FS,
          NAGARE_PINK,
          NAGARE_BLUE,
          COLOR_WHITE,
          LED_BLINK,
          PAR_WAVE,
        ],
      },
      {
        id: '2A',
        position: 1 * 60 + 19.5,
        fade: 2,
        extends: [SPOT, FS, NAGARE_PINK, NAGARE_BLUE, COLOR_PINK, LED_ON],
      },
      {
        id: '2B',
        position: 1 * 60 + 45,
        fade: 1,
        extends: [SPOT, FS, NAGARE_PINK, NAGARE_BLUE, COLOR_GREEN, LED_ON],
      },
      {
        id: '2サビ',
        position: 2 * 60 + 1.8,
        fade: 1,
        extends: [
          SPOT,
          FS,
          NAGARE_PINK,
          NAGARE_BLUE,
          COLOR_WHITE,
          LED_BLINK,
          PAR_WAVE,
        ],
      },
      {
        id: '間奏',
        position: 2 * 60 + 26.3,
        fade: 2,
        extends: [
          SPOT,
          NAGARE_PINK,
          NAGARE_BLUE,
          COLOR_WHITE,
          LED_BLINK,
          PAR_WAVE,
          FLOORPAR_SINWAVE,
        ],
      },
      {
        id: '3サビ前',
        position: 2 * 60 + 51,
        fade: 1,
        extends: [
          SPOT,
          FS,
          NAGARE_PINK,
          NAGARE_BLUE,
          COLOR_PINK,
          LED_ON,
          FLOORPAR,
        ],
      },
      {
        id: '3サビ',
        position: 2 * 60 + 38,
        fade: 1,
        extends: [
          SPOT,
          FS,
          NAGARE_PINK,
          NAGARE_BLUE,
          COLOR_PINK,
          LED_BLINK,
          FLOORPAR_SINWAVE,
        ],
      },
      {
        id: '後奏前',
        position: 3 * 60 + 24.8,
        fade: 0,
        extends: [
          SPOT,
          FS,
          NAGARE_PINK,
          NAGARE_BLUE,
          COLOR_PINK,
          LED_ON,
          FLOORPAR,
        ],
      },
      {
        id: '後奏',
        position: 3 * 60 + 28.3,
        fade: 0,
        extends: [
          SPOT,
          FS,
          NAGARE_PINK,
          NAGARE_BLUE,
          COLOR_WHITE,
          LED_BLINK,
          FLOORPAR_SINWAVE_REVERSE,
        ],
      },
      {
        id: 'アウトロ',
        position: 3 * 60 + 28.3,
        fade: 0,
        extends: MYLIST_LAST_EXTENDS,
      },
    ],
  },
]
