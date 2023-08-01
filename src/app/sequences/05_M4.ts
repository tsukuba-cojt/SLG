import { Sequence } from '.'
import {
    COLOR_BLUE, COLOR_ORANGE_YELLOW, COLOR_YELLOW_ORANGE, COLOR_PINKRED
} from '../presets/colors'
import { GROUND_BASE, GROUND_KAKASHI, GROUND_ANOMITI, GROUND_KENBAN, GROUND_SUS2 } from '../presets/ground'
import { LED_ON, LED_LOW, LED_RF } from '../presets/led'
import { CL } from '../presets/cl'
import { renderPreset } from '..'
export const M4: Sequence[] = [
    {
        note: 'M4',
        steps: [
            {
                id: 'M3ラスト',
                position: 0,
                extends: [
                    GROUND_KENBAN
                ],
            },
            {
                id: '曲調変わるとこ',
                position: 60 * 1,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 135))
                    d.merge(renderPreset(CL, t, 135))
                }
            },
            {
                id: 'カカシ「三歩歩けば…」直前の振り向きの間',
                fade: 0.5,
                position: 60 * 1 + 30,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 25.5))
                    d.merge(renderPreset(CL, t, 25.5))
                }
            },
            {
                id: 'カカシ「おか/げ/でおいらは',
                position: 60 * 1 + 40.5,
                render(d, t) {
                    d.merge(renderPreset(GROUND_KAKASHI, t, 102))
                    d.merge(renderPreset(CL, t, 102))
                }
            },
            {
                id: 'カカシ「/いかれた道化さ/」',
                fade: 3.47,
                position: 180,
                extends: [
                    LED_RF,
                    COLOR_BLUE
                ],
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 25.5))
                    d.merge(renderPreset(CL, t, 25.5))
                }
            },
            {
                id: 'カカシ「/間/抜けなピエロのサーカスだ」',
                position: 184.47,
                extends: [
                    COLOR_ORANGE_YELLOW,
                    LED_ON
                ],
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 127.5))
                }
            },
            {
                id: 'カカシ「だ/れ/もが指さして笑う」',
                fade: 0,
                position: 188.47,
                extends: [
                    COLOR_YELLOW_ORANGE,
                    LED_ON
                ],
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 127.5))
                }
            },
            {
                id: 'ドロシー「/それなら一緒に/」',
                fade: 1.43,
                position: 200,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 153))
                    d.merge(renderPreset(CL, t, 153))
                },
            },
            {
                id: 'ドロシー「/あの道/をたどって」',
                fade: 0.5,
                position: 206.5,
                extends: [
                    GROUND_ANOMITI
                ],
            },
            {
                id: '「さ//ぁmusic wizardの〜」',
                position: 256.5,
                extends: [
                    GROUND_ANOMITI,
                    GROUND_SUS2
                ],
            },
            {
                id: 'ドロシー「お願い事はなあに」の前の曲変化',
                fade: 1,
                position: 400,
                extends: [
                    GROUND_KENBAN
                ],
                render(d, t) {
                    d.merge(renderPreset(CL, t, 76.5))
                }
            },
            {
                id: '語り手in',
                fade: 2,
                position: 500,
                extends: [
                    LED_LOW,
                    COLOR_PINKRED
                ],
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 45))
                    d.merge(renderPreset(CL, t, 90))
                }
            },
            {
                id: 'ドロシーin',
                fade: 2,
                position: 600,
                extends: [
                    LED_LOW,
                    COLOR_PINKRED
                ],
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 90))
                    d.merge(renderPreset(CL, t, 90))
                }
            },
        ],
    },
]
