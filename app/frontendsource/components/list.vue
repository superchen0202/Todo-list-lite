<!-- html -->
<template>

    <div class="list">
        
        <h2 class="header">{{list.name}}</h2>
        
        <div class="deck">
            <Card v-for="card in cards" :card="card" :key="card.id"></Card>
        </div>

        <div class="input-area">
            
            <button class="button" v-if="!editing" @click="changeMode">新增卡片</button> 

            <textarea class="content" v-if="editing" v-model = "content" ></textarea>            
            <button class="button" @click="createCard" v-if="editing">建立卡片</button>
            <button class="button" v-if="editing" @click="changeMode">取消</button>    
        </div>
       
    </div>

</template>

<!-- JS -->
<script>

import Card from "components/card";
import Rails from "@rails/ujs"


export default{
    
    name: "List",
    props: ["list"],

    components:{
        Card: Card,
    },

    data: function(){

        return{
            content:"",
            cards: this.list.cards,
            editing: false,
        }
 
    },

    methods:{

        createCard(event){
            
            event.preventDefault();
            //console.log(this.content);

            let data = new FormData();            
            data.append("card[list_id]", this.list.id );
            data.append("card[name]", this.content );
            // for (var value of data.values()) {
            //     console.log(value);
            // }

            Rails.ajax({

                url: "/cards",
                type: "post",
                data: data,
                dataType: "json",

                success: (response)=>{
                    //console.log(response);
                    this.cards.push(response);
                    this.content = "";
                },

                error: (err)=>{
                    console.log(err);
                }
            });

        },

        changeMode(event){
            event.preventDefault();
            this.editing = !this.editing;
        },

    }

}

</script>

<!-- CSS -->
<style scoped lang="scss">
        
    .list{
        @apply bg-gray-300 mx-2 w-64 rounded text-center px-3 py-2 
    }

    .header{
        @apply font-thin
    }

    .deck{
        @apply mt-2;
    }


    .input-area{
        @apply mt-2;

        .content{
            @apply w-full p-2 rounded-sm;
            
            &:focus{ 
                @apply outline-none;
            }
        }

        .button{
            @apply px-3 py-1 font-semibold text-sm rounded-sm bg-blue-300;

            &:focus{
                @apply outline-none;
            }
        }



    }
 
</style>