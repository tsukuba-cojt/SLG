import { Sequence, render } from '.'
import { UNIVERSE, addrs } from '../consts'
import { renderPreset } from '..'
import { COLOR_BLUE_CENTER, COLOR_BLUE_OUT, COLOR_BLUE_U, COLOR_BLUE_UR, COLOR_NGR_1, COLOR_NGR_2, COLOR_NGR_3, COLOR_NGR_4, COLOR_PINK_CENTER, COLOR_PINK_SUS_L, COLOR_PINK_SUS_R, COLOR_PINK_UL, COLOR_RED_SUS_L, COLOR_RED_SUS_R, COLOR_WHITE_F, COLOR_WHITE_S, COLOR_WHITE_SUS_L, COLOR_WHITE_SUS_R, COLOR_YELLOW_SUS_L, COLOR_YELLOW_SUS_R } from '../presets/colors'
import { LED_S, LED_ST, LED_SUS_L, LED_SUS_R, LED_UL, LED_UR, ST_ALL } from '../presets/led'
import { SPOT, SUSFOR } from '../presets/cl'



export const second: Sequence[] = [
    {
        note: '暗転',
        steps: [
                {
                id: '暗転',
                position: 60 * 0,
                    },
                {
                id: '調整',
                position: 60 * 1,
                extends:[
                    SUSFOR,
                    SPOT
                ]
                    },
                ],
                
    },
    {
        note: 'アイドル',
        steps: [
                    {
                id: '曲in',
                position: 60 * 2 + 10,
                render(d, t) {
                    d.merge(renderPreset(SUSFOR, t, 85))
                },
                extends:[
                    LED_SUS_L,
                    LED_SUS_R,
                    COLOR_PINK_SUS_L,
                    COLOR_PINK_SUS_R
                ]
                    },
                    {
                id: 'キメ１',
                position: 60 * 3,
                render(d, t) {
                    d.merge(renderPreset(SUSFOR, t, 85))
                },
                extends:[
                    LED_SUS_L,
                    LED_SUS_R,
                    COLOR_RED_SUS_L,
                ]
                    },
                    {
                id: 'キメ2',
                position: 60 * 4,
                render(d, t) {
                    d.merge(renderPreset(SUSFOR, t, 85))
                },
                extends:[
                    LED_SUS_L,
                    LED_SUS_R,
                    COLOR_RED_SUS_R,
                ]
                    },
                {
                id: 'キメ3',
                position: 60 * 5,
                render(d, t) {
                    d.merge(renderPreset(SUSFOR, t, 85))
                },
                extends:[
                    LED_SUS_L,
                    LED_SUS_R,
                    COLOR_PINK_SUS_L,
                    COLOR_PINK_SUS_R
                ]
                    },
                    {
                id: 'キメ　知りたいその秘密',
                position: 60 * 7,
                render(d, t) {
                    d.merge(renderPreset(SUSFOR, t, 85))
                },
                extends:[
                    LED_SUS_L,
                    LED_SUS_R,
                    COLOR_RED_SUS_L,
                ]
                    },
                    {
                id: 'キメ',
                position: 60 * 8,
                render(d, t) {
                    d.merge(renderPreset(SUSFOR, t, 85))
                },
                extends:[
                    LED_SUS_L,
                    LED_SUS_R,
                    COLOR_RED_SUS_R,
                ]
                    },   
                    {
                id: 'キメ　抜けてるとこさえ',
                position: 60 * 9,
                render(d, t) {
                    d.merge(renderPreset(SUSFOR, t, 85))
                },
                extends:[
                    LED_SUS_L,
                    LED_SUS_R,
                    COLOR_YELLOW_SUS_R,
                    COLOR_YELLOW_SUS_L
                ]
                    }, 
                    {
                id: 'キメ',
                position: 60 * 10,
                render(d, t) {
                    d.merge(renderPreset(SUSFOR, t, 85))
                },
                extends:[
                    LED_SUS_L,
                    LED_SUS_R,
                    COLOR_WHITE_SUS_L
                ]
                    },
                    {
                id: 'キメ',
                position: 60 * 11,
                render(d, t) {
                    d.merge(renderPreset(SUSFOR, t, 85))
                },
                extends:[
                    LED_SUS_L,
                    LED_SUS_R,
                    COLOR_WHITE_SUS_R
                ]
                    },
                    {
                id: 'キメ　完璧で',
                position: 60 * 12,
                extends:[
                    LED_SUS_L,
                    LED_SUS_R,
                    COLOR_PINK_SUS_L,
                    COLOR_PINK_SUS_R
                ]
                    },  
                {
                id: 'キメ',
                position: 60 * 13,
                extends:[
                    LED_SUS_L,
                    LED_SUS_R,
                    COLOR_RED_SUS_L,
                ]
                    },
                    {
                id: 'キメ',
                position: 60 * 14,
                extends:[
                    LED_SUS_L,
                    LED_SUS_R,
                    COLOR_RED_SUS_R,
                ]
                    },
                {
                id: 'キメ',
                position: 60 * 15,
                extends:[
                    LED_SUS_L,
                    LED_SUS_R,
                    COLOR_PINK_SUS_L,
                    COLOR_PINK_SUS_R
                ]
                    }, 
                                {
                id: '間奏',
                position: 60 * 16,
                extends:[
                    LED_UL,
                    LED_UR,
                    COLOR_WHITE_F
                ]
                    },
                                                    {
                id: 'Aメロ',
                position: 60 * 17,
                cycle : 60/166,
                extends:[
                    COLOR_WHITE_F,
                    LED_SUS_L,
                    LED_SUS_R,
                    LED_UR,
                    LED_UL,
                    COLOR_NGR_1,
                    COLOR_NGR_2,
                    COLOR_NGR_3
                ]
                    }, 
                    {
                id: '誰かを好きになること',
                position: 60 * 18,
                extends:[
                    LED_SUS_L,
                    LED_SUS_R,
                    COLOR_BLUE_OUT,
                    COLOR_PINK_CENTER
                ]
                    },
                    {
                id: 'キメ　四回',
                position: 60 * 19,
                extends:[
                    LED_SUS_L,
                    LED_SUS_R,
                    LED_S,
                    LED_SUS_R,
                    LED_UL,
                    LED_UR,
                    COLOR_BLUE_OUT,
                    COLOR_PINK_CENTER,
                    COLOR_WHITE_F,
                    COLOR_WHITE_S
                ]
                    },
                    {
                id: '↓',
                position: 60 * 19 + 0.15,
                extends:[
                    LED_SUS_L,
                    LED_SUS_R,
                    COLOR_BLUE_OUT,
                    COLOR_PINK_CENTER
                ]
                    },
                    {
                id: '嘘か本当か知り得ない',
                position: 60 * 20,
                render(d, t) {
                    d.merge(renderPreset(SUSFOR, t, 85))
                },
                    }, 
                    {
                id: 'キメ　8回',
                position: 60 * 21,
                extends:[
                    LED_SUS_L,
                    LED_SUS_R,
                    COLOR_WHITE_SUS_L,
                    COLOR_WHITE_SUS_R,
                ]
                    },
                    {
                id: '↓',
                position: 60 * 21 + 0.15,
                render(d, t) {
                    d.merge(renderPreset(SUSFOR, t, 85))
                    }, 
                },
                                    {
                id: 'また一人落ちる//',
                position: 60 * 22,
                extends:[
                    LED_SUS_L,
                    LED_SUS_R,
                    COLOR_PINK_SUS_L,
                    COLOR_PINK_SUS_R
                ]
                }, 
                    {
                id: 'サビ',
                position: 60 * 23,
                render(d, t) {
                    d.merge(renderPreset(SUSFOR, t, 85))
                    }, 
                    cycle : 60/166,
                extends:[
                    LED_SUS_L,
                    LED_SUS_R,
                    COLOR_NGR_4,
                    LED_UL,
                    LED_UR,
                    COLOR_WHITE_F
                ]
                },
                {
                    id: 'キメ　二回',
                    position: 60 * 24,
                    cycle : 60/166,
                    extends:[
                        LED_SUS_L,
                        LED_SUS_R,
                        COLOR_WHITE_SUS_L,
                        COLOR_WHITE_SUS_R,
                        LED_UL,
                        LED_UR,
                        COLOR_WHITE_F
                    ]
                    }, 
                                    {
                    id: '↓',
                    position: 60 * 24 +0.15,
                    cycle : 60/166,
                    extends:[

                    ]
                    },
                                        {
                id: 'サビ',
                position: 60 * 25,
                render(d, t) {
                    d.merge(renderPreset(SUSFOR, t, 85))
                    }, 
                    cycle : 60/166,
                extends:[
                    LED_SUS_L,
                    LED_SUS_R,
                    COLOR_NGR_4,
                    LED_UL,
                    LED_UR,
                    COLOR_WHITE_F
                ]
                },
                {
                    id: 'AH その笑顔で',
                    position: 60 * 26,
                    render(d, t) {
                        d.merge(renderPreset(SUSFOR, t, 85))
                        }, 
                        cycle : 60/166,
                    extends:[
                        LED_SUS_L,
                        LED_SUS_R,
                        LED_UL,
                        LED_UR,
                        COLOR_WHITE_F,
                        COLOR_YELLOW_SUS_R,
                        COLOR_YELLOW_SUS_L
                    ]
                    }, 
                    {
                    id: '得意の笑顔で　隠しきるこの秘密だけは4回',
                    position: 60 * 27,
                    extends:[
                        LED_SUS_L,
                        LED_SUS_R,
                        COLOR_PINK_SUS_R,
                        COLOR_PINK_SUS_L
                    ]
                    }, 
                    {
                    id: '↓',
                    position: 60*27 + (60/166)*6,
                    extends:[
                        LED_SUS_L,
                        LED_SUS_R,
                        COLOR_RED_SUS_L
                    ]
                    }, 
                                        {
                    id: '↓',
                    position: 60*27 + (60/166)*7,
                    extends:[
                        LED_SUS_L,
                        LED_SUS_R,
                        COLOR_RED_SUS_R
                    ]
                    },
                                        {
                    id: '流れる汗も綺麗なアクア',
                    position: 60 * 28,
                    extends:[
                        LED_SUS_L,
                        LED_SUS_R,
                        COLOR_PINK_SUS_R,
                        COLOR_PINK_SUS_L,
                        COLOR_BLUE_U,
                        LED_ST
                    ]
                    },
                    {
                    id: '↓',
                    position: 60 * 28 + 3,
                    fade :10,
                    extends:[
                        LED_SUS_L,
                        LED_SUS_R,
                        COLOR_PINK_SUS_R,
                        COLOR_PINK_SUS_L,
                        LED_UL,
                        LED_UR,
                        LED_ST,
                        COLOR_BLUE_U,
                    ]
                    },
                    {
                        id: '嘘は飛び切りの愛だ　//',
                        position: 60 * 29,
                        fade :1.3825 ,
                        extends:[
                        ]
                        } ,
                    {
                        id: '↓',
                        position: 60 * 29 + 1.3825,
                        fade :0.3,
                        extends:[
                            SPOT,
                            COLOR_BLUE_CENTER,
                            LED_SUS_L,
                            LED_SUS_R
                        ]
                        },
                        {
                        id: 'いつかきっと全部手に入れる 12',
                        position: 60 * 30,
                        extends:[
                            COLOR_WHITE_SUS_L,
                            COLOR_WHITE_SUS_R,
                            LED_SUS_L,
                            LED_SUS_R,
                            COLOR_WHITE_S,
                            LED_S
                        ]
                        },
                        {
                        id: '↓',
                        position: 60 * 30 +0.12,
                        render(d, t) {
                            d.merge(renderPreset(LED_SUS_L, t, 67.5))
                            d.merge(renderPreset(LED_SUS_R, t, 67.5))
                            }, 
                        extends:[
                            COLOR_WHITE_SUS_L,
                            COLOR_WHITE_SUS_R,
                        ]
                        },
                        {
                        id: 'よ//くばりな',
                        position: 60 * 31,
                        extends:[
                            COLOR_WHITE_SUS_L,
                            COLOR_WHITE_SUS_R,
                            LED_SUS_L,
                            LED_SUS_R,
                            COLOR_WHITE_S,
                            LED_S
                        ]
                        },
                        {
                            id: '等身大でみんなのこと 裏拍',
                            position: 60 * 32,
                            extends:[
                                COLOR_WHITE_SUS_L,
                                COLOR_WHITE_SUS_R,
                                LED_SUS_L,
                                LED_SUS_R,
                                COLOR_WHITE_S,
                                LED_S
                            ]
                            }, 
                            {
                            id: '↓',
                            position: 60 * 32+0.12,
                            extends:[
                                COLOR_WHITE_SUS_L,
                                COLOR_WHITE_SUS_R,
                                LED_SUS_L,
                                LED_SUS_R,
                            ]
                            }, 
                {
                            id: 'AH やっと言えた',
                            position: 60 * 33,
                            extends:[
LED_UL,
LED_UR,
COLOR_BLUE_UR,
COLOR_PINK_UL,
SPOT
                            ]
                            },
                                             {
                            id: '愛してる',
                            position: 60 * 34,
                            extends:[
LED_UL,
LED_UR,
COLOR_WHITE_F,
COLOR_WHITE_S,
LED_S,
SPOT
                            ]
                            },
                            
                            {
                                id: '最後',
                                position: 60 * 36,
                                extends:[
    LED_UL,
    LED_UR,
    COLOR_WHITE_F,
    COLOR_WHITE_S,
    LED_S,
    COLOR_WHITE_SUS_L,
    COLOR_WHITE_SUS_R,
    LED_SUS_L,
    LED_SUS_R,
    ST_ALL
                                ]
                                },
                                {
                                    id: '↓',
                                    position: 60 * 36 + 0.63,
                                    },      
                ],
                
                
    },
]
//     {
//         note: 'グッドニュース',
//         steps: [
//             {
//                 id: 'ニュートラル',
//                 position: 60 * 0,
//             },
//         ],
        
