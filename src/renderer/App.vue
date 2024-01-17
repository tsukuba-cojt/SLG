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
        div
          textarea(id="outputTextbox" rows="5" cols="39" placeholder="回答エリア")
        div
        input(type="text" placeholder="脚本を入力" v-model="inputText" id="inputtext")
        button(@click="clearOpenai") API初期化
        button(@click="sendMessage") 照明プランを生成
        button(@click="sendMessage") 再生成
        //- p(v-for="(value, key) in addrs") {{ key }}: {{ value }}
        input(type="text" placeholder="フェード" id="fade")
        input(type="text" placeholder="サイクル" id="cycle")
        input(type="time" step="1" id="time" placeholder="時間")
        button(@click="clearTextbox") 次のセクションへ
        button(@click="addressSetUp") アドレス設定
        button アドレス削除
        button(@click="addressList") アドレス一覧
        div.popup(v-if="isPopupVisible", :style="{ top: popupPosition.y + 'px', left: popupPosition.x + 'px' }", @mousedown="startDrag")
            div.popup-content
              h2 アドレス設定
              input(type="text" placeholder="name" v-model="addrsName")
              input(type="text" placeholder="number")
              p
              button(@click="addrsRegis") 登録
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
  import SequenceRow from './components/SequenceRow.vue'
  import axios from 'axios'
import OpenAI from 'openai'
  export default {
    name:'TsukuliveLightingCommander',
    components: {
      CircularInput,
      SequenceRow
    },
    data() {
      return {
        addrs : addrs,
        // addrs : addrs.filter(key => typeof key === 'number'),
        isPopupVisible: false,
        isPopupVisibleAddrs : false,
        inputText: '',
        messages: [],
        popupPosition: { x: 0, y: 0 },
        dragData: { x: 0, y: 0 },
        addrsName: ''
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
      async clearOpenai(){
        const openAi = new OpenAI({
          apiKey: "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",
          });
      },
      async addrsRegis() {
        try {
        const response = await axios.post('src/app/consts/addrs.ts/addrs', { addrs: this.inputData });
        console.log('データが正常に書き込まれました:', response.data);
        } catch (error) {
        console.error('データの書き込み中にエラーが発生しました:', error);
        }
      },
      async sendMessage() {
        try {
    // const response = await axios.options('https://api.openai.com/v1/engines/text-davinci-003/completions', {
    //   // prompt: '[' + this.inputText + ']' + 'この文章に合うような舞台照明の色を理由を含めて記述すると以下のようになります.',
    //   prompt: 'おはようございます',
    //   max_tokens: 300
    // }, {
    //   headers: {
    //     'Authorization': 'Bearer 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',
    //     'Content-Type': 'application/json'
    //   }
    // });
    // const outputText = response.data.choices[0].text;
    // console.log(response.data.choices[0].text);
    // document.getElementById('outputTextbox').value = outputText;
    const completion = await openAi.chat.completions.create({
  model: "gpt-4-1106-preview",
  messages: [
    {
      role: "user",
      content: "適当なフルーツをJSONの配列でください",
    },
  ],
  response_format: {
    type: "json_object", // json_objectを指定
  },
});
console.log(completion.choices[0]?.message.content);


  } catch (error) {
    console.error('APIの呼び出し中にエラーが発生しました:', error);
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
      addressList() {
        this.isPopupVisibleAddrs = true;
      },
      endSetUp() {
        this.isPopupVisible = false;
      },
      endList() {
        this.isPopupVisibleAddrs = false;
      },
      clearTextbox(){
        document.getElementById('fade').value = '';
        document.getElementById('cycle').value = '';
        document.getElementById('time').value = '';
        
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
  
  <!-- <style lang="sass">
  body
    font: normal 14px Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace
    color: #fff
    background-color: #000
  </style>
   -->
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
    grid-template-columns: 1fr 300px 300px
    margin-bottom: 200px
  
  .container
    display: flex
    flex-direction: column
    align-items: left
    justify-content: center
    height: 60vh
  
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