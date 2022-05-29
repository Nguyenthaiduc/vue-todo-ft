<script setup lang="ts">
/* eslint-disable */
import { PropType } from "vue";

type OptionTypes = {
  label: string;
  value: string;
};
defineProps({
  id: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  classes: {
    type: String,
    required: false,
  },
  modelValue: {
    type: String,
    required: false,
  },
  options: {
    type: Array as PropType<OptionTypes[]>,
    default: true,
  },
});
</script>
<template>
  <select
    :id="id"
    :name="name"
    :class="classes"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event?.target as HTMLInputElement).value )"
  >
    <option
      v-for="option in options"
      :key="JSON.stringify(option)"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>