//     },
//     {
//         note: '世界の王',
//         steps: [
//             {
//                 id: '曲In',
//                 fade:3,
//                 position: 60 * 0,
//                 extends:
//                 [
//                     LED_60_D,
//                     LED_80_O,
//                     COLOR_RED_D,
//                     COLOR_WHITE_O
//                 ]
//             },
//             {
//                 id: 'ここにいる俺たちだ//「やつらは気づかない」の一拍前',
//                 position: 60 * 1,
//                 extends:
//                 [
//                     LED_60_D,
//                     COLOR_BLUE_D,
//                     LED_80_O,
//                     COLOR_WHITE_O
//                 ]
//             },
//             {
//                 id: '「/あ/さから」～「おれたちなんだ」',
//                 position: 60 * 2,
//                 extends:
//                 [
//                     COLOR_BLUE_D,
//                     COLOR_WHITE_O,
//                     LED_30_80
//                 ]
//             },
//             {
//                 id: '「/世/界のおうさ…」',
//                 position: 60 * 3,
//                 extends:
//                 [
//                     COLOR_RED_D,
//                     COLOR_BLUE_O,
//                     LED_80_O,
//                     LED_80_D
//                 ]
//             },
//             {
//                 id: '「//朝から夜まで」',
//                 position: 60 * 4,
//                 extends:
//                 [
//                     COLOR_BLUE_D,
//                     COLOR_BLUE_O,
//                     LED_60_D,
//                     LED_60_O
//                 ]
//             },
//             {
//                 id: '「↓」',
//                 position: 60 * 4 + (0.25*5),
//                 extends:
//                 [
//                     COLOR_YELLOWGREEN_D,
//                     COLOR_WHITE_O,
//                     LED_60_D,
//                     LED_60_O
//                 ]
//             },
//             {
//                 id: '「↓」',
//                 position: 60 * 4 + (0.25*9),
//                 extends:
//                 [
//                     COLOR_REDYELLOW_D,
//                     COLOR_WHITE_O,
//                     LED_60_D,
//                     LED_60_O
//                 ]
//             },
//             {
//                 id: '「↓」',
//                 position: 60 * 4 + (0.25*11),
//                 extends:
//                 [
//                     COLOR_ORANGE_D,
//                     COLOR_ORANGE_O,
//                     LED_60_D,
//                     LED_60_O
//                 ]
//             },
//             {
//                 id: '「↓」',
//                 position: 60 * 4 + (0.25*15),
//                 extends:
//                 [
//                     COLOR_WHITE_D,
//                     COLOR_WHITE_O,
//                     LED_60_D,
//                     LED_60_O
//                 ]
//             },
//             {
//                 id: '「↓」',
//                 position: 60 * 4 + (0.25*16),
//                 extends:
//                 [
//                     COLOR_RED_D,
//                     COLOR_RED_O,
//                     LED_60_D,
//                     LED_60_O
//                 ]
//             },
//             {
//                 id: '「↓」',
//                 position: 60 * 4 + (0.25*22),
//                 extends:
//                 [
//                     COLOR_RED_D,
//                     COLOR_WHITE_O,
//                     LED_60_D,
//                     LED_60_O
//                 ]
//             },
//             {
//                 id: '「/お/となの力に負けたりはしない俺たちの王は俺たちなんだ」',
//                 position: 60 * 5,
//                 extends:
//                 [
//                     COLOR_WHITE_D,
//                     COLOR_WHITE_O,
//                     LED_60_D,
//                     LED_60_O
//                 ]
//             },
//             {
//                 id: '「おとなの力に負けたりはしない俺たちの王は俺たちなんだ」の後の1拍目から',
//                 position: 60 * 6,
//                 extends:
//                 [
//                     COLOR_WHITE_D,
//                     COLOR_WHITE_O,
//                     LED_20_90
//                 ]
//             },
//             {
//                 id: '「/あ/さから夜まで全ての時間を生きてる今感じ愛し愛たい」',
//                 position: 60 * 7,
//                 extends:
//                 [
//                     COLOR_RED_D,
//                     COLOR_BLUE_O,
//                     LED_60_D,
//                     LED_ON_O
//                 ]
//             },
//             {
//                 id: '「「/お/となの力に負けたりはしない俺たちの王は俺たちなんだ」」',
//                 position: 60 * 8,
//                 extends:
//                 [
//                     COLOR_RED_D,
//                     COLOR_WHITE_O,
//                     LED_80_D,
//                     LED_80_O
//                 ]
//             },
//             {
//                 id: '「おとなの/ち/からに負けたりはしない俺たちの王は俺たちなんだ」',
//                 position: 60 * 9,
//                 extends:
//                 [
//                     COLOR_BLUE_D,
//                     COLOR_WHITE_O,
//                     LED_60_D,
//                     LED_80_O
//                 ]
//             },
//             {
//                 id: '「おとなのちか/ら/に負けたりはしない俺たちの王は俺たちなんだ」',
//                 position: 60 * 10,
//                 extends:
//                 [
//                     COLOR_RED_D,
//                     COLOR_BLUE_O,
//                     LED_80_D,
//                     LED_ON_O
//                 ]
//             },
//             {
//                 id: '「/あ/さから」～「おれたちなん」4拍ずつ',
//                 position: 60 * 11,
//                 extends:
//                 [
//                     COLOR_RED_D,
//                     COLOR_WHITE_O,
//                     LED_60_D,
//                     LED_80_O
//                 ]
//             },
//             {
//                 id: '↓',
//                 position: 60 * 11 + 0.5 * 2,
//                 extends:
//                 [
//                     COLOR_BLUE_D,
//                     COLOR_WHITE_O,
//                     LED_60_D,
//                     LED_80_O
//                 ]
//             },
//             {
//                 id: '「おれたちなん/だ/」',
//                 position: 60 * 12 ,
//                 extends:
//                 [
//                     COLOR_WHITE_D,
//                     COLOR_WHITE_O,
//                     LED_80_D,
//                     LED_80_O
//                 ]
//             },
//             {
//                 id: '曲間MC',
//                 position: 60 * 15 ,
//                 fade:3
//             },
//         ],
//     },
//     {
//         note: 'ずっと変わらないもの',
//         steps: [
//             {
//                 id: 'ニュートラル',
//                 position: 60 * 0,
//             },
//         ],
        
