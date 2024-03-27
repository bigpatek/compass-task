<template>
    <div class="create">
        <h1>Добавить запись</h1>
        <CreateForm />
    </div>
</template>

<script>
import CreateForm from "@/components/CreateForm"
export default {
    components: {
        CreateForm
    }
}
</script>


<style lang="scss">
    .create{
        background-color: rgba(196, 209, 226, 0.38);
        position: absolute;
        left: 20vw;
        width: 80%;
        height: 100%;
        padding: 15px;

    }
</style>