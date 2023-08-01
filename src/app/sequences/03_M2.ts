import { Sequence } from '.'
import { renderPreset } from '..'
import { CL } from '../presets/cl'
import { GROUND_BASE, GROUND_KOBITO, GROUND_TASUMAKI_CHASE1, GROUND_TASUMAKI_CHASE2, GROUND_TASUMAKI_CHASE3 } from '../presets/ground'

export const M2: Sequence[] = [
    {
        note: 'M2',
        steps: [
            {
                id: 'M1最後',
                position: 0,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 90))
                    d.merge(renderPreset(CL, t, 90))
                },
            },
            {
                id: 'M2in',
                position: 60 * 2,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 135))
                    d.merge(renderPreset(CL, t, 135))
                }
            },
            {
                id: '竜巻とかで/',
                position: 60 * 3,
                fade: 6.48,
                extends: [
                    GROUND_TASUMAKI_CHASE1
                ]
            },
            {
                id: 'ええ感じ',
                position: 60 * 3 + 6.48,
                extends: [
                    GROUND_TASUMAKI_CHASE2
                ]
            },
            {
                id: '/キャー',
                position: 60 * 3 + 10,
                extends: [
                    GROUND_TASUMAKI_CHASE3
                ]
            },
            {
                id: 'チェース終わり',
                position: 60 * 6,
                fade: 2.2,
                extends: [
                    GROUND_KOBITO,
                ],
            },
        ],
    },
]
