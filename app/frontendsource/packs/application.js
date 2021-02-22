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


Rails.start()
Turbolinks.start()
ActiveStorage.start()

import List from "components/list";

document.addEventListener("turbolinks:load", () =>{

    let el = document.querySelector("#board");
    // console.log(el);

    if(el){
        new Vue({

            el: el,
            data: {
                lists: JSON.parse(el.dataset.lists),
            },

            components:{
                List: List,
            },

        })
    }

})