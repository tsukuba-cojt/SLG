import { Sequence } from '.'
import { renderPreset } from '..'
import { CL } from '../presets/cl'
import { GROUND_BASE } from '../presets/ground'
export const M1: Sequence[] = [

    {
        note: '幕開き',
        steps: [
            {
                id: '客電',
                position: 0,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 127))
                },
            },
            {
                id: '語り手in',
                position: 10 * 60,
                fade: 2,
            },
        ],
    },
    {
        note: 'M1',
        steps: [
            {
                id: 'M1in一小節',
                position: 0,
            },
            {
                id: '謳いだし一小節前',
                position: 60,
                fade: 3.6,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 90))
                    d.merge(renderPreset(CL, t, 90))
                },
            },
        ],
    },
]
