<template>
    <input type="checkbox" :value="modelValue" @change="updateInput" :checked="modelValue === true" />
    <label>{{ text }}</label>
</template>

<script>
export default{
    name: 'my-checkbox',
    props: {
        modelValue: {
            type: Boolean,
            default: false
        },
        text: {
            type: String,
            required: true
        }
    },
    methods: {
        updateInput() {
            this.$emit('update:modelValue', !this.modelValue)
        }
    }
}
</script>

<style scoped>
input{
    margin-top: 15px;
}
label{
    margin-left: 5px;
}
</style>