<script setup lang="ts">
import AdText from "../atoms/AdText.vue";
import InputField from '../molecules/InputField.vue';
import TextareaField from '../molecules/TexrareaField.vue';
import SelectField from '../molecules/SelectField.vue';
import AdButton from '../atoms/AdButton.vue';
import { reactive } from 'vue';

const options = [
    {
        label: 'Low',
        value: 'Low'
    },
    {
        label: 'Normal',
        value: 'Normal',
    },
    {
        label: 'High',
        value: 'High'
    }
]

const formData = reactive({
    title: '',
    description: '',
    priority: 'Normal',
})
//handle
const onSubmit = () => {
    console.log(formData)
}
</script>

<template>
<!--submit.prevent đảm bảo không nhảy sang trang khác-->
<ad-text tag="h1">New Task</ad-text>
<form @submit.prevent="onSubmit">
    <input-field v-model="formData.title"/>
    <textarea-field  label="Description" v-model="formData.description"/>
    <select-field label="Priority" :options="options" v-model="formData.priority"/>
    <ad-button type="submit">Create</ad-button>

</form> 

</template>