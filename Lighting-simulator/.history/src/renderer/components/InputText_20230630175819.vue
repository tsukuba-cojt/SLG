<template>
    <div>
      <textarea v-model="message"></textarea>
      <button @click="showMessage">メッセージ表示</button>
      <p v-if="displayMessage">入力されたメッセージ: {{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: '',
        displayMessage: false
      }
    },
    methods: {
      showMessage() {
        displayMessage = true;
      }
    }
  }
  </script>
  