import { Sequence } from '.'
import { BACKPAR_C_W } from '../presets/backpar'
import { BEAMS_BLINK, BEAMS_ON, BEAMS_WAVE } from '../presets/beams'
import {
  COLOR_GREEN,
  COLOR_PURPLE,
  COLOR_RAINBOW,
  COLOR_RED,
  COLOR_WHITE,
  COLOR_WHITE_MH,
} from '../presets/colors'
import { GROUND_B } from '../presets/ground'
import { LED_BLINK, LED_ON } from '../presets/led'
import {
  MH_BLINK,
  MH_ON,
  MH_PAN_CENTER,
  MH_PAN_FOCUS,
  MH_POS_ROUND,
  MH_TILT_FL,
  MH_TILT_MID,
  MH_TILT_TOP,
  MH_TILT_WAVE,
} from '../presets/mh'
import { NAGARE_W } from '../presets/nagare'
import { SPOT, SPOT_C, SPOT_L, SPOT_R } from '../presets/spot'

export const mebius: Sequence[] = [
  {
    note: 'メビウス初期状態',
    steps: [
      {
        id: '初期状態',
        position: 0,
        extends: [GROUND_B],
      },
    ],
  },
  {
    note: 'メビウス',
    steps: [
      {
        id: '音始め あっちいこうか',
        position: 0,
        fade: 1,
        extends: [COLOR_RED, LED_ON, SPOT],
      },
      {
        id: 'こっちいこうか',
        position: 3,
        fade: 0,
        extends: [COLOR_GREEN, LED_ON, SPOT],
      },
      {
        id: 'どっちいこうか',
        position: 5.5,
        fade: 0,
        extends: [COLOR_PURPLE, LED_ON, SPOT],
      },
      {
        id: 'わかんないなな（な〜い）',
        position: 7.5,
        fade: 0,
        extends: [
          COLOR_RAINBOW,
          LED_ON,
          SPOT,
          // prepare
          COLOR_WHITE_MH,
        ],
      },
      {
        id: '（わかんないなな）な〜い',
        position: 9,
        fade: 0,
        extends: [
          COLOR_RAINBOW,
          COLOR_WHITE_MH,
          SPOT,
          LED_ON,
          MH_ON,
          MH_TILT_TOP,
        ],
      },
      {
        id: '最初サビ もっと自由に',
        position: 10,
        fade: 1,
        extends: [
          COLOR_RAINBOW,
          NAGARE_W,
          SPOT,
          LED_BLINK,
          //after
          MH_TILT_TOP,
          COLOR_WHITE_MH,
        ],
      },
      {
        id: '1A 走りながら',
        position: 29.4,
        fade: 1,
        extends: [
          COLOR_RED,
          NAGARE_W,
          SPOT,
          LED_BLINK,
          //after
          MH_TILT_TOP,
        ],
      },
      {
        id: '1A 声を出しちゃ',
        position: 39,
        fade: 1,
        extends: [COLOR_GREEN, NAGARE_W, SPOT, LED_BLINK],
      },
      {
        id: '1B 登れ降りて登れ',
        position: 48,
        fade: 1,
        extends: [COLOR_PURPLE, NAGARE_W, SPOT, LED_ON],
      },
      {
        id: '1B （止まらない）の',
        position: 1 * 60 + 7.8,
        fade: 0,
        extends: [
          COLOR_PURPLE,
          NAGARE_W,
          SPOT,
          LED_BLINK,
          //prepare
          MH_PAN_FOCUS,
          MH_TILT_MID,
        ],
      },
      {
        id: 'サビ 追いかけらてる',
        position: 1 * 60 + 12.5,
        fade: 0,
        extends: [
          COLOR_RAINBOW,
          NAGARE_W,
          SPOT,
          LED_BLINK,
          MH_BLINK,
          MH_PAN_FOCUS,
          MH_TILT_MID,
        ],
      },
      {
        id: 'もっと自由に',
        position: 1 * 60 + 36.5,
        fade: 0,
        extends: [
          COLOR_RAINBOW,
          NAGARE_W,
          SPOT,
          BEAMS_BLINK,
          LED_BLINK,
          MH_BLINK,
          MH_POS_ROUND,
        ],
      },
      {
        id: '2A 疲れ果てた',
        position: 1 * 60 + 55.7,
        fade: 1,
        extends: [COLOR_GREEN, NAGARE_W, SPOT, LED_BLINK],
      },
      {
        id: '2A 冷たいなにか',
        position: 2 * 60 + 5.5,
        fade: 1,
        extends: [COLOR_RED, NAGARE_W, SPOT, LED_BLINK],
      },
      {
        id: '2B （のぼ）れ',
        position: 2 * 60 + 15,
        fade: 1,
        extends: [COLOR_PURPLE, NAGARE_W, SPOT_R, LED_ON],
      },
      {
        id: '止まらないで（よ）',
        position: 2 * 60 + 34.3,
        fade: 1,
        extends: [COLOR_RAINBOW, NAGARE_W, SPOT, LED_BLINK],
      },
      {
        id: '2サビ 追いかけらてるだけじゃ',
        position: 2 * 60 + 39,
        fade: 0,
        extends: [
          COLOR_RAINBOW,
          NAGARE_W,
          SPOT,
          LED_BLINK,
          MH_BLINK,
          MH_PAN_FOCUS,
          MH_TILT_MID,
        ],
      },
      {
        id: '間奏 下手ターン',
        position: 3 * 60,
        fade: 0,
        extends: [
          COLOR_RAINBOW,
          SPOT_L,
          BEAMS_WAVE,
          LED_BLINK,
          // MH_ON,
          MH_POS_ROUND,
        ],
      },
      {
        id: '間奏 上手ターン',
        position: 3 * 60 + 3,
        fade: 0,
        extends: [
          COLOR_RAINBOW,
          SPOT_R,
          BEAMS_WAVE,
          LED_BLINK,
          // MH_ON,
          MH_POS_ROUND,
        ],
      },
      {
        id: '間奏 中央ターン',
        position: 3 * 60 + 5,
        fade: 0,
        extends: [
          COLOR_RAINBOW,
          SPOT_C,
          BEAMS_WAVE,
          LED_BLINK,
          // MH_ON,
          MH_POS_ROUND,
        ],
      },
      {
        id: 'D',
        position: 3 * 60 + 24.5,
        fade: 0,
        extends: [COLOR_WHITE, SPOT, LED_ON, MH_TILT_FL],
      },
      {
        id: '3サビ 追いかけらてる',
        position: 3 * 60 + 45,
        fade: 0,
        extends: [COLOR_WHITE, SPOT, BEAMS_ON, LED_ON, MH_ON, MH_TILT_FL],
      },
      {
        id: '3サビ 煮込まれちゃってる',
        position: 3 * 60 + 54.6,
        fade: 0,
        extends: [
          COLOR_WHITE,
          SPOT,
          BEAMS_WAVE,
          LED_BLINK,
          MH_BLINK,
          MH_TILT_WAVE,
        ],
      },
      {
        id: 'ラスサビ fore(ver)',
        position: 4 * 60 + 30.7,
        fade: 0,
        extends: [
          // 一瞬止まる
          COLOR_WHITE,
          SPOT,
          BEAMS_ON,
          LED_ON,
          MH_ON,
          MH_TILT_MID,
          MH_PAN_FOCUS,
        ],
      },
      {
        id: 'ラスサビ (fore)ver',
        position: 4 * 60 + 33.5,
        fade: 0,
        extends: [
          COLOR_WHITE,
          SPOT,
          BEAMS_WAVE,
          LED_BLINK,
          MH_BLINK,
          MH_TILT_MID,
          MH_PAN_FOCUS,
        ],
      },
      {
        id: 'C ずっと自由に',
        position: 4 * 60 + 42.5,
        fade: 0,
        extends: [
          COLOR_RAINBOW,
          SPOT,
          BEAMS_WAVE,
          LED_BLINK,
          MH_ON,
          MH_POS_ROUND,
        ],
      },
      {
        id: 'アウトロ',
        position: 5 * 60 + 8,
        fade: 0,
        extends: [
          COLOR_WHITE,
          SPOT,
          BEAMS_WAVE,
          LED_BLINK,
          MH_ON,
          MH_TILT_MID,
          MH_PAN_CENTER,
        ],
      },
      {
        id: 'アウトロ',
        position: 5 * 60 + 16,
        fade: 0,
        extends: [COLOR_WHITE, SPOT, MH_TILT_MID, MH_PAN_FOCUS], // 一旦消す
      },
      {
        id: 'アウトロ最後',
        position: 5 * 60 + 18.3,
        fade: 0,
        extends: [
          COLOR_WHITE,
          SPOT,
          LED_ON,
          MH_ON,
          MH_TILT_MID,
          MH_PAN_FOCUS,
          BACKPAR_C_W,
        ],
      },
      {
        id: '消す',
        position: 5 * 60 + 20.3,
        fade: 0,
        extends: [GROUND_B],
      },
    ],
  },
]
