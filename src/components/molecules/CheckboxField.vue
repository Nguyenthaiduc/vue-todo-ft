<script setup lang="ts">
import { PropType } from "vue";
import AdInput from "../atoms/AdInput.vue";
import AdText from "../atoms/AdText.vue";

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
    type: [String,Boolean],
    required: false,
  },
  label: {
    type: String,
    required: false,
  },
});
</script>
<template>
  <div class="ml-textarea-field">
    <ad-input
      type="checkbox"
      :id="id"
      :name="name"
      :class="classes"
      :model-value="modelValue"
      @input="$emit('update:modelValue', ($event?.target as HTMLInputElement).checked )"
    />
    <ad-text tag="label" :for="id" class="ml-label">{{ label }}</ad-text>
  </div>
</template>
