<script setup lang="ts">
import { PropType } from 'vue';


type ButtonTypes = "button" | "submit" | "reset" | undefined ;

defineProps({
    type: {
        type: String as PropType<ButtonTypes>,
        required: false,
        default: 'button',
        validators: (value: string) => {
            const _buttonType = ["button","submit","reset"]
            return _buttonType.includes(value);
        },
    }
})
</script>

<template>
      <button class="ad-button" :type="type">
    
          <slot />
      </button>
</template>

<style>

</style>