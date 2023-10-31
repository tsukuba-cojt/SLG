import { Sequence } from '.'
import { renderPreset } from '..'
import { UNIVERSE, addrs } from '../consts'
import { CL } from '../presets/cl'
import { COLOR_RED } from '../presets/colors'
import { GROUND_BASE, GROUND_TASUMAKI_CHASE2 } from '../presets/ground'
import { LED_CHASE_DOROTHY, LED_SINWAVE3 } from '../presets/led'

export const first: Sequence[] = [
    {
        note: 'グッドニュース',
        steps: [
            {
                id: 'ニュートラル',
                position: 60 * 0,
            },
        ],
        
    }]
