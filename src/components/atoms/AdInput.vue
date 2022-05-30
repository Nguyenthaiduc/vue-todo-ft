<script setup lang="ts">
/* eslint-disable */
import { PropType } from 'vue';

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
        type: [String, Boolean],
        required: false,
    }
})
</script>

<template>
      <input 
      :type="type"
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :class="classes"
      :value="modelValue"
      @input="
        $emit('update:modelValue', 
        type === 'checkbox' ? ($event?.target as HTMLInputElement).checked 
        : ($event?.target as HTMLInputElement).value )"
      />
</template>

<style>

</style> 