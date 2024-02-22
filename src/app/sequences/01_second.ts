import { Sequence } from '.'
import { COLOR_YELLOW } from '../presets/colors'
import { GROUND_BASE } from '../presets/ground'



export const second: Sequence[] = [
    {
        note: '客入れ',
        steps: [
            {
                id: '暗転',
                position: 60 * 0,
            },
            {
                id: '客入れ',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            },

        ],
        
    },
    
]