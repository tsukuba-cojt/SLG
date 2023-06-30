<template>
    <div>
      <textarea v-model="message"></textarea>
      <p>入力されたテキスト: {{ message }}</p>
      <button @click:"showmessage">
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