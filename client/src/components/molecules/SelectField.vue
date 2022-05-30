<script setup lang="ts">
import { PropType } from "vue";
import AdSelect from "../atoms/AdSelect.vue";
import AdText from "../atoms/AdText.vue";

export type SelectOptionsTypes = {
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
  placeholder: {
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
  label: {
    type: String,
    required: false,
  },
  options: {
    type: Array as PropType<SelectOptionsTypes[]>,
    required: true,
    default: [],
  },
});
</script>
<template>
  <div class="ml-textarea-field">
    <ad-text tag="label" :for="id" class="ml-label">{{ label }}</ad-text>
    <ad-select
      :id="id"
      :name="name"
      :class="classes"
      :value="modelValue"
      :options="options"
      @input="$emit('update:modelValue', ($event?.target as HTMLInputElement).value )"
    ></ad-select>
  </div>
</template>
