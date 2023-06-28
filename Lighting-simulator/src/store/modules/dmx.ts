import { DmxFrame } from '@nandenjin/alien-core'
import Vue from 'vue'
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import { RootState } from '..'

export interface DmxState {
  currentFrame: DmxFrame
  overrideFrame: DmxFrame
}

const state: DmxState = {
  currentFrame: new DmxFrame(),
  overrideFrame: new DmxFrame(),
}

const mutations: MutationTree<DmxState> = {
  setFrame(state, frame) {
    state.currentFrame = frame
  },

  overrideFrame(state, [ch, value]) {
    Vue.set(
      state.overrideFrame.data,
      0,
      state.overrideFrame.data ? state.overrideFrame.data[0] : []
    )
    Vue.set(state.overrideFrame.data[0], ch - 1, value)
  },

  clearOverrides(state) {
    Vue.set(state.overrideFrame.data, 0, [])
  },
}

const getters: GetterTree<DmxState, RootState> = {
  values(state) {
    const override = (state.overrideFrame.data || [])[0] || []
    return (state.currentFrame.data[0] || []).map((d, i) =>
      override[i] !== undefined ? override[i] : d
    )
  },
}

const actions: ActionTree<DmxState, RootState> = {
  overrideFrame(store, opts) {
    store.commit('overrideFrame', opts)
  },

  clearOverrides(store) {
    store.commit('clearOverrides')
  },
}

const dmxModule: Module<DmxState, RootState> = {
  state,
  mutations,
  getters,
  actions,
}

export default dmxModule