//     },
//     {
//         note: 'All ask of you',
//         steps: [
//             {
//                 id: '曲In',
//                 fade: 4,
//                 position: 60 * 0,
//                 extends:[
//                     LED_ON_D,
//                     LED_ON_D,
//                     COLOR_BLUEPURPLE_D,
//                     COLOR_REDYELLOW_O
//                 ]
//             },
//             {
//                 id: '曲間MC,Brand New Day',
//                 fade: 3,
//                 position: 60 * 10,
//             },
            
//         ],
        
//     },
//     {
//         note: 'Be our guest',
//         steps: [
//             {
//                 id: 'ニュートラル',
//                 position: 60 * 0,
//             },
//         ],
        
//     },
//     {
//         note: '2人の世界',
//         steps: [
//             {
//                 id: '曲イン',
//                 position: 60 * 0,
//                 fade:2.5,
//                 extends:[
//                     COLOR_BLUE_D,
//                     COLOR_BLUE_O,
//                     LED_60_D,
//                     LED_60_O
//                 ]
//             },
//             {
//                 id: '歌いだし/透/き通ったような一泊前',
//                 position: 60 * 1,
//                 fade:3,
//                 extends:[
//                     COLOR_BLUE_D,
//                     COLOR_WHITE_O,
//                     LED_60_D,
//                     LED_60_O
//                 ]
//             },
//             {
//                 id: 'Bメロ二人の心の二拍前',
//                 position: 60 * 2,
//                 fade:3,
//                 extends:[
//                     COLOR_LIGHTBLUE_D,
//                     COLOR_LIGHTBLUE_O,
//                     LED_60_D,
//                     LED_60_O
//                 ]
//             },
//             {
//                 id: 'サビ？/誰/も知らない私たちの夢が',
//                 position: 60 * 3,
//                 fade:1.5,
//                 extends:[
//                     COLOR_WHITE_D,
//                     COLOR_WHITE_O,
//                     LED_60_D,
//                     LED_60_O
//                 ]
//             },
//             {
//                 id: '蛍光灯着いたら,曲間MC、Free Free、生まれてはじめて',
//                 position: 60 * 10,
//             },
//         ],
        
