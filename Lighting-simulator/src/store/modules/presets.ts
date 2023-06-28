import { ActionTree, Module, MutationTree } from 'vuex'
import { RootState } from '..'
import { Preset } from '../../app/presets'

export interface PresetsState {
  presets: Preset[]
  overridePresets: string[]
}

const state: PresetsState = {
  presets: [],
  overridePresets: [],
}

const mutations: MutationTree<PresetsState> = {
  setPresets(state, presets) {
    state.presets = presets
  },

  updateOverridePresets(state, overridePresets) {
    state.overridePresets = overridePresets
  },
}

const actions: ActionTree<PresetsState, RootState> = {
  updateOverridePresets(store, overridePresets) {
    store.commit('updateOverridePresets', overridePresets)
  },

  clearOverrides(store) {
    store.commit('updateOverridePresets', [])
  },
}

const presetsModule: Module<PresetsState, RootState> = {
  state,
  mutations,
  actions,
}

export default presetsModule
