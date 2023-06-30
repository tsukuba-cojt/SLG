<template>
    <div>
      <textarea v-model="message"></textarea>
      <p>入力されたテキスト: {{ message }}</p>
      <button @click="showMessage">generate</button>
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
    methods:{
        showMessage(){
            this.displayMessage = True;
        }
    }
  }
  </script>