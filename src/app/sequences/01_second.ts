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
            },
            {
                id: '江雪なあお前たち',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            },
            {
                id: '江雪罰を受けなきゃ',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            },
            {
                id: 'M7',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            },
            {
                id: 'M7後暗転',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            }
        ],
        
    },

    {
        note: 'シーン8',
        steps: [
            {
                id: 'アナウンス2s後',
                position: 60 * 0,
            },
            {
                id: 'M8in',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            },
            {
                id: 'M8後',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            }
           
        ],
        
    },

    {
        note: 'シーン９',
        steps: [
            {
                id: '梨沙in',
                position: 60 * 0,
            },
            {
                id: 'M9in',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            },
            {
                id: 'M9out',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            },
            {
                id: '梨沙崩れ落ちる',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            }
           
        ],
        
    },

    {
        note: 'シーン10',
        steps: [
            {
                id: 'M10in',
                position: 60 * 0,
            },
            {
                id: 'M10out1s後',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            },
            {
                id: 'かな誠ハケ後',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            }
           
        ],
        
    },

    {
        note: 'シーン11',
        steps: [
            {
                id: 'M11in',
                position: 60 * 0,
            },
            {
                id: '俺たちの経験',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            },
            {
                id: 'できないことなんてない',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            },
            {
                id: 'M11out',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            },
            {
                id: '江雪殺すなよ',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            }
           
        ],
        
    },

    {
        note: 'シーン12',
        steps: [
            {
                id: 'M12in',
                position: 60 * 0,
            },
            {
                id: '皆で奴らを捕まえろ',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            },
            {
                id: 'どんな相手でも（ペアのとこ）',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            },
            {
                id: 'M12out',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            },
            {
                id: 'AJハケ後',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            },
            {
                id: '誠サス落とし',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            }
           
           
        ],
        
    },

    {
        note: 'シーン13',
        steps: [
            {
                id: 'M13in',
                position: 60 * 0,
            }
            
        ],
        
    },

    {
        note: 'シーン14',
        steps: [
            {
                id: 'かな誠in',
                position: 60 * 0,
            },
            {
                id: 'くるみ「２人が助けに」',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            },
            {
                id: 'M14in',
                position: 60 * 1,
                extends:[
                    GROUND_BASE
                ]
            }
           
        ],
        
    },

    {
        note: 'キャストハケ後',
        steps: [
            {
                id: '客電',
                position: 60 * 0,
            }
  
           
        ],
        
    }






    
]