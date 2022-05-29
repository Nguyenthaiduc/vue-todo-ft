<script setup lang="ts">
import { PropType } from 'vue';
import AdInput from '../atoms/AdInput.vue';
import AdText from "../atoms/AdText.vue";

type InputTypes = "text" | "email" | "password" | "checkbox" | "radio" | undefined;
defineProps({
    type: {
        type: String as PropType<InputTypes>,
        required: false,
        default: 'text',
        validators: (value: string) => {
            const _inputType = ["text","email","password","checkbox","radio"]
            return _inputType.includes(value);
        },
    },
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
    <ad-input
      :type="type"
      :id="id"
      :name="name"
      :class="classes"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event?.target as HTMLInputElement).value )"
    />
  </div>
</template>
