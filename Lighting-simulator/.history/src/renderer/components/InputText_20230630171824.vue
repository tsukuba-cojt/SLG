<template lang = "ja">
    <div id="app"> 
        <textarea v-model="textInput" />
        <button class="generater" type="button">
            generate
        </button>
        <p>{{ textInput }}</p>
    </div>
</template>

<script>
    import {ref} from 'vue'; const textInput = ref('');
    export default {
  name: 'InputText'
}
</script>