<script setup lang="ts">
import { reactive } from 'vue';
import AdButton from './components/atoms/AdButton.vue';
import AdInput from './components/atoms/AdInput.vue';


const testing = reactive({
  inputVal: ''
})
</script>

<template>
  <AdButton type="button">Testing</AdButton>
  <AdInput placeholder="Enter something here ..." v-model="testing.inputVal" />

  {{testing }}
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
