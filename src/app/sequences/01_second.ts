import { Sequence } from '.'
import { COLOR_BLUEPURPLE_D, COLOR_BLUE_D, COLOR_BLUE_O, COLOR_GREENYELLOW_D, COLOR_GREEN_D, COLOR_GREEN_O, COLOR_LIGHTBLUE_D, COLOR_LIGHTBLUE_O, COLOR_ORANGE_D, COLOR_ORANGE_O, COLOR_REDYELLOW_D, COLOR_REDYELLOW_O, COLOR_RED_D, COLOR_RED_O, COLOR_WHITE_D, COLOR_WHITE_O, COLOR_YELLOWGREEN_D } from '../presets/colors'
import { LED_20_90, LED_20_D, LED_30_80, LED_50_D, LED_60_D, LED_60_O, LED_70_D, LED_75_O, LED_80_D, LED_80_O, LED_90_O, LED_ON_D, LED_ON_O } from '../presets/led'



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
            {
                id: '「/お/となの力に負けたりはしない俺たちの王は俺たちなんだ」',
                position: 60 * 5,
                extends:
                [
                    COLOR_WHITE_D,
                    COLOR_WHITE_O,
                    LED_60_D,
                    LED_60_O
                ]
            },
            {
                id: '「おとなの力に負けたりはしない俺たちの王は俺たちなんだ」の後の1拍目から',
                position: 60 * 6,
                extends:
                [
                    COLOR_WHITE_D,
                    COLOR_WHITE_O,
                    LED_20_90
                ]
            },
            {
                id: '「/あ/さから夜まで全ての時間を生きてる今感じ愛し愛たい」',
                position: 60 * 7,
                extends:
                [
                    COLOR_RED_D,
                    COLOR_BLUE_O,
                    LED_60_D,
                    LED_60_O
                ]
            },
            {
                id: '「「/お/となの力に負けたりはしない俺たちの王は俺たちなんだ」」',
                position: 60 * 8,
                extends:
                [
                    COLOR_RED_D,
                    COLOR_WHITE_O,
                    LED_80_D,
                    LED_80_O
                ]
            },
            {
                id: '「おとなの/ち/からに負けたりはしない俺たちの王は俺たちなんだ」',
                position: 60 * 9,
                extends:
                [
                    COLOR_BLUE_D,
                    COLOR_WHITE_O,
                    LED_60_D,
                    LED_80_O
                ]
            },
            {
                id: '「おとなのちか/ら/に負けたりはしない俺たちの王は俺たちなんだ」',
                position: 60 * 10,
                extends:
                [
                    COLOR_RED_D,
                    COLOR_BLUE_O,
                    LED_80_D,
                    LED_60_O
                ]
            },
            {
                id: '「/あ/さから」～「おれたちなん」4拍ずつ',
                position: 60 * 11,
                extends:
                [
                    COLOR_RED_D,
                    COLOR_WHITE_O,
                    LED_60_D,
                    LED_80_O
                ]
            },
            {
                id: '↓',
                position: 60 * 11 + 0.5 * 2,
                extends:
                [
                    COLOR_BLUE_D,
                    COLOR_WHITE_O,
                    LED_60_D,
                    LED_80_O
                ]
            },
            {
                id: '「おれたちなん/だ/」',
                position: 60 * 12 ,
                extends:
                [
                    COLOR_WHITE_D,
                    COLOR_WHITE_O,
                    LED_80_D,
                    LED_80_O
                ]
            },
            {
                id: '曲間MC',
                position: 60 * 15 ,
                fade:3
            },
        ],
        
    },
    {
        note: 'ずっと変わらないもの',
        steps: [
            {
                id: 'ニュートラル',
                position: 60 * 0,
            },
        ],
        
    },
    {
        note: 'All ask of you',
        steps: [
            {
                id: '曲In',
                fade: 4,
                position: 60 * 0,
                extends:[
                    LED_ON_D,
                    LED_ON_D,
                    COLOR_BLUEPURPLE_D,
                    COLOR_REDYELLOW_O
                ]
            },
            {
                id: '曲間MC,Brand New Day',
                fade: 3,
                position: 60 * 10,
            },
            
        ],
        
    },
    {
        note: 'Be our guest',
        steps: [
            {
                id: 'ニュートラル',
                position: 60 * 0,
            },
        ],
        
    },
    {
        note: '2人の世界',
        steps: [
            {
                id: '曲イン',
                position: 60 * 0,
                fade:2.5,
                extends:[
                    COLOR_BLUE_D,
                    COLOR_BLUE_O,
                    LED_60_D,
                    LED_60_O
                ]
            },
            {
                id: '/透/き通ったような一泊前',
                position: 60 * 1,
                fade:3,
                extends:[
                    COLOR_BLUE_D,
                    COLOR_WHITE_O,
                    LED_60_D,
                    LED_60_O
                ]
            },
            {
                id: 'Bメロ二人の心の二拍前',
                position: 60 * 2,
                fade:3,
                extends:[
                    COLOR_LIGHTBLUE_D,
                    COLOR_LIGHTBLUE_O,
                    LED_60_D,
                    LED_60_O
                ]
            },
            {
                id: 'サビ？/誰/も知らない私たちの夢が',
                position: 60 * 3,
                fade:1.5,
                extends:[
                    COLOR_WHITE_D,
                    COLOR_WHITE_D,
                    LED_60_D,
                    LED_60_O
                ]
            },
            {
                id: '蛍光灯着いたら,曲間MC、Free Free、生まれてはじめて',
                position: 60 * 4,
            },
        ],
        
    },
    {
        note: '私が生きてこなかった人生',
        steps: [
            {
                id: '曲In前',
                fade:3.4,
                position: 60 * 0,
                extends:[
                    COLOR_BLUEPURPLE_D,
                    COLOR_WHITE_O,
                    LED_70_D,
                    LED_80_O
                ]
            },
            {
                id: '「口に出さない心を/抱えた/ままで」',
                fade:1,
                position: 60 * 2,
                extends:[
                    COLOR_WHITE_D,
                    COLOR_WHITE_O,
                    LED_20_D,
                    LED_90_O
                ]
            },
            {
                id: '「私のつまらない人生」の後の4小節',
                fade:2.8,
                position: 60 * 3,
                extends:[
                    COLOR_WHITE_O,
                    LED_90_O
                ]
            },
            {
                id: '「空っぽな人生/でも/あなたが気づかせてくれた」',
                fade:1.8,
                position: 60 * 4,
                extends:[
                    COLOR_WHITE_O,
                    COLOR_WHITE_D,
                    LED_50_D,
                    LED_90_O
                ]
            },
            {
                id: '「しらないふりはもうできない助けて」の後の4小節で',
                fade:2.8,
                position: 60 * 5,
                extends:[
                    COLOR_WHITE_O,
                    LED_75_O
                ]
            },
            {
                id: '「例え傷ついても/扉は目の前で/私を待ってる」',
                fade:3.5,
                position: 60 * 6,
                extends:[
                    COLOR_WHITE_O,
                    COLOR_REDYELLOW_D,
                    LED_80_O,
                    LED_80_D
                ]
            },
            {
                id: '曲間MC',
                position: 60 * 10,
                fade:3
            },
        ],
        
    },
    {
        note: '不幸せな魂',
        steps: [
            {
                id: '曲in',
                position: 60 * 0,
                fade:6.36,
                extends:[
                    COLOR_BLUE_D,
                    COLOR_LIGHTBLUE_O,
                    LED_ON_D,
                    LED_ON_O
                ]
            },
            {
                id: '1サビ「/迷える人たちにの」',
                position: 60 * 1,
                fade:2.9,
                extends:[
                    COLOR_LIGHTBLUE_D,
                    COLOR_WHITE_O,
                    LED_ON_D,
                    LED_ON_O
                ]
            },
            {
                id: '１サビ直後「/お代払わ/ず踏み倒す」',
                position: 60 * 2,
                fade:1.7,
                extends:[
                    COLOR_GREEN_D,
                    COLOR_WHITE_O,
                    LED_ON_D,
                    LED_ON_O
                ]
            },
            {
                id: '「気の毒な子には//」後の8拍',
                position: 60 * 3,
                fade:3,
                extends:[
                    COLOR_BLUE_D,
                    COLOR_LIGHTBLUE_O,
                    LED_ON_D,
                    LED_ON_O
                ]
            },
            {
                id: '２サビ「/迷える/小魚」',
                position: 60 * 4,
                fade:2.73,
                extends:[
                    COLOR_BLUE_D,
                    COLOR_WHITE_O,
                    LED_ON_D,
                    LED_ON_O
                ]
            },
            {
                id: '終演MC',
                position: 60 * 10,
                fade:3
            },
        ],
        
    },
    {
        note: 'Seasons Of Love',
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
            {
                id: '「/お/となの力に負けたりはしない俺たちの王は俺たちなんだ」',
                position: 60 * 5,
                extends:
                [
                    COLOR_WHITE_D,
                    COLOR_WHITE_O,
                    LED_60_D,
                    LED_60_O
                ]
            },
            {
                id: '「おとなの力に負けたりはしない俺たちの王は俺たちなんだ」の後の1拍目から',
                position: 60 * 6,
                extends:
                [
                    COLOR_WHITE_D,
                    COLOR_WHITE_O,
                    LED_20_90
                ]
            },
            {
                id: '「/あ/さから夜まで全ての時間を生きてる今感じ愛し愛たい」',
                position: 60 * 7,
                extends:
                [
                    COLOR_RED_D,
                    COLOR_BLUE_O,
                    LED_60_D,
                    LED_60_O
                ]
            },
            {
                id: '「「/お/となの力に負けたりはしない俺たちの王は俺たちなんだ」」',
                position: 60 * 8,
                extends:
                [
                    COLOR_RED_D,
                    COLOR_WHITE_O,
                    LED_80_D,
                    LED_80_O
                ]
            },
            {
                id: '「おとなの/ち/からに負けたりはしない俺たちの王は俺たちなんだ」',
                position: 60 * 9,
                extends:
                [
                    COLOR_BLUE_D,
                    COLOR_WHITE_O,
                    LED_60_D,
                    LED_80_O
                ]
            },
            {
                id: '「おとなのちか/ら/に負けたりはしない俺たちの王は俺たちなんだ」',
                position: 60 * 10,
                extends:
                [
                    COLOR_RED_D,
                    COLOR_BLUE_O,
                    LED_80_D,
                    LED_60_O
                ]
            },
            {
                id: '「/あ/さから」～「おれたちなん」4拍ずつ',
                position: 60 * 11,
                extends:
                [
                    COLOR_RED_D,
                    COLOR_WHITE_O,
                    LED_60_D,
                    LED_80_O
                ]
            },
            {
                id: '↓',
                position: 60 * 11 + 0.5 * 2,
                extends:
                [
                    COLOR_BLUE_D,
                    COLOR_WHITE_O,
                    LED_60_D,
                    LED_80_O
                ]
            },
            {
                id: '「おれたちなん/だ/」',
                position: 60 * 12 ,
                extends:
                [
                    COLOR_WHITE_D,
                    COLOR_WHITE_O,
                    LED_80_D,
                    LED_80_O
                ]
            },
            {
                id: '曲間MC',
                position: 60 * 15 ,
                fade:3
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
                    LED_ON_D,
                    LED_ON_D,
                    COLOR_WHITE_D,
                    COLOR_WHITE_O
                ]
            },
            {
                id: '「受け取るわ 贈り物/」',
                position: 60 * 2,
                fade: 3.41,
                extends:[
                    LED_ON_D,
                    LED_ON_D,
                    COLOR_GREEN_O,
                    COLOR_GREEN_D
                ]
            },
            {
                id: '「自分の力 信じるわ/」～「彼は言うのよ/」',
                position: 60 * 4,
                fade: 4.5,
                extends:[
                    LED_ON_D,
                    LED_ON_D,
                    COLOR_GREENYELLOW_D,
                    COLOR_WHITE_O
                ]
            },
            {
                id: '「生まれ変わる 私が/」',
                position: 60 * 6,
                fade: 4.0,
                extends:[
                    LED_ON_D,
                    LED_ON_D,
                    COLOR_BLUE_D,
                    COLOR_LIGHTBLUE_O
                ]
            },
            {
                id: '「その日が/ 来た」',
                position: 60 * 7,
                extends:[
                    LED_ON_D,
                    LED_ON_D,
                    COLOR_GREEN_D,
                    COLOR_WHITE_O
                ]
            },
            {
                id: '曲間MC',
                position: 60 * 10,
                fade:3
            },
        ],
        
    },
    {
        note: '私が生きてこなかった人生',
        steps: [
            {
                id: '曲In前',
                fade:3.4,
                position: 60 * 0,
                extends:[
                    COLOR_BLUEPURPLE_D,
                    COLOR_WHITE_O,
                    LED_70_D,
                    LED_80_O
                ]
            },
            {
                id: '「口に出さない心を/抱えた/ままで」',
                fade:1,
                position: 60 * 2,
                extends:[
                    COLOR_WHITE_D,
                    COLOR_WHITE_O,
                    LED_20_D,
                    LED_90_O
                ]
            },
            {
                id: '「私のつまらない人生」の後の4小節',
                fade:2.8,
                position: 60 * 3,
                extends:[
                    COLOR_WHITE_O,
                    LED_90_O
                ]
            },
            {
                id: '「空っぽな人生/でも/あなたが気づかせてくれた」',
                fade:1.8,
                position: 60 * 4,
                extends:[
                    COLOR_WHITE_O,
                    COLOR_WHITE_D,
                    LED_50_D,
                    LED_90_O
                ]
            },
            {
                id: '「しらないふりはもうできない助けて」の後の4小節で',
                fade:2.8,
                position: 60 * 5,
                extends:[
                    COLOR_WHITE_O,
                    LED_75_O
                ]
            },
            {
                id: '「例え傷ついても/扉は目の前で/私を待ってる」',
                fade:3.5,
                position: 60 * 6,
                extends:[
                    COLOR_WHITE_O,
                    COLOR_REDYELLOW_D,
                    LED_80_O,
                    LED_80_D
                ]
            },
            {
                id: '曲間MC,ワンデイモア',
                position: 60 * 10,
                fade:3
            },
        ],
        
    },
]