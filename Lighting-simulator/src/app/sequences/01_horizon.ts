import { Sequence } from '.'
import { BACKPAR_C_W, BACKPAR_W } from '../presets/backpar'
import { BEAMS_ON } from '../presets/beams'
import { CL } from '../presets/cl'
import {
  COLOR_BLUE,
  COLOR_GREEN,
  COLOR_ORANGE,
  COLOR_PINK,
  COLOR_PURPLE,
  // COLOR_RAINBOW,
  COLOR_RED,
  COLOR_WHITE,
  COLOR_YELLOW,
} from '../presets/colors'
import { FLOORPAR, FLOORPAR_RANDOM_BLINK } from '../presets/floorpar'
import { FS } from '../presets/fs'
import {
  GROUND_A,
  GROUND_B,
  GROUND_LB,
  GROUND_W,
  GROUND_WARM,
} from '../presets/ground'
import { LED_BLINK, LED_ON } from '../presets/led'
import { MH_BLINK, MH_ON, MH_POS_ROUND, MH_TILT_MID } from '../presets/mh'
import { NAGARE_BLUE, NAGARE_PINK, NAGARE_W } from '../presets/nagare'
import { PAR_GREEN, PAR_WAVE } from '../presets/par'
import { SPOT_C } from '../presets/spot'

const BASE_PRESETS = [GROUND_WARM, CL, FS]

