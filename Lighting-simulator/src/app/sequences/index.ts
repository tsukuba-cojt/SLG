import { Preset, renderPresetObject } from '../presets'
import { DmxFrame } from '@nandenjin/alien-core'

import { horizon } from './01_horizon'
import { mattete } from './03_mattete'
import { omohito } from './04_omohito'
import { mebius } from './05_mebius'
import { parasol } from './06_parasol'
import { wakuwaku } from './07_wakuwaku'
import { mylist } from './08_mylist'
import { hitomi } from './09_hitomi'
import { daydream } from './10_daydream'
import { brightest } from './11_brightest'

export interface SequenceStep extends Preset {
  fade?: number
  position: number
}

export interface Sequence {
  steps: SequenceStep[]
  note?: string
}

const sequences: Sequence[] = [
  ...horizon,
  ...mattete,
  ...omohito,
  ...mebius,
  ...parasol,
  ...wakuwaku,
  ...mylist,
  ...hitomi,
  ...daydream,
  ...brightest,
]

export default sequences

export function render(
  {
    sequences,
    startTimes,
    cycle,
  }: { sequences: Sequence[]; startTimes: number[]; cycle: number },
  d = new DmxFrame(),
  base?: DmxFrame
): DmxFrame {
  const now = Date.now()

  for (let i = 0; i < sequences.length; i++) {
    const sequence = sequences[i]
    const startTime = startTimes[i]

    if (!sequence || !startTime || startTime < 0) continue

    const { steps } = sequence
    const current = (now - startTime) / 1000

    const time = current / (cycle / 1000)

    for (let j = 0; j < steps.length; j++) {
      const step = steps[j]
      let { fade } = step
      const { position } = step
      fade = fade || 0

      let next: SequenceStep | null = null,
        nextFade = 0,
        nextCurrent = 0
      if (j + 1 < steps.length) {
        if (steps[j + 1].position <= current) {
          next = steps[j + 1]
          nextCurrent = current - next.position
        } else next = null
      } else if (j + 1 === steps.length && sequences[i + 1]) {
        const nextStartTime = startTimes[i + 1]
        if (nextStartTime > 0 || nextStartTime <= now) {
          next = sequences[i + 1].steps[0]
          nextCurrent = (now - nextStartTime) / 1000
        } else next = null
      }

      if (next) {
        nextFade = next.fade || 0
      }

      if (position <= current) {
        const stepCurrent = current - position
        const fadeIn = fade ? Math.min(stepCurrent / fade, 1) : 1
        const fadeOut = next
          ? nextFade
            ? Math.min(nextCurrent / nextFade, 1)
            : 1
          : 0
        if (fadeIn * (1 - fadeOut) === 0) continue

        let rendered = renderPresetObject(step, time)
        if (base) rendered = base.clone().merge(rendered)
        d.add(rendered.scale(fadeIn * (1 - fadeOut)))
      }
    }
  }

  return d
}
