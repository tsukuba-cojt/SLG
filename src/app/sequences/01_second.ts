import { on } from 'events'
import { Sequence } from '.'
import { renderPreset } from '..'
import { UNIVERSE, addrs } from '../consts'
import { SF } from '../presets/cl'
import { COLOR_BLUE, COLOR_BLUEPURPLE, COLOR_M14_1, COLOR_M14_2, COLOR_M14_3, COLOR_M14_4, COLOR_M14_5, COLOR_ORANGE1, COLOR_PURPLE, COLOR_RED, COLOR_REDANDPURPLE, COLOR_USUPINK, COLOR_WHITE, COLOR_YELLOW } from '../presets/colors'
import { GROUND_1, GROUND_2, GROUND_3, GROUND_BASE } from '../presets/ground'
import { LED_CHASE_M7, LED_ON } from '../presets/led'



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

    {
        note: 'シーン１',
        steps: [
            {
                id: '真理梨沙登場',
                position: 60 * 1,
                extends:[]
            },
            {
                id: '探偵団登場',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            },
            {
                id: 'M1in',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            },
            {
                id: 'M1後5s',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            },
            {
                id: '江雪in',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            },
            {
                id: '梨沙out',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            },
            {
                id: '江雪前キワ',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            },

        ],
        
    },

   
    {
        note: 'シーン２',
        steps: [
            {
                id: '江雪out2s後',
                position: 60 * 0,
            },
            {
                id: 'M2',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            },
            {
                id: 'M2後',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            },


        ],
        
    },

    {
        note: 'シーン３',
        steps: [
            {
                id: 'M3',
                position: 60 * 0,
            },
            {
                id: 'M3後',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            },
            {
                id: 'アナウンス',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            },
            {
                id: 'アナウンス後',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            },
            {
                id: 'クルミout後',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            },


        ],
        
    },

    {
        note: 'シーン４',
        steps: [
            {
                id: 'M4in',
                position: 60 * 0,
            },
            {
                id: '真理はけ後',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            }
            


        ],
        
    },

    {
        note: 'シーン５',
        steps: [
            {
                id: 'M5in',
                position: 60 * 0,
            },
            {
                id: 'M5歌in',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            },
            {
                id: '誠in',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            }
            


        ],
        
    },

    {
        note: 'シーン６',
        steps: [
            {
                id: 'M6最初のevrybody',
                position: 60 * 0,
            },
            {
                id: 'M6最後のみんなでsayyeah',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            }
        ],
        
    },

    
    {
        note: 'シーン7',
        steps: [
            {
                id: '迅話出し',
                position: 60 * 0,
                fade:1,
                render(d, t,a = 80 * 2.25,b = 30 * 2.25,c = 60 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, c))
                    d.merge(renderPreset(SF, t, c))
                  },
            },
            {
                id: '江雪なあお前たち',
                position: 60 * 1,
                render(d, t,a = 50 * 2.25,b = 30 * 2.25,c = 70 * 2.25) {
                    d.merge(renderPreset(GROUND_1, t, a))
                    d.merge(renderPreset(GROUND_2, t, a))
                    d.merge(renderPreset(GROUND_3, t, b))
                    d.merge(renderPreset(SF, t, a))
                  },
                  extends:[
                    LED_ON,
                    COLOR_BLUEPURPLE
                  ]
            },
            {
                id: '江雪罰を受けなきゃ',
                fade:1,
                position: 60 * 10,
                render(d, t,a = 50 * 2.25,b = 30 * 2.25,c = 70 * 2.25) {
                    d.merge(renderPreset(SF, t, a))
                  },
                  extends:[
                    LED_ON,
                    COLOR_BLUEPURPLE
                  ]
            },
            {
                id: '前奏のドラムin',
                position: 60 * 11,
                render(d, t,a = 50 * 2.25,b = 30 * 2.25,c = 70 * 2.25) {
                    d.merge(renderPreset(SF, t, a))
                  },
                extends:[
                    LED_ON,
                    COLOR_RED
                ]
            },
            {
                id: '俺たちのアクション届け/(ダダダダッダダダダッ)/ここを繰り返す',
                position: 60 * 11,
                cycle:60/(158*8),
                extends:[
                    LED_CHASE_M7,
                    COLOR_RED
                ]
            },
            {
                id: '↓0.38秒後',
                position: 60 * 11 + 0.38,
                extends:[
                    COLOR_RED
                ]
            },
            {
                id: 'Hi!/間奏/そびえたつ ここを繰り返す',
                position: 60 * 11 + 0.38,
                extends:[
                    COLOR_RED,
                    LED_ON
                ]
            },
            {
                id: '↓0.38秒後',
                position: 60 * 11 + 0.38,
                extends:[
                    COLOR_RED,
                ]
            },
            {
                id: '↓0.38秒後',
                position: 60 * 11 + 0.76,
                extends:[
                    COLOR_BLUE,
                    LED_ON
                ]
            },
            {
                id: '↓0.38秒後',
                position: 60 * 11 + 1.14,
                extends:[
                    COLOR_RED,
                ]
            },
            {
                id: '/限/界点',
                position: 60 * 1,
                extends:[
                    COLOR_RED,
                    LED_ON
                ]
            },
            {
                id: '江雪「俺たちはもう止まらない!」後の江雪の高笑いから3sでF.O.',
                position: 60 * 1,
                fade:1,
            }
        ],
        
    },

    {
        note: 'シーン8',
        steps: [
            {
                id: 'アナウンス2s後',
                position: 60 * 0,
                fade:1,
                render(d, t,a = 80 * 2.25,b = 30 * 2.25,c = 70 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, c))
                    d.merge(renderPreset(SF, t, c))
                  },

            },
            {
                id: 'M8in',
                position: 60 * 1,
                fade:1,
                render(d, t,a = 80 * 2.25,b = 30 * 2.25,c = 70 * 2.25) {
                    d.merge(renderPreset(GROUND_1, t, a))
                    d.merge(renderPreset(GROUND_2, t, b))
                    d.merge(renderPreset(GROUND_3, t, b))
                    d.merge(renderPreset(SF, t, c))
                  },
            },
            {
                id: 'M8後',
                position: 60 * 1,
                fade:1,
                render(d, t,a = 80 * 2.25,b = 30 * 2.25,c = 70 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, c))
                    d.merge(renderPreset(SF, t, c))
                  },
            }
           
        ],
        
    },

    {
        note: 'シーン９',
        steps: [
            {
                id: '梨沙in',
                position: 60 * 0,
                fade:1,
                render(d, t,a = 45 * 2.25,b = 70 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(SF, t, a))
                  },
            },
            {
                id: 'M9in',
                position: 60 * 1,
                fade:1,
                render(d, t,a = 75 * 2.25,b = 20 * 2.25) {
                    d.merge(renderPreset(GROUND_2, t, a))
                    d.merge(renderPreset(SF, t, a))
                  },
            },
            {
                id: 'M9out',
                position: 60 * 1,
                fade:1,
                render(d, t,b = 70 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, b))
                    d.merge(renderPreset(SF, t, b))
                  },
            },
            {
                id: '梨沙崩れ落ちる',
                position: 60 * 1,
                fade:1,
                render(d, t,a = 50 * 2.25) {
                    d.merge(renderPreset(GROUND_2, t, a))
                    d.merge(renderPreset(SF, t, a))
                  },
            }
           
        ],
        
    },

    {
        note: 'シーン10',
        steps: [
            {
                id: 'M10in',
                position: 60 * 0,
                fade:1,
                render(d, t,a = 60 * 2.25,c = 70 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(LED_ON, t, c))
                    d.merge(renderPreset(SF, t, a))
                  },
                extends:[
                    COLOR_USUPINK
                ]
            },
            {
                id: 'M10out1s後',
                position: 60 * 1,
                fade:1,
                render(d, t,a = 80 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(SF, t, a))
                  },
            },
            {
                id: 'かな誠ハケ後',
                position: 60 * 1,
                fade:1,
                render(d, t,a = 80 * 2.25, b = 20*2.25) {
                    d.merge(renderPreset(GROUND_1, t, a))
                    d.merge(renderPreset(GROUND_2, t, b))
                  },
            }
           
        ],
        
    },

    {
        note: 'シーン11',
        steps: [
            {
                id: 'M11in',
                position: 60 * 0,
                fade:1,
                render(d, t,a = 30 * 2.25, b = 40 * 2.25,c = 70 * 2.25) {
                    d.set(UNIVERSE, addrs.SUS_3B, a)
                    d.set(UNIVERSE, addrs.SUS_3A, a)
                    d.set(UNIVERSE, addrs.SUS_3C, a)
                    d.merge(renderPreset(LED_ON, t, b))
                    d.merge(renderPreset(SF, t, c))
                  },
                extends:[
                    COLOR_WHITE
                ]
            },
            {
                id: '俺たちの経験',
                position: 60 * 1,
                fade:1,
                render(d, t,a = 30 * 2.25,c = 70 * 2.25) {
                    d.set(UNIVERSE, addrs.SUS_3B, a)
                    d.set(UNIVERSE, addrs.SUS_3A, a)
                    d.set(UNIVERSE, addrs.SUS_3C, a)
                    d.merge(renderPreset(SF, t, c))
                  },
                extends:[
                    COLOR_WHITE,
                    LED_ON
                ]
            },
            {
                id: 'できないことなんてない',
                position: 60 * 1,
                fade:1,
                render(d, t,a = 50 * 2.25,b = 10 * 2.25,c = 70 * 2.25) {
                    d.merge(renderPreset(SF, t, c))
                    d.merge(renderPreset(GROUND_1, t, a))
                    d.merge(renderPreset(GROUND_2, t, b))
                    d.merge(renderPreset(GROUND_3, t, b))
                  },
                extends:[
                    COLOR_WHITE,
                    LED_ON
                ]
            },
            {
                id: 'M11out',
                position: 60 * 1,
                fade:1,
                render(d, t,a = 80 * 2.25,b = 20 * 2.25,c = 70 * 2.25) {
                    d.merge(renderPreset(SF, t, c))
                    d.merge(renderPreset(GROUND_1, t, a))
                    d.merge(renderPreset(GROUND_2, t, b))
                  },
            },
            {
                id: '江雪殺すなよ',
                position: 60 * 1,
                fade:1,
                render(d, t,a = 50 * 2.25,c = 50 * 2.25) {
                    d.merge(renderPreset(SF, t, c))
                    d.merge(renderPreset(GROUND_BASE, t, a))
                  },
            }
           
        ],
        
    },

    {
        note: 'シーン12',
        steps: [
            {
                id: 'M12in',
                position: 60 * 0,
                fade:1,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 67.5))
                    d.merge(renderPreset(LED_ON, t, 157.5))
                  },
                extends:[
                    COLOR_ORANGE1
                ]
            },
            {
                id: '皆で奴らを捕まえろ',
                fade:1,
                position: 60 * 1,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 67.5))
                  },
            },
            {
                id: 'どんな相手でも（ペアのとこ）',
                position: 60 * 1,
                fade:1,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 67.5))
                  },
                extends:[
                    COLOR_RED,
                    LED_ON
                ]
            },
            {
                id: 'M12out',
                position: 60 * 1,
                fade:1,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 157.5))
                  },
            },
            {
                id: 'AJハケ後',
                position: 60 * 1,
                render(d, t,a = 50 * 2.25) {
                    d.set(UNIVERSE, addrs.SUS_1A, a)
                    d.set(UNIVERSE, addrs.SUS_1E, a)
                    d.set(UNIVERSE, addrs.SUS_3A, a)
                    d.set(UNIVERSE, addrs.SUS_3C, a)
                  },
            },
            {
                id: '誠サス落とし',
                position: 60 * 1,
                render(d, t,a = 50 * 2.25) {
                    d.set(UNIVERSE, addrs.SUS_1E, a)
                    d.set(UNIVERSE, addrs.SUS_3A, a)
                    d.set(UNIVERSE, addrs.SUS_3C, a)
                  },
            },
            {
                id: '↓',
                position: 60 * 1,
                render(d, t,a = 50 * 2.25) {
                    d.set(UNIVERSE, addrs.SUS_1E, a)
                    d.set(UNIVERSE, addrs.SUS_3A, a)
                  },
            },
            {
                id: '↓',
                position: 60 * 1,
                render(d, t,a = 50 * 2.25) {
                    d.set(UNIVERSE, addrs.SUS_3A, a)                  },
            },
            {
                id: '照明アウト',
                position: 60 * 1,
            }
           
           
        ],
        
    },

    {
        note: 'シーン13',
        steps: [
            {
                id: '江雪、来路in',
                position: 60 * 0,
                render(d, t,a =101.25) {
                    d.merge(renderPreset(GROUND_BASE, t, 22.5))
                    d.merge(renderPreset(SF, t, 101.25))
                    d.set(UNIVERSE, addrs.SUS_2B, a)
                  },
            },
            {
                id: 'M13in',
                position: 60 * 0,
                fade:1,
                render(d, t,a =101.25) {
                    d.merge(renderPreset(GROUND_BASE, t, 22.5))
                    d.merge(renderPreset(SF, t, 101.25))
                    d.merge(renderPreset(LED_ON, t, 157.5))
                    d.set(UNIVERSE, addrs.SUS_2B, a)
                  },
                extends:[
                    COLOR_PURPLE,
                ]
            },
            {
                id: '/あ/なたの本当の優しさは',
                position: 60 * 0,
                fade:1,
                render(d, t,a =101.25) {
                    d.merge(renderPreset(GROUND_BASE, t, 22.5))
                    d.merge(renderPreset(SF, t, 101.25))
                    d.merge(renderPreset(LED_ON, t, 157.5))
                    d.set(UNIVERSE, addrs.SUS_2B, a)
                  },
                extends:[
                    COLOR_RED
                ]
            },
            {
                id: '/お/前になんか何が分かる',
                position: 60 * 0,
                fade:1,
                render(d, t,a =101.25) {
                    d.merge(renderPreset(GROUND_BASE, t, 22.5))
                    d.merge(renderPreset(SF, t, 101.25))
                    d.merge(renderPreset(LED_ON, t, 157.5))
                    d.set(UNIVERSE, addrs.SUS_2B, a)
                  },
                extends:[
                    COLOR_PURPLE
                ]
            },
            {
                id: '/大/事な明日を手に入れると',
                position: 60 * 0,
                fade:1,
                render(d, t,a =101.25) {
                    d.merge(renderPreset(GROUND_BASE, t, 22.5))
                    d.merge(renderPreset(SF, t, 101.25))
                    d.merge(renderPreset(LED_ON, t, 157.5))
                    d.set(UNIVERSE, addrs.SUS_2B, a)
                  },
                extends:[
                    COLOR_REDANDPURPLE
                ]
            }
            
        ],
        
    },

    {
        note: 'シーン14',
        steps: [
            {
                id: 'かな誠in',
                position: 60 * 0,
                fade:1,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 112.5))
                    d.merge(renderPreset(SF, t, 112.5))
                  },
            },
            {
                id: 'くるみ「２人が助けに」',
                position: 60 * 1,
                fade:1,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 157.5))
                    d.merge(renderPreset(SF, t, 157.5))
                  },
            },
            {
                id: 'M14in',
                position: 60 * 1,
                fade:1,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 191.25))
                    d.merge(renderPreset(SF, t, 191.25))
                  },
                extends:[
                    COLOR_M14_1,
                    LED_ON
                ]
            },
            {
                id: '蒼紫・迅in',
                position: 60 * 1,
                fade:1,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 191.25))
                    d.merge(renderPreset(SF, t, 191.25))
                  },
                extends:[
                    COLOR_M14_2,
                    LED_ON
                ]
            },
            {
                id: '/流れる/星々が(楓in)',
                position: 60 * 1,
                fade:1,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 191.25))
                    d.merge(renderPreset(SF, t, 191.25))
                  },
                extends:[
                    COLOR_M14_3,
                    LED_ON
                ]
            },
            {
                id: '/星の下で見た景色/',
                position: 60 * 1,
                fade:1,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 191.25))
                    d.merge(renderPreset(SF, t, 191.25))
                  },
                extends:[
                    COLOR_M14_4,
                    LED_ON
                ]
            },
            {
                id: '/乗り越えていくたびに/',
                position: 60 * 1,
                fade:1,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 191.25))
                    d.merge(renderPreset(SF, t, 191.25))
                  },
                extends:[
                    COLOR_M14_5,
                    LED_ON
                ]
            },
            {
                id: 'ダンスタイム終わり～歌い始め',
                position: 60 * 1,
                fade:1,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 191.25))
                    d.merge(renderPreset(SF, t, 191.25))
                  },
            },
            {
                id: 'ダンスタイム終わり～歌い始め',
                position: 60 * 1,
                fade:1,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 191.25))
                    d.merge(renderPreset(SF, t, 191.25))
                  },
            },
            {
                id: '/願いを叶えてく/',
                position: 60 * 1,
                fade:1,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 191.25))
                  },
                  extends:[
                    SF
                  ]
            }
           
        ],
        
    },

    {
        note: 'キャストハケ後',
        steps: [
            {
                id: '客電',
                fade:1,
                position: 60 * 0,
                extends:[
                    GROUND_BASE,
                    SF
                ]
            }
  
           
        ],
        
    }






    
]