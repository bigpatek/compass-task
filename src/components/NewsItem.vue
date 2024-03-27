<template>
    <div class="newsItem">
        <div class="newsItem__content">
            <h1>{{ news.id }}</h1>
        <div class="newsItem__content__title">
            <h2 @click="this.isBodyVisible = !this.isBodyVisible">{{ news.title }}</h2>
            <p>id автора: {{ news.userId }}</p>
            <h3 v-if="this.isBodyVisible === true">{{ news.body }}</h3>
        </div>
        <button class="newsItem__content__btn" @click="showDialog(news.id)">Удалить</button>
        </div>
    </div>
    
</template>

<script>
    export default {
        props: {
            news: {
                type: Object,
                required: true
            },
            showDialog:{
                type: Function,
                required: true
            },
            itemToDelete:{
                type: Number,
                default: 0
            }
        },
        data(){
            return{
                isBodyVisible: false,
            }
        },
        methods: {
        }
    }
</script>

<style scoped lang="scss">
    .newsItem{
        margin-top: 15px;
        margin-bottom: 15px;
        padding: 15px;
        border-bottom: 1px solid lightgray;
    }
    .newsItem__content{
        display: flex;
        flex-direction: row;
        width: 100%;
        
        &__title{
            display: flex;
            flex-direction: column;
            margin-left: 50px;
            width: 800px
        }
        &__btn{
            margin-left: auto;
            border: none;
            background-color: white;
            color: red;
            width: 100px;
            cursor: pointer;
        }
        h1{
            align-self: center;
            font-size: 50px;
            color: grey;
            width: 60px;
        }
        h2{
            font-size: 27px;
        }
        h3{
            margin-top: 30px;
        }
        p{
            color: grey;
        }
    }
</style>