<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
    tag: {
        type: String,
        required: true,
        default: "p",
        validator: (value: string) => {
            const _tagTypes = ["h1", "h2", "h3", "h4", "p","span","label"];
            return _tagTypes.includes(value);
        }
    },
    for: {
        type: String,
        required: false,
    }
})

const getForProp = computed(()=> props.tag === 'label' ? props.for : null)
</script>

<template>
    <component class="ad-text" :is="tag" :for="getForProp">

        <slot />
    </component>
</template>