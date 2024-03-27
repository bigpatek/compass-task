<template>
    <div class="newslist">
        <div v-for="news in newsArr">
            <NewsItem :news="news" :showDialog="showDialog" :itemToDelete="this.itemToDelete" />
        </div>
        <h1 v-if="this.newsIsLoading">Новости загружаются...</h1>
        <my-dialog v-model:show="this.isDialogVisible" class="newslist__dialog">
            <h1>Удалить новость?</h1>
            <div class="newslist__dialog__btns">
                <button class="newslist__dialog__btns--agree" @click="deleteItem">Да</button>
                <button class="newslist__dialog__btns--cancel" @click="this.isDialogVisible = false">Отмена</button>
            </div>
        </my-dialog>
    </div>
</template>

<script>
    import axios from 'axios';
    import NewsItem from "@/components/NewsItem";

    export default {
        components:{
            NewsItem
        },
        data(){
            return{
                newsArr: [],
                newsIsLoading: false,
                isDialogVisible: false,
                itemToDelete: 0,
            }
            
        },
        methods: {
            async fetchNews(){
                try{
                    this.newsIsLoading = true;
                    const responce = await axios.get("https://jsonplaceholder.typicode.com/posts");
                    this.newsArr = responce.data;
                    console.log(this.newsArr)
                    
                }catch(e){
                    console.log('Возникла ошибка' + e);
                }finally{
                    this.newsIsLoading = false;
                }
            },
            showDialog(id){
                this.isDialogVisible = true;
                this.itemToDelete = id;
            },
            closeDialog(){
                this.isDialogVisible = false;
                this.itemToDelete = 0;
            },
            async deleteItem(){
                try{
                    const responce = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.itemToDelete}`);
                    if(responce.status === 200){
                        this.newsArr = this.newsArr.filter( (news) => news.id !== this.itemToDelete );
                    }
                }catch(e){
                    console.log('Возникла ошибка' + e)
                }finally{
                    this.itemToDelete = 0;
                    this.isDialogVisible = false;
                }
                
            }
        }, 
        mounted(){
            this.fetchNews();
        }
    }
</script>

<style scoped lang="scss">
    .newslist{
        background-color: white;
        padding: 15px;
        margin-top: 25px;

        &__dialog{
            padding: 30px;

            &__btns{
                margin-top: 30px;
                display: flex;
                justify-content: space-around;

                button{
                    width: 100px;
                    height: 50px;
                    font-size: 20px;
                    background-color: white;
                }

                &--agree{
                    border: 1px solid rgba(27, 124, 241, 1);
                    color: rgba(27, 124, 241, 1);
                }

                &--cancel{
                    border: 1px solid red;
                    color: red;
                }
            }
        }
    }
</style>