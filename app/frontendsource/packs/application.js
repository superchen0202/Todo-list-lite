// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "styles"

import Vue from 'vue/dist/vue.esm';
import draggable from "vuedraggable";
import store from "stores/list";

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import List from "components/list";
import Newlist from "components/newlist";

import {mapGetters, mapActions} from "vuex";

document.addEventListener("turbolinks:load", () =>{

    let el = document.querySelector("#board");
    //console.log(el.dataset.lists);

    if(el){
        
        new Vue({

            el: el,
            store: store,
            
            // data: {
            //     lists: []
            //     //JSON.parse(el.dataset.lists),
            // },

            computed:{
                
                // ...mapGetters(["lists"]),
                lists:{
                    get(){
                        return this.$store.state.lists;
                    },
    
                    set(value){
                        this.$store.commit("UPDATE_LISTS", value);
                    }
                }

            },

            components:{
                List: List,     //全站可以使用 <List>元件
                draggable: draggable,
                Newlist: Newlist,
            },

            methods:{
                ...mapActions(["LoadLists", "MoveList"]),
            },

            beforeMount(){
                this.LoadLists();
            }

        })
    }

})