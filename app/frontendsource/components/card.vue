//html
<template>

  <div>

    <div class="card" v-if="!editing" @click="editingMode">
      {{ card.name }}
    </div>

    <div class="dialog" v-if="editing">

      <div class="inner">  
        <a href="#" class="closeButton" @click="editingMode">
            <i class="fas fa-times"></i>
        </a>
        <textarea class="content" v-model="card_name"></textarea>
        <button class="updateButton" @click="updateCard" >更新</button>
      </div>

    </div>

  </div>

</template>


// JS
<script>

import {mapActions} from "vuex";
    
export default {

    name: "Card",
    props:["card"],

    data: function(){

        return{
            editing: false,
            card_name: this.card.name,
        }

    },

    methods: {

        editingMode(event){
            event.preventDefault();
            this.editing = !this.editing;   
            //console.log(this.editing);
        },

        updateCard(event){
            event.preventDefault();
            this.editing = !this.editing;  
            
            //---TEST---
            //console.log("更新!");
            //console.log(this.editing);

            //---把值傳給後端API
            this.$store.dispatch("UpdateCard", {id: this.card.id, name: this.card_name});

        },
        
    }
}

</script>


// CSS
<style scoped lang="scss">

    .card {
        @apply bg-gray-100 mb-2 rounded-sm px-2 py-2 cursor-pointer;
    }

    .dialog {
        
        background-color: rgba(0, 0, 0, 0.7);
        @apply fixed w-full h-full top-0 left-0 flex items-center justify-center;

        .inner {
           
            @apply bg-white flex flex-col px-6 py-2;
            width: 700px;

            .closeButton {
                @apply text-gray-800 text-right;
            }

            .content {
                @apply px-2 py-2 border border-gray-300 mt-2;

                &:focus {
                    @apply outline-none;
                }
            }

            .updateButton {
                @apply bg-gray-400 px-3 py-2 mt-2 rounded;

                &:focus {
                    @apply outline-none;
                }
            }
        }
    }

</style>