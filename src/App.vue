<script setup lang="ts">
import { reactive } from 'vue';
import AdButton from './components/atoms/AdButton.vue';
import AdInput from './components/atoms/AdInput.vue';
import AdTextArea from './components/atoms/AdTextArea.vue';
import AdText from './components/atoms/AdText.vue';
import AdSelect from './components/atoms/AdSelect.vue';


const options = [
  {
    label: 'Normal',
    value: 'Normal'
  },
  {
    label: 'High',
    value: 'High'
  },
]

const testing = reactive({
  inputVal: '',
  textAreaVal: '',
  selectVal: ''
})
</script>

<template>
  <AdText tag="h1">New Task</AdText>
  <AdButton type="button">Testing</AdButton>
  <AdInput placeholder="Enter something here ..." v-model="testing.inputVal" />
  <AdTextArea placeholder="Enter description here ..." v-model="testing.textAreaVal"/>
  <AdSelect :option="options" v-model="testing.selectVal"/>
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
