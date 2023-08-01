import { Sequence } from '.'
import { UNIVERSE as U } from '../consts'
import { Preset } from '../presets'

const render: Preset['render'] = (d, t) => {
  for (let i = 1; i <= 512; i++) {
    d.set(U, i, ((t / 2 + i / 10) % 1) * 255)
  }
}

export const exampleSequences: Sequence[] = [
  // 各stepにcycleを指定する例
  {
    note: 'CycleByStepExample',
    steps: [
      {
        id: ' cycle=1.0',
        position: 0,
        cycle: 1,
        render,
      },
      {
        id: 'cycle=0.5',
        position: 5,
        cycle: 0.5,
        render,
      },
      {
        id: 'cycle=0.2',
        position: 10,
        cycle: 0.2,
        render,
      },
      {
        id: 'cycle=free',
        position: 15,
        render,
      },
    ],
  },
  // sequence全体でcycleを指定する例
  {
    note: 'CycleBySequenceExample (cycle=1.0)',
    cycle: 1,
    steps: [
      {
        id: 'cycle=(not set)',
        position: 0,
        render,
      },
      {
        id: 'cycle=0.5',
        position: 5,
        cycle: 0.5,
        render,
      },
    ],
  },
]
