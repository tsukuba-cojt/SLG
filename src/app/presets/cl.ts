import { Preset } from '.'
import { addrs, UNIVERSE as U } from '../consts'

export const SUSFOR = 'susfor',
SPOT = 'spot'

export const cl: Preset[] = [
  {
    id: SUSFOR,
    render(d, _, s = 255) {
      d.set(U, addrs.SUSFOR, s)
    },
  },
  {
    id: SPOT,
    render(d, _, s = 255) {
      d.set(U, addrs.SPOT, s)
    },
  },
]
