import { Sequence } from '.'
import { COLOR_BLUE_D, COLOR_BLUE_O, COLOR_ORANGE_D, COLOR_ORANGE_O, COLOR_REDYELLOW_D, COLOR_RED_D, COLOR_RED_O, COLOR_WHITE_D, COLOR_WHITE_O, COLOR_YELLOWGREEN_D } from '../presets/colors'
import { LED_30_80, LED_60_D, LED_60_O, LED_80_D, LED_80_O } from '../presets/led'



export const second: Sequence[] = [
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
        note: '世界の王',
        steps: [
            {
                id: '曲In',
                fade:3,
                position: 60 * 0,
                extends:
                [
                    LED_60_D,
                    LED_80_O,
                    COLOR_RED_D,
                    COLOR_WHITE_O
                ]
            },
            {
                id: 'ここにいる俺たちだ//「やつらは気づかない」の一拍前',
                position: 60 * 1,
                extends:
                [
                    LED_60_D,
                    COLOR_BLUE_D,
                    LED_80_O,
                    COLOR_WHITE_O
                ]
            },
            {
                id: '「/あ/さから」～「おれたちなんだ」',
                position: 60 * 2,
                extends:
                [
                    COLOR_BLUE_D,
                    COLOR_WHITE_O,
                    LED_30_80
                ]
            },
            {
                id: '「/世/界のおうさ…」',
                position: 60 * 3,
                extends:
                [
                    COLOR_RED_D,
                    COLOR_BLUE_O,
                    LED_80_O,
                    LED_80_D
                ]
            },
            {
                id: '「//朝から夜まで」',
                position: 60 * 4,
                extends:
                [
                    COLOR_BLUE_D,
                    COLOR_BLUE_O,
                    LED_60_D,
                    LED_60_O
                ]
            },
            {
                id: '「↓」',
                position: 60 * 4 + (0.5*5),
                extends:
                [
                    COLOR_YELLOWGREEN_D,
                    COLOR_WHITE_O,
                    LED_60_D,
                    LED_60_O
                ]
            },
            {
                id: '「↓」',
                position: 60 * 4 + (0.5*9),
                extends:
                [
                    COLOR_REDYELLOW_D,
                    COLOR_WHITE_O,
                    LED_60_D,
                    LED_60_O
                ]
            },
            {
                id: '「↓」',
                position: 60 * 4 + (0.5*11),
                extends:
                [
                    COLOR_ORANGE_D,
                    COLOR_ORANGE_O,
                    LED_60_D,
                    LED_60_O
                ]
            },
            {
                id: '「↓」',
                position: 60 * 4 + (0.5*15),
                extends:
                [
                    COLOR_WHITE_D,
                    COLOR_WHITE_O,
                    LED_60_D,
                    LED_60_O
                ]
            },
            {
                id: '「↓」',
                position: 60 * 4 + (0.5*16),
                extends:
                [
                    COLOR_RED_D,
                    COLOR_RED_O,
                    LED_60_D,
                    LED_60_O
                ]
            },
            {
                id: '「↓」',
                position: 60 * 4 + (0.5*22),
                extends:
                [
                    COLOR_RED_D,
                    COLOR_WHITE_O,
                    LED_60_D,
                    LED_60_O
                ]
            },
        ],
        
    }
]