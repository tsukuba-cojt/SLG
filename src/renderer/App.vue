<template lang="pug">
div.wrap
    div.left
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
    sequence-row.sequence
    div.right
      div.container
        textarea(type="text" placeholder="脚本を入力" rows="10" v-model='inputText') 
        button(@click="Send") 照明プランを生成
        button 再生成
        textarea(rows="10" v-model="responseMessage")
        p
        div フェード
        input(type="range" placeholder="フェード")
        div サイクル
        input(type="range" placeholder="サイクル")
        button 次のセクションへ
        button(@click="addressSetUp") アドレス設定
        button アドレス削除
        button(@click="addressList") アドレス一覧
        div.popup(v-if="isPopupVisible", :style="{ top: popupPosition.y + 'px', left: popupPosition.x + 'px' }", @mousedown="startDrag")
            div.popup-content
              h2 アドレス設定
              input(type="text" placeholder="name")
              input(type="text" placeholder="Address")
              input(type="text" placeholder="number")
              p
              button 登録
              button(@click="endSetUp") 終了
        div.popup(v-if="isPopupVisibleAddrs", :style="{ top: popupPosition.y + 'px', left: popupPosition.x + 'px' }", @mousedown="startDrag")
          div.popup-content
            h2 アドレス一覧
            //- p(v-for="(value, key) in addrs" :key="key") {{ key }}: {{ value }}
            p(v-for="(value, key) in addrs" :key="key" v-if="!isNaN(key)") {{ key }}: {{ value }}
            button(@click="endList") 閉じる
</template>
  
  <script>
  import { CircularInput } from '@nandenjin/alien-ui'
  import { addrs } from '../app/consts/addrs.ts'
  import axios from 'axios'
  import SequenceRow from './components/SequenceRow.vue'
  export default {
    name:'TsukuliveLightingCommander',
    components: {
      CircularInput,
      SequenceRow
    },
    data() {
      return {
        addrs : addrs,
        isPopupVisible: false,
        isPopupVisibleAddrs : false,
        popupPosition: { x: 0, y: 0 },
        dragData: { x: 0, y: 0 },
        responseMessage: '',
        inputText: ''
      };
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
    async Send() {
      try {
        const token = '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';
        const url = 'https://api.openai.com/v1/chat/completions';
        const contentText = this.inputText + "という文言にあう舞台照明の色を理由を添えて提示しなさい";
        const data = {
          "model": "gpt-3.5-turbo",
          "messages": [{"role": "user", "content": contentText}]
        };
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        };

        const response = await axios.post(url, data, config);
        const cleanResponse = JSON.parse(JSON.stringify(response.data)); // Vue.jsのリアクティブなオブジェクトをクリーンなJavaScriptオブジェクトに変換
        this.responseMessage = cleanResponse.choices[0].message.content;
        console.log(cleanResponse.choices[0].message.content);
      } catch (error) {
        console.error(error);
      }
    },
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
      addressSetUp() {
        this.isPopupVisible = true;
      },
      endSetUp() {
        this.isPopupVisible = false;
      },
      endList() {
        this.isPopupVisibleAddrs = false;
      },
      addressList() {
        this.isPopupVisibleAddrs = true;
      },
      startDrag(event) {
        this.dragData.x = event.clientX - this.popupPosition.x;
        this.dragData.y = event.clientY - this.popupPosition.y;
        document.addEventListener('mousemove', this.drag);
        document.addEventListener('mouseup', this.stopDrag);
      },
      drag(event) {
        this.popupPosition.x = event.clientX - this.dragData.x;
        this.popupPosition.y = event.clientY - this.dragData.y;
      },
      stopDrag() {
        document.removeEventListener('mousemove', this.drag);
        document.removeEventListener('mouseup', this.stopDrag);
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
  .popup
    position: fixed
    background-color: rgba(0, 0, 0, 0.5)
    display: flex
    justify-content: center
    align-items: center
  
    .popup-content
    background-color: white
    color: black
    padding: 20px
    border-radius: 5px
    text-align: center
    cursor: move
  
  .wrap
    display: grid
    grid-template-columns: 1fr 300px 200px
    margin-bottom: 200px
  
  .container
    display: flex
    flex-direction: column
    align-items: left
    justify-content: center
    height: 80vh
  
  .input[type="text"]
    margin-bottom: 10px
  
  .button
    margin-bottom: 10px
  
    
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
  
    &.is-active
      background-color: #033
      color: #fff
  </style>