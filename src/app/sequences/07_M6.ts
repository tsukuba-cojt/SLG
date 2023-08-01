import { Sequence } from '.'
import { renderPreset } from '..'
import { UNIVERSE, addrs } from '../consts'

import { CL } from '../presets/cl'
import { GROUND_ANOMITI, GROUND_BASE, GROUND_KENBAN, GROUND_LIONMAE, GROUND_SUS2 } from '../presets/ground'
import { LED_LOW, LED_ON } from '../presets/led'
import { COLOR_BLUE, COLOR_YELLOW } from '../presets/colors'

export const M6: Sequence[] = [
    {
        note: 'M6',
        steps: [
            {
                id: 'M5ラスト',
                position: 60 * 0,
                extends: [GROUND_KENBAN],
                render(d, t) {
                    d.merge(renderPreset(CL, t, 67.5))
                }
            },
            {
                id: '語り手「/変わった仲間が/」',
                position: 60 * 1,
                fade: 3,
                render(d, t) {
                    d.merge(renderPreset(CL, t, 146.25))
                    d.merge(renderPreset(GROUND_BASE, t, 146.25))
                }
            },
            {
                id: '語り手「/何やら嫌な/気配を」',
                position: 60 * 2,
                fade: 5,
                render(d, t) {
                    d.merge(renderPreset(CL, t, 67.5))
                    d.merge(renderPreset(GROUND_LIONMAE, t, 67.5))
                }
            },
            {
                id: '語り手out',
                position: 60 * 3,
                fade: 3,
                render(d, t) {
                    d.merge(renderPreset(CL, t, 130))
                    d.merge(renderPreset(GROUND_LIONMAE, t, 130))
                }
            },
            {
                id: 'どうしよう襲われたりなんかしたら/',
                position: 60 * 4,
                fade: 4.5,
                render(d, t) {
                    d.merge(renderPreset(CL, t, 130))
                    d.merge(renderPreset(GROUND_BASE, t, 130))
                }
            },
            {
                id: 'ライ姉「聞いてくれ」前の「/カン！」',
                position: 60 * 5,
                render(d, _, s = 127.5) {
                    d.set(UNIVERSE, addrs.SUS2_2, s)
                }
            },
            {
                id: 'ライオン「/お/肉が怖くて」',
                position: 60 * 6,
                extends: [
                    LED_ON,
                    COLOR_YELLOW
                ],
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 168.25))
                    d.merge(renderPreset(CL, t, 168.25))
                }
            },
            {
                id: 'ライ姉「中身はもちろん豆腐/」',
                position: 60 * 7,
                fade: 2.66,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 63.25))
                    d.merge(renderPreset(CL, t, 63.25))
                }
            },
            {
                id: 'ライ姉「/だけど友達には」',
                position: 60 * 8,
                fade: 2,
                extends: [
                    LED_LOW,
                    COLOR_BLUE
                ],
            },
            {
                id: 'ドロシー「/それなら勇気を」」',
                position: 60 * 9,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 180))
                    d.merge(renderPreset(CL, t, 180))
                }
            },
            {
                id: 'カカシ姉「/た/びに出るのさ」',
                position: 60 * 10,
                extends: [
                    GROUND_ANOMITI
                ]
            },
            {
                id: '//さあミュージック',
                position: 60 * 11,
                extends: [
                    GROUND_ANOMITI,
                    GROUND_SUS2
                ]
            },
            {
                id: 'ドロシー「お願い事はなあに」前奏始まり',
                position: 60 * 12,
                fade: 3,
                extends: [
                    GROUND_KENBAN
                ]
            },
            {
                id: '曲終わりジャンじゃかじゃん 暗転',
                position: 60 * 13,
                fade: 0,
            },
        ]
    }]