//     },
//     {
//         note: '私が生きてこなかった人生',
//         steps: [
//             {
//                 id: '曲In前',
//                 fade:3.4,
//                 position: 60 * 0,
//                 extends:[
//                     COLOR_BLUEPURPLE_D,
//                     COLOR_WHITE_O,
//                     LED_70_D,
//                     LED_80_O
//                 ]
//             },
//             {
//                 id: '「口に出さない心を/抱えた/ままで」',
//                 fade:1,
//                 position: 60 * 2,
//                 extends:[
//                     COLOR_WHITE_D,
//                     COLOR_WHITE_O,
//                     LED_20_D,
//                     LED_90_O
//                 ]
//             },
//             {
//                 id: '「私のつまらない人生」の後の4小節',
//                 fade:2.8,
//                 position: 60 * 3,
//                 extends:[
//                     COLOR_WHITE_O,
//                     LED_90_O
//                 ]
//             },
//             {
//                 id: '「空っぽな人生/でも/あなたが気づかせてくれた」',
//                 fade:1.8,
//                 position: 60 * 4,
//                 extends:[
//                     COLOR_WHITE_O,
//                     COLOR_WHITE_D,
//                     LED_50_D,
//                     LED_90_O
//                 ]
//             },
//             {
//                 id: '「しらないふりはもうできない助けて」の後の4小節で',
//                 fade:2.8,
//                 position: 60 * 5,
//                 extends:[
//                     COLOR_WHITE_O,
//                     LED_75_O
//                 ]
//             },
//             {
//                 id: '「例え傷ついても/扉は目の前で/私を待ってる」',
//                 fade:3.5,
//                 position: 60 * 6,
//                 extends:[
//                     COLOR_WHITE_O,
//                     COLOR_REDYELLOW_D,
//                     LED_80_O,
//                     LED_80_D
//                 ]
//             },
//             {
//                 id: '曲間MC',
//                 position: 60 * 10,
//                 fade:3
//             },
//         ],
        
