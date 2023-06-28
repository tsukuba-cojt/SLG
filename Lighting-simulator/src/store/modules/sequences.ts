import { ActionTree, Module, MutationTree } from 'vuex'
import { RootState } from '..'
import { Sequence } from '../../app/sequences'

export interface SequencesState {
  sequences: Sequence[]
  startTimes: number[]
  lastTapTime: number
  cycle: number
}

const state: SequencesState = {
  sequences: [],
  startTimes: [],
  lastTapTime: 0,
  cycle: 500,
}

const mutations: MutationTree<SequencesState> = {
  setSequences(state, sequences) {
    state.sequences = sequences || []
  },

  setStartTimes(state, startTimes) {
    state.startTimes = startTimes || []
  },

  tap(state) {
    if (state.lastTapTime > Date.now() - 2000) {
      state.cycle = Date.now() - state.lastTapTime
    }
    state.lastTapTime = Date.now()
  },
}

const actions: ActionTree<SequencesState, RootState> = {
  setStartTimes(store, startTimes) {
    store.commit('setStartTimes', startTimes)
  },

  tap(store) {
    store.commit('tap')
  },
}

const sequencesModule: Module<SequencesState, RootState> = {
  state,
  mutations,
  actions,
}

export default sequencesModule
