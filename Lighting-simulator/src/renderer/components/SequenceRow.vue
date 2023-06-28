<template lang="pug">
div.sequence-wrap
  div.time
    | {{ ('00' + Math.floor(currentTimePosition/60)).slice(-2) }}:{{ ('00' + Math.floor(currentTimePosition % 60)).slice(-2) }}:{{ Math.round(currentTimePosition % 1 * 10) }}
  div.list
    div.sequence(
      v-for="(sequence, i) in sequences"
      @click="jumpToSequence(i)"
      :class="{ 'is-active': currentSequenceIndex === i }"
    )
      div.note {{ sequence.note || '(Unnamed)' }}
      div.step(
        v-for="(step, j) in sequence.steps"
        @click.stop="jumpToStep(i, j)"
        :class="{ 'is-active': currentSequenceIndex === i && currentStepIndex >= j }"
      )
        div.position {{ ('00' + Math.floor(step.position/60)).slice(-2) }}:{{ ('00' + Math.floor(step.position % 60)).slice(-2) }}
        div.id {{ step.id }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      now: 0,
    }
  },
  computed: {
    currentStepIndex() {
      const now = this.now
      const sequence = this.sequences[this.currentSequenceIndex]
      const startTime = this.startTimes[this.currentSequenceIndex]
      const current = (now - startTime) / 1000
      for (let j = sequence.steps.length - 1; j >= 0; j--) {
        const step = sequence.steps[j]
        if (!startTime || startTime < 0 || current < 0) continue
        else if (current < step.position) continue
        else {
          return j
        }
      }
      return 0
    },
    currentSequenceIndex() {
      let k,
        s = 0
      for (let i = 0; i < this.startTimes.length; i++) {
        if (s <= this.startTimes[i]) {
          ; (s = this.startTimes[i]), (k = i)
        }
      }
      return k
    },
    currentTimePosition() {
      return (this.now - this.startTimes[this.currentSequenceIndex]) / 1000
    },
    ...mapState({
      sequences: state => state.sequences.sequences,
      startTimes: state => state.sequences.startTimes,
    }),
  },
  mounted() {
    const tick = () => {
      if (!this._destroyed) setTimeout(() => tick(), 100)
      this.now = Date.now()
    }
    setTimeout(() => tick(), 100)

    window.addEventListener('keydown', e => {
      if (e.key === 'Enter') this.go()
    })
  },
  methods: {
    jumpToSequence(i) {
      const x = new Array(i + 1).fill(-1)
      x[i] = Date.now()
      this.$store.dispatch('setStartTimes', x)
    },
    jumpToStep(i, j) {
      const x = new Array(i + 1).fill(-1)
      x[i] = Date.now() - this.sequences[i].steps[j].position * 1000
      this.$store.dispatch('setStartTimes', x)
    },
    go() {
      const i = this.currentSequenceIndex
      if (i + 1 >= this.sequences.length) return
      const x = [...this.startTimes]
      x[i + 1] = Date.now()
      this.$store.dispatch('setStartTimes', x)
    },
  },
}
</script>

<style lang="sass" scoped>
.sequence-wrap
  margin: 10px 15px
  height: 100vh
  display: grid
  grid-template-rows: 30px 1fr
  .list
    overflow-y: auto
    .sequence
      padding-left: 10px
      font-size: 14px
      cursor: pointer
      &.is-active
        background-color: #222

      .step
        display: grid
        grid-template-columns: 50px 1fr
        padding-left: 10px

        &.is-active
          background-color: #288
        &:hover
          background-color: #b2b
</style>