//     },
//     {
//         note: '不幸せな魂',
//         steps: [
//             {
//                 id: '曲in',
//                 position: 60 * 0,
//                 fade:3,
//                 extends:[
//                     COLOR_BLUE_D,
//                     COLOR_LIGHTBLUE_O,
//                     LED_ON_D,
//                     LED_ON_O
//                 ]
//             },
//             {
//                 id: '1サビ「/迷える人たちにの」',
//                 position: 60 * 1,
//                 fade:2.9,
//                 extends:[
//                     COLOR_LIGHTBLUE_D,
//                     COLOR_WHITE_O,
//                     LED_ON_D,
//                     LED_ON_O
//                 ]
//             },
//             {
//                 id: '１サビ直後「/お代払わ/ず踏み倒す」',
//                 position: 60 * 2,
//                 fade:1.7,
//                 extends:[
//                     COLOR_GREEN_D,
//                     COLOR_WHITE_O,
//                     LED_ON_D,
//                     LED_ON_O
//                 ]
//             },
//             {
//                 id: '「気の毒な子には//」後の8拍',
//                 position: 60 * 3,
//                 fade:3,
//                 extends:[
//                     COLOR_BLUE_D,
//                     COLOR_LIGHTBLUE_O,
//                     LED_ON_D,
//                     LED_ON_O
//                 ]
//             },
//             {
//                 id: '２サビ「/迷える/小魚」',
//                 position: 60 * 4,
//                 fade:2.73,
//                 extends:[
//                     COLOR_BLUE_D,
//                     COLOR_WHITE_O,
//                     LED_ON_D,
//                     LED_ON_O
//                 ]
//             },
//             {
//                 id: '終演MC',
//                 position: 60 * 10,
//                 fade:3
//             },
//         ],
        
//     },
//     {
//         note: 'Seasons Of Love',
//         steps: [
//             {
//                 id: 'ニュートラル',
//                 position: 60 * 0,
//             },
//         ],
        
