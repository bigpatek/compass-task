<template>
    <div class="news">
        <h1>Все новости</h1>
        <NewsList />
    </div>
</template>

<script>
    import NewsList from "@/components/NewsList";
    export default {
        components: {
            NewsList
        },
        data(){
            return{
                show: true
            }
        }
    }
</script>


<style lang="scss">
    .news{
        background-color: rgba(196, 209, 226, 0.38);
        position: absolute;
        left: 20vw;
        width: 80%;
        padding: 15px;
    }
</style>