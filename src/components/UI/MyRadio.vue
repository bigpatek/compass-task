<template>
        <input type="radio" :id="radio.id" :value="radio.value" :name="radio.name" :checked="radio.id === modelValue" @click="updateInput($event)">
        <label>{{ radio.value }}</label>
</template>

<script>
    export default{
        name: 'my-radio',
        props: {
            radio: {
                type: Array,
                required: true
            },
            modelValue: {
                type: String,
                default: 'male'
            }
        },
        methods: {
            updateInput(event) {
                this.$emit('update:modelValue', event.target.id);
            }
        }
    }
</script>

<style scoped>
    input{
        margin-top: 8px;
        margin-bottom: 15px;
    }
    label{
        margin-right: 10px; 
        margin-left: 5px; 
    }
</style>