//     },
//     {
//         note: '世界の王',
//         steps: [
//             {
//                 id: '曲In',
//                 fade:3,
//                 position: 60 * 0,
//                 extends:
//                 [
//                     LED_60_D,
//                     LED_80_O,
//                     COLOR_RED_D,
//                     COLOR_WHITE_O
//                 ]
//             },
//             {
//                 id: 'ここにいる俺たちだ//「やつらは気づかない」の一拍前',
//                 position: 60 * 1,
//                 extends:
//                 [
//                     LED_60_D,
//                     COLOR_BLUE_D,
//                     LED_80_O,
//                     COLOR_WHITE_O
//                 ]
//             },
//             {
//                 id: '「/あ/さから」～「おれたちなんだ」',
//                 position: 60 * 2,
//                 extends:
//                 [
//                     COLOR_BLUE_D,
//                     COLOR_WHITE_O,
//                     LED_30_80
//                 ]
//             },
//             {
//                 id: '「/世/界のおうさ…」',
//                 position: 60 * 3,
//                 extends:
//                 [
//                     COLOR_RED_D,
//                     COLOR_BLUE_O,
//                     LED_80_O,
//                     LED_80_D
//                 ]
//             },
//             {
//                 id: '「//朝から夜まで」',
//                 position: 60 * 4,
//                 extends:
//                 [
//                     COLOR_BLUE_D,
//                     COLOR_BLUE_O,
//                     LED_60_D,
//                     LED_60_O
//                 ]
//             },
//             {
//                 id: '「↓」',
//                 position: 60 * 4 + (0.25*5),
//                 extends:
//                 [
//                     COLOR_YELLOWGREEN_D,
//                     COLOR_WHITE_O,
//                     LED_60_D,
//                     LED_60_O
//                 ]
//             },
//             {
//                 id: '「↓」',
//                 position: 60 * 4 + (0.25*9),
//                 extends:
//                 [
//                     COLOR_REDYELLOW_D,
//                     COLOR_WHITE_O,
//                     LED_60_D,
//                     LED_60_O
//                 ]
//             },
//             {
//                 id: '「↓」',
//                 position: 60 * 4 + (0.25*11),
//                 extends:
//                 [
//                     COLOR_ORANGE_D,
//                     COLOR_ORANGE_O,
//                     LED_60_D,
//                     LED_60_O
//                 ]
//             },
//             {
//                 id: '「↓」',
//                 position: 60 * 4 + (0.25*15),
//                 extends:
//                 [
//                     COLOR_WHITE_D,
//                     COLOR_WHITE_O,
//                     LED_60_D,
//                     LED_60_O
//                 ]
//             },
//             {
//                 id: '「↓」',
//                 position: 60 * 4 + (0.25*16),
//                 extends:
//                 [
//                     COLOR_RED_D,
//                     COLOR_RED_O,
//                     LED_60_D,
//                     LED_60_O
//                 ]
//             },
//             {
//                 id: '「↓」',
//                 position: 60 * 4 + (0.25*22),
//                 extends:
//                 [
//                     COLOR_RED_D,
//                     COLOR_WHITE_O,
//                     LED_60_D,
//                     LED_60_O
//                 ]
//             },
//             {
//                 id: '「/お/となの力に負けたりはしない俺たちの王は俺たちなんだ」',
//                 position: 60 * 5,
//                 extends:
//                 [
//                     COLOR_WHITE_D,
//                     COLOR_WHITE_O,
//                     LED_60_D,
//                     LED_60_O
//                 ]
//             },
//             {
//                 id: '「おとなの力に負けたりはしない俺たちの王は俺たちなんだ」の後の1拍目から',
//                 position: 60 * 6,
//                 extends:
//                 [
//                     COLOR_WHITE_D,
//                     COLOR_WHITE_O,
//                     LED_20_90
//                 ]
//             },
//             {
//                 id: '「/あ/さから夜まで全ての時間を生きてる今感じ愛し愛たい」',
//                 position: 60 * 7,
//                 extends:
//                 [
//                     COLOR_RED_D,
//                     COLOR_BLUE_O,
//                     LED_60_D,
//                     LED_60_O
//                 ]
//             },
//             {
//                 id: '「「/お/となの力に負けたりはしない俺たちの王は俺たちなんだ」」',
//                 position: 60 * 8,
//                 extends:
//                 [
//                     COLOR_RED_D,
//                     COLOR_WHITE_O,
//                     LED_80_D,
//                     LED_80_O
//                 ]
//             },
//             {
//                 id: '「おとなの/ち/からに負けたりはしない俺たちの王は俺たちなんだ」',
//                 position: 60 * 9,
//                 extends:
//                 [
//                     COLOR_BLUE_D,
//                     COLOR_WHITE_O,
//                     LED_60_D,
//                     LED_80_O
//                 ]
//             },
//             {
//                 id: '「おとなのちか/ら/に負けたりはしない俺たちの王は俺たちなんだ」',
//                 position: 60 * 10,
//                 extends:
//                 [
//                     COLOR_RED_D,
//                     COLOR_BLUE_O,
//                     LED_80_D,
//                     LED_60_O
//                 ]
//             },
//             {
//                 id: '「/あ/さから」～「おれたちなん」4拍ずつ',
//                 position: 60 * 11,
//                 extends:
//                 [
//                     COLOR_RED_D,
//                     COLOR_WHITE_O,
//                     LED_60_D,
//                     LED_80_O
//                 ]
//             },
//             {
//                 id: '↓',
//                 position: 60 * 11 + 0.25 * 2,
//                 extends:
//                 [
//                     COLOR_BLUE_D,
//                     COLOR_WHITE_O,
//                     LED_60_D,
//                     LED_80_O
//                 ]
//             },
//             {
//                 id: '「おれたちなん/だ/」',
//                 position: 60 * 12 ,
//                 extends:
//                 [
//                     COLOR_WHITE_D,
//                     COLOR_WHITE_O,
//                     LED_80_D,
//                     LED_80_O
//                 ]
//             },
//             {
//                 id: '曲間MC',
//                 position: 60 * 15 ,
//                 fade:3
//             },
//         ],
        
