<template lang = "ja">
    <div id="app"> 
        <textarea v-model="textInput"></textarea>
        <button class="generater" type="button">
            generate
        </button>
        <p>入力文書：{{ textInput }}</p>
    </div>
</template>

<script>
    var app = new Vue({
    el:'#app',
    data:{
        textInput: "テストメッセージ"
    }
})
    export default {
  name: 'InputText'
}
</script>