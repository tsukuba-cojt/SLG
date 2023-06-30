<template lang="pug">
div.wrap
  div.circle
    div.input-group-wrap
      div.input-group(v-for="i in 400")
        div.label {{ i }}
        circular-input(:value="$store.getters.values[i - 1] || 0" :max="255" @input="$store.dispatch('overrideFrame', [i, $event])")
    div.presets
      button(@click="$store.dispatch('clearOverrides')") Clear Overrides
      span.preset-selector(
        v-for="preset in presets"
        @click="togglePreset(preset.id)"
        :class="{'is-active': overridePresets.includes(preset.id)}"
      ) {{ preset.id }}
  InputText.test2
  sequence-row.center
</template>

<script>
import { CircularInput } from '@nandenjin/alien-ui'
import InputText from './components/InputText.vue'
import SequenceRow from './components/SequenceRow.vue'
export default {
  name: 'TsukuliveLightingCommander',
  components: {
    CircularInput,
    SequenceRow,
    InputText,
  },
  computed: {
    presets() {
      return this.$store.state.presets.presets
    },
    overridePresets() {
      return this.$store.state.presets.overridePresets
    },
  },
  mounted() {
    window.addEventListener('keydown', e => {
      if (e.key === ' ') {
        this.$store.dispatch('tap')
        e.preventDefault()
      }
    })
  },
  methods: {
    togglePreset(id) {
      const overrides = this.$store.state.presets.overridePresets
      if (!overrides.includes(id)) {
        this.$store.dispatch('updateOverridePresets', [...overrides, id])
      } else {
        this.$store.dispatch(
          'updateOverridePresets',
          overrides.filter(d => d !== id)
        )
      }
    },
  },
}
</script>

<style lang="sass">
body
  font: normal 14px Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace
  color: #fff
  background-color: #000
</style>

<style lang="sass" scoped>
.circle
  display:inline-block
.wrap
  display: grid
  grid-template-columns: 1fr 300px
  margin-bottom: 200px
  
.test
  right: 100px
  background-color: red

.test2
  right: 0px
  background-color: white
  color: black

.input-group
  display: inline-block
  margin: 0 5px
  color: #444
  font-size: 13px
  text-align: center
  line-height: 1.7em

  .label
    user-select: none

.presets
  position: fixed
  bottom: 0
  left: 0

.preset-selector
  display: inline-block
  margin: 2px
  padding: 2px 3px
  font-size: 12px
  background-color: #111
  color: #888
  cursor: pointer

.InputText
  display: inline-block
  margin: 2px
  padding: 2px 3px
  font-size: 12px
  background-color: #111
  color : #888


  &.is-active
    background-color: #033
    color: #fff
</style>
