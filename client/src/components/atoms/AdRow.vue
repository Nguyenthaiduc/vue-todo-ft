<script setup lang="ts">
import { computed } from "vue"
const props = defineProps({
    cols : {
        type: String,
        required: false,
        default: "1"
    },
    //gap là khoảng cách giữa các columns
    gap : {
        type: String,
        required: false,
        default: "4",
    }
})
/* */
const numberCols = computed(()=> `grid-cols-${props.cols}`)
const gapCols =  computed(()=> `gap-${props.gap}`)
</script>
<template>
    <!--co dinh khung, :class bind multi class -->
    <div class="grid" :class="[numberCols,gapCols ]">

        <slot />
    </div>
</template>