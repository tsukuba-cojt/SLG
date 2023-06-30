<template lang = "ja">
    <div> 
        <textarea name="example" cols="50" rows="10" v-model="input"></textarea>
        <button class="generater" type="button">
            generate
        </button>
        <p>{{input}}</p>
    </div>
</template>

<script>
    export default {
  name: 'InputText'
}
</script>