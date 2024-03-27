<template>
    <div class="btn__wrapper">
        <button class="btn" @click.prevent="sendForm">
            <slot></slot>
        </button>
    </div>
</template>

<script>
export default {
    name: 'my-button',
    props: {
        sendForm: {
            type: Function,
            required: true,
        }
    }
}
</script>

<style scoped>
.btn__wrapper{
    width: 100%;
    display: flex;
    margin-top: 15px;
}
.btn {
    padding: 10px 15px;
    background: none;
    color: rgba(27, 124, 241, 1);
    border: 1px solid rgba(27, 124, 241, 1);
    margin-left: auto;
}
</style>