//     },
//     {
//         note: '魔法使いと私',
//         steps: [
//             {
//                 id: '「ああ、ミス・エルファバ！/」',
//                 position: 60 * 0,
//                 fade: 3.5,
//                 extends:[
//                     LED_ON_D,
//                     LED_ON_D,
//                     COLOR_WHITE_D,
//                     COLOR_WHITE_O
//                 ]
//             },
//             {
//                 id: '「受け取るわ 贈り物/」',
//                 position: 60 * 2,
//                 fade: 3.41,
//                 extends:[
//                     LED_ON_D,
//                     LED_ON_D,
//                     COLOR_GREEN_O,
//                     COLOR_GREEN_D
//                 ]
//             },
//             {
//                 id: '「自分の力 信じるわ/」～「彼は言うのよ/」',
//                 position: 60 * 4,
//                 fade: 4.5,
//                 extends:[
//                     LED_ON_D,
//                     LED_ON_D,
//                     COLOR_GREENYELLOW_D,
//                     COLOR_WHITE_O
//                 ]
//             },
//             {
//                 id: '「生まれ変わる 私が/」',
//                 position: 60 * 6,
//                 fade: 4.0,
//                 extends:[
//                     LED_ON_D,
//                     LED_ON_D,
//                     COLOR_BLUE_D,
//                     COLOR_LIGHTBLUE_O
//                 ]
//             },
//             {
//                 id: '「その日が/ 来た」',
//                 position: 60 * 7,
//                 extends:[
//                     LED_ON_D,
//                     LED_ON_D,
//                     COLOR_GREEN_D,
//                     COLOR_WHITE_O
//                 ]
//             },
//             {
//                 id: '曲間MC',
//                 position: 60 * 10,
//                 fade:3
//             },
//         ],
        
//     },
//     {
//         note: '私が生きてこなかった人生',
//         steps: [
//             {
//                 id: '曲In前',
//                 fade:3.4,
//                 position: 60 * 0,
//                 extends:[
//                     COLOR_BLUEPURPLE_D,
//                     COLOR_WHITE_O,
//                     LED_70_D,
//                     LED_80_O
//                 ]
//             },
//             {
//                 id: '「口に出さない心を/抱えた/ままで」',
//                 fade:1,
//                 position: 60 * 2,
//                 extends:[
//                     COLOR_WHITE_D,
//                     COLOR_WHITE_O,
//                     LED_20_D,
//                     LED_90_O
//                 ]
//             },
//             {
//                 id: '「私のつまらない人生」の後の4小節',
//                 fade:2.8,
//                 position: 60 * 3,
//                 extends:[
//                     COLOR_WHITE_O,
//                     LED_90_O
//                 ]
//             },
//             {
//                 id: '「空っぽな人生/でも/あなたが気づかせてくれた」',
//                 fade:1.8,
//                 position: 60 * 4,
//                 extends:[
//                     COLOR_WHITE_O,
//                     COLOR_WHITE_D,
//                     LED_50_D,
//                     LED_90_O
//                 ]
//             },
//             {
//                 id: '「しらないふりはもうできない助けて」の後の4小節で',
//                 fade:2.8,
//                 position: 60 * 5,
//                 extends:[
//                     COLOR_WHITE_O,
//                     LED_75_O
//                 ]
//             },
//             {
//                 id: '「例え傷ついても/扉は目の前で/私を待ってる」',
//                 fade:3.5,
//                 position: 60 * 6,
//                 extends:[
//                     COLOR_WHITE_O,
//                     COLOR_REDYELLOW_D,
//                     LED_80_O,
//                     LED_80_D
//                 ]
//             },
//             {
//                 id: '曲間MC,ワンデイモア',
//                 position: 60 * 10,
//                 fade:3
//             },
//         ],
        
