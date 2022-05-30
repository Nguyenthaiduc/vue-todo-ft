<script setup lang="ts">
import AdText from "../atoms/AdText.vue";
import AdTextarea from "../atoms/AdTextarea.vue";
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
});
</script>
<template>
  <div class="ml-textarea-field">
    <ad-text tag="label" :for="id" class="ml-label">{{ label }}</ad-text>
    <ad-textarea
      :id="id"
      :name="name"
      :class="classes"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event?.target as HTMLInputElement).value )"
    ></ad-textarea>
  </div>
</template>
