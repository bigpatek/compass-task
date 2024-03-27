<template>
    <div class="navbar">
        <div class="navbar__user">
            <img src="https://loremflickr.com/1080/960" alt="avatar">
            <div class="navbar__user__text">
                <p class="navbar__name">Ирина</p>
                <p class="navbar__email">test@email.com</p>
            </div>
        </div>
        <hr>
        <div @click = '$router.push("/")' class="navbar__buttons" :class="{
            'navbar__buttons--active' : $route.path === '/'
        }" 
        >
            <span class="material-symbols-outlined">
                home
            </span>
            <button>
                Все новости
            </button>
        </div>
        <hr>
        <div @click = '$router.push("/create")' class="navbar__buttons"  :class="{
            'navbar__buttons--active' : $route.path === '/create'
        }">
            <span class="material-symbols-outlined">
                draft_orders
            </span>
            <button>
                Добавить запись
            </button>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss">

    .navbar{
        display: flex;
        flex-direction: column;
        padding: 15px 0px;
        color: grey;
        position: fixed;
        width: 20%;
        -webkit-box-shadow: 7px 4px 8px 0px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 7px 4px 8px 0px rgba(34, 60, 80, 0.2);
        box-shadow: 7px 4px 8px 0px rgba(34, 60, 80, 0.2);
        height: 100vh;

        hr{
            color: lightgrey;
            font-weight: 100;
        }
        img{
        width: 50px;
        height: 50px;
        border-radius: 50px;
        margin-right: 5px;
        }
        button{
            height: 30px;
            background-color: white;
            border: none;
            font-size: 20px; 
        }
        &__user{
            display: flex;
            flex-direction:row;    
            align-items: center;
            margin-bottom: 20px;
            padding-left: 15px ;
        }
        &__user__text{
            margin-left: 8px;
        }
        &__name{
            font-size: 20px;
            font-weight: 500;
        }
        &__buttons{
            margin: 20px 0px;
            display: flex;
            flex-direction: row;
            align-items: center;
            color: black;
            padding-left: 15px;
            cursor: pointer;

            button{
                margin-left: 10px;
                font-size: 22px;
                cursor: pointer;
            }

            .material-symbols-outlined{
                font-size: 30px !important;
            }

            &--active{
                .material-symbols-outlined{
                    color: rgba(27, 124, 241, 1);
                }
                button{
                    color:rgba(27, 124, 241, 1);
                }
        }
        }
    }
</style>