//     },
//     {
//         note: 'ダミー',     
//         steps: [
//             {
//                 id: '曲In',
//                 fade:3,
//                 position: 60 * 0,
//                 extends:
//                 [
//                     LED_60_D,
//                     LED_80_O,
//                     COLOR_RED_D,
//                     COLOR_WHITE_O
//                 ]
//             },
//             {
//                 id: 'ここにいる俺たちだ//「やつらは気づかない」の一拍前',
//                 position: 60 * 1,
//                 extends:
//                 [
//                     LED_60_D,
//                     COLOR_BLUE_D,
//                     LED_80_O,
//                     COLOR_WHITE_O
//                 ]
//             },
//             {
//                 id: '「/あ/さから」～「おれたちなんだ」',
//                 position: 60 * 2,
//                 extends:
//                 [
//                     COLOR_BLUE_D,
//                     COLOR_WHITE_O,
//                     LED_30_80
//                 ]
//             },
//             {
//                 id: '「/世/界のおうさ…」',
//                 position: 60 * 3,
//                 extends:
//                 [
//                     COLOR_RED_D,
//                     COLOR_BLUE_O,
//                     LED_80_O,
//                     LED_80_D
//                 ]
//             },
//             {
//                 id: '「//朝から夜まで」',
//                 position: 60 * 4,
//                 extends:
//                 [
//                     COLOR_BLUE_D,
//                     COLOR_BLUE_O,
//                     LED_60_D,
//                     LED_60_O
//                 ]
//             },
//             {
//                 id: '「↓」',
//                 position: 60 * 4 + (0.25*5),
//                 extends:
//                 [
//                     COLOR_YELLOWGREEN_D,
//                     COLOR_WHITE_O,
//                     LED_60_D,
//                     LED_60_O
//                 ]
//             },
//             {
//                 id: '「↓」',
//                 position: 60 * 4 + (0.25*9),
//                 extends:
//                 [
//                     COLOR_REDYELLOW_D,
//                     COLOR_WHITE_O,
//                     LED_60_D,
//                     LED_60_O
//                 ]
//             },
//             {
//                 id: '「↓」',
//                 position: 60 * 4 + (0.25*11),
//                 extends:
//                 [
//                     COLOR_ORANGE_D,
//                     COLOR_ORANGE_O,
//                     LED_60_D,
//                     LED_60_O
//                 ]
//             },
//             {
//                 id: '「↓」',
//                 position: 60 * 4 + (0.25*15),
//                 extends:
//                 [
//                     COLOR_WHITE_D,
//                     COLOR_WHITE_O,
//                     LED_60_D,
//                     LED_60_O
//                 ]
//             },
//             {
//                 id: '「↓」',
//                 position: 60 * 4 + (0.25*16),
//                 extends:
//                 [
//                     COLOR_RED_D,
//                     COLOR_RED_O,
//                     LED_60_D,
//                     LED_60_O
//                 ]
//             },
//             {
//                 id: '「↓」',
//                 position: 60 * 4 + (0.25*22),
//                 extends:
//                 [
//                     COLOR_RED_D,
//                     COLOR_WHITE_O,
//                     LED_60_D,
//                     LED_60_O
//                 ]
//             },
//             {
//                 id: '「/お/となの力に負けたりはしない俺たちの王は俺たちなんだ」',
//                 position: 60 * 5,
//                 extends:
//                 [
//                     COLOR_WHITE_D,
//                     COLOR_WHITE_O,
//                     LED_60_D,
//                     LED_60_O
//                 ]
//             },
//             {
//                 id: '「おとなの力に負けたりはしない俺たちの王は俺たちなんだ」の後の1拍目から',
//                 position: 60 * 6,
//                 extends:
//                 [
//                     COLOR_WHITE_D,
//                     COLOR_WHITE_O,
//                     LED_20_90
//                 ]
//             },
//             {
//                 id: '「/あ/さから夜まで全ての時間を生きてる今感じ愛し愛たい」',
//                 position: 60 * 7,
//                 extends:
//                 [
//                     COLOR_RED_D,
//                     COLOR_BLUE_O,
//                     LED_60_D,
//                     LED_ON_O
//                 ]
//             },
//             {
//                 id: '「「/お/となの力に負けたりはしない俺たちの王は俺たちなんだ」」',
//                 position: 60 * 8,
//                 extends:
//                 [
//                     COLOR_RED_D,
//                     COLOR_WHITE_O,
//                     LED_80_D,
//                     LED_80_O
//                 ]
//             },
//             {
//                 id: '「おとなの/ち/からに負けたりはしない俺たちの王は俺たちなんだ」',
//                 position: 60 * 9,
//                 extends:
//                 [
//                     COLOR_BLUE_D,
//                     COLOR_WHITE_O,
//                     LED_60_D,
//                     LED_80_O
//                 ]
//             },
//             {
//                 id: '「おとなのちか/ら/に負けたりはしない俺たちの王は俺たちなんだ」',
//                 position: 60 * 10,
//                 extends:
//                 [
//                     COLOR_RED_D,
//                     COLOR_BLUE_O,
//                     LED_80_D,
//                     LED_ON_O
//                 ]
//             },
//             {
//                 id: '「/あ/さから」～「おれたちなん」4拍ずつ',
//                 position: 60 * 11,
//                 extends:
//                 [
//                     COLOR_RED_D,
//                     COLOR_WHITE_O,
//                     LED_60_D,
//                     LED_80_O
//                 ]
//             },
//             {
//                 id: '↓',
//                 position: 60 * 11 + 0.5 * 2,
//                 extends:
//                 [
//                     COLOR_BLUE_D,
//                     COLOR_WHITE_O,
//                     LED_60_D,
//                     LED_80_O
//                 ]
//             },
//             {
//                 id: '「おれたちなん/だ/」',
//                 position: 60 * 12 ,
//                 extends:
//                 [
//                     COLOR_WHITE_D,
//                     COLOR_WHITE_O,
//                     LED_80_D,
//                     LED_80_O
//                 ]
//             },
//             {
//                 id: '曲間MC',
//                 position: 60 * 15 ,
//                 fade:3
//             },
//         ],
//     },
//     {
//         note: 'ずっと変わらないもの',
//         steps: [
//             {
//                 id: 'ニュートラル',
//                 position: 60 * 0,
//             },
//         ],
        
//     },
// ]