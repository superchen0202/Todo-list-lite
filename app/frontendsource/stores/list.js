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
        },

        REPLACE_CARD(state, card){
            let list_index = state.lists.findIndex(list => list.id ==card.list_id);
            let card_index = state.lists[list_index].cards.findIndex(item => item.id == card.id);

            console.log(list_index, card_index);
            state.lists[list_index].cards.splice(card_index, 1 , card)

        }, 

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

        UpdateCard({commit},{id, name}){
            
            let data = new FormData();
            data.append("card[name]", name );

            Rails.ajax({

                url: `/cards/${id}`,
                type: "put",           
                data,
                dataType: "json",

                success: (response)=>{
                    console.log(response);
                    commit("REPLACE_CARD", response);
                },
                error:(err) =>{console.log(err)},

            })

        }

    },



})