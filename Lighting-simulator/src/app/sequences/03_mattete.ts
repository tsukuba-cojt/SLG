import { Sequence } from '.'
import { BACKPAR_C_W } from '../presets/backpar'
import { COLOR_BLUE, COLOR_ORANGE, COLOR_PURPLE } from '../presets/colors'
import {
  FLOORPAR,
  FLOORPAR_SINWAVE,
  FLOORPAR_SINWAVE_REVERSE,
} from '../presets/floorpar'
import { FS } from '../presets/fs'
import { GROUND_B, GROUND_LA, GROUND_LB, GROUND_W } from '../presets/ground'
import { LED_ON } from '../presets/led'
import { MH_ON, MH_PAN_CENTER, MH_POS_ROUND, MH_TILT_MID } from '../presets/mh'
import { NAGARE_BLUE, NAGARE_PINK } from '../presets/nagare'
import { PAR_GREEN, PAR_PINK } from '../presets/par'
import { SPOT_C, SPOT_L, SPOT_R } from '../presets/spot'
import { SS } from '../presets/ss'

const BASE_PRESETS = [GROUND_W, FS]

export const MATTETE_LAST_FRAME = [
  GROUND_B,
  LED_ON,
  COLOR_ORANGE,
  SS,
  FS,
  BACKPAR_C_W,
  MH_TILT_MID,
  MH_PAN_CENTER,
  MH_ON,
]

export const mattete: Sequence[] = [
  {
    note: '待機状態',
    steps: [
      {
        id: 'ベース',
        position: 0,
        fade: 3,
        extends: [GROUND_LB, FS, NAGARE_BLUE],
      },
    ],
  },
  {
    note: '待ってて愛のうた',
    steps: [
      {
        id: '曲始点',
        position: 0,
        fade: 3,
        extends: [GROUND_LB, FS, NAGARE_BLUE, SPOT_C, SPOT_L, SPOT_R],
      },
      {
        id: 'イントロ',
        position: 9,
        fade: 1.5,
        extends: [...BASE_PRESETS, NAGARE_BLUE, LED_ON, COLOR_BLUE, PAR_GREEN],
      },
      {
        id: 'Bメロ',
        position: 53,
        fade: 1.5,
        extends: [GROUND_LA, NAGARE_PINK, LED_ON, COLOR_ORANGE, PAR_PINK],
      },
      {
        id: 'サビ',
        position: 1 * 60 + 32,
        fade: 2,
        extends: [
          GROUND_LA,
          NAGARE_PINK,
          LED_ON,
          COLOR_ORANGE,
          SS,
          FLOORPAR_SINWAVE,
        ],
      },
      {
        id: '2A',
        position: 2 * 60 + 3,
        fade: 2,
        extends: [
          ...BASE_PRESETS,
          SPOT_C,
          NAGARE_BLUE,
          LED_ON,
          COLOR_BLUE,
          PAR_GREEN,
        ],
      },
      {
        id: '2B',
        position: 2 * 60 + 37,
        fade: 1.5,
        extends: [GROUND_LA, NAGARE_PINK, LED_ON, COLOR_ORANGE, PAR_PINK],
      },
      {
        id: 'サビ',
        position: 2 * 60 + 58.2,
        fade: 2,
        extends: [
          GROUND_LA,
          NAGARE_PINK,
          LED_ON,
          COLOR_ORANGE,
          SS,
          FLOORPAR_SINWAVE,
        ],
      },
      {
        id: 'C',
        position: 4 * 60 + 3,
        fade: 2,
        extends: [GROUND_B, NAGARE_PINK, LED_ON, COLOR_PURPLE, SS, SPOT_C],
      },
      {
        id: 'ラスサビ前',
        position: 4 * 60 + 38,
        fade: 4,
        extends: [GROUND_B, LED_ON, COLOR_ORANGE, SS, FS, BACKPAR_C_W],
      },
      {
        id: 'ラスサビ',
        position: 4 * 60 + 42,
        fade: 0,
        extends: [
          GROUND_B,
          LED_ON,
          COLOR_ORANGE,
          SS,
          FS,
          BACKPAR_C_W,
          FLOORPAR_SINWAVE_REVERSE,
        ],
      },
      {
        id: 'ラスサビ最後一瞬止まる',
        position: 5 * 60 + 24,
        fade: 1,
        extends: [
          GROUND_B,
          LED_ON,
          COLOR_ORANGE,
          SS,
          FS,
          BACKPAR_C_W,
          FLOORPAR,
          MH_POS_ROUND,
        ],
      },
      {
        id: 'ラスサビ最後',
        position: 5 * 60 + 28,
        fade: 1,
        extends: [
          GROUND_B,
          LED_ON,
          COLOR_ORANGE,
          SS,
          FS,
          BACKPAR_C_W,
          FLOORPAR_SINWAVE_REVERSE,
          MH_POS_ROUND,
          MH_ON,
        ],
      },
      {
        id: 'アウトロ',
        position: 5 * 60 + 43.5,
        fade: 2,
        extends: [
          GROUND_B,
          LED_ON,
          COLOR_ORANGE,
          SS,
          FS,
          BACKPAR_C_W,
          FLOORPAR_SINWAVE_REVERSE,
          MH_TILT_MID,
          MH_PAN_CENTER,
          MH_ON,
        ],
      },
      {
        id: 'アウトロ最後',
        position: 5 * 60 + 54,
        fade: 0.5,
        extends: MATTETE_LAST_FRAME,
      },
    ],
  },
]
