import { DmxFrame } from '@nandenjin/alien-core'
import consola from 'consola'

import { base } from './base'
import { colors } from './colors'
import { ground } from './ground'
import { nagare } from './nagare'
import { ss } from './ss'
import { fs } from './fs'
import { cl } from './cl'
import { beams } from './beams'
import { backpar } from './backpar'
import { par } from './par'
import { spot } from './spot'
import { floorpar } from './floorpar'
import { mh } from './mh'
import { led } from './led'
import { bl } from './bl'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RenderFunction = (frame: DmxFrame, time?: number, ...args: any) => void

export interface Preset {
  id: string
  extends?: string[]
  render?: RenderFunction
}

export const presets: Preset[] = [
  ...base,
  ...bl,
  ...colors,
  ...ground,
  ...nagare,
  ...ss,
  ...fs,
  ...cl,
  ...beams,
  ...backpar,
  ...par,
  ...spot,
  ...floorpar,
  ...mh,
  ...led,
]

export function get(id: string) {
  for (const preset of presets) {
    if (preset.id === id) return preset
  }
}

export function render(
  ids: string | string[],
  time = 0,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...args: any[]
): DmxFrame {
  if (!(ids instanceof Array)) ids = [ids]

  const d = new DmxFrame()
  for (const id of ids) {
    const preset = get(id)
    if (!preset) {
      consola.warn(`Unknown preset: ${id}`)
      continue
    }
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    d.merge(renderPresetObject(preset, time, ...args))
  }

  return d
}

export function renderPresetObject(
  preset: Preset,
  time = 0,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...args: any[]
): DmxFrame {
  const d = new DmxFrame()
  if (preset.extends) d.merge(render(preset.extends, time))
  if (preset.render) preset.render(d, time, ...args)
  return d
}

export function getRenderer(id: string): RenderFunction {
  const preset = get(id)
  if (preset)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (d: DmxFrame, time = 0, ...args: any[]) => {
      if (preset.extends) d.merge(render(preset.extends, time))
      if (preset.render) preset.render(d, time, ...args)
    }
  // throw new Error(`Unknown preset: ${id}`)
  consola.warn(`Unknown preset: ${id}`)

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  return () => {}
}
