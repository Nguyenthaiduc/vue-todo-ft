<script setup lang="ts">
import { reactive } from "vue";

import TextareaField from './components/molecules/TexrareaField.vue';

const options = [
  {
    label: "Normal",
    value: "Normal",
  },
  {
    label: "High",
    value: "High",
  },
];

const testing = reactive({
  inputVal: "",
  textAreaVal: "",
  selectVal: "",
});
</script>

<template>
  <TexrareaField  
  id="descTask" 
  v-model="testing.textAreaVal" 
  label="Description"
  />
  {{ testing }}
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
