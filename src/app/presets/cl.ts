import { Preset } from '.'
import { addrs, UNIVERSE as U } from '../consts'

export const CL = 'cl'

export const cl: Preset[] = [
  {
    id: CL,
    render(d, _, s = 255) {
      d.set(U, addrs.FR, s)
    },
  },
]
