<template>
    <input :value="modelValue" @input="updateInput" :type='type' :placeholder="placeholder">
</template>

<script>
    export default{
        name: 'my-input',
        props: {
            type: {
                type: String,
                required: true
            },
            placeholder: {
                type: String,
                required: true
            },
            modelValue: {
                type: String,
                default: ''
            }
        },
        methods: {
            updateInput(event) {
                this.$emit('update:modelValue', event.target.value)
            }
        }
    }
</script>

<style scoped>
    input{
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
    }
</style>