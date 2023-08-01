import { Sequence } from '.'
import { renderPreset } from '..'
import { CL } from '../presets/cl'

import { GROUND_BASE, GROUND_ANOMITI, GROUND_KENBAN, GROUND_KOBITO, GROUND_SUS2 } from '../presets/ground'

export const M3: Sequence[] = [
    {
        note: 'M3',
        steps: [
            {
                id: 'M2ラスト',
                position: 0,
                extends: [GROUND_KOBITO],
            },
            {
                id: '小人A「し/ん/じられない！」',
                position: 60 * 1,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 180))
                    d.merge(renderPreset(CL, t, 180))
                }
            },
            {
                id: 'ドロシー「/あの道/」',
                position: 60 * 2,
                fade: 1.76,
                extends: [GROUND_ANOMITI],
            },
            {
                id: 'ドロシー「//エメラルドの街へ」',
                position: 60 * 3,
                extends: [
                    GROUND_ANOMITI,
                    GROUND_SUS2
                ],
            },
            {
                id: 'ドロシー「/何やら/」',
                position: 60 * 4,
                fade: 0.88,
                extends: [GROUND_KENBAN],
                render(d, t) {
                    d.merge(renderPreset(CL, t, 67.5))
                }
            },
            {
                id: '語り手in',
                position: 60 * 5,
                fade: 2,
                extends: [
                    GROUND_KENBAN
                ],
            },

        ],
    },
]
