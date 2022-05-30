<script setup lang="ts">
import { reactive } from "vue";

import TextareaField from './components/molecules/TexrareaField.vue';
import ImputField from './components/molecules/InputField.vue';
import InputField from "./components/molecules/InputField.vue";
import SelectField from './components/molecules/SelectField.vue';
import CheckboxField from "./components/molecules/CheckboxField.vue";

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
  selectedVal: false
});
</script>

<template>
  <TextareaField  
  id="descTask" 
  label="Description"
  v-model="testing.textAreaVal" 
  />
  <InputField 
  type="text"
  id="titleTask" 
  label="Title"
  v-model="testing.inputVal" 
  />
  <SelectField 
  type="text"
  id="priorityTask" 
  label="Priority"
  :options="options"
  v-model="testing.selectVal" 
  />
  <CheckboxField 
  type="checkbox"
  id="checkedTask" 
  label="Checked"
  :options="options"
  v-model="testing.selectedVal" 
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
