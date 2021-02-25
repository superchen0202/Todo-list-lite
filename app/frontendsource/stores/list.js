import Vue from "vue/dist/vue.esm";
import Vuex from "vuex";
import Rails from "@rails/ujs";

Vue.use(Vuex);

export default new Vuex.Store({

    state:{
        lists: []
    },

    getters:{
        lists: state => state.lists
    },

    mutations:{
        UPDATE_LISTS(state, lists){
            state.lists = lists;
        }
    },

    actions:{

        LoadLists( {commit} ){
            
            Rails.ajax({

                url: "/lists.json",
                type: "get",
                dataType: "json",

                success: (response)=>{
                    
                    commit("UPDATE_LISTS", response);
                    console.log(response);
                },

                error: (err) =>{
                    console.log(err);
                }

            })
        },

        MoveList({commit, state}, event){

            // console.log(event);
            // console.log(event.moved.newIndex + 1);

            let data = new FormData();
            data.append("lists[position]", event.moved.newIndex +1 );

            Rails.ajax({

                /// lists/2(list.id)/move
                url: `/lists/${state.lists[event.moved.newIndex].id}/move`,    
                type: "put",
                data: data,
                dataType: "json",
                
                success: (response)=>{
                    //console.log(response);
                },

                error: (err)=>{
                    console.log(err);
                },


            })

        },

    },



})