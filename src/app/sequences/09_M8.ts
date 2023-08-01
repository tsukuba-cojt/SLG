import { Sequence, render } from '.'
import { renderPreset } from '..'
import { CL } from '../presets/cl'
import { COLOR_ORANGE, COLOR_RED, COLOR_RED_PURPLE } from '../presets/colors'
import { GROUND_ANOMITI, GROUND_BASE, GROUND_SUS3 } from '../presets/ground'
import { LED_ON, LED_SINWAVE, LED_SINWAVE2, LED_SINWAVE3, LED_ZNEGO2_M8, LED_ZNEGO_M8, } from '../presets/led'

export const M8: Sequence[] = [
    {
        note: 'M8',
        steps: [
            {
                id: 'M7ラスト',
                position: 60 * 0,
            },
            {
                id: 'M8in',
                fade: 3.3,
                position: 60 * 1,
                extends: [
                    COLOR_RED,
                    LED_ZNEGO_M8
                ]
            },
            {
                id: '五小節目シンバル',
                position: 60 * 3,
                extends: [
                    COLOR_RED,
                    LED_ZNEGO2_M8,
                    GROUND_SUS3
                ]
            },
            {
                id: '↑',
                position: 60 * 3 + 0.5,
                extends: [
                    COLOR_RED,
                    LED_ZNEGO2_M8
                ]
            },
            {
                id: '7小節目シンバル',
                position: 60 * 4,
                extends: [
                    COLOR_RED,
                    LED_ZNEGO2_M8,
                    GROUND_SUS3
                ]
            },
            {
                id: '↑',
                position: 60 * 4 + 0.5,
                extends: [
                    COLOR_RED,
                    LED_ZNEGO2_M8
                ]
            },
            {
                id: 'ALL「/西の砦に鳴り響くMusic/」',
                fade: 7.88,
                position: 60 * 5,
                extends: [
                    COLOR_RED,
                    LED_ZNEGO2_M8
                ],
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 25.5))
                }
            },
            {
                id: 'さあput your hends upらへんの曲調変化',
                cycle: 60 / 140,
                position: 60 * 6,
                extends: [
                    COLOR_RED,
                    LED_SINWAVE
                ],
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 127.5))
                }
            },
            {
                id: 'うつ//くしい音色が泣いている',
                position: 60 * 7,
                cycle: 60 / 140,
                extends: [
                    COLOR_RED,
                    LED_SINWAVE2
                ],
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 127.5))
                }
            },
            {
                id: 'うつくしいね//いろが泣いている',
                position: 60 * 8,
                cycle: 60 / 140,
                fade: 0.1,
                extends: [
                    COLOR_RED,
                ],
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 127.5))
                }
            },
            {
                id: 'うつくしいねいろが泣//いている',
                position: 60 * 9,
                cycle: 60 / 140,
                extends: [
                    COLOR_RED,
                    LED_SINWAVE2
                ],
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 127.5))
                }
            },
            {
                id: 'うつくしいねいろが泣いて//いる',
                position: 60 * 10,
                cycle: 60 / 140,
                extends: [
                    COLOR_RED,
                ],
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 127.5))
                }
            },
            {
                id: 'うつくしいねいろが泣いてい//る',
                position: 60 * 11,
                cycle: 60 / 140,
                extends: [
                    COLOR_RED,
                    LED_SINWAVE
                ],
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 127.5))
                }
            },
            {
                id: '分かち合えないものに//意味などあるものか',
                position: 60 * 12,
                cycle: 60 / 140,
                extends: [
                    COLOR_RED,
                    LED_SINWAVE2
                ],
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 127.5))
                }
            },
            {
                id: '分かち合えないものに意味などあるものか/',
                position: 60 * 13,
                cycle: 60 / 140,
                extends: [
                    COLOR_RED,
                    LED_SINWAVE
                ],
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 127.5))
                }
            },
            {
                id: 'someone //please listen to my sounds',
                position: 60 * 14,
                cycle: 60 / 140,
                extends: [
                    COLOR_RED,
                    LED_SINWAVE2
                ],
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 127.5))
                }
            },
            {
                id: 'someone please //listen to my sounds',
                position: 60 * 15,
                cycle: 60 / 140,
                extends: [
                    COLOR_RED,
                ],
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 127.5))
                }
            },
            {
                id: 'someone please listen //to my sounds',
                position: 60 * 16,
                cycle: 60 / 140,
                extends: [
                    COLOR_RED,
                    LED_SINWAVE2
                ],
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 127.5))
                }
            },
            {
                id: 'someone please listen to //my sounds',
                position: 60 * 17,
                cycle: 60 / 140,
                extends: [
                    COLOR_RED,
                ],
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 127.5))
                }
            },
            {
                id: 'someone please listen to my //sounds',
                position: 60 * 18,
                cycle: 60 / 180,
                extends: [
                    COLOR_RED_PURPLE,
                    LED_SINWAVE3
                ],
            },
            {
                id: '間奏5小節目 /ちゃ、ちゃらら//ら、ちゃららら',
                position: 60 * 19,
                extends: [
                    COLOR_RED_PURPLE,
                    LED_ON]
            },
            {
                id: '↑',
                position: 60 * 19 + 0.01,
                fade: 0.4,
                extends: [
                    COLOR_RED_PURPLE,
                ],
            },
            {
                id: '間奏5小節目 ちゃ、ちゃららら、ちゃらら//ら',
                position: 60 * 20,
                extends: [
                    COLOR_RED_PURPLE,
                    LED_ON
                ],
            },
            {
                id: '↑',
                position: 60 * 20 + 0.01,
                fade: 1.46,
                extends: [
                    COLOR_RED_PURPLE,
                    GROUND_ANOMITI
                ],
            },
            {
                id: '「/ちゃ/、/ちゃ/、/ちゃ/、/ちゃ/、/ちゃ/」',
                position: 60 * 21,
                extends: [
                    COLOR_RED_PURPLE,
                    LED_ON
                ],
            },
            {
                id: '↑',
                position: 60 * 21 + 0.1,
                extends: [
                    COLOR_RED_PURPLE,
                ],
                render(d, t) {
                    d.merge(renderPreset(LED_ON, t, 25.5))
                },
            },
            {
                id: '「ちゃちゃちゃちゃちゃ/チャーン/',
                position: 60 * 22,
                fade: 0.75,
                extends: [
                    COLOR_ORANGE,
                    LED_ON
                ],
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 157.5))
                    d.merge(renderPreset(CL, t, 157.5))
                },
            },
            {
                id: '曲終わりのドン！',
                position: 60 * 23,
                render(d, t) {
                    d.merge(renderPreset(CL, t, 25.5))
                },
            },
            {
                id: '音楽の魔女in',
                fade: 2,
                position: 60 * 24,
                render(d, t) {
                    d.merge(renderPreset(CL, t, 90))
                    d.merge(renderPreset(GROUND_BASE, t, 90))
                },
            },

        ]
    }
]