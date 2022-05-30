<script setup lang="ts">
import TaskForm from './components/organisms/TaskForm.vue';
import TasksForm from './components/organisms/TasksForm.vue';
import AdRow from './components/atoms/AdRow.vue';


</script>

<template>
<ad-row cols="2">
  <!--Task Form-->
  <ad-row><task-form /></ad-row>
  <!--Tasks Form-->
  <ad-row><tasks-form /></ad-row>
</ad-row>
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
