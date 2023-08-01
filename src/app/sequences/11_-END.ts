import { Sequence } from '.'
import { renderPreset } from '..'
import { UNIVERSE, addrs } from '../consts'
import { CL } from '../presets/cl'
import { COLOR_BLUE, COLOR_EMERALD, COLOR_PINK, COLOR_RED, COLOR_YELLOW } from '../presets/colors'
import { GROUND_BASE, GROUND_KATEKO, GROUND_KENBAN2 } from '../presets/ground'
import { LED_LR, LED_RR } from '../presets/led'


export const END: Sequence[] = [
    {
        note: 'END',
        steps: [
            {
                id: 'M9ラスト',
                position: 60 * 0,
                render(d, t) {
                    d.merge(renderPreset(CL, t, 135))
                    d.merge(renderPreset(GROUND_BASE, t, 90))
                },
            },
            {
                id: '曲調変化',
                fade: 2.7,
                position: 60 * 1,
                render(d, t) {
                    d.merge(renderPreset(CL, t, 67.5))
                    d.merge(renderPreset(GROUND_BASE, t, 90))
                },
            },
            {
                id: '音楽の魔女「/あなたの愛した～/」',
                fade: 2.7,
                position: 60 * 3,
                render(d, t, s = 157.5, a = 67.5) {
                    d.merge(renderPreset(CL, t, 67.5))
                    d.set(UNIVERSE, addrs.SUS2_1, s)
                    d.set(UNIVERSE, addrs.SUS2_2, s)
                    d.set(UNIVERSE, addrs.SUS2_3, s)
                    d.set(UNIVERSE, addrs.SUS3_1, a)
                    d.set(UNIVERSE, addrs.SUS3_2, a)
                },
            },
            {
                id: '全員「/わ/たしの愛する」',
                fade: 2.7,
                position: 60 * 4,
                extends: [GROUND_KENBAN2],
                render(d, t) {
                    d.merge(renderPreset(CL, t, 67.5))
                },
            },
            {
                id: '全員「/ぼ/くらをみちびくのは」',
                position: 60 * 5,
                extends: [GROUND_KENBAN2
                    , LED_RR,
                    COLOR_BLUE
                ],
                render(d, t) {
                    d.merge(renderPreset(CL, t, 67.5))
                },
            },
            {
                id: '全員「ぼく/ら/をみちびくのは」',
                position: 60 * 6,
                extends: [GROUND_KENBAN2
                    , LED_LR,
                    COLOR_YELLOW
                ],
                render(d, t) {
                    d.merge(renderPreset(CL, t, 67.5))
                },
            },
            {
                id: '全員「ぼくらをみ/ち/びくのは」',
                position: 60 * 7,
                extends: [GROUND_KENBAN2
                    , LED_RR,
                    COLOR_PINK
                ],
                render(d, t) {
                    d.merge(renderPreset(CL, t, 67.5))
                },
            },
            {
                id: '全員「ぼくらをみちび/く/のは」',
                position: 60 * 8,
                extends: [GROUND_KENBAN2
                    , LED_LR,
                    COLOR_YELLOW
                ],
                render(d, t) {
                    d.merge(renderPreset(CL, t, 67.5))
                },
            },
            {
                id: '全員「ぼくらをみちびくの/は/」',
                position: 60 * 9,
                extends: [GROUND_KENBAN2
                    , LED_RR,
                    COLOR_EMERALD
                ],
                render(d, t) {
                    d.merge(renderPreset(CL, t, 67.5))
                },
            },
            {
                id: '全員「ぼくらをみちびくのは一拍あと //」',
                position: 60 * 10,
                extends: [GROUND_KENBAN2
                    , LED_LR,
                    COLOR_RED
                ],
                render(d, t) {
                    d.merge(renderPreset(CL, t, 67.5))
                },
            },
            {
                id: '全員「ぼくらをみちびくのは二拍あと //」',
                position: 60 * 11,
                extends: [GROUND_KENBAN2
                ],
                render(d, t) {
                    d.merge(renderPreset(CL, t, 67.5))
                },
            },
            {
                id: 'ドロシーはけ',
                position: 60 * 12,
            },
            {
                id: 'カテコ曲In後8小節目から',
                fade: 3,
                position: 60 * 20,
                extends: [
                    GROUND_KATEKO
                ]
            },
            {
                id: 'カテコ曲終わりドンの二秒後',
                position: 60 * 25,
            },
            {
                id: '客出し',
                position: 60 * 30,
                fade: 4,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 90))
                    d.merge(renderPreset(CL, t, 90))
                }
            },
        ]
    }]