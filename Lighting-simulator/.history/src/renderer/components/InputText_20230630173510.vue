<template>
    <div>
      <textarea v-model="message"></textarea>
      <p>入力されたテキスト: {{ message }}</p>
      <button class="generater" type="button">
            generate
    </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: ''
      }
    }
  }
  </script>