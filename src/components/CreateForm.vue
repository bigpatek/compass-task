<template>
    <div class="createForm__wrapper">
        <form class="createForm">
        <my-input :type="'text'" :placeholder="'Ваше имя'" v-model="nameValue"/>
        <my-input :type="'email'" :placeholder="'Email'" v-model="emailValue"/>
        <h5>Пол</h5>
        <div>
            <my-radio :radio="radioBtns[0]" class="radio" v-model="sexValue"/>
            <my-radio :radio="radioBtns[1]" class="radio" v-model="sexValue"/>
        </div>
        <my-textarea v-model="textValue" :placeholder="'Сообщение'"/>
        <div>
            <my-checkbox :text="'Согласен на обработку персональных данных'" v-model="checkValue" />
        </div>
        <my-button :sendForm="sendForm">Отправить</my-button>
        </form>
        <div v-if="this.isMessageSend === true" class="message">
            <div>
                <p>name: </p><span>{{ this.name }}</span>
            </div>
            <div>
                <p>email: </p><span>{{ this.email }}</span>
            </div>
            <div>
                <p>gender: </p><span>{{ this.gender }}</span>
            </div>
            <div>
                <p>message: </p><span>{{ this.message }}</span>
            </div>
            <div>
                <p>agree: </p><span>{{ this.agree }}</span>
            </div>
            
        </div>
        </div>
</template>

<script>
    export default{
        data(){
            return{
                radioBtns: [
                    {id: 'female', value: 'Женский', name: 'sex'},
                    {id: 'male', value: 'Мужской', name: 'sex'}
                ],
                nameValue: '',
                emailValue: '',
                textValue: '',
                sexValue: 'male',
                checkValue: false,
                isMessageSend: false,
                gender: '',
                name: '',
                agree: false,
                message: '',
                email: ''
            }
        },
        methods: {
            sendForm(){
                this.name = this.nameValue;
                this.email = this.emailValue;
                this.gender = this.sexValue;
                this.message = this.textValue;
                this.agree = this.checkValue;
                this.emailValue = '';
                this.nameValue = '';
                this.sexValue = 'male';
                this.checkValue = false;
                this.textValue = '';
                this.isMessageSend = true;
            }
        }
    }
</script>

<style scoped>
    .createForm__wrapper{
        display: flex;
        flex-direction: row;
        margin-top: 25px;
        justify-content: space-between;
    }
    .createForm{
        width: 49%;
        background-color: white;
        padding: 15px;
        display: flex;
        flex-direction: column;
    }
    .radio + .radio{
            margin-left: 10px;
    }
    button{
        margin-left: auto !important;
    }

    .message{
        width: 49%;
        background-color: white;
        display: flex;
        flex-direction: column;
        padding: 15px;

        div{
            display: flex;
            flex-direction: row;
            p{
                color: grey;
                width: 70px;
            }
            span{
                color: black;
                margin-left: 15px;
                overflow-wrap: break-word;
                width: 450px;
            }
        }
        div+div{
            margin-top: 5px;
        }
    }
</style>