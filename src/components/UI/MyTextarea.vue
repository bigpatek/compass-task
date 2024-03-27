<template>
    <div class="textarea">
        <label>Символов: {{ this.modelValue.length }}</label>
        <textarea :value="modelValue" @input="updateInput($event)" :placeholder="placeholder"></textarea>
    </div>
    
</template>

<script>

    export default{
        name: 'my-textarea',
        props: {
            modelValue: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                required: true
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
    .textarea{
        width: 100%;
        display: flex;
        flex-direction: column;
        textarea{
            padding: 10px;
            width: 100%;
        }
        label{
            font-size: 15px;
            color: grey;
            margin-left: auto;
        }
    }
</style>