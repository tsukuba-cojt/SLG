import { Sequence } from '.'
import {
    COLOR_PINKRED
} from '../presets/colors'
import { LED_CHASE_ROBOT, LED_ON, LED_CHASE_DOROTHY, LED_LOW, LED_HALF_M5, LED_LF, LED_RF, LED_LR } from '../presets/led'
import { CL } from '../presets/cl'
import { SS } from '../presets/ss'
import { GROUND_ANOMITI, GROUND_BASE, GROUND_KENBAN } from '../presets/ground'
import { renderPreset } from '..'
import { UNIVERSE, addrs } from '../consts'

export const M5: Sequence[] = [
    {
        note: 'M5',
        cycle: 60 / 150,
        steps: [
            {
                id: 'M4ラスト',
                position: 0,
                extends: [
                    LED_LOW,
                    COLOR_PINKRED
                ],
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 90))
                    d.merge(renderPreset(CL, t, 90))
                }
            },
            {
                id: 'M5in',
                position: 60 * 2,
                fade: 2,
                extends: [
                    LED_HALF_M5,
                    COLOR_PINKRED
                ],
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 67.5))
                    d.merge(renderPreset(CL, t, 90))
                }
            },
            {
                id: 'ドロシー「レーザービーム//」',
                position: 60 * 3,
                extends: [
                    COLOR_PINKRED,
                    LED_ON,
                    SS
                ],
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 67.5))
                    d.merge(renderPreset(CL, t, 90))
                }
            },
            {
                id: 'ドロシー「レーザービーム//」',
                position: 60 * 4,
                extends: [
                    COLOR_PINKRED,
                    LED_ON,
                ],
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 67.5))
                    d.merge(renderPreset(CL, t, 90))
                }
            },
            {
                id: 'サビ半拍前',
                position: 60 * 5,
                extends: [COLOR_PINKRED, LED_CHASE_ROBOT],
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 127.5))
                    d.merge(renderPreset(CL, t, 67.5))
                }
            },
            {
                id: 'ドロシー「それなら一緒に」半拍前',
                position: 60 * 6,
                extends: [COLOR_PINKRED, LED_CHASE_DOROTHY],
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 90))
                }
            },
            {
                id: 'ドロシー「なん//だって願いをかなえてくれる不思議な/」',
                position: 60 * 6 + 59.91,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 90))
                }
            },
            {
                id: '↑',
                position: 60 * 6 + 59.95,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 90))
                }
            },
            {
                id: '↑',
                position: 60 * 7,
                fade: 2,
                extends: [COLOR_PINKRED, LED_ON],
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 127.5))
                    d.merge(renderPreset(CL, t, 67.5))
                }
            },
            {
                id: 'サビ半拍前',
                position: 60 * 8,
                extends: [COLOR_PINKRED, LED_CHASE_ROBOT],
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 127.5))
                    d.merge(renderPreset(CL, t, 67.5))
                }
            },
            {
                id: 'ドロシー「/あの道/をたどって」',
                position: 60 * 9,
                extends: [COLOR_PINKRED, GROUND_ANOMITI],
                render(d, _, s = 255) {
                    d.set(UNIVERSE, addrs.LED_LR_DIM, s)
                    d.set(UNIVERSE, addrs.LED_RF_DIM, s)
                }

            },
            {
                id: '↑',
                position: 60 * 9,
                fade: 0.5,
                extends: [COLOR_PINKRED, GROUND_ANOMITI],
                render(d, t) {
                    d.merge(renderPreset(LED_LF, t, 67.5))
                    d.merge(renderPreset(LED_RF, t, 67.5))
                }
            },
            {
                id: 'ロボット「/ミュ/ージックウィザードの元へ！」',
                position: 60 * 10,
                extends: [COLOR_PINKRED, LED_ON],
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 127.5))
                    d.merge(renderPreset(CL, t, 67.5))
                }
            },
            {
                id: '曲調変化',
                fade: 1,
                position: 60 * 11,
                extends: [GROUND_KENBAN],
                render(d, t) {
                    d.merge(renderPreset(CL, t, 67.5))
                }
            },

        ],
    },
]
