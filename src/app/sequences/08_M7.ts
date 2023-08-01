import { Sequence } from '.'
import { renderPreset } from '..'
import { UNIVERSE, addrs } from '../consts'
import { CL } from '../presets/cl'
import { COLOR_EMERALD, COLOR_WHITE } from '../presets/colors'
import { GROUND_ANOMITI, GROUND_BASE, GROUND_KENBAN, GROUND_L, GROUND_R } from '../presets/ground'
import { LED_LF, LED_LR, LED_ON, LED_RF, LED_RR } from '../presets/led'


export const M7: Sequence[] = [
    {
        note: 'M7',
        steps: [
            {
                id: 'M6ラスト',
                position: 60 * 0,
            },
            {
                id: 'M7キメ一発目',
                position: 60 * 1,
                extends: [
                    COLOR_WHITE,
                    LED_RF,
                    LED_RR
                ]
            },
            {
                id: '↑',
                position: 60 * 1 + 0.2,
            },
            {
                id: 'M7キメ2発目',
                position: 60 * 1 + 0.5,
                extends: [
                    COLOR_WHITE,
                    LED_LF,
                    LED_LR
                ]
            },
            {
                id: '↑',
                position: 60 * 1 + 0.7,
            },
            {
                id: 'M7キメ3発目',
                position: 60 * 1 + 1.0,
                extends: [
                    COLOR_WHITE,
                    LED_ON
                ]
            },
            {
                id: '↑',
                position: 60 * 1 + 1.2,
            },
            {
                id: '↑',
                fade: 2.2,
                position: 60 * 1 + 2,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 45))
                    d.merge(renderPreset(CL, t, 45))
                }
            },
            {
                id: '音楽「//エメラルドガール」の前の一拍',
                position: 60 * 2,
                extends: [
                    COLOR_EMERALD,
                    LED_ON
                ],
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 45))
                    d.merge(renderPreset(CL, t, 45))
                }
            },
            {
                id: 'よう//こそエメラルドの',
                position: 60 * 3,
                extends: [
                    COLOR_EMERALD,
                    LED_ON
                ],
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 180))
                    d.merge(renderPreset(CL, t, 180))
                }
            },
            {
                id: '↑',
                position: 60 * 3 + 0.1,
                extends: [
                    COLOR_EMERALD,
                    LED_ON
                ]
            },
            {
                id: 'まばゆ//い光の町へ',
                position: 60 * 4,
                extends: [
                    COLOR_EMERALD,
                    LED_ON
                ],
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 180))
                    d.merge(renderPreset(CL, t, 180))
                }
            },
            {
                id: '↑',
                position: 60 * 4 + 0.1,
                extends: [
                    COLOR_EMERALD,
                    LED_ON
                ]
            },
            {
                id: 'すべて//が輝き放つ',
                position: 60 * 5,
                extends: [
                    COLOR_EMERALD,
                    LED_ON
                ],
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 180))
                    d.merge(renderPreset(CL, t, 180))
                }
            },
            {
                id: '↑',
                position: 60 * 5 + 0.1,
                extends: [
                    COLOR_EMERALD,
                    LED_ON
                ]
            },
            {
                id: 'エメラルド//さ そしてこの私が',
                position: 60 * 6,
                extends: [
                    COLOR_EMERALD,
                    LED_ON,
                    GROUND_ANOMITI
                ]
            },
            {
                id: '/エメラルドのピアノの前の一泊',
                position: 60 * 7,
                extends: [
                    COLOR_EMERALD,
                    LED_ON
                ],
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 180))
                    d.merge(renderPreset(CL, t, 180))
                }
            },
            {
                id: '/音楽「//ウィザードになれない」このフレーズの前のどぅーんって音',
                position: 60 * 8,
                render(d, _, s = 127.5) {
                    d.set(UNIVERSE, addrs.anomiti, s)
                },
            },
            {
                id: '音楽「ウィザードになれない/」',
                position: 60 * 9,
                extends: [
                    COLOR_EMERALD,
                    LED_ON
                ],
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 180))
                    d.merge(renderPreset(CL, t, 180))
                }
            },
            {
                id: '音楽「西の魔女から 魔法のギターを//」',
                position: 60 * 10,
                extends: [
                    COLOR_EMERALD,
                    LED_ON,
                    GROUND_KENBAN
                ],
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 180))
                    d.merge(renderPreset(CL, t, 180))
                }
            },
            {
                id: 'ドロシーカカシライオンロボ「西//の魔女のもとへいこう」',
                position: 60 * 11,
                fade: 3.96,
                extends: [
                    COLOR_EMERALD,
                    LED_ON,
                    GROUND_ANOMITI
                ],
            },
            {
                id: '曲終わりのドン',
                position: 60 * 12,
                extends: [
                    COLOR_EMERALD,
                    LED_ON,
                    GROUND_BASE
                ],
            },
            {
                id: '暗転',
                position: 60 * 12 + 2.60,
            },
        ]
    }
]