export const horizon: Sequence[] = [
  {
    note: 'test',
    steps: [
      {
        id: 'blackout',
        position: 0,
        extends: [],
      },
    ],
  },
  {
    note: 'test',
    steps: [
      {
        id: 'ベース',
        position: 0,
        extends: [GROUND_B, COLOR_BLUE],
      },
    ],
  },
  {
    note: '未体験Horizon',
    steps: [
      {
        id: 'ベース',
        position: 0,
        extends: [GROUND_B],
      },
      {
        id: '音なり始め',
        position: 0,
        fade: 3,
        extends: [GROUND_W, FS, CL, BACKPAR_C_W],
      },
      {
        id: 'イントロ',
        position: 9.6,
        fade: 3,
        extends: [GROUND_A, NAGARE_PINK, SPOT_C, LED_ON, BACKPAR_C_W],
        render() {
          // 下桜色・上オレンジ
          return
        },
      },
      {
        id: 'イントロ',
        position: 19,
        fade: 2,
        extends: [
          GROUND_WARM,
          NAGARE_W,
          BACKPAR_W,
          CL,
          FS,
          PAR_WAVE,
          MH_TILT_MID,
          MH_BLINK,
          LED_BLINK,
          FLOORPAR_RANDOM_BLINK,
        ],
      },
      {
        id: '新しくなれ',
        position: 32,
        fade: 2,
        extends: [
          ...BASE_PRESETS,
          NAGARE_W,
          BACKPAR_W,
          LED_ON,
          MH_ON,
          MH_TILT_MID,
          LED_ON,
          COLOR_YELLOW,
        ],
      },
      {
        id: 'さあどこへ',
        position: 43,
        fade: 2,
        extends: [
          ...BASE_PRESETS,
          NAGARE_W,
          BACKPAR_W,
          LED_ON,
          MH_TILT_MID,
          MH_ON,
          COLOR_WHITE,
        ],
      },
      {
        id: 'いっぱいせいいっぱい',
        position: 54,
        fade: 2,
        extends: [
          ...BASE_PRESETS,
          NAGARE_PINK,
          BACKPAR_W,
          LED_ON,
          MH_TILT_MID,
          MH_ON,
          COLOR_PINK,
        ],
      },
      {
        id: '1サビ',
        position: 76.8,
        fade: 0,
        extends: [
          ...BASE_PRESETS,
          NAGARE_W,
          BACKPAR_W,
          LED_BLINK,
          MH_POS_ROUND,
          MH_BLINK,
          // COLOR_RAINBOW,
          FLOORPAR_RANDOM_BLINK,
        ],
      },
      {
        id: 'サビ終わり',
        position: 107,
        fade: 0,
        extends: [GROUND_WARM, CL, FS, NAGARE_W, BACKPAR_W, FLOORPAR],
      },
      {
        id: '間奏',
        position: 112,
        fade: 1,
        extends: [
          ...BASE_PRESETS,
          NAGARE_W,
          LED_BLINK,
          MH_POS_ROUND,
          MH_BLINK,
          // COLOR_RAINBOW,
          FLOORPAR_RANDOM_BLINK,
        ],
      },
      {
        id: '迷いも助走も',
        position: 123,
        fade: 2,
        extends: [...BASE_PRESETS, NAGARE_W, FLOORPAR, COLOR_PURPLE, LED_ON],
      },
      {
        id: '正解が一つきり',
        position: 128,
        fade: 2,
        extends: [...BASE_PRESETS, NAGARE_W, FLOORPAR, COLOR_PINK, LED_ON],
      },
      {
        id: 'そうなんでも',
        position: 133,
        fade: 0,
        extends: [...BASE_PRESETS, NAGARE_W, FLOORPAR, COLOR_GREEN, LED_ON],
      },
      {
        id: '失敗の中に',
        position: 134,
        fade: 2,
        extends: [...BASE_PRESETS, NAGARE_W, FLOORPAR, COLOR_RED, LED_ON],
      },
      {
        id: 'それがわかって',
        position: 139,
        fade: 2,
        extends: [...BASE_PRESETS, NAGARE_W, FLOORPAR, COLOR_BLUE, LED_ON],
      },
      {
        id: '成長ってこと',
        position: 142,
        fade: 1,
        extends: [...BASE_PRESETS, NAGARE_W, FLOORPAR, COLOR_ORANGE, LED_ON],
      },
      {
        id: 'きっとあとで',
        position: 144,
        fade: 2,
        extends: [...BASE_PRESETS, NAGARE_W, FLOORPAR, COLOR_YELLOW, LED_ON],
      },
      {
        id: 'きっとぜんぶ',
        position: 147,
        fade: 1,
        extends: [...BASE_PRESETS, NAGARE_W, FLOORPAR, COLOR_WHITE, LED_ON],
      },
      {
        id: '今日',
        position: 149,
        fade: 2,
        extends: [...BASE_PRESETS, NAGARE_W, FLOORPAR, COLOR_PINK, LED_ON],
      },
      {
        id: '絶対、絶対諦めない',
        position: 155,
        fade: 2,
        extends: [
          ...BASE_PRESETS,
          NAGARE_W,
          FLOORPAR,
          COLOR_PINK,
          LED_ON,
          BACKPAR_W,
        ],
      },
      {
        id: '苦しくなっちゃう',
        position: 166,
        fade: 2,
        extends: [
          ...BASE_PRESETS,
          NAGARE_PINK,
          FLOORPAR,
          COLOR_PINK,
          LED_ON,
          BACKPAR_W,
        ],
      },
      {
        id: '絶対、絶対諦めない',
        position: 2 * 60 + 56,
        fade: 2.5,
        extends: [
          ...BASE_PRESETS,
          NAGARE_W, // 流れを戻す
          FLOORPAR,
          COLOR_WHITE, // LEDの色を戻す
          LED_ON,
          BACKPAR_W,
        ],
      },
      {
        id: '2サビ 輝いていくんだ',
        position: 2 * 60 + 59,
        fade: 1,
        extends: [
          ...BASE_PRESETS,
          NAGARE_W,
          FLOORPAR_RANDOM_BLINK,
          // COLOR_RAINBOW,
          LED_ON,
          MH_POS_ROUND,
          MH_BLINK,
          PAR_WAVE,
        ],
      },
      {
        id: '間奏終了直前',
        position: 3 * 60 + 30,
        fade: 3,
        extends: [
          CL,
          GROUND_LB,
          NAGARE_BLUE,
          PAR_GREEN,
          BEAMS_ON,
          COLOR_BLUE,
          LED_ON,
        ],
      },
      {
        id: 'ソロサビ',
        position: 3 * 60 + 59,
        fade: 2,
        extends: [SPOT_C, COLOR_YELLOW, LED_ON],
      },
      {
        id: 'ソロサビ（道を作る）',
        position: 3 * 60 + 59,
        fade: 4,
        extends: [SPOT_C, COLOR_YELLOW, LED_ON, BACKPAR_C_W],
        render() {
          // 道を作りたい
        },
      },
      {
        id: 'ラスサビ',
        position: 4 * 60 + 12,
        fade: 0,
        extends: [
          SPOT_C,
          // COLOR_RAINBOW,
          BACKPAR_C_W,
          LED_BLINK,
          MH_POS_ROUND,
          MH_BLINK,
          FLOORPAR_RANDOM_BLINK,
        ],
      },
      {
        id: 'ラスサビ 地明かりを戻す',
        position: 4 * 60 + 12,
        fade: 2,
        extends: [
          ...BASE_PRESETS,
          // COLOR_RAINBOW,
          BACKPAR_W,
          LED_BLINK,
          MH_TILT_MID,
          MH_BLINK,
          FLOORPAR_RANDOM_BLINK,
        ],
      },
      {
        id: '一瞬止まる',
        position: 4 * 60 + 43,
        fade: 0,
        extends: [
          ...BASE_PRESETS,
          // COLOR_RAINBOW,
          BACKPAR_W,
          // LED_BLINK,
          // MH_BLINK,
          // FLOORPAR_RANDOM_BLINK,
        ],
      },
      {
        id: 'アウトロ',
        position: 4 * 60 + 45,
        fade: 0,
        extends: [
          ...BASE_PRESETS,
          // COLOR_RAINBOW,
          BACKPAR_W,
          LED_BLINK,
          MH_POS_ROUND,
          MH_BLINK,
          FLOORPAR_RANDOM_BLINK,
        ],
      },
      {
        id: '最後',
        position: 5 * 60 + 2,
        fade: 2,
        extends: [...BASE_PRESETS, COLOR_WHITE, BACKPAR_W, LED_ON, FLOORPAR],
      },
    ],
  },
]
