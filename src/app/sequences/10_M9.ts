import { Sequence, render } from '.'
import { renderPreset } from '..'
import { CL } from '../presets/cl'
import { COLOR_BLUE, COLOR_EMERALD, COLOR_PINK, COLOR_RED, COLOR_YELLOW } from '../presets/colors'
import { GROUND_BASE } from '../presets/ground'
import { LED_LR, LED_RR } from '../presets/led'

export const M9: Sequence[] = [
    {
        note: 'M9',
        steps: [
            {
                id: 'M8ラスト',
                position: 60 * 0,
                render(d, t) {
                    d.merge(renderPreset(CL, t, 90))
                    d.merge(renderPreset(GROUND_BASE, t, 90))
                },
            },
            {
                id: 'M9in',
                fade: 2.5,
                position: 60 * 2,
                render(d, t) {
                    d.merge(renderPreset(CL, t, 157.5))
                    d.merge(renderPreset(GROUND_BASE, t, 157.5))
                },
            },
            {
                id: 'ALL「叶えていま」のまから数え始めて4小節目の音楽の魔女はギターを弾いてるみたいになぞったのに合わせて',
                position: 60 * 3,
                fade: 1.5,
                extends: [
                    COLOR_EMERALD,
                    LED_LR,
                    LED_RR
                ],
                render(d, t) {
                    d.merge(renderPreset(CL, t, 157.5))
                    d.merge(renderPreset(GROUND_BASE, t, 157.5))
                },
            },
            {
                id: 'カカシ「/想いを唄に/出来るのは」',
                position: 60 * 4,
                fade: 0.5,
                extends: [
                    COLOR_BLUE,
                    LED_LR,
                    LED_RR
                ],
                render(d, t) {
                    d.merge(renderPreset(CL, t, 157.5))
                    d.merge(renderPreset(GROUND_BASE, t, 157.5))
                },
            },
            {
                id: 'ロボット「/好きな唄/を口ずさむと」',
                position: 60 * 5,
                fade: 0.5,
                extends: [
                    COLOR_PINK,
                    LED_LR,
                    LED_RR
                ],
                render(d, t) {
                    d.merge(renderPreset(CL, t, 157.5))
                    d.merge(renderPreset(GROUND_BASE, t, 157.5))
                },
            },
            {
                id: 'ライオン「/大きな声を/あげて唄を歌えるのは」',
                position: 60 * 6,
                fade: 0.5,
                extends: [
                    COLOR_YELLOW,
                    LED_LR,
                    LED_RR
                ],
                render(d, t) {
                    d.merge(renderPreset(CL, t, 157.5))
                    d.merge(renderPreset(GROUND_BASE, t, 157.5))
                },
            },
            {
                id: '西の魔女「/そして声/を合わせて」',
                position: 60 * 7,
                fade: 0.5,
                extends: [
                    COLOR_RED,
                    LED_LR,
                    LED_RR
                ],
                render(d, t) {
                    d.merge(renderPreset(CL, t, 157.5))
                    d.merge(renderPreset(GROUND_BASE, t, 157.5))
                },
            },
            {
                id: 'ALL「/それが友達/」',
                position: 60 * 8,
                fade: 2.1,
                render(d, t) {
                    d.merge(renderPreset(CL, t, 157.5))
                    d.merge(renderPreset(GROUND_BASE, t, 157.5))
                },
            },
            {
                id: '全「/それがMusic/」のあたりではけ始めたら',
                position: 60 * 9,
                fade: 5.2,
                render(d, t) {
                    d.merge(renderPreset(CL, t, 135))
                    d.merge(renderPreset(GROUND_BASE, t, 90))
                },
            }
        ]
    }]