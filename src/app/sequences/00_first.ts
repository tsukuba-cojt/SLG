import { Sequence } from '.'
import { COLOR_BLUEPURPLE_D, COLOR_BLUEPURPLE_O, COLOR_BLUE_D, COLOR_GREENYELLOW_D, COLOR_GREEN_D, COLOR_GREEN_O, COLOR_LIGHTBLUE_O, COLOR_REDYELLOW_O, COLOR_WHITE_D, COLOR_WHITE_O } from '../presets/colors'
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
                id: '「ああ、ミス・エルファバ！/」',
                position: 60 * 0,
                fade: 3.5,
                extends:[
                    LED_ON,
                    COLOR_WHITE_D,
                    COLOR_WHITE_O
                ]
            },
            {
                id: '「受け取るわ 贈り物/」',
                position: 60 * 2,
                fade: 3.41,
                extends:[
                    LED_ON,
                    COLOR_GREEN_O,
                    COLOR_GREEN_D
                ]
            },
            {
                id: '「自分の力 信じるわ/」～「彼は言うのよ/」',
                position: 60 * 4,
                fade: 4.5,
                extends:[
                    LED_ON,
                    COLOR_GREENYELLOW_D,
                    COLOR_WHITE_O
                ]
            },
            {
                id: '「生まれ変わる 私が/」',
                position: 60 * 6,
                fade: 4.0,
                extends:[
                    LED_ON,
                    COLOR_BLUE_D,
                    COLOR_LIGHTBLUE_O
                ]
            },
            {
                id: '「その日が/ 来た」',
                position: 60 * 7,
                extends:[
                    LED_ON,
                    COLOR_GREEN_D,
                    COLOR_WHITE_O
                ]
            },
            {
                id: '曲間MC',
                position: 60 * 10
            },
        ],
        
    },
    {
        note: 'うそつきは魔法の始まり',
        steps: [
            {
                id: '曲in',
                position: 60 * 0,
            },
            {
                id: '指パッチンSE',
                position: 60 * 0 + 30,//10
                extends:[
                    COLOR_GREEN_O,
                    COLOR_GREEN_D,
                    LED_ON
                ]
            },
            {
                id: 'もういいだろう 真実はこんなもんさ/',
                position: 60 * 2 + 30,//40
            },
            {
                id: 'いいえまばゆい輝き放つオズの魔法使い/',
                position: 60 * 3,
                extends:[
                    COLOR_GREEN_O,
                    COLOR_GREEN_D,
                    LED_ON
                ]
            },
            {
                id: '曲間MC',
                position: 60 * 8
            },
        ],
        
    },
    {
        note: '素敵な友達',
        steps: [
            {
                id: 'ニュートラル',
                position: 60 * 0,
            },
        ],
        
    },
    {
        note: 'ALL ASK OF YOU',
        steps: [
            {
                id: '曲In',
                fade: 4,
                position: 60 * 0,
                extends:[
                    LED_ON,
                    COLOR_BLUEPURPLE_D,
                    COLOR_REDYELLOW_O
                ]
            },
        ],
        
    },
    {
        note: '終演MC',
        steps: [
            {
                id: 'ニュートラル',
                position: 60 * 0,
            },
        ],
        
    },
    {
        note: '二公演目',
        steps: [
            {
                id: 'ニュートラル',
                position: 60 * 0,
            },
        ],
        
    },
    {
        note: 'Brand New Days',
        steps: [
            {
                id: 'ニュートラル',
                position: 60 * 0,
            },
        ],
        
    },
    {
        note: 'あなたを失いたくない',
        steps: [
            {
                id: '曲in',
                fade:2.3,
                position: 60 * 0,
                extends:[
                    LED_ON,
                    COLOR_BLUEPURPLE_D,
                    COLOR_BLUEPURPLE_O
                ]
            },
        ],
        
    },
    {
        note: '曲間MC',
        steps: [
            {
                id: 'ニュートラル',
                position: 60 * 0,
            },
        ],
        
    },
    {
        note: 'Hail Holy Queen,ダンスはやめられない,時が来た',
        steps: [
            {
                id: 'ニュートラル',
                position: 60 * 0,
            },
        ],
        
    },
]
