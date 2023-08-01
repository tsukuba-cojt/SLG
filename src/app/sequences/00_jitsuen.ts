import { Sequence } from '.'
import { renderPreset } from '..'
import { UNIVERSE, addrs } from '../consts'
import { CL } from '../presets/cl'
import { COLOR_RED } from '../presets/colors'
import { GROUND_BASE, GROUND_TASUMAKI_CHASE2 } from '../presets/ground'
import { LED_CHASE_DOROTHY, LED_SINWAVE3 } from '../presets/led'

export const jitsuen: Sequence[] = [
    {
        note: 'JITSUEN',
        steps: [
            {
                id: '暗転',
                position: 60 * 0,
            },
            {
                id: 'sus2_2',
                position: 60 * 1,
                render(d, _, a = 255) {
                    d.set(UNIVERSE, addrs.SUS2_2, a)
                }
            },
            {
                id: 'CHASE  ',
                position: 60 * 5,
                extends: [
                    GROUND_TASUMAKI_CHASE2
                ]
            },
            {
                id: 'sinwave',
                position: 60 * 10,
                extends: [
                    LED_SINWAVE3,
                    COLOR_RED
                ]
            },
        ]
    }]
