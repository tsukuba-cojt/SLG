import { Sequence } from '.'
import { renderPreset } from '..'
import { UNIVERSE, addrs } from '../consts'
import { COLOR_RED } from '../presets/colors'
import { LED_ON } from '../presets/led'

export const first: Sequence[] = [
    {
        note: 'グッドニュース',
        steps: [
            {
                id: 'ニュートラル',
                position: 60 * 0,
            },
        ],
        
    },
    {
        note: '魔法使いと私',
        steps: [
            {
                id: 'ニュートラル',
                position: 60 * 0,
            },
        ],
        
